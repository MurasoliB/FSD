
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the webpage
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/productDB')
    .then(() => console.log('MongoDB Connected Successfully'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Create Product Schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true,
        trim: true
    }
});

// Create Product Model
const Product = mongoose.model('Product', productSchema);

// CREATE - Add a new product
app.post('/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();

        res.status(201).json({
            message: 'Product added successfully',
            product
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ - Get all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ - Get a product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        res.json(product);
    } catch (err) {
        res.status(400).json({ error: 'Invalid product ID' });
    }
});

// UPDATE - Modify an existing product
app.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        res.json({
            message: 'Product updated successfully',
            product
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE - Remove a product
app.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(
            req.params.id
        );

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        res.json({
            message: 'Product deleted successfully'
        });
    } catch (err) {
        res.status(400).json({ error: 'Invalid product ID' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
