import { useState } from "react"

const Responses = ['pierre', 'feuille', 'ciseaux']

function randomResponse() {
  let randomRes = Math.floor(Math.random() * (2 - 0 + 1)) + 0
  console.log(randomRes)
}

export default function App() {

  function handleClick(index) {

    if (index === 0) {
      console.log(Responses[0])

    } else if (index === 1) {
      console.log(Responses[1])

    } else if (index === 2) {
      console.log(Responses[2])
    }
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
        </div>
      </div>
    </>
  )
}