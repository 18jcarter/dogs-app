import React from "react";
import glassSign1 from "../images/glassSign1.png";
import glassSign2 from "../images/glassSign2.png";
import canvas1 from "../images/canvas1.png";

const products = [
  { id: 1, name: "Product 1", price: 19.99, imageUrl: glassSign1 },
  { id: 2, name: "Product 2", price: 29.99, imageUrl: glassSign2 },
  { id: 3, name: "Product 3", price: 24.99, imageUrl: canvas1 },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "4em",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Available Rentals
      </h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
