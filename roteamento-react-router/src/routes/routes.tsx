import { createBrowserRouter } from "react-router-dom"
import App from '../App.tsx'
import About from "../components/About.tsx"
import Post from "../components/Post.tsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/posts", element: <Post /> },
      { path: "/posts/:id", element: <Post /> } 
    ]
  }
])