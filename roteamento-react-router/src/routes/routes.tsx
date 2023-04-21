import { createBrowserRouter } from "react-router-dom"
import App from '../App.tsx'
import About from "../components/About.tsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />
      }
    ]
  }
])