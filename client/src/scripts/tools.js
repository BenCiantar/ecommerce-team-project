import { FaShoppingCart, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAllItemsFromDb } from "./api";

export function renderAllCategoryItems(items, cartItems, setCartItems) {
  let rows = [];

  items.forEach((item) => {
    const path = `/product/${item._id}`

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
        <Link to={path}>
          <button className=" border-2 p-2 m-2 rounded-md text-sm">
            View details
          </button>
        </Link>
      </div>
    );
  });
  return rows;
}

function addItemToCart(item, cartItems, setCartItems) {
  const newArray = [...cartItems];
  let itemExists = false;

  for (let product of newArray) {
    if (product.name === item.name) {
      itemExists = true;
      product.quantity += 1;
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

// add single item to single product page
export function findItem(_id) {
  let item = {};
  let allItems = [];
  allItems = getAllItemsFromDb();
  console.log(allItems);

  for (const product of allItems) {
    if (_id === product._id) {
      item = product;
    }
  }
  return item;
}

export function placeOrder(totalPrice) {
  alert(`Order placed! Total price: ${totalPrice} kr`);
}

export function toggleHidden(target) {
  document.getElementById(target).classList.toggle("hidden");
}

//


export function renderItemDetailsPage(selectedItem, cartItems, setCartItems) {
  let rows = [];
  selectedItem.forEach((item) => {
    rows.push(
      <>
        <div className=" flex items-center p-5 bg-orange-400 justify-center">
          <h1 className=" font-medium">{item.name}</h1>
        </div>
        <div className=" p-2 flex flex-col ">
          <div className=" ">
            <img
              className="w-full rounded-sm"
              src="https://images.unsplash.com/photo-1550524514-efb9046e0fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=653&q=80"
              alt="Ballet dancer on a street"
            />
          </div>
          <div className=" flex-1   px-12">
            <h1 className=" font-medium">wale watching</h1>
            <p className=" my-5">
              {item.description}
            </p>
            <div>
              <span className=" font-light text-lg">$50</span>
            </div>
          </div>
        </div>
      </>
    );
  });
}