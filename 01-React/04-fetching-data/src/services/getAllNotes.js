import axios from "axios";

export const getAllNotes = () => {

    const API = 'http://localhost:3001/api/notes'

    return axios
        .get(API)
        .then((response) => {
            const {data} = response

            // devuelve los datos de la API
            return data
        })
}