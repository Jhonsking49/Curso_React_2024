import { createBrowserRouter } from "react-router-dom"
import RootPageLayout from "./pages/RootPageLayout"
import ErrorPage from "./pages/ErrorPage"
import Login from "./pages/LoginPage"
import { RouterProvider } from "react-router-dom"
import PrecioLuz from "./pages/PrecioLuzPage"
import ProtectedRoute from "./utils/ProtectedRoute"

import { Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPageLayout/>,
      errorElement: <ErrorPage/>,
      children: [
      {
        element: <ProtectedRoute  redirectPath="/login"/>,
        children: [
          {
            index:true,
            element: <Navigate to="/precioluz" replace	/>
          },
          {
            path: "/precioluz",
            element: <PrecioLuz/>
          }
        ]
      },
      {
        path: 'login',
        element: <Login/>,
      }
      ]
    }
  ])
    return (
      <AuthProvider>

        <RouterProvider router={router}/>
      </AuthProvider>

    )
}

export default App