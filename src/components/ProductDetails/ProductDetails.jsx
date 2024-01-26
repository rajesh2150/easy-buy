import React from 'react'
import './ProductDetails.css';
import {useNavigate} from 'react-router-dom';
const ProductDetails = () => {

    const history=useNavigate() // history Hook
    const handleHome=()=>{ //handleHome function
        history('/')
    }
    const handleBuyNow=()=>{ //buy Now function
        alert('added to cart')
    }
  return (<>
   <button onClick={()=>handleHome()}>Back</button>
    <div className='product-details-div'>
       
      <div className='product-details-image'>
        <p>Image</p>
        <img/>
      </div>
      <div className='product-details-description'>
        <p>Title</p>
        <i>Price</i>
        <button onClick={()=>handleBuyNow()} >Buy Now</button>
        
      </div>
    </div>
    </>
  )
}

export default ProductDetails
