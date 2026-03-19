import { useState } from "react"

const Responses = ['pierre', 'feuille', 'ciseaux']

function getWinner(player, ordi) {
  let result = ''

  if(player === ordi){
    result = 'Egalité'
    console.log(result)
  } else if((player === 0 && ordi === 2) || (player === 2 && ordi === 1) || (player === 1) && (ordi === 0)){
    result = 'Gagné'
    console.log(result)
  } else {
    result = 'perdu'
    console.log(result)
  }
}

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

    getWinner(index, random)
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