import { FaShoppingCart } from "react-icons/fa";

export function renderAllCategoryItems(items, cartItems, setCartItems) {
  let rows = [];
  items.forEach((item) => {
    rows.push(
      <div className="w-full h-96 p-3 bg-white border-2 flex flex-col justify-start items-center">
        <div className="w-full h-1/2 pb-2">
          <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-1/3">
        <div className="w-full flex flex-col justify-start items-left">
          <h1 className="text-lg mb-1 font-bold">{item.name}</h1>
          <p className="text-sm pb-3">{item.company}</p>
          <p className="text-md pb-4">{item.shortdes}</p>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <button
            className="bg-green-600 text-white mr-1 w-1/2 min-w-fit flex flex-row justify-center items-center p-1 shadow-md"
          >
            Read More
          </button>
          <button
            className="bg-green-600 text-white ml-1 w-1/2 min-w-fit flex flex-row justify-center items-center p-1 shadow-md"
            onClick={() => addItemToCart(item, cartItems, setCartItems)}
          >
            <FaShoppingCart /> <p className="ml-2">{item.price} kr</p>
          </button>
          </div>
        </div>
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

export function toggleHidden(target) {
  document.getElementById(target).classList.toggle("hidden");
}
