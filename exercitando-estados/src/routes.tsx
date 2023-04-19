import { createBrowserRouter } from "react-router-dom"
import App from "./components/App"
import Questao from "./components/Questao"
import ReajustadorPrecos from "./questions/ReajustadorPrecos"
import CalculadoraTempo from "./questions/CalculadoraTempo"
import LinksResolucoes from "./components/LinksResolucoes"
import CaixaEletronico from "./questions/CaixaEletronico"
import ConversorMoedas from "./questions/ConversorMoedas"
import AnalisadorNumReal from "./questions/AnalisadorNumReal"
import NumerosAleatorios from "./questions/NumerosAleatorios"
import SucessorAntecessor from "./questions/SucessorAntecessor"
import AnaliseDivisao from "./questions/AnaliseDivisao"

export const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/", 
        element: <LinksResolucoes /> 
      },
      { 
        path: "/questao", element: <Questao />, children: [
          { path: "/questao/reajustador-precos", element: <ReajustadorPrecos /> },
          { path: "/questao/calculadora-tempo",  element: <CalculadoraTempo /> },
          { path: "/questao/caixa-eletronico", element: <CaixaEletronico /> },
          { path: "/questao/conversor-moedas", element: <ConversorMoedas /> },
          { path: "/questao/analisador-num-real", element: <AnalisadorNumReal /> },
          { path: "/questao/numeros-aleatorios", element: <NumerosAleatorios /> },
          { path: "/questao/sucessor-antecessor", element: <SucessorAntecessor /> },
          { path: "/questao/analise-divisao", element: <AnaliseDivisao /> },
          { path: "/questao/sucessor-antecessor", element: <></> },
          { path: "/questao/sucessor-antecessor", element: <></> },
          { path: "/questao/sucessor-antecessor", element: <></> },
          { path: "/questao/sucessor-antecessor", element: <></> },
        ] 
      }
    ]
  },

])