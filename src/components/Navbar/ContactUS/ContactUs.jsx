import React from 'react'
import './ContactUs.css'
import {useNavigate} from 'react-router-dom'
const ContactUs = () => {
  const history=useNavigate()
  const handleSubmit=()=>{
    history('/feedback')

  }
  return (
      <>
      <header className='header'>
        <h1 className='h1'>EasyBuy</h1>
        <p className='p'>Your Ultimate Destination for Effortless Shopping</p>
    </header>

    <section className='section'>
        <h2 className='h2'>Contact Us</h2>
        <p className='p'>We value your feedback and are here to assist you. Please use the form below to get in touch with us:</p>

        <form onSubmit={()=>{handleSubmit()}}>
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required/>

            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button className='submit' type="submit">Submit</button>
        </form>
    </section>
</>
  )
}

export default ContactUs

