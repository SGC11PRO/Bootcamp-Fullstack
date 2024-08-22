import axios from "axios";

export const getAllNotes = () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const {data} = response

            // devuelve los datos de la API
            return data
        })
}