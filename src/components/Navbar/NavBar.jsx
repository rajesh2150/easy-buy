import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const [burgerMenu,setBurgerMenu] = useState(false)
  return (
    <div className="NavBarDiv" >
      <div>
        <h2 className="title">EasyBuy</h2>
      </div>
      <div>
        <NavLink className="path-div" to={"/"}>
          Home
        </NavLink>{" "}
        <NavLink className="path-div" to={"/Orders"}>
          Orders
        </NavLink>{" "}
        <NavLink className="path-div" to={"/Contactus"}>
          Contactus
        </NavLink>{" "}
        <NavLink className="path-div" to={"/Aboutus"}>
          Aboutus
        </NavLink>{" "}
      </div>
      <div className={burgerMenu ? `burger-div open ` :`burger-div close`} onClick={()=>setBurgerMenu(!burgerMenu)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    
      <div className={burgerMenu ?  `burgermenu-div` : 'burgermenu-div-close'}>
        <NavLink onClick={()=>setBurgerMenu(!burgerMenu)} className="Link" to={'/'}>Home</NavLink>
        <NavLink onClick={()=>setBurgerMenu(!burgerMenu)} className="Link" to={'/Orders'}>Orders</NavLink>
        <NavLink onClick={()=>setBurgerMenu(!burgerMenu)}className="Link" to={"/Contactus"}>Contactus</NavLink>
        <NavLink onClick={()=>setBurgerMenu(!burgerMenu)} className="Link"  to={"/Aboutus"}>Aboutus</NavLink>
        
      </div>
    </div>
  );
};

export default NavBar;
