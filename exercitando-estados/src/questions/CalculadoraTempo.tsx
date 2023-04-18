import { FormEvent, useRef, useState } from "react"
import Feedback from "../components/Feedback";
import Title from "../components/Title";
import Entrada from "../components/Entrada";

interface UnidadesTempo {
  semanas: number,
  dias: number,
  horas: number,
  minutos: number
}

export default function NewCalculadoraTempo() {

  const inputSegundosRef = useRef<HTMLInputElement>(null);

  const [segundos, setSegundos] = useState(NaN)
  const [showFeedback, setShowFeedback] = useState(false)
  const [unidadesTempo, setUnidadesTempo] = useState({
    semanas: 0, dias: 0, horas: 0, minutos: 0
  } as UnidadesTempo)

  function calculaTempo(segundos: number, unidadesTempo: UnidadesTempo) {
    unidadesTempo.semanas = Math.floor(segundos / 604800)
    segundos -= (604800 * unidadesTempo.semanas);

    unidadesTempo.dias = Math.floor(segundos / 86400)
    segundos -= (86400 * unidadesTempo.dias);

    unidadesTempo.horas = Math.floor(segundos / 3600)
    segundos -= (3600 * unidadesTempo.horas);

    unidadesTempo.minutos = Math.floor(segundos / 60)
    segundos -= (60 * unidadesTempo.minutos);

    setUnidadesTempo(unidadesTempo)
    setSegundos(segundos)
  }

  function enviar(event: FormEvent) {
    event.preventDefault()

    let inputSegundosValue: any = inputSegundosRef.current?.value
    inputSegundosValue = parseInt(inputSegundosValue)

    if (isNaN(inputSegundosValue)) {
      window.alert("Insira algum valor de segundos.")
    } else {
      calculaTempo(inputSegundosValue, unidadesTempo)
      setShowFeedback(true)
    }
  }

  return (
    <>
      <Title> Calculadora de Tempo </Title>

      <Entrada submitFunction={enviar} buttonTitle="Calcular">
        <label htmlFor="segundos">Qual é o total de segundos?</label>
        <input
          className="input"
          type="number" name="segundos" id="segundos" min="0" step="1"
          ref={inputSegundosRef}
        />
      </Entrada>

      <Feedback title="Dados do Tempo Informado" show={showFeedback}>
        <p className="text-white"> Analisando o valor que você informou, <span className="text-cyan-500">{inputSegundosRef.current?.value}</span> segundos equivalem a: </p>
        <ul className="list-disc text-cyan-500 pl-10 pt-2">
          <li> <span className="text-white">{unidadesTempo.semanas} semanas</span></li>
          <li> <span className="text-white">{unidadesTempo.dias} dias</span></li>
          <li> <span className="text-white">{unidadesTempo.horas} horas</span></li>
          <li> <span className="text-white">{unidadesTempo.minutos} minutos</span></li>
          <li> <span className="text-white">{segundos} segundos</span></li>
        </ul>
      </Feedback>
    </>
  )
}