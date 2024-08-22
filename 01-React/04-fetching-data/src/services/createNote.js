import axios from "axios";

export const createNote = ({ title, body, userId }) => {
    return axios
        .post('https://jsonplaceholder.typicode.com/posts', {title, body, userId})
        .then((response) => {
            const { data } = response

            // devuelve los datos de la nueva nota ({title, body, userId})
            return data

        })
}