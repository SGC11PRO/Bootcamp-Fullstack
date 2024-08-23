// Conectando con el archivo
/*
console.warn('[!] Ejecutando archivo...')

setTimeout(() => {
    console.log('[<>] Solicitud completada con éxito. Bienvenido, Sergio!')
}, 1000)
*/


// code here -----------------------------------------------------------------------------------------------------
const express = require('express')
const app = express()


let notes = [
    {
        "id": 1,
        "content": "Suscribirse a @midudev",
        "date": "2024-08-12T12:18:54.091Z",
        "important": true
    },

    {
        "id": 2,
        "content": "Aprender a crear una API",
        "date": "2024-08-23T09:16:19.092Z",
        "important": false
    },

    {
        "id": 3,
        "content": "Terminar App de Technoterra",
        "date": "2024-09-10T20:00:00.091Z",
        "important": false
    }
]


// creamos servidor. Requiere un callback (funcion que se ejecuta cada vez que le llegue una peticion al servidor)
/*
const app = http.createServer((request, response) => { 
    response.writeHead(200, { 'Content-Type': 'application/json'}) // envia encabezados al navegador para que identifique el tipo de dato que mandamos [ Cod. 200 -> Solicitud OK }
    response.end(JSON.stringify(notes)) // devolvemos el array de notes (pero con JSON.stringify [IMPORTANTE])
}) 
*/

app.get('/', (request, response) => { // esto se ejecutara en la url 'localhost:PORT/ '
    response.send('<h1> Hello World </h1>')
})

app.get('/api/notes', (request, response) => { // esto se ejecutara en la url 'localhost:PORT/api/notes'
    response.json(notes) // directamente escribe las cabeceras de application/json
})

app.get('/api/notes/:id', (request, response) => { // esto se ejecutara en la url 'localhost:PORT/api/notes'
    const id = Number(request.params.id) // importante transformar los datos, ya que de lo contrario, todas las request llegaran como 'strings'
    const exactNote = notes.find(exactNote => exactNote.id === id) // recuperamos la nota con el id === exactNote.id

    // Mandamos nota si la encuentra. Sino, devolvemos un 404
    if(exactNote) {
        response.json(exactNote)
    }
    else
    {
        response.status(404).end()
    }
})


const PORT = 3001 // especificamos puerto
app.listen(PORT, () => {
    console.warn(`[-] Server Running on port : ${PORT}`)
}) // decimos a la app(http.createServer()) que escuche con el puerto 3001


// Recursos utiles ---------------------------------------------------------------------
/*
    [-] Para saber el tipo de content type que utilizar segun el archivo que envies : 
        https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

    [-] Nodemon -> para automaticamente refrescar el servidor cuando se detecte algun cambio en el archivo
        https://github.com/remy/nodemon

        > npm install nodemon -D


    [-] Lista de los http Status Code
    https://profitserver.net/knowledge-base/codes_http_error/?gad_source=1&gclid=EAIaIQobChMIhd_uk9WKiAMV-HJBAh2oyzIHEAAYASAAEgJmtPD_BwE


*/