import React from "react";
import { addItemToCart, removeItemFromCart } from "../../scripts/tools";
import { placeOrder } from "../../scripts/api";

const Cart = ({ cartItems, setCartItems, currentUser }) => {
  const totalPrice = cartItems.reduce(
    (sum, obj) => obj.price * obj.quantity + sum,
    0
  );

  return (
    <div
      className="z-50 absolute bg-white hidden w-full overflow-x-hidden top-24 overflow-y-auto h-full right-0 min-w-400"
      id="cart"
    >
      <div className="overlay h-full">
        <section className="h-80 ">
          <h1 className="text-lg text-center pt-6 mb-20">Your shopping cart</h1>
          {cartItems.map((obj) => (
            <div
              key={`cartItem${obj.name}`}
              className=" flex flex-row justify-between items-center bg-slate-200 m-4"
            >
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
                    addItemToCart(obj, cartItems, setCartItems, currentUser);
                  }}
                >
                  +
                </button>
              </div>
              <div className="">{obj.price * obj.quantity}SEK</div>
            </div>
          ))}
          <hr />
          <div className="flex flex-col justify-around items-center">
            <div className="text-center my-6">
              Total: {totalPrice === 0 ? "" : { totalPrice }}SEK
            </div>
            <button
              className="btn-primary w-2"
              onClick={() =>
                placeOrder(cartItems, setCartItems, totalPrice, currentUser)
              }
            >
              Place Order
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
