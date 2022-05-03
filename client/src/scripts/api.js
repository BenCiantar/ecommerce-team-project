import { API_BASE_URL } from "../config";

export function getItemsFromDb(category, setItems) {
  fetch(`${API_BASE_URL}/items/${category}`, {
    headers: {
      "content-type": "application/json",
    },
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

export function getAllItemsFromDb(setAllItems) {
  fetch(`${API_BASE_URL}/all-items/`, {
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      setAllItems(result);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function getFilteredItemsFromDb(query, setResults) {
  fetch(`${API_BASE_URL}/filtered-items/${query}`, {
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      setResults(result);
    })
    .catch((err) => {
      console.error(err);
    });
}

// export function getSearchResults(searchInput){
//   fetch(`${API_BASE_URL}/filtered-items/${searchInput}`, {
//     headers: {
//         "content-type": "application/json",
//     },
//     })
//     .then((response) => {
//         return response.json();
//     })
//     .then((result) => {
//       console.log(searchInput);
//         return result;
//     })
//     .catch((err) => {
//         console.error(err);
//     });
// }

export function findItemInDbById(id, setSelectedItem) {
  fetch(`${API_BASE_URL}/item-by-id/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      setSelectedItem(result);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function getOrdersFromDb(setOrders) {
    fetch(`${API_BASE_URL}/orders`, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setOrders(result);
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
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newOrderDetails),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      setCartItems([]);
      alert("Your order has been sent!");
      return response;
    }
  });
}
