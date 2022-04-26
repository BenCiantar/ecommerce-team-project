import { FaTools } from "react-icons/fa";
import { API_BASE_URL } from "../config"

export function getItemsFromDb(category, setItems) {
    fetch (`${API_BASE_URL}/items/${category}`, {
        headers: {
            "content-type": "application/json"
        }
    })
    .then((response) => {   
        return response.json();
    })
    .then((result) => {
        setItems(result);
    })
    .catch((err) => {
        console.error(err);
    });
}

export function placeOrder(cartItems, setCartItems, totalPrice) {

    const newOrderDetails = {
        "cart": cartItems,
        "total": totalPrice,
        "timestamp": new Date()
    }
  
    fetch(`${API_BASE_URL}/place-order`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newOrderDetails),
    })
    .then((response) => {
        if (!response.ok){
            throw new Error(response.statusText);
        } else {
            setCartItems([]);
            alert("Your order has been sent!");
            return response;
        }
    })
}
