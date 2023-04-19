import { FormEvent, useRef, useState } from "react"
import Title from "../components/Title"
import Feedback from "../components/Feedback"

export default function Medias() {

  const formRef = useRef<HTMLFormElement>(null)

  const [media, setMedia]= useState(0)
  const [showFeedback, setShowFeedback] = useState(false)

  function enviar(event: FormEvent) {
    event.preventDefault()

    const inputs = formRef.current?.querySelectorAll<HTMLInputElement>(".input")

    const notas : string[] = []
    const pesos : string[] = []

    inputs?.forEach(element => {
      element.classList.contains("nota") ? notas.push(element.value) : pesos.push(element.value)
    })

    console.log(notas)
    console.log(pesos)

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

      <Feedback show={showFeedback} title="Estrutura da Divisão">
        {/* <ul className="list-disc text-cyan-500 pl-10">
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
        </ul> */}
      </Feedback>
    </>
  )


}