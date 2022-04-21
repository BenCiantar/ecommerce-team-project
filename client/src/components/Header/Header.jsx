import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";



function Header () {

    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)

    const showMobileMenu = () => {
    (isMobileMenuOpen) ? setisMobileMenuOpen(false) : setisMobileMenuOpen(true)
}

    return (
        <div className=" fixed w-full h-12 bg-white text-black border-b-2 border-black items-center flex flex-row justify-between ">
            <div className=" brand-logo text-xl font-bold pl-2 ">
                <h2>Logo</h2>
            </div>
            <div className=" cart-and-menu flex items-center ">
                <AiOutlineShoppingCart className=" w-8 h-8 "/>
                <ul className=" hidden menu-list lg:flex lg:flex-row text-base font-bold ">
                    <li className="menu-list-item px-2 ">Home</li>
                    <li className="menu-list-item px-2 ">Adventures</li>
                    <li className="menu-list-item px-2 ">Culture</li>
                </ul>
                <button onClick={()=>{showMobileMenu()}}  className=" lg:hidden mobile-menu-button ">
                    {(isMobileMenuOpen) ? <AiOutlineClose className=" w-8 h-8 pr-3 " alt="close"/> : <AiOutlineMenu className=" w-8 h-8 pr-3 " alt="menu"/>}
                </button>
                {(isMobileMenuOpen) ? MobileMenu() : ''}
            </div>
        </div>
    )
};

function MobileMenu(){
    return (
        <div className=" fixed h-screen w-screen lg:hidden bg-black text-white top-8 ">
            <ul className=" menu-list flex flex-col text-base font-bold ">
                    <li className="menu-list-item py-2 hover:bg-white hover:text-black ">Home</li>
                    <li className="menu-list-item py-2 hover:bg-white hover:text-black ">Adventures</li>
                    <li className="menu-list-item py-2 hover:bg-white hover:text-black ">Culture</li>
                </ul>
        </div>
    )
}


export default Header;
