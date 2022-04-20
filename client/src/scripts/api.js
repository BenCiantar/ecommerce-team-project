//function calls get method

// fetch
//put the result into an array
//call a function that renders the items on the page
import { API_BASE_URL } from "../config"

export function getItemsFromDb(category) {
    fetch (`${API_BASE_URL}/${category}`, {

        headers: {
            "content-type": "application/json"
        }
    })
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.error(err)
    })
}