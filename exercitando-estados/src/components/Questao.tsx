import { Link, Outlet } from "react-router-dom";

export default function Questao() {
  return (
    <>
      <Outlet />
      <Link className="btn bg-green-500 mt-5" to="/"> Voltar </Link>
    </>
  )
}