import React, { useEffect, useState } from "react";
import "./ProductsList.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ProductsList = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
    console.log(Products);
  }, []);

  const history = useNavigate();
  const handleAddtoCart = () => {
    console.log("clicked");
    history("/details");
  };
  return (
    <div className="product-div">
      {Products.map((Product) => (
        <>
          <div className="Product-List-Div">
            <div className="product-image-div">
              <img src={Product.image} className="product-image" />
            </div>
            <div className="product-description-div">
              <p>{Product.title.substring(0,4)}...</p>
              <p className="product-price">${Product.price}<s className="product-strike-price">${Product.price*2}</s></p>
              <button
                onClick={() => handleAddtoCart()}
                className="add-to-cart-button">
                Add to Cart
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ProductsList;
