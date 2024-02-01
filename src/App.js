import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Navbar/Home/Home'
import Orders from './components/Navbar/Orders/Orders'
import NavBar from './components/Navbar/NavBar';
import ContactUs from './components/Navbar/ContactUS/ContactUs';
import AboutUs from './components/Navbar/AboutUs/AboutUs'
import ProductDetails from './components/ProductDetails/ProductDetails';
import FeedBackSuccessFull from './components/Navbar/ContactUS/FeedBackSuccessFull/FeedBackSuccessFull';
const App = () => {
  return (<>
    <div>
     <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/orders' element={<Orders />}></Route>
          <Route path='/Contactus' element={<ContactUs />}></Route>
          <Route path='/feedback' element={<FeedBackSuccessFull/>}/>
          <Route path='/Aboutus' element={<AboutUs />}></Route>
          <Route path='/details/:id' element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    <div>
      
    </div>
    </>
  )
}

export default App
