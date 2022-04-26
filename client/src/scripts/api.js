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

export function placeOrder(cartItems, setCartItems) {
  
    fetch(`${config.API_BASE_URL}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usersCart),
        })
        .then((response) => {
            if (!response.ok){
                throw new Error(response.statusText);
            } else {
                return response;
            }
        })
}
