import { FormEvent, useRef, useState } from "react";
import Feedback from "../components/Feedback";
import Title from "../components/Title";
import Entrada from "../components/Entrada";

export default function SucessorAntecessor() {

  const inputRef = useRef<HTMLInputElement>(null)

  const [showFeedback, setShowFeedback] = useState(false)
  const [sucessorAntecessor, setSucessorAntecessor] = useState({
    sucessor: 0, antecessor: 0
  })

  function enviar(event: FormEvent) {
    event.preventDefault()

    let inputRefValue: any = inputRef.current?.value

    if (inputRefValue.trim() === "") {
      window.alert("Digite um número inteiro.")
    } else {
      inputRefValue = parseInt(inputRefValue)
      setSucessorAntecessor({
        sucessor: inputRefValue + 1,
        antecessor: inputRefValue - 1
      })
      setShowFeedback(true)
    }
  }

  return (
    <>
      <Title> Sucessor e Antecessor </Title>

      <Entrada submitFunction={enviar}  buttonTitle="Mostrar Resultado">
        <label htmlFor="num">Digite um número inteiro: </label>
        <input className="input" type="number" name="num" id="num" step="1" min="0" ref={inputRef} />
      </Entrada>

      <Feedback show={showFeedback} title="Resultado">
        <ul className="list-disc text-cyan-500 pl-10">
          <li>
            <p className="text-gray-200">
             O <span className="text-cyan-500">sucessor</span> de {inputRef.current?.value} é <span className="text-cyan-500">{sucessorAntecessor.sucessor}</span>
            </p>
          </li>
          <li>
            <p className="text-gray-200">
              O <span className="text-cyan-500">antecessor</span> de {inputRef.current?.value} é <span className="text-cyan-500">{sucessorAntecessor.antecessor}</span>
            </p>
          </li>
        </ul>
      </Feedback>
    </>
  )
}