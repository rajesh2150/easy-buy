import React, { useEffect, useState } from "react";
import "./ProductsList.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoMdStarOutline } from "react-icons/io";

const ProductsList = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
    console.log(Products);
  }, []);

  const history = useNavigate(); //history variable

  const handleAddtoCart = (Product) => {
    console.log("clicked");
    console.log(Product)
    history(`/details/${Product.id}`);
  };
  return (<>
  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
 <img  className="add-banner" src={"https://mydailybells.com.ng/businessbells/wp-content/uploads/sites/3/2021/07/naija-shopping.jpg"}/>
  </div>
    <div className="product-div1">
      {Products.map((Product) => (
        <>
          <div className="Product-List-Div1">
            <div className="product-image-div1">
              <img src={Product.image} alt="product" className="product-image1" />
            </div>
            <div className="product-description-div1">
              <p>{Product.title.substring(0,4)}...</p>
              <span className="product-rating1">
            {Product?.rating && Product?.rating.rate}
            <IoMdStarOutline size={12} />
          </span>
              <p className="product-price1">${Product.price}<s className="product-strike-price1">${Product.price*2}</s></p>
              <button
                onClick={() => handleAddtoCart(Product)}
                className="add-to-cart-button1">
                View
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
    </>
  );
};

export default ProductsList;
