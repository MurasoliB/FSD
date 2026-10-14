import React from "react";

function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>

      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;