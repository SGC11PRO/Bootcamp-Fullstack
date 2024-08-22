import React from "react"
import { useState } from 'react'

const Formulario = (props) => {

    // let response -> mala practica. En react es mejor usar el useState

    const [notes_value, update_notes] = useState(props.notes)
    const [text_value, update_text] = useState('')

    const handleChange = (event) => {
        update_text(event.target.value) // el event.target.value hace referencia a lo que hay dentro del input text
    }

    const buttonClick = () => {

        // añadir input al array de objs de notes
        const newNote = {
            id: notes_value.length + 1,
            content: text_value,
            important: true
        }

        update_notes(notes_value.concat(newNote))

        console.log(newNote)
    }

    return (
        <>
        <input type="text" onChange={handleChange}/>
        <button onClick={buttonClick}>Crear nota</button>
        </>
    )
}

export default Formulario