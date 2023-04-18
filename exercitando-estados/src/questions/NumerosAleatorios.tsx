import { useState } from "react"
import Title from "../components/Title"

export default function NumerosAleatorios() {

  const [number, setNumber] = useState(generateRandomNumber())

  function generateRandomNumber() {
    const randomNumber = Math.trunc(Math.random() * 101)
    return randomNumber.toString().padStart(2, "0")
  }

  return (
    <>
      <Title> Gerador de Números Aleatórios </Title>

      <p className="text-gray-200">
        Gerando um número aleatório entre <span className="text-cyan-500">0</span> e <span className="text-cyan-500">100</span>... <br />
        O número gerado foi <span className="text-cyan-500">{ number }</span>.
      </p>

      <button 
        onClick={() => setNumber(generateRandomNumber())}
        className="btn bg-cyan-500 w-full mt-5"
      > 
        Clique aqui para gerar outro 
      </button>

      <hr className="my-5" />
    </>
  )
}