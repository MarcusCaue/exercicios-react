import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li> <Link to="/"> Página Principal </Link> </li>
        <li> <Link to="/about"> Sobre </Link> </li>
        <li> <Link to="/posts"> Posts </Link> </li>
        <li> <Link to="/posts/10"> Post 10 </Link> </li>
      </ul>
    </nav>
  )
}