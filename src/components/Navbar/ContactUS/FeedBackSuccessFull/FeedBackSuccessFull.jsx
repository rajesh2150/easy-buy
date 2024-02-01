import React from 'react'
import './FeedBack.css'
import {Link} from 'react-router-dom'
const FeedBackSuccessFull = () => {
  return (
    <div style={styles.container}>
    <h2 style={styles.heading}>Thank You for Your Feedback!</h2>
    <p style={styles.message}>
      We appreciate you taking the time to share your thoughts with us. Your feedback is invaluable as we continuously
      strive to improve our services. If you have any more comments or suggestions, feel free to reach out to us.
    </p>
    <p style={styles.message}>Have a great day!</p>

    <Link to="/" style={styles.button}>
      Back to Home
    </Link>
  </div>
  )
}
const styles = {
    container: {
      maxWidth: '600px',
      margin: '70px auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    heading: {
      color: '#009688',
      marginBottom: '20px',
    },
    message: {
      lineHeight: '1.6',
      marginBottom: '15px',
    },
    button: {
        display: 'inline-block',
        backgroundColor: '#009688',
        color: '#fff',
        padding: '10px 20px',
        textDecoration: 'none',
        borderRadius: '5px',
        marginTop: '20px',
        cursor: 'pointer',
      },
  };

export default FeedBackSuccessFull
