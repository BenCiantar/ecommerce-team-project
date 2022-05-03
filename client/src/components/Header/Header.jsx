import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { toggleHidden, renderLoginLogoutBtn } from "../../scripts/tools";
import { Cart, Search } from "../index";

const Header = (props) => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  const showMobileMenu = () => {
    (isMobileMenuOpen) ? setisMobileMenuOpen(false) : setisMobileMenuOpen(true);
  }

  const loginRows = renderLoginLogoutBtn(
    props.currentUser,
    props.setCurrentUser,
    isMobileMenuOpen,
    setisMobileMenuOpen
  );

  return (
    <header className="w-full h-24 bg-white border-b-2 border-black">
      <nav className="w-full h-12 bg-white items-center flex flex-row justify-between ">
        <div className=" brand-logo text-xl font-bold pl-2 mt-5 ">
          <NavLink to="/" className="" onClick={() => setisMobileMenuOpen(false)}>
          <svg width="230" height="529" viewBox="0 0 1396 529" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M336.45 510V504.45L351.15 501.15V456H296.25V501.15L311.25 504.45V510H265.5V504.45L280.5 501.15V406.65L265.5 403.05V397.5H311.25V403.05L296.25 406.65V449.25H351.15V406.65L336.45 403.05V397.5H382.05V403.05L366.9 406.5V501L382.05 504.45V510H336.45ZM403.055 510V504.45L416.405 501.15L461.855 396.3H469.505L512.705 501.15L525.305 504.45V510H482.705V504.45L495.755 501.3L483.905 472.2H438.605L427.355 501.3L440.855 504.45V510H403.055ZM440.705 466.5H481.805L460.805 413.85L440.705 466.5ZM546.311 397.5H591.461C607.361 397.5 618.761 400.05 625.661 405.15C632.561 410.15 636.011 418.05 636.011 428.85C636.011 441.95 631.561 450.8 622.661 455.4C614.761 459.4 603.961 461.4 590.261 461.4H576.611V501L591.911 504.45V510H546.311V504.45L560.861 501V406.5L546.311 403.05V397.5ZM576.611 455.4H593.411C601.911 455.4 608.211 453.3 612.311 449.1C616.511 444.9 618.611 438.35 618.611 429.45C618.611 420.55 616.511 414 612.311 409.8C608.211 405.6 601.911 403.5 593.411 403.5H576.611V455.4ZM653.977 397.5H699.127C715.027 397.5 726.427 400.05 733.327 405.15C740.227 410.15 743.677 418.05 743.677 428.85C743.677 441.95 739.227 450.8 730.327 455.4C722.427 459.4 711.627 461.4 697.927 461.4H684.277V501L699.577 504.45V510H653.977V504.45L668.527 501V406.5L653.977 403.05V397.5ZM684.277 455.4H701.077C709.577 455.4 715.877 453.3 719.977 449.1C724.177 444.9 726.277 438.35 726.277 429.45C726.277 420.55 724.177 414 719.977 409.8C715.877 405.6 709.577 403.5 701.077 403.5H684.277V455.4ZM761.643 397.5H844.293V424.35H836.493L830.643 403.95H792.243V448.8H821.193L825.243 435.75H830.793V466.8H825.243L821.193 455.4H792.243V503.55H833.343L839.193 483.3H847.143V510H761.643V504.45L776.493 501V406.65L761.643 403.05V397.5ZM946.622 397.5H983.522V403.05L968.822 406.8V510H958.322L888.122 407.1V501.15L902.822 504.45V510H866.672V504.45L880.622 501.15V406.95L866.672 403.05V397.5H900.122L961.322 486.3V406.95L946.622 403.05V397.5ZM1010.52 397.5H1056.12V403.05L1041.12 406.5V501.15L1056.12 504.45V510H1010.52V504.45L1025.37 501V406.65L1010.52 403.05V397.5ZM1163.13 397.5H1200.03V403.05L1185.33 406.8V510H1174.83L1104.63 407.1V501.15L1119.33 504.45V510H1083.18V504.45L1097.13 501.15V406.95L1083.18 403.05V397.5H1116.63L1177.83 486.3V406.95L1163.13 403.05V397.5ZM1286.01 461.4H1332.36V466.95L1317.51 470.4V504.6C1312.41 506.9 1305.86 508.7 1297.86 510C1289.86 511.3 1282.51 511.95 1275.81 511.95C1258.31 511.95 1244.81 506.8 1235.31 496.5C1225.81 486.2 1221.06 472.1 1221.06 454.2C1221.06 436.3 1225.71 422 1235.01 411.3C1244.31 400.5 1257.46 395.1 1274.46 395.1C1281.36 395.1 1288.51 396.05 1295.91 397.95C1303.31 399.75 1309.41 402.9 1314.21 407.4V432.75H1306.41L1299.06 407.85C1294.66 403.15 1286.36 400.8 1274.16 400.8C1261.96 400.8 1252.96 405.35 1247.16 414.45C1241.36 423.55 1238.46 436.4 1238.46 453C1238.46 488.3 1250.81 505.95 1275.51 505.95C1283.31 505.95 1292.06 504.75 1301.76 502.35V470.4L1286.01 466.95V461.4Z" fill="#550793"/>
            <path d="M179.235 117.525C179.683 116.396 200.644 117.425 203.821 117.639C228.268 167.863 202.828 359.072 196.059 414.574C200.033 414.652 204.002 414.443 207.955 414.049C228.566 361.039 257.209 280.596 254.406 223.811C254.022 219.538 255.911 159.602 231.012 122.351C244.154 125.727 256.896 130.735 268.741 137.36C279.784 152.212 296.265 190.884 286.757 252.651C275.579 322.668 254.967 346.243 216.978 412.585C219.431 412.019 221.856 411.348 224.249 410.566C222.375 416.505 216.565 435.065 214.065 440.74C213.943 440.775 213.698 440.845 213.576 440.881C212.183 447.222 210.781 453.565 209.402 459.909C209.788 461.31 213.545 481.713 213.59 481.962C214.314 481.974 215.145 481.883 215.728 482.416C216.354 482.913 216.501 483.927 215.941 484.534C215.373 485.096 214.521 484.912 213.802 484.97C213.614 512.026 216.508 510.06 191.568 510.255C175.511 510.52 179.242 504.722 178.849 484.899C178.096 484.916 177.215 485.2 176.56 484.704C175.648 484.051 175.934 482.347 177.068 482.127C177.759 482.044 178.455 482.096 179.148 482.09C183.706 457.226 183.315 460.722 182.992 458.961C181.671 452.955 180.456 446.926 179.092 440.932C176.834 438.899 167.447 415.691 166.524 410.174C164.051 407.4 161.474 404.717 158.971 401.972C126.586 346.128 125.832 345.39 122.042 337.908C105.067 307.682 72.2407 207.929 111.678 141.601C112.448 140.344 118.479 130.931 119.573 130.507C130.478 125.48 142.09 122.107 153.885 119.938C147.42 129.209 141.849 139.289 136.878 156.284C124.425 199.64 128.187 254.553 131.461 273.192C138.446 315.638 157.513 371.504 172.793 411.841C177.252 412.865 181.787 413.553 186.337 413.999C181.311 374.329 170.98 287.996 169.096 248.071C169.096 248.071 168.58 233.517 168.58 233.517C168.362 231.195 165.468 146.188 179.235 117.525ZM180.172 441.161C181.426 446.992 182.682 452.827 183.924 458.663C183.978 453.148 183.937 447.633 183.943 442.118C182.672 441.855 181.416 441.529 180.172 441.161ZM208.573 442.28C208.621 448.884 208.508 457.282 208.697 458.901C208.894 457.281 212.443 441.481 212.5 441.231C211.215 441.664 209.881 441.93 208.573 442.28ZM185.017 442.348C185.029 447.855 184.949 453.365 185.058 458.87C186.089 453.529 187.298 448.224 188.444 442.908C187.289 442.805 186.153 442.566 185.017 442.348ZM204.176 443.004C205.327 448.34 206.454 453.681 207.611 459.015C207.669 453.498 207.619 447.979 207.636 442.464C206.483 442.651 205.333 442.84 204.176 443.004ZM189.41 443.059C188.185 448.723 186.972 454.392 185.757 460.058C186.804 460.054 187.853 460.054 188.902 460.056C188.966 458.731 188.713 457.355 189.136 456.073C189.982 453.801 193.76 453.741 194.711 455.955C195.267 457.247 194.945 458.692 195.024 460.054C195.812 460.054 196.6 460.054 197.39 460.054C197.487 458.729 197.156 457.334 197.61 456.063C198.555 453.782 202.364 453.845 203.22 456.169C203.591 457.421 203.326 458.762 203.39 460.052C204.541 460.056 205.689 460.058 206.84 460.05C205.598 454.409 204.397 448.759 203.195 443.11C199.836 443.532 194.686 443.657 189.41 443.059ZM185.4 462.639C184.163 469.122 182.969 475.613 181.689 482.09C195.917 481.943 209.464 481.975 211.042 481.978C209.759 475.534 208.54 469.078 207.252 462.637C205.99 462.639 204.727 462.635 203.466 462.641C202.663 466.29 198.123 466.352 197.301 462.641C196.536 462.637 195.771 462.637 195.008 462.641C194.119 466.565 189.331 465.816 188.921 462.681C187.747 462.612 186.574 462.643 185.4 462.639Z" fill="#550793"/>
            <path d="M73.5323 169.243C65.809 196.961 59.6713 230.455 76.0698 280.169C88.5529 317.618 101.301 331.388 126.305 366.734C125.035 365.564 100.587 339.163 97.0469 335.742C62.506 300.562 42.6066 248.943 60.023 199.027C62.5018 188.653 67.9594 177.314 73.5323 169.243Z" fill="#550793"/>
            <path d="M310.496 173.481C311.707 174.805 320.164 186.268 325.168 201.557C340.014 246.043 318.476 288.109 290.114 325.489C286.6 330.137 247.771 378.695 247.747 378.721C279.564 333.604 336.019 268.079 310.496 173.481Z" fill="#550793"/>
          </svg>
          </NavLink>
        </div>
        <div className="cart-and-menu flex items-center lg:pr-4">
          {loginRows}
          <ul className="hidden menu-list lg:flex lg:flex-row text-base font-bold pr-3 ">
            <NavLink to="/" className="">
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
          <button
            onClick={() => {
              showMobileMenu();
            }}
            className=" lg:hidden mobile-menu-button "
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose className=" w-10 h-10 pr-3 " alt="close" />
            ) : (
              <AiOutlineMenu className=" w-10 h-10 pr-3 " alt="menu" />
            )}
          </button>
          {isMobileMenuOpen ? MobileMenu() : ""}
        </div>
        <Cart {...props} />
      </nav>
      <section className="w-full h-8 bg-white flex flex-row justify-end items-center pr-6">
        <Search setSelectedItem={ props.setSelectedItem } />
      </section>
    </header>
  );

  function MobileMenu(){
    return (
      <nav className="top-12 absolute lg:hidden bg-black text-white z-10 right-0 overflow-x-hidden h-full w-full">
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
      </nav>
    );
  };
};

export default Header;
