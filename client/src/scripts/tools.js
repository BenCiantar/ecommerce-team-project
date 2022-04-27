import { FaShoppingCart } from "react-icons/fa";

export function renderAllCategoryItems(items, cartItems, setCartItems) {
  let rows = [];
  items.forEach((item) => {
    rows.push(
      <div className="w-full h-96 p-3 flex flex-col justify-start items-center rounded-md">
        <img src={item.image} alt={item.alt} className="w-full h-1/2 object-cover mb-2 rounded-md" />
        <div className="w-full flex flex-col justify-start items-left">
          <h1 className="text-lg mb-1 font-bold">{item.name}</h1>
          <p className="mb-3">{item.company}</p>
        </div>
        <button
            className="bg-green-600 text-white w-1/4 min-w-fit flex flex-row justify-center items-center p-1 rounded-md shadow-md"
            onClick={() => addItemToCart(item, cartItems, setCartItems)}
          >
            <FaShoppingCart /> <p className="ml-2">{item.price} kr</p>
          </button>
      </div>
    );
  });
  return rows;
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
