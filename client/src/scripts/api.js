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

export function placeOrder(totalPrice) {
    alert(`Order placed! Total price: ${totalPrice} kr`);
  }
