import { FaShoppingCart, FaDollarSign } from "react-icons/fa";

export function renderAllCategoryItems(items, cartItems, setCartItems) {
    let rows = [];
    items.forEach(item => {
        rows.push(
        <div>
            <h1>{item.name}</h1>
            <p><FaDollarSign />{item.price}</p>
            <p>{item.description}</p>
            <button className="buy-btn btn-in-stock" onClick={() => addItemToCart(item, cartItems, setCartItems)}>
                <FaShoppingCart /> {item.price} kr
            </button>
        </div>
        );
    });
    return rows;
}

function addItemToCart(item, cartItems, setCartItems) {
    console.log(item._id);
}

export function toggleHidden(target) {
    document.getElementById(target).classList.toggle("hidden");
}
