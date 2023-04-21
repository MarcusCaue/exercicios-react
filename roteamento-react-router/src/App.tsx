import Menu from "./components/Menu";
import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  )
}