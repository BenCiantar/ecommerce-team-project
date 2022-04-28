import { FaShoppingCart, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAllItemsFromDb } from "./api";

export function renderAllCategoryItems(items, cartItems, setCartItems) {
  let rows = [];

  items.forEach((item, i) => {
    const path = `/product/${item._id}`;

    rows.push(
      <div key={i}>
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

//Removed loop so it only returns the selected item

export function renderItemDetailsPage(selectedItem, cartItems, setCartItems) {
  return (
    <>
      <div className="flex items-center justify-center mt-5 ">
        <h1 className=" ">{selectedItem.name}</h1>
      </div>
      <div className=" ">
        <img
          className=""
          src={selectedItem.image}
          alt="Ballet dancer on a street"
        />
      </div>

      <div className="  ">
        <p className=" ">{selectedItem.description}</p>

        <span className=" ">$ {selectedItem.price}</span>
      </div>
    </>
  );
}
