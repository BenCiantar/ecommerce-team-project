import React from "react";
import {
  placeOrder,
  addItemToCart,
  removeItemFromCart,
} from "../../scripts/tools";

const Cart = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce(
    (sum, obj) => obj.price * obj.quantity + sum,
    0
  );

  return (
    <div
      className="z-50 absolute bg-slate-300 hidden w-full overflow-x-hidden top-12 overflow-y-auto h-full right-0 min-w-400"
      id="cart"
    >
      <div className="overlay">
        <section className=" ">
          <h1>Your shopping cart</h1>
          {cartItems.map((obj) => (
            <div className=" flex flex-row justify-between items-center bg-slate-200 m-4">
              <img className="w-28" src={obj.image} alt="" />
              <p>{obj.name}</p>
              <div className="flex flex-row justify-between items-center">
                <button
                  onClick={() => {
                    removeItemFromCart(obj, cartItems, setCartItems);
                  }}
                >
                  -
                </button>
                <p>{obj.quantity}</p>
                <button
                  onClick={() => {
                    addItemToCart(obj, cartItems, setCartItems);
                  }}
                >
                  +
                </button>
              </div>
              <div className="">{obj.price * obj.quantity} kr</div>
            </div>
          ))}
          <div className="">Total: {totalPrice} kr</div>
          <button
            className="bg-green-500 text-white p-2 rounded-md shadow-md"
            onClick={() => placeOrder(totalPrice)}
          >
            Place Order
          </button>
        </section>
      </div>
    </div>
  );
};

export default Cart;
