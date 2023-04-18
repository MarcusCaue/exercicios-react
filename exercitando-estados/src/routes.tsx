import { createBrowserRouter } from "react-router-dom"
import App from "./components/App"
import ReajustadorPrecos from "./questions/ReajustadorPrecos"
import CalculadoraTempo from "./questions/CalculadoraTempo"
import LinksResolucoes from "./components/LinksResolucoes"
import CaixaEletronico from "./questions/CaixaEletronico"
import ConversorMoedas from "./questions/ConversorMoedas"
import Teste from "./questions/Teste"

export const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LinksResolucoes /> },
      { path: "/questao/reajustador-precos", element: <ReajustadorPrecos /> },
      { path: "/questao/calculadora-tempo",  element: <CalculadoraTempo /> },
      { path: "/questao/caixa-eletronico", element: <CaixaEletronico /> },
      { path: "/questao/conversor-moedas", element: <ConversorMoedas /> },
      { path: "/questao/", element: <></> },
      { path: "/questao/", element: <></> },
      { path: "/questao/", element: <></> },
      { path: "/questao/teste", element: <Teste /> },
    ]
  },

])