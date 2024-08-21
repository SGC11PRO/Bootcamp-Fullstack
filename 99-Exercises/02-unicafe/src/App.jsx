import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good_value, good_update] = useState(0)
  const [neutral_value, neutral_update] = useState(0)
  const [bad_value, bad_update] = useState(0)

  const GoodComment = (value) => {
    good_update(good_value + 1)
  }

  const NeutralComment = (value) => {
    neutral_update(neutral_value + 1)
  }

  const BadComment = (value) => {
    bad_update(bad_value + 1)
  }

  const PositivePerc = () => {
    let totalComments = good_value + bad_value
    let percentage = (good_value / totalComments) * 100
    return percentage.toFixed(0) // toFixed(numero_de_decimales)
  }

  console.log(PositivePerc())

  return (
    <>
    <h1>Give Feedback !</h1>

    <div id="buttons">
        <button onClick={GoodComment}>Good</button>
        <button onClick={NeutralComment}>Neutral</button>
        <button onClick={BadComment}>Bad</button>
    </div>

    <div id="text">
        <p>Good Comments : {good_value}</p>
        <p>Neutral Comments : {neutral_value}</p>
        <p>Bad Comments : {bad_value}</p>

        <p>Client Satisfaction : {PositivePerc()} %</p>
    </div>
    </>
  )
}

export default App