import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 19.99, imageUrl: 'product1.jpg' },
  { id: 2, name: 'Product 2', price: 29.99, imageUrl: 'product2.jpg' },
  { id: 3, name: 'Product 3', price: 24.99, imageUrl: 'product3.jpg' },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={"product image"} />
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
