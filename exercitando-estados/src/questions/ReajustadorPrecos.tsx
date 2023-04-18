import { FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Feedback from "../components/Feedback";
import Title from "../components/Title";
import Entrada from "../components/Entrada";

export default function ReajustadorPrecos() {

  const inputPriceRef = useRef<HTMLInputElement>(null);
  const inputRangeRef = useRef<HTMLInputElement>(null);

  const [percentual, setPercentual] = useState(0)
  const [percentualVisual, setPercentualVisual] = useState(0)
  const [price, setPrice] = useState(NaN)
  const [showFeedback, setShowFeedback] = useState(false)

  function setNewPrice(price: number, percentual: number) {
    const newPrice = price + (price * percentual / 100)
    return newPrice
  }

  function moneyFormat(value: number) {
    return `${value.toFixed(2).replace(".", ",")}`
  }

  function gerarSaida(price: number, percentual: number) {
    const priceFormated = moneyFormat(price)
    const newPriceFormated = moneyFormat(setNewPrice(price, percentual))

    return (
      <p className="text-gray-200">
        O produto que custava <span className="text-cyan-500 bold">R${priceFormated}</span>, com <span className="text-cyan-500 bold">{percentual}%</span> de aumento vai passar a custar <span className="text-cyan-500 bold">R${newPriceFormated}</span> a partir de agora.
      </p>
    )
  }

  function enviar(event: FormEvent) {
    event.preventDefault()

    let inputPriceValue: any = inputPriceRef.current?.value
    inputPriceValue = parseFloat(inputPriceValue)

    let inputRangeValue: any = inputRangeRef.current?.value
    inputRangeValue = parseFloat(inputRangeValue)

    if (isNaN(inputPriceValue)) {
      window.alert("Digite um valor maior ou igual a R$0.01")
    } else {
      setPrice(inputPriceValue)
      setPercentual(inputRangeValue)
      setShowFeedback(true)
    }
  }

  return (
    <>
      <Title> Reajustador de Preços </Title>

      <Entrada submitFunction={enviar} buttonTitle="Reajustar">
        <label htmlFor="price">Preço do Produto (R$)</label>
        <input
          className="input"
          type="number"
          name="price" id="price" min="0.01" step="0.01"
          ref={inputPriceRef}
        />

        <label htmlFor="percentual">Qual será o percentual de ajuste? (<span className="text-cyan-500">{percentualVisual}%</span>) </label>
        <input
          className="focus:outline-none bg-gray-900"
          type="range"
          name="percentual" id="percentual"
          value={percentualVisual}
          onChange={(event) => setPercentualVisual(parseFloat(event.target.value))}
          ref={inputRangeRef}
        />
      </Entrada>

      <Feedback title="Resultado do Reajuste" show={showFeedback} >
        {gerarSaida(price, percentual)}
      </Feedback>

      <Link className="btn bg-green-500 mt-5" to="/"> Voltar </Link>
    </>
  )
}