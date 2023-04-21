import { useParams, useSearchParams } from "react-router-dom"

export default function Post() {
  const { id } = useParams()
  const [qs] = useSearchParams()

  return (
    <div>
      <p>
        Valores dos parâmetros: <br />
        id: { id }
      </p>
      <p>
        Dados da Query String: <br />
        Chave 1 = { qs.get("chave1") }
      </p>
    </div>
  )
}