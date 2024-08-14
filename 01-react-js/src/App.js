import './App.css';
import Bienvenida from './Bienvenida'; // importar nuestros propios componentes (desde un archivo externo)

const App = () => {

  // [!] no se pueden evaluar objetos
  
  return (
    <div className="App">
      <Bienvenida user="Sergio"/>
      <Descripcion speaker="@midudev"/> 
    </div>
  )
}

// crear componente


const Descripcion = (props) => {
  // podemos indicar que este componente tiene atributos (props) -> variables
  return <p>Este es el curso de react de {props.speaker}</p> // con {props.speaker} accedemos al prop de 'speaker'
  
}

export default App;
