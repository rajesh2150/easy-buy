import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Store/createSlice";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdStarOutline } from "react-icons/io";
const Orders = () => {
    const orders=useSelector(state=>state.orders)
    const {id}=useParams()
    const history = useNavigate();
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart);
    const [prices, setPrices] = useState(
      cartProducts.map((product) => product.price)
    );
  
    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
      };
    
      const handleHome = () => {
        history('/Cart');
      };
      var count = 1;
      const handleIncrement = (index, price) => {
        count += 1;
        setPrices((prevPrices) => {
          const newPrices = [...prevPrices];
          newPrices[index] = (newPrices[index] || 0) + price;
          return newPrices;
        });
      };
      const handleDecrement = (index, price) => {
        count -= 1;
        setPrices((prevPrices) => {
          const newPrices = [...prevPrices];
          newPrices[index] = (newPrices[index] || 0) - price;
          return newPrices;
        });
      };
  return (
    <div>
        
      <h1>Orders</h1>
      <button className="left-arrow-button" onClick={() => handleHome()}>
        <FaArrowLeft className="left-arrow" size={20} />
      </button>
      <div className="cart-div">
        <h2>Orders</h2>
        <div className="product-div">
          {orders.map((Product, index) => (
            <div className="Product-List-Div1 column-div " key={Product.id}>
              <div className="product-image-div1 product-image-cart">
                <img
                  src={Product.image}
                  alt="product"
                  className="product-image1 cart-image"
                />
                <div className="inc-dec-buttons-div">
                  <button onClick={() => handleIncrement(index, Product.price)}>
                    +
                  </button>
                  <p>{count ? count : 1}</p>
                  <button
                    disabled={Product.price >= prices[index] ? true : false}
                    onClick={() => handleDecrement(index, Product.price)}>
                    -
                  </button>
                </div>
              </div>
              <div className="product-description-div1 product-description-div-cart">
                <p>{Product.title}</p>
                <span className="product-rating1 product-rating-cart ">
                  {Product?.rating && Product?.rating.rate}
                  <IoMdStarOutline size={12} />
                </span>

                <p className="product-price1" id="price">
                  ${prices[index] ? prices[index] : Product.price}
                </p>
                <div style={{margin:0,marginBottom:5}}>
                  <s className="product-strike-price1" style={{margin:0}}>
                    ${prices[index] ? prices[index] * 2 : Product.price * 2}
                  </s>
                  <span
                    style={{
                      color: "green",
                      display: "inline",
                      fontSize: 15,
                      margin: 3,
                    }}>
                    {" "}
                    50% off
                  </span>
                </div>

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
    </div>
  )
}

export default Orders
