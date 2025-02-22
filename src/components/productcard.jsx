// src/cart/ProductCard.jsx
import React from "react";
import ViewProductButton from "../components/button";

const ProductCard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/300"; // Placeholder image
  const productName = "Wireless Headphones";
  const productPrice = "$99.99";

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg p-5 border">
      <img
        src={productImage}
        alt={productName}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-3">{productName}</h2>
      <p className="text-gray-600 font-medium mt-1">{productPrice}</p>
      <div className="mt-4">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default ProductCard;
