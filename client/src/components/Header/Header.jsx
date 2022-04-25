import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { toggleHidden } from "../../scripts/tools";
import { Cart } from "../index";

const Header = (props) => {

    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)

    const showMobileMenu = () => {
    (isMobileMenuOpen) ? setisMobileMenuOpen(false) : setisMobileMenuOpen(true)

}

    return (
        <div className="w-full h-12 bg-white text-black border-b-2 border-black items-center flex flex-row justify-between ">
            <div className=" brand-logo text-xl font-bold pl-2 ">
              <NavLink to="/" className="" onClick={() => setisMobileMenuOpen(false)} >
                <h2>Logo</h2>
              </NavLink>
            </div>
            <div className="cart-and-menu flex items-center lg:pr-4">
                <ul className=" id=linkList hidden menu-list lg:flex lg:flex-row text-base font-bold pr-3 " >
                    <NavLink to="/" className="" >
                      <li className="menu-list-item px-3 ">Home</li>
                    </NavLink>
                    <NavLink to="/adventures" className="">
                      <li className="menu-list-item px-3 ">Adventures</li>
                    </NavLink>
                    <NavLink to="/culture" className="">
                      <li className="menu-list-item px-3 ">Culture</li>
                    </NavLink>  
                </ul>
                <AiOutlineShoppingCart
                  className=" w-10 h-10 pr-3 "
                  onClick={() => toggleHidden("cart")}
                />
                <button onClick={()=>{showMobileMenu()}}  className=" lg:hidden mobile-menu-button ">
                    {(isMobileMenuOpen) ? <AiOutlineClose className=" w-10 h-10 pr-3 " alt="close"/> : <AiOutlineMenu className=" w-10 h-10 pr-3 " alt="menu"/>}
                </button>
                {(isMobileMenuOpen) ? MobileMenu() : ''}
            </div>
            <Cart {...props} />
        </div>
    )

    function MobileMenu(){
    

      return (
          <div id="NavMenu" className="top-12 absolute lg:hidden bg-black text-white z-10 right-0 overflow-x-hidden h-full w-full">
              <ul className=" menu-list flex flex-col text-base font-bold items-center" onClick={() => setisMobileMenuOpen(false)} >
                      <NavLink to="/" className="" >
                      <li className="menu-list-item py-2 hover:bg-white hover:text-black " >Home</li>
                      </NavLink>
                      <NavLink to="/adventures" className="" >
                      <li className="menu-list-item py-2 hover:bg-white hover:text-black ">Adventures</li>
                      </NavLink>
                      <NavLink to="/culture" className="" >
                      <li className="menu-list-item py-2 hover:bg-white hover:text-black ">Culture</li>
                      </NavLink>
                  </ul>
          </div>
      )
  };

};



export default Header;
