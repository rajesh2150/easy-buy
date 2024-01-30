import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoMdStarOutline } from "react-icons/io";
import { FaArrowLeft,FaBoxOpen,FaMoneyBill,FaTrophy } from "react-icons/fa6";

const ProductDetails = () => {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProductDetails(res.data));
  }, [id]);

  console.log();
  const history = useNavigate(); // history Hook
  const handleHome = () => {
    //handleHome function
    history("/");
  };
  const handleBuyNow = () => {
    //buy Now function
    alert("added to cart");
  };

  return (
    <div className="product-details-main-div">
      <button className="left-arrow-button" onClick={() => handleHome()}>
        <FaArrowLeft size={20} />
      </button>
      <div className="product-details-div">
        <div className="product-details-image">
          <img
            className="product-image"
            src={productDetails?.image}
            alt="productImage"
          />
        </div>
        <div className="product-details-description">
          <h2 className="product-name">
            {productDetails ? productDetails.title : "Loading.."}
          </h2>
          <p className="product-price">
            ${productDetails ? productDetails.price : "Loading.."}
            <span style={{ fontSize: 15, marginLeft: 10 }}> 50% off</span>
          </p>
          <s className="product-strike-price">${productDetails?.price * 2}</s>
          <span className="product-rating">
            {productDetails?.rating && productDetails?.rating.rate}
            <IoMdStarOutline size={15} />
          </span>

          <div className="buttons-div">
            <button
              className="add-to-cart-button"
              onClick={() => handleBuyNow()}>
              Add To Cart
            </button>
            <button className="buy-now-button" onClick={() => handleBuyNow()}>
              Buy Now
            </button>
          </div>
          <div  className="product-discription-div">
            <h4>
              Description{" "}
              <span className="product-discription">
                {productDetails?.description}
              </span>
            </h4>
          </div>
          <div title="product-policy" className="product-policy">
                  <div className="policy">
                    <div className="policy-icon">
                      {" "}
                      <FaBoxOpen title="FaBoxOpen" size={30} />{" "}
                      <span title="spanPolicy" className="policy-text">7 days Replacement</span>
                    </div>
                    <div className="policy-icon">
                      {" "}
                      <FaMoneyBill title="FaMoneyBill" size={30} />
                      <span title="spanPolicy" className="policy-text">Cash on Delivery</span>
                    </div>
                    <div className="policy-icon">
                      {" "}
                      <FaTrophy title="FaTrophy" size={30} />
                      <span title="spanPolicy" className="policy-text">Top Brand</span>
                    </div>
                  </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
