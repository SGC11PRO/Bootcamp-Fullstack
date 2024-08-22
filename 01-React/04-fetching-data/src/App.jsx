import { useState, useEffect, useDeferredValue } from 'react'
import React from 'react'
import { Note } from './Note'

export default function App(props) {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  // fetch de la API -> async
  // el use effect se ejecuta cuando se actualiza un estado (o las dependencias que tu especifiques) -> las ponemos en los [] al final.
  // si los [] estan vacios, solo se ejecutara una vez, cuando se renderice por primera vez la pagina
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // IMPORTANTE LOS FETCH SOLO LLAMARLOS 1 VEZ PARA EVITAR BUCLES INFINITOS
      .then(response => response.json())
        .then((json) => {
          console.log('fetch realizado')
          setNotes(json)
        })

  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('crear nota')

    const noteToAddState = {
      id: notes.lenght + 1,
      title: newNote,
      body: newNote
    }

    setNewNote((prevNotes) => prevNotes.concat(noteToAddState))
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
        <input type="text" onChange={handleChange}/>
        <button>Crear Nota</button>
      </form>
    </div>
  )
} 