import { Link } from "react-router-dom"
import nomeQuestoes from "./nomes-caminhos-questoes.json"
import Title from "./Title"

export default function LinksResolucoes() {
  return (
    <>
      <Title> Resoluções dos Exercícios </Title>

      <nav className="pl-10">
        <ul className="list-disc text-cyan-500">
          {
            nomeQuestoes.map((questao, key) => {
              const caminhoCompleto = "/questao/" + questao.caminho
              return (
                <li key={key}>
                  <Link className="text-white text-lg hover:text-cyan-500 hover:transition-all hover:duration-500 hover:underline hover:underline-offset-2" to={caminhoCompleto}> {questao.nome} </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}