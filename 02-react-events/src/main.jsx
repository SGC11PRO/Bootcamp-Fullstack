import ReactDOM from 'react-dom' // importante para poder utilizar el ReactDOM.render
import { useState } from 'react' // primer hook

// extrae 'root' a una variable separada
const rootElement = document.getElementById('root');


// componente App
const App = (props) => {

  const [contador_value, contador_update] = useState(0)

  /*
  const contador = useState(0)
  const contador_value = useState[0]
  const contador_update = useState[1]
  */

  /*
  setInterval (() => {
    contador_update(contador_value + 1) // contador_update (nuevo_valor)
  }, 2000) // update cada 2000 ms
  */


  const ButtonFunction = () => {
    contador_update(contador_value + 1)
  }
  
  return (
    <>
    <h1>{contador_value}</h1>
    <button onClick={ButtonFunction}>
      Incrementar Contador
    </button></>
  )
}

// root render
ReactDOM.render (
  <App />,
  rootElement
)