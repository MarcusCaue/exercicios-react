import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-3/4 md:w-1/2 p-10 bg-gray-800 rounded-lg">
      <Outlet />
    </div>
  )
}