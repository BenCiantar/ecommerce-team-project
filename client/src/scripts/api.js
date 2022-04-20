import { API_BASE_URL } from "../config"

export function getItemsFromDb(category) {
    fetch (`${API_BASE_URL}/items/${category}`, {

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
