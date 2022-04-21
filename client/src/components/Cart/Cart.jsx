import React from "react";
import axios from "axios";

const Cart = ({ onCloseCart }) => {
  const [cartItems, setCartItems] = React.useState([]);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  React.useEffect(() => {
    axios.get("http://localhost:8080/cart").then((res) => {
      setCartItems(res.data);
    });
  }, []);
  console.log(cartItems, " cartItems");

  return (
    <div className="z-50 absolute bg-white hidden" id="cart">
      <div className="overlay">
        <section className="drawer">
          <h1>Your shopping cart</h1>
          {cartItems.map((obj) => (
            <div className="cart_item">
              <p>{obj.name}</p>
              <p>People: {obj.people}</p>
              <img src={obj.image} alt="" />
              <div className="price">Price: {obj.price} kr</div>
              <div className="description">{obj.description}</div>
            </div>
          ))}
          <div className="subtotal">Subtotal: {totalPrice} kr</div>
          <div className="close_cart">
            <p onClick={onCloseCart}>Continue shopping</p>
          </div>
          <button>Add to card</button>
        </section>
      </div>
    </div>
  );
};

export default Cart;
