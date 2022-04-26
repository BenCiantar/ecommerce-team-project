import { FaShoppingCart, FaDollarSign } from "react-icons/fa";

export function renderAllCategoryItems(items, cartItems, setCartItems) {
  let rows = [];
  items.forEach((item) => {
    rows.push(
      <div>
        <h1>{item.name}</h1>
        <p>
          <FaDollarSign />
          {item.price}
        </p>
        <p>{item.description}</p>
        <button
          className="buy-btn btn-in-stock"
          onClick={() => addItemToCart(item, cartItems, setCartItems)}
        >
          <FaShoppingCart /> {item.price} kr
        </button>
      </div>
    );
  });
  return rows;
}

export function sortItems(items, sortMethod) {
  const sortedItems = [...items];
    if (sortMethod === "default") {
      return sortedItems;
    }
    else if (sortMethod === "Price-low-high") {
      sortedItems.sort((a, b) => (a.price > b.price ? 1 : -1))
      return sortedItems;
    }
    else if (sortMethod === "Price-high-low") {
      sortedItems.sort((a, b) => (a.price < b.price ? 1 : -1))
      return sortedItems;
    }

}

export function removeItemFromCart(item, cartItems, setCartItems) {
  const newArray = [...cartItems];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].name === item.name) {
      newArray[i].quantity--;
    }
    if (newArray[i].quantity === 0) {
      newArray.splice(i, 1);
    }
  }

  setCartItems(newArray);
}

export function addItemToCart(item, cartItems, setCartItems) {
  const newArray = [...cartItems];
  let itemExists = false;

  for (let product of newArray) {
    if (product.name === item.name) {
      itemExists = true;
      product.quantity++;
    }
    console.log(item, "exist", product.quantity);
  }

  if (!itemExists) {
    newArray.push({
      image: item.image,
      name: item.name,
      quantity: 1,
      price: item.price,
    });
    console.log(item, "does not exist");
  }

  setCartItems(newArray);
  console.log(cartItems);
}

export function placeOrder(totalPrice) {
  alert(`Order placed! Total price: ${totalPrice} kr`);
}

export function toggleHidden(target) {
  document.getElementById(target).classList.toggle("hidden");
}
