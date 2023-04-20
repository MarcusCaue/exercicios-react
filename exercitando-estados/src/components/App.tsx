import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-center p-10">
      <div className="p-10 bg-gray-800 rounded-lg w-1/2">
        <Outlet />
      </div>
    </div>
  )
}