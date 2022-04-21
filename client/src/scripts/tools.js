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
    const newArray = [...cartItems];
    let itemExists = false;

    for (let product of newArray) {
        if (product.name === item.name){
            itemExists = true;
            product.quantity += 1;
        }
        console.log(item, "exist", product.quantity)
    }
    
    if (!itemExists) {
        newArray.push({
            "image": item.image,
            "name": item.name,
            "quantity": 1,
            "price": item.price
        })
        console.log(item, "does not exist")
    }

    setCartItems(newArray);
    console.log(cartItems);
}



export function toggleHidden(target) {
    document.getElementById(target).classList.toggle("hidden");
}