import { FormEvent, useEffect, useRef, useState } from "react"
import { api, date } from "../../get-date"
import Title from "../components/Title"
import Entrada from "../components/Entrada"
import Feedback from "../components/Feedback"

interface DataCotacao {
  dia: string, mes: string, ano: string
}

export default function ConversorMoedas() {

  const inputRef = useRef<HTMLInputElement>(null)

  const [cotacaoDolar, setCotacaoDolar] = useState(0)
  const [dataUltimaCotacao, setDataUltimaCotacao] = useState<DataCotacao>({
    dia: "01", mes: "01", ano: "2023"
  })
  const [showFeedback, setShowFeedback] = useState(false)
  const [valorReais, setValorReais] = useState(0)
  const [valorDolar, setValorDolar] = useState(0)

  useEffect(() => {
    const url = `olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${date.month}-01-${date.year}'&@dataFinalCotacao='${date.month}-${date.day}-${date.year}'&$top=100&$format=json&$select=cotacaoCompra,dataHoraCotacao`

    api.get(url).then(response => {
      let dados = response.data.value
      dados = dados[dados.length - 1]

      const cotacaoDolar = dados.cotacaoCompra
      let ultimaCotacao = dados.dataHoraCotacao
      ultimaCotacao = ultimaCotacao.substring(0, ultimaCotacao.indexOf(" ")).split("-")

      setCotacaoDolar(cotacaoDolar)
      setDataUltimaCotacao({
        ano: ultimaCotacao[0], mes: ultimaCotacao[1], dia: ultimaCotacao[2]
      })
    })

  }, [])

  function enviar(event: FormEvent) {
    event.preventDefault()

    let inputRefValue : any = inputRef.current?.value
    inputRefValue = parseFloat(inputRefValue)

    if (isNaN(inputRefValue)) {
      window.alert("Insira algum valor monetário")
    } else {
      const conversao = inputRefValue / cotacaoDolar
      setValorReais(inputRefValue)
      setValorDolar(conversao)
      setShowFeedback(true)
    }
  }

  return (
    <>
      <Title> Conversor de Moedas </Title>

      <Entrada submitFunction={enviar} buttonTitle="Enviar">
        <label htmlFor="valorReais"> Informe o valor em R$ para ser convertido em Dólar: </label>
        <input
          className="input"
          type="number" name="valorReais" id="valorReais" min="0" step="0.01"
          ref={inputRef}
        />
      </Entrada>

      <Feedback title="Resultado da Conversão" show={showFeedback}>
        <p className="text-gray-200">
          Segundo dados do Banco Central do Brasil, a última cotação do dólar foi realizada em <span className="text-cyan-500 bold">{dataUltimaCotacao.dia}/{dataUltimaCotacao.mes}/{dataUltimaCotacao.ano}</span> e estava valendo <span className="text-cyan-500 bold">R${cotacaoDolar.toFixed(2)}</span>. 
        </p>
        <p className="text-gray-200 mb-5">
          Sendo assim, o valor informado de <span className="text-cyan-500 bold">R${valorReais.toFixed(2)}</span> equivalem a <span className="text-cyan-500 bold">US${valorDolar.toFixed(2)}</span>
        </p>
      </Feedback>
    </>
  )
}