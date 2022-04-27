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
  fetch(`${API_BASE_URL}/items`, {
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

export function findItemInDbById(id, setSelectedItem) {
  console.log(id)
  fetch(`${API_BASE_URL}/item-by-id/${id}`, {
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result)
      setSelectedItem(result);
    })
    .catch((err) => {
      console.error(err);
    });
}
