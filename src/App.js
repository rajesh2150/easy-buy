import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Navbar/Home/Home'
import Cart from './components/Navbar/Cart/Cart'
import NavBar from './components/Navbar/NavBar';
import ContactUs from './components/Navbar/ContactUS/ContactUs';
import AboutUs from './components/Navbar/AboutUs/AboutUs'
import ProductDetails from './components/ProductDetails/ProductDetails';
import FeedBackSuccessFull from './components/Navbar/ContactUS/FeedBackSuccessFull/FeedBackSuccessFull';
import FailurePage from './components/FailurePage/FailurePage';
import {Provider} from 'react-redux'
import storeCart from './Store/store';
const App = () => {
  
  return (<>
  <Provider store={storeCart}>
    <div>
     <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          <Route path='/Contactus' element={<ContactUs />}></Route>
          <Route path='/feedback' element={<FeedBackSuccessFull/>}/>
          <Route path='/Aboutus' element={<AboutUs />}></Route>
          <Route path='/details/:id' element={<ProductDetails />}></Route>
          <Route path='*' element={<FailurePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
   
    </>
  )
}

export default App
