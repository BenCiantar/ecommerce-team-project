import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { getAllItemsFromDb } from "./api";

export function renderAllCategoryItems(items, cartItems, setCartItems) {
  let rows = [];
  
  items.forEach((item, i) => {
    const path = `/product/${item._id}`;
    
    rows.push(
      <div key={`product${item._id}`} className="w-full h-96 p-3 bg-white border-2 flex flex-col justify-start items-center">
        <div className="w-full h-1/2 pb-2">
          <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-1/3">
        <div className="w-full flex flex-col justify-start items-left">
          <h1 className="text-lg mb-1 font-bold">{item.name}</h1>
          <p className="text-sm pb-3 whitespace-nowrap overflow-hidden">{item.company}</p>
          <p className="text-md pb-4">{item.shortdes}</p>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <Link className="w-1/2" to={path}>
            <button
              className="btn-primary w-full mr-1"
            >
            Read More
            </button>
          </Link>
          <button
            className="btn-primary ml-1"
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

export function filterItems(items, query) {
  let results = [];
  for (let item of items) {
    if (item.name.toLowerCase().includes(query.toLowerCase())){
      results.push(item);
    }
  }
  return results;
}

export function renderLiveSearchItems(items, setSelectedItem){
  let rows = [];
  items.forEach((item) => {
    const path = `/product/${item._id}`;

    rows.push(
      <Link to={path} key={`liveSearch${item._id}`} >
        <div onClick={() => setSelectedItem(item)} className="h-12 w-full p-8 flex flex-row justify-between items-center border-b border-l border-r border-slate-400">
          <img className="w-14" src={item.image} alt={item.alt}></img>
          <p className="w-18">{item.name}</p>
          <p className="w-18">{item.price} kr</p>
        </div>
      </Link>
    );
  });
  return rows;
}

export function addItemToCart(item, cartItems, setCartItems) {


  const newArray = [...cartItems];
  let itemExists = false;

  for (let product of newArray) {
    if (product.name === item.name) {
      itemExists = true;
      product.quantity++;
    }
  }

  if (!itemExists) {
    newArray.push({
      image: item.image,
      name: item.name,
      quantity: 1,
      price: item.price,
    });
  }

  setCartItems(newArray);


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


export function renderItemDetailsPage(selectedItem, cartItems, setCartItems) {
  return (
    <>
      <div className="flex items-center justify-center mt-5 ">
        <h1 className=" text-xl ">{selectedItem.name}</h1>
      </div>
      <div className=" w-full ">
        <img
          className=" w-full p-3"
          src={selectedItem.image}
          alt="Ballet dancer on a street"
        />
      </div>

      <div className="flex items-center flex-col  p-3 ">
        <h1 className=" text-2xl my-2.5"> Welcome to {selectedItem.company}</h1>
        <div className=" flex p-3 bg-gray-200 w-3/4 items-center justify-between">
          <h2 className="text-center"> Quick Details </h2>
        </div>
        <span className=" my-2.5 ">${selectedItem.price}</span>
        <p className="text-center ">{selectedItem.main_description}</p>
      </div>
    </>
  );
}

export function renderOrderItems(orders) {
  let rows = [];
  orders.forEach((order) => {
    let timestamp = order.timestamp;
    let total = order.total;
    let id = order._id
    let cartArray = order.cart;
    let invoiceRows = [];
    
    for (let i = 0; i < cartArray.length; i++) {
      invoiceRows.push(
        <div key={`cart${cartArray[i]._id}`}>
          <section>Product: {cartArray[i].name}</section>
          <section>Price: {cartArray[i].price}SEK</section>
          <section>Quantity: {cartArray[i].quantity}</section>
          <br />
        </div>
      )}

    rows.push(
      <div key={`order${id}`} className =" grid grid-cols-1 gap-5 p-5 md:grid-cols-3 lg:grid-cols-4 ">
        <div>
          <section>#{id}</section>
        </div>
        <div>
          <section>{timestamp}</section>
        </div>
        <div>
          <section>{total}SEK</section>
        </div>
        <div>
          {invoiceRows}
        </div>
        
        </div>,
        <div>
          <hr />
        </div>
    )
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
      sortedItems.sort((a, b) => (a.price > b.price ? -1 : 1))
      return sortedItems;
    }
    else if (sortMethod === "Alpha-a-z") {
      sortedItems.sort((a, b) => (a.name > b.name ? 1 : -1))
      return sortedItems;
    }
    else if (sortMethod === "Alpha-z-a") {
      sortedItems.sort((a, b) => (a.name > b.name ? -1 : 1))
      return sortedItems;
    }

}


export function toggleHidden(target) {
  document.getElementById(target).classList.toggle("hidden");
}


export function renderLoginLogoutBtn(
  currentUser,
  setCurrentUser,
  handleClick,
  setisMobileMenuOpen
) {
  const logOutUser = () => {
    setisMobileMenuOpen(false);
    setCurrentUser({ isLoggedIn: false });
  };
  const rows = [];
  if (currentUser.isLoggedIn) {
    rows.push(
      <NavLink key={"logOutBtn"} to="/" className="" onClick={() => logOutUser()}>
        <h2>Log out</h2>
      </NavLink>
    );
  } else {
    rows.push(
      <NavLink
        to="/login"
        key={"logInBtn"}
        className=""
        onClick={handleClick}
      >
        <h2>Log in</h2>
      </NavLink>
    );
  }
  return rows;
}
