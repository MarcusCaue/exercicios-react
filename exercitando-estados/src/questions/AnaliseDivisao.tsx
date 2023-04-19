import { FormEvent, useRef, useState } from "react"
import Title from "../components/Title"
import Feedback from "../components/Feedback"
import Entrada from "../components/Entrada"

export default function AnaliseDivisao() {

  const dividendoRef = useRef<HTMLInputElement>(null)
  const divisorRef = useRef<HTMLInputElement>(null)

  const [ quociente, setQuociente ] = useState(0)
  const [ restoDivisao, setRestoDivisao ] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)

  function calcular(dividendo: number, divisor: number) {
    const quociente = Math.trunc(dividendo / divisor)
    const resto = dividendo % divisor

    setQuociente(quociente)
    setRestoDivisao(resto)
  }

  function enviar(event: FormEvent) {
    event.preventDefault()

    let dividendoRefValue: any = dividendoRef.current?.value
    let divisorRefValue: any = divisorRef.current?.value

    if (dividendoRefValue === "" || divisorRefValue === "") {
      window.alert("Digite um número inteiro.")
    } else {
      dividendoRefValue = parseInt(dividendoRefValue)
      divisorRefValue = parseInt(divisorRefValue)
      calcular(dividendoRefValue, divisorRefValue)
      setShowFeedback(true)
    }

  }

  return (
    <>
      <Title> Analisador de Divisões </Title>

      <Entrada submitFunction={enviar} buttonTitle="Gerar Resultado">
        <label htmlFor="number">Dividendo</label>
        <input
          type="number" name="number" id="number" className="input" min="0" step="1"
          ref={dividendoRef}
        />

        <label htmlFor="number">Divisor</label>
        <input
          type="number" name="number" id="number" className="input" min="1" step="1"
          ref={divisorRef}
        />
      </Entrada>

      <Feedback show={showFeedback} title="Estrutura da Divisão">
        <div className="flex text-cyan-500 justify-center text-3xl">
          <div className="dividendo-resto min-w-24">
            <div className="p-5 text-center">{ dividendoRef.current?.value }</div>
            <div className="p-5 text-center">{ restoDivisao }</div>
          </div>
          <div className="divisor-quociente border-l min-w-24">
            <div className="border-b p-5 text-center">{ divisorRef.current?.value }</div>
            <div className="p-5 text-center">{ quociente }</div>
          </div>
        </div>
      </Feedback>
    </>
  )
}