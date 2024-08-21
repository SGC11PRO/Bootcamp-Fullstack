import React from "react" // importante importar para poder exportar el componente


const App = () => {

    let notes = [
        { // objeto 1
          id: 1,
          content: 'HTML is easy',
          important: true
        },

        { // objeto 2
          id: 2,
          content: 'Browser can execute only JavaScript',
          important: false
        },

        { // objeto 3
          id: 3,
          content: 'GET and POST are the most important methods of HTTP protocol',
          important: true
        }
    ]

    // reasignamos valor de notas a 'undefined' para el renderizado condicional
    // notes = []

    function ReturnArrayOfObj (note) {

        // devolvemos los atributos del objeto 'note' (que se relaciona con el array de objetos 'notes')
        // en este caso accedemos a los atributos .id y .content

        // importante al devolver el div, asignar una key con un identificador único para cada objeto del array. En 
        // este caso utilizamos el propio atributo 'id' que tienen los objetos ([!] no puede haber 2 id iguales)
        return (
            <div key={note.id}>
            <p>{note.id}</p>
            <p>{note.content}</p>
            </div>
        )

        // esta funcion devuelve etiquetas html/react al igual que cuando creamos un nuevo componente y lo renderizamos
        // en el 'main.jsx'
    }

    if(typeof notes !== "object" || notes.length === 0) {

        // comprobamos que 'notes' pueda utilizar el metodo .map (solo para objects) y que tenga datos almacenados
        console.info(`[!] El ${typeof notes} 'notes' no tiene acceso al método 'map', o no contiene suficientes datos para renderizar`)

        return(
            <>
            <p><strong>Error</strong> - Inspeccione la consola para mas informacion</p>
            </>
        )s
    }

    else // en el caso de que pueda acceder al metodo map, que lo renderize
    {  
        // podemos utilizar el renderizado condicional para que unicamente use el metodo .map cuando 'notes' es un array
        return (

            // usamos el metodo map para poder renderizar objetos (array de obj -> coleccion), y le pasamos como parametro una funcion
            <>
            {notes.map(ReturnArrayOfObj)}
            </>
        )
    }


}

export default App