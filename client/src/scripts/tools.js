import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { getAllItemsFromDb } from "./api";

export function renderAllCategoryItems(items, cartItems, setCartItems, currentUser) {
  let rows = [];

  items.forEach((item, i) => {
    const path = `/product/${item._id}`;

    rows.push(

      <div
        key={`product${item._id}`}
        className="w-full h-96 p-3 bg-white border-2 flex flex-col justify-start items-center"
      >
        <div className="w-full h-1/2 pb-2">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-1/3">
          <div className="w-full flex flex-col justify-start items-left">
            <h1 className="text-lg mb-1 font-bold">{item.name}</h1>
            <p className="text-sm pb-3">{item.company}</p>
            <p className="text-md pb-4">{item.shortdes}</p>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <Link to={path}>
              <button className="bg-green-600 text-white mr-1 w-1/2 min-w-fit flex flex-row justify-center items-center p-1 shadow-md">
                Read More
              </button>
            </Link>
            <button
              className="bg-green-600 text-white ml-1 w-1/2 min-w-fit flex flex-row justify-center items-center p-1 shadow-md"
              onClick={() => addItemToCart(item, cartItems, setCartItems, currentUser)}
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

export function addItemToCart(item, cartItems, setCartItems, currentUser) {
  if (currentUser.isLoggedIn){
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
 } else {
   alert("You need to be logged in to add an item to cart");
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

export function renderItemDetailsPage(selectedItem, cartItems, setCartItems, item, currentUser) {
  return (
    <>
      <main className="  flex flex-col items-center justify-center ">
        {/* Header and title */}
        <section className="  h-80 w-full relative">
          <img
            className=" object-cover h-full w-full"
            src={selectedItem.image}
            alt="h"
          />
          <article className="  absolute w-full h-full flex items-center justify-center top-0 left-0">
            <div className=" bg-black bg-opacity-30 w-fit rounded-lg">
              <h1 className=" text-white text-4xl"> {selectedItem.name} </h1>
            </div>
          </article>
        </section>

        {/* info  */}
        <section
          className=" bg-background w-full h-full flex items-center justify-center p-5
          "
        >
          <article className="bg-white shadow-lg flex items-center justify-center flex-col ">
            <div className="  w-full h-full flex items-center justify-center flex-col p-5  m-5 md:justify-evenly md:flex-row ">
              <ul className=" flex items-center justify-center flex-col  w-fit ">
                <li className="  text-2xl ">
                  <h1 className="  ">{selectedItem.company}</h1>{" "}
                </li>

                <li className="  w-full md:w-3/4  pt-3">
                  <h3 className=" text-center ">{selectedItem.description}</h3>
                </li>
              </ul>

              {/* Quick details  */}
              <article className="  bg-gray-300 border-2 border-black w-72 min-w-max rounded-lg text-sm mt-11 mb-5  md:mr-14  ">
                <div className=" flex justify-center w-full ">
                  <h2 className=" text-base "> Quick Details </h2>
                </div>
                <ul className=" list-disc pl-5">
                  <li>Price - ${selectedItem.price}</li>
                  <li>Minimum people - {selectedItem.people}</li>
                  <li>Duration - {selectedItem.duration}hrs</li>
                </ul>
              </article>

              {/* Add to cart */}
              {/* <button
                className="bg-green-600 text-white mt-5  w-48 min-w-fit flex flex-row justify-center items-center p-1 shadow-md md:mr-14"
                onClick={() => addItemToCart(item, cartItems, setCartItems)}
              >
                <FaShoppingCart />{" "}
                <p className="ml-2">{selectedItem.price} kr</p>
              </button> */}
            </div>

            {/* small images */}
            <article className=" w-full  p-1">
              <ul className=" w-full  flex items-center justify-center ">
                <li className="  w-1/3 h-40">
                  <img
                    className=" object-cover h-full w-full"
                    src={selectedItem.smlImage1}
                    alt="whale"
                  />
                </li>
                <li className=" w-1/3 h-40">
                  <img
                    className=" object-cover h-full w-full"
                    src={selectedItem.smlImage2}
                    alt="whale"
                  />
                </li>

                <li className=" w-1/3 h-40">
                  <img
                    className=" object-cover h-full w-full"
                    src={selectedItem.smlImage3}
                    alt="whale"
                  />
                </li>
              </ul>
            </article>

            {/* main description */}
            <p className=" w-full md:w-3/4 text-center  p-3 m-10 text-base  ">
              {selectedItem.main_description}
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export function renderOrderItems(orders) {
  let rows = [];
  orders.forEach((order) => {
    let timestamp = order.timestamp;
    let total = order.total;
    let id = order._id;
    let cartArray = order.cart;
    let invoiceRows = [];
    let email = order.user;
 
    for (let i = 0; i < cartArray.length; i++) {
      invoiceRows.push(
        <div key={`cart${cartArray[i].name}`}>
          <section>Product: {cartArray[i].name}</section>
          <section>Price: {cartArray[i].price}SEK</section>
          <section>Quantity: {cartArray[i].quantity}</section>
          <br />
        </div>
      )}

    rows.push(
      <div key={`order${id}`} className =" grid grid-cols-1 gap-5 p-5 md:grid-cols-3 lg:grid-cols-4 ">
        <div>
          <section>#{id} <br/> {email} </section>

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
        <div key={`hr${id}`}>
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
  } else if (sortMethod === "Price-low-high") {
    sortedItems.sort((a, b) => (a.price > b.price ? 1 : -1));
    return sortedItems;
  } else if (sortMethod === "Price-high-low") {
    sortedItems.sort((a, b) => (a.price > b.price ? -1 : 1));
    return sortedItems;
  } else if (sortMethod === "Alpha-a-z") {
    sortedItems.sort((a, b) => (a.name > b.name ? 1 : -1));
    return sortedItems;
  } else if (sortMethod === "Alpha-z-a") {
    sortedItems.sort((a, b) => (a.name > b.name ? -1 : 1));
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
