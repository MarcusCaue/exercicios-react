import { FormEvent, useRef, useState } from "react"
import Title from "../components/Title"
import Feedback from "../components/Feedback"
import Entrada from "../components/Entrada"

export default function AnalisadorNumReal() {

  const inputRef = useRef<HTMLInputElement>(null)

  const [showFeedback, setShowFeedback] = useState(false)
  const [numReal, setNumReal] = useState({
    parteInteira: "0", parteDecimal: "0"
  })

  function validateNum(number: string) {
    if (number !== "") {
      const [ parteInteira, parteDecimal ] = number.split(/[\.,]/)
      if (parteInteira !== "") {
        if (parteDecimal !== undefined && parteDecimal.length >= 3) {
          return true
        } else {
          window.alert("Informa a parte decimal com três ou mais dígitos.")
        }
      } else {
        window.alert("Digite a parte inteira também.")
      }
    } else {
      window.alert("Digite um número.")
    }
    
    return false
  }

  function enviar(event: FormEvent) {
    event.preventDefault()
    const inputRefValue : any = inputRef.current?.value
    const isValidValue = validateNum(inputRefValue)

    if (isValidValue) {
      let [ parteInteira, parteDecimal ] = inputRefValue.split(/[\.,]/)

      parteDecimal = "0," + parteDecimal

      const number = { parteInteira, parteDecimal }
      setNumReal(number)
      setShowFeedback(true)
    } 
  }

  return (
    <>
      <Title> Analisador de Número Real </Title>

      <Entrada submitFunction={enviar} buttonTitle="Gerar Resultado">
        <label htmlFor="number">Informe um número real com no mínimo três casas decimais</label>
        <input 
          type="number" name="number" id="number" className="input" step="any"
          ref={inputRef}
        />
      </Entrada>

      <Feedback show={showFeedback} title="Resultado da Análise">
        <ul className="list-disc text-cyan-500 pl-10">
          <li>
            <p className="text-gray-200">
              A parte <span className="text-cyan-500">inteira</span> corresponde a: <span className="text-cyan-500">{numReal.parteInteira}</span>
            </p>
          </li>
          <li>
            <p className="text-gray-200">
              A parte <span className="text-cyan-500">decimal</span> corresponde a: <span className="text-cyan-500">{numReal.parteDecimal}</span>
            </p>
          </li>
        </ul>
      </Feedback>
    </>
  )
}