import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../Store/createSlice";
import {FaArrowLeft} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'
const Orders = () => {
  const history = useNavigate()
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleHome=()=>{
    history('/')

  }

  return (
    <>
    <button className="left-arrow-button" onClick={() => handleHome()}>
        <FaArrowLeft size={20} />
      </button>
      <div className="cart-div">
        <h2>Cart</h2>
        <div className="product-div">
        {cartProducts.map((Product) => (
          <div className="Product-List-Div1 column-div " key={Product.id}>
            <div className="product-image-div1">
              <img src={Product.image} alt="product" className="product-image1 cart-image" />
            </div>
            <div className="product-description-div1">
              <p>{Product.title}</p>
              <span className="product-rating1">
                {Product?.rating && Product?.rating.rate}
                {/* <IoMdStarOutline size={12} /> */}
              </span>
              <p className="product-price1">${Product.price}<s className="product-strike-price1">${Product.price * 2}</s></p>
              <button
                onClick={() => handleRemove(Product.id)}
                className="add-to-cart-button1">
                Remove
              </button>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
