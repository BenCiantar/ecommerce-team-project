import React from "react";

const Cart = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <div className="z-50 absolute bg-slate-300 hidden w-1/2 overflow-x-hidden top-12 overflow-y-auto h-96 right-0 min-w-400" id="cart">
      <div className="overlay">
        <section className=" ">
          <h1>Your shopping cart</h1>
          {cartItems.map((obj) => (
            <div className=" flex flex-row justify-between items-center bg-slate-200 m-4">
              <img className="w-28" src={obj.image} alt="" />
              <p>{obj.name}</p>
              <div className="">{obj.price} kr</div>
            </div>
          ))}
          <div className="">Total: {totalPrice} kr</div>
          <button className="bg-green-500 text-white p-2 rounded-md shadow-md">Place Order</button>
        </section>
      </div>
    </div>
  );
};

export default Cart;
