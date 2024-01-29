import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./screens/About";
import Home from "./screens/Home";
import Details from "./screens/Details";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        index: true,
        element: <Home />
      },
      {
        path: '/details/:pokemon',
        element: <Details />
      }
    ]
  }
])

const Router = () => {
  return <RouterProvider router={router}/>
}

export default Router