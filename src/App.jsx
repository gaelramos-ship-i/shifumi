import { useState } from "react"
import "./styles/app.scss"

const Responses = ['pierre', 'feuille', 'ciseaux']

function getWinner(player, ordi) {
  let result = ''

  if (player === ordi) {
    return result = 'Egalité'
  } else if ((player === 0 && ordi === 2) || (player === 2 && ordi === 1) || (player === 1) && (ordi === 0)) {
    return result = 'Gagné'
  } else {
    return result = 'Perdu'
  }
}

function randomResponse() {
  return Math.floor(Math.random() * (2 - 0 + 1)) + 0
}

export default function App() {
  const [player, setPlayer] = useState(null)
  const [ordinateur, setOrdinateur] = useState(null)
  const [vainqueur, setVainqueur] = useState(null)
  const [scores, setScores] = useState([0, 0])

  function handleClick(index) {
    let random = randomResponse()
    const winner = getWinner(index, random)

    if (winner === "Gagné") setScores(s => [s[0] + 1, s[1]])
    else if (winner === "Perdu") setScores(s => [s[0], s[1] + 1])
  
    setPlayer(Responses[index])
    setOrdinateur(Responses[random])
    setVainqueur(winner)
  }

  return (
    <>
      <div className="container">
        <h1>Shifumi</h1>
        <div className="content">
          {Responses.map((Response, index) => (
            <button key={index} onClick={() => handleClick(index, randomResponse())}>
              {Response}
            </button>
          ))}

          <p>Ordinateur : {ordinateur}</p>
          <p>Vous avez joué : {player}</p>
          
          <p>{vainqueur}</p>

          <p>
            Joueur : {scores[0]}<br />
            Ordinateur : {scores[1]}
          </p>
        </div>
      </div>
    </>
  )
}