import { useState } from 'react' // primer hook
import { createRoot } from 'react-dom/client'
import './main.css'

// extrae 'root' a una variable separada
const rootElement = document.getElementById('root'); // accede al div del 'index.html'
const root = createRoot(rootElement) // utiliza ese div para convertirlo en el elemento 'root' de react


// componente App
const App = (props) => {

  const [contador_value, contador_update] = useState(0) // al ser un hook no puede ir entre bucles condicionales (if, for, while...)

  const [left_value, left_update] = useState(0)
  const [right_value, right_update] = useState(0)

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

  const Reset = () => {
    /*
    contador_update(0) // utilizamos el metodo que actualiza 'contador_value' y le pasamos como nuevo valor 0
    */

    left_update(0)
    right_update(0)
  }

  const IncreaseLeft = () => {
    left_update(left_value + 1)
  }

  const IncreaseRight = () => {
    right_update(right_value + 1)
  }
  
  return (
    <>
    <div className="scoreboard">

      <h1>{left_value}</h1>
      <button onClick={IncreaseLeft}>
        <svg id='icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>

      </button>
      
      <button onClick={IncreaseRight}>
        <svg id='icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>

      </button>
      <h1>{right_value}</h1>

    </div>

    <div className="reset">
      <button onClick={Reset}>
        <svg id='icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>

      </button>  
    </div>

    </>
  )
}

// root render
root.render (
  <App />
)