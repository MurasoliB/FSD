
const express = require('express');
const app = express();

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home page
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>GET and POST Application</title>
        </head>
        <body>
            <h1>Node.js GET and POST Requests</h1>

            <h2>GET Request Form</h2>
            <form action="/get" method="GET">
                <label>Enter Name:</label>
                <input type="text" name="name" required><br><br>

                <label>Enter Age:</label>
                <input type="number" name="age" required><br><br>

                <button type="submit">Submit GET</button>
            </form>

            <hr>

            <h2>POST Request Form</h2>
            <form action="/post" method="POST">
                <label>Enter Name:</label>
                <input type="text" name="name" required><br><br>

                <label>Enter Email:</label>
                <input type="email" name="email" required><br><br>

                <label>Enter Department:</label>
                <input type="text" name="department" required><br><br>

                <button type="submit">Submit POST</button>
            </form>
        </body>
        </html>
    `);
});

// Handle GET request
app.get('/get', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`
        <h1>GET Request Successful</h1>
        <p>Name: ${escapeHtml(name)}</p>
        <p>Age: ${escapeHtml(age)}</p>
        <p>Data received using the GET method.</p>
        <a href="/">Go Back</a>
    `);
});

// Handle POST request
app.post('/post', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const department = req.body.department;

    res.send(`
        <h1>POST Request Successful</h1>
        <p>Name: ${escapeHtml(name)}</p>
        <p>Email: ${escapeHtml(email)}</p>
        <p>Department: ${escapeHtml(department)}</p>
        <p>Data received using the POST method.</p>
        <a href="/">Go Back</a>
    `);
});

// Escape user input before displaying it in HTML
function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[char]);
}

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1><a href="/">Home</a>');
});

// Start the server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
