import { useState } from "react"

const Responses = ['pierre', 'feuille', 'ciseaux']

function getWinner(player, ordi) {
  let result = ''

  if (player === ordi) {
    return result = 'Egalité'
  } else if ((player === 0 && ordi === 2) || (player === 2 && ordi === 1) || (player === 1) && (ordi === 0)) {
    return result = 'Gagné'
  } else {
    return result = 'perdu'
  }
}

function randomResponse() {
  return Math.floor(Math.random() * (2 - 0 + 1)) + 0
}

export default function App() {
  const [player, setPlayer] = useState(null)
  const [ordinateur, setOrdinateur] = useState(null)
  const [vainqueur, setVainqueur] = useState(null)

  function handleClick(index) {
    let random = randomResponse()
    const winner = getWinner(index, random)
  
    setPlayer(Responses[index])
    setOrdinateur(Responses[random])
    setVainqueur(winner)
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
    
          <p>{vainqueur}</p>
        </div>
      </div>
    </>
  )
}