import { useState, useEffect, useDeferredValue } from 'react'
import React from 'react'
import axios from 'axios' // similar a metodo fetch

import { Note } from './Note'

export default function App(props) {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  // fetch de la API -> async
  // el use effect se ejecuta cuando se actualiza un estado (o las dependencias que tu especifiques) -> las ponemos en los [] al final.
  // si los [] estan vacios, solo se ejecutara una vez, cuando se renderice por primera vez la pagina
  useEffect(() => {

    console.log('use effect ha sido llamado')

    setTimeout(() => {
      /*
      fetch('https://jsonplaceholder.typicode.com/posts') // IMPORTANTE LOS FETCH SOLO LLAMARLOS 1 VEZ PARA EVITAR BUCLES INFINITOS
      .then(response => response.json()) // transforma la respuesta en un array json
        .then((json) => { // pasa el array a notes

          setNotes(json)
        })
        
      */

        axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            const {data} = response // unicamente nos interesa el atributo 'data' que es donde se encuentran los obj de la API
            setNotes(data)
          })

    }, 200) // espera X sec para realizar el fetch
  }, []) // cuando newNote cambie, se llamara de nuevo al useEffect

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteToAddState = {
      title: newNote,
      body: newNote,
      userId: 1
    }

    // modificar API y guardar nueva nota en el servidor -> .POST
    axios
      .post('https://jsonplaceholder.typicode.com/posts', noteToAddState)
      .then(response => {
        const {data} = response
        setNotes((prevNotes) => prevNotes.concat(data))

      })

    setNewNote('')
  }


  return (
    <div>
      <h1>Notes</h1>

      <ol>
        {notes
          .map((note) => (
            <Note key={note.id} {...note} />
          ))
        }
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Crear Nota</button>
      </form>
    </div>
  )
} 