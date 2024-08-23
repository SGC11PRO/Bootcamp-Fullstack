import { useState, useEffect } from 'react'

import { Note } from './Note'
import { getAllNotes } from './services/getAllNotes'
import { createNote } from './services/createNote'

export default function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  // fetch de la API -> async
  // el use effect se ejecuta cuando se actualiza un estado (o las dependencias que tu especifiques) -> las ponemos en los [] al final.
  // si los [] estan vacios, solo se ejecutara una vez, cuando se renderice por primera vez la pagina
  useEffect(() => {

    console.log('use effect ha sido llamado')

    setTimeout(() => {

        // accede a nuestro modulo que realiza el axios.get de la API y nos devuelve la response.data
        getAllNotes()
          .then((data) => {
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
    createNote(noteToAddState).then((newNote) => {
      setNotes((prevNotes) => prevNotes.concat(newNote))
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