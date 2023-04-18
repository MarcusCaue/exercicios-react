import { Link } from "react-router-dom"
import Title from "./Title"

const nomeQuestoes = [
  {
    nome: "Reajustador Preços",
    caminho: "reajustador-precos"
  },
  {
    nome: "Calculadora de Tempo",
    caminho: "calculadora-tempo"
  },
  {
    nome: "Caixa Eletrônico",
    caminho: "caixa-eletronico"
  },
  {
    nome: "Conversor de Moedas",
    caminho: "conversor-moedas"
  },
  {
    nome: "Analisador de Números Reais",
    caminho: "analisador-num-real"
  }
]

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