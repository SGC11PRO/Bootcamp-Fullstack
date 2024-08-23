import axios from "axios";

export const createNote = ({ title, body, userId }) => {

    const API = 'http://localhost:3001/api/notes'

    return axios
        .post(API, {title, body, userId})
        .then((response) => {
            const { data } = response

            // devuelve los datos de la nueva nota ({title, body, userId})
            return data

        })
}