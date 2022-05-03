import React from "react";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap justify-between w-full h-30 bg-footer sticky top-[100vh] py-6 px-8 mt-4 text-slate-300">
      <div className="text-xs xl:text-base px-6 pb-4">
        <h3 className="font-semibold text-white mb-2">Site</h3>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Copyright Policy</p>
        <p>Press Kit</p>
        <p className="text-xs xl:text-base">Support</p>
      </div>
      <div className="flex flex-col text-xs xl:text-base px-6 pb-4">
        <h3 className="font-semibold text-white mb-2">Navigation</h3>
        <Link to="/">Home</Link>
        <Link to="/adventures">Adventures</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/">Order Administration</Link>
      </div>
      <div className="text-xs xl:text-base px-6 pb-4">
        <h3 className="font-semibold text-white mb-2">Shop</h3>
        <p>About Us</p>
        <p>Shipping</p>
        <p>Career</p>
        <p>Contact</p>
      </div>
      <div className="text-xs xl:text-base px-6 max-w-[160px]">
        <h3 className="font-semibold text-white mb-2">Social</h3>
        <p className="">
          Made with love by Team OGs: Ben, Chelsea, Elina, Felix, Richi & Tilda
          &#60;3 . All rights reserved.
        </p>
        <div className="flex flex-row justify-start text-white">
          <AiFillTwitterSquare />
          <AiFillFacebook className="mx-2" />
          <AiFillInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
