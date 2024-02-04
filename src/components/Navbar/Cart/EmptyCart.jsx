// EmptyCart.js

import React from 'react';
import './EmptyCart.css'; // Import your stylesheet

const EmptyCart = () => {
    const styles={
        image:{
            width:'100%',
            heigth:'100vh',
            maxMidth:'480px',

        }
    }
  return (
    <div  className="empty-cart-container">
        <img className='image' style={styles.image} src='https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png'/>

    </div>
  );
}

export default EmptyCart;
