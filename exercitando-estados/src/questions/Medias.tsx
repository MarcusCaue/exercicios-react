import { FormEvent, useRef, useState } from "react"
import Title from "../components/Title"
import Feedback from "../components/Feedback"

export default function Medias() {

  const formRef = useRef<HTMLFormElement>(null)

  const [medias, setMedias]= useState({ simples: 0, ponderada: 0 })
  const [showFeedback, setShowFeedback] = useState(false)

  function enviar(event: FormEvent) {
    event.preventDefault()

    const inputs = formRef.current?.querySelectorAll<HTMLInputElement>(".input")

    const notas : number[] = []
    const pesos : number[] = []

    inputs?.forEach(element => {
      element.classList.contains("nota") ? notas.push(parseFloat(element.value)) : pesos.push(parseFloat(element.value))
    })

    const mediaSimples = notas.reduce((somatorio, nota) => somatorio += nota) / notas.length

    let somatorioNotasMultiplicadasPesos = 0 
    notas.forEach((_nota, index) => { somatorioNotasMultiplicadasPesos += (notas[index] * pesos[index]) }) 
    const mediaPonderada = somatorioNotasMultiplicadasPesos / (pesos.reduce((somatorio, peso) => somatorio += peso))

    setMedias({ simples: mediaSimples, ponderada: mediaPonderada})
    setShowFeedback(true)
  }

  return (
    <>
      <Title> Médias Aritméticas </Title>

      <section className="entrada text-gray-200" >
        <form className="flex flex-col gap-4" onSubmit={enviar} ref={formRef}>
          {
            [1, 2].map((numberOfInput, key) => {
              return (
                <div key={key} className="flex flex-col gap-2">
                  <label htmlFor={"nota-"+numberOfInput}>{numberOfInput}º Nota: </label>
                  <input type="number" name={"nota-"+numberOfInput} id={"nota-"+numberOfInput} className="input nota" min="0" max="10" step="0.1" required />

                  <label htmlFor={"peso-"+numberOfInput}>Peso da {numberOfInput}º Nota : </label>
                  <input type="number" name={"peso-"+numberOfInput} id={"peso-"+numberOfInput} className="input peso" min="0" step="1" required />
                </div>
              )
            })
          }
          <button className="btn bg-cyan-500" type="submit"> Calcular </button>
        </form>
      </section>

      <hr className="my-5" />

      <Feedback show={showFeedback} title="Resultado">
        <ul className="list-disc text-cyan-500 pl-10">
          <li>
            <p className="text-gray-200">
              A Média Aritmética <span className="text-cyan-500">Simples</span> vale: <span className="text-cyan-500">{medias.simples.toFixed(1)}</span>
            </p>
          </li>
          <li>
            <p className="text-gray-200">
               A Média Aritmética <span className="text-cyan-500">Ponderada</span> vale: <span className="text-cyan-500">{medias.ponderada.toFixed(1)}</span>
            </p>
          </li>
        </ul>
      </Feedback>
    </>
  )


}