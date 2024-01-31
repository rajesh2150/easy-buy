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
  
  }, []);

  const history = useNavigate(); //history variable

  const handleAddtoCart = (Product) => {
    console.log("clicked");
    console.log(Product)
    history(`/details/${Product.id}`);
  };

  const [img, setImg] = useState("https://m.media-amazon.com/images/G/31/img21/MA2023/Winterflip/P0/winter/hero/new/USPA_3000x8001._SX3000_QL85_FMpng_.png");
  const imagesArray = [
    "https://m.media-amazon.com/images/G/31/img21/MA2023/Winterflip/P0/winter/hero/Van_heusen_3000x800._SX3000_QL85_FMpng_.png",
    "https://m.media-amazon.com/images/G/31/img21/MA2023/AFrevamp_winterflip/Menhero/Wimter_bestseller_3000x800._SX3000_QL85_FMpng_.png",
    "https://m.media-amazon.com/images/G/31/img21/MA2023/Winterflip/P0/winter/hero/new/USPA_3000x8001._SX3000_QL85_FMpng_.png"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imagesArray]);

  useEffect(() => {
    setImg(imagesArray[index]);
  }, [index, imagesArray]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img className="add-banner" src={img} alt="Banner" />
      </div>
      <div className="product-div1">
        {Products.map((Product) => (
          <div className="Product-List-Div1" key={Product.id}>
            <div className="product-image-div1">
              <img src={Product.image} alt="product" className="product-image1" />
            </div>
            <div className="product-description-div1">
              <p>{Product.title.substring(0, 4)}...</p>
              <span className="product-rating1">
                {Product?.rating && Product?.rating.rate}
                <IoMdStarOutline size={12} />
              </span>
              <p className="product-price1">${Product.price}<s className="product-strike-price1">${Product.price * 2}</s></p>
              <button
                onClick={() => handleAddtoCart(Product)}
                className="add-to-cart-button1">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
