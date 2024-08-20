const Bienvenida = (props) => { // este elemento contiene props
    return <h1>Welcome, {props.user}</h1> // uno de los props que tiene es .user
}

// exportar el componente para poder ser utilizado en el 'App.js'
export default Bienvenida