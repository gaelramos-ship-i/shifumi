import { useState } from "react"

const Responses = ['pierre', 'feuille', 'ciseaux']

function randomResponse() {
  return Math.floor(Math.random() * (2 - 0 + 1)) + 0
}

export default function App() {
  const [player, setPlayer] = useState(null)
  const [ordinateur, setOrdinateur] = useState(null)

  function handleClick(index) {
    let random = randomResponse()

    setPlayer(Responses[index])
    setOrdinateur(Responses[random])
  }

  return (
    <>
      <div>
        <h1>Shifumi</h1>
        <div>
          {Responses.map((Response, index) => (
            <button key={index} onClick={() => handleClick(index, randomResponse())}>
              {Response}
            </button>
          ))}

          <p>Ordinateur : {ordinateur}</p>
          <p>Vous avez joué : {player}</p>
        </div>
      </div>
    </>
  )
}