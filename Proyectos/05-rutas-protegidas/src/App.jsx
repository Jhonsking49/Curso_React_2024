import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./utils/ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";
import RootPage from "./pages/RootPage";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,

      children: [
        {
          element: <ProtectedRoute isActive={false} redirectPath="/login" />,
          children: [
            { index: true, element: <Home /> },
            { path: "about", element: <AboutPage /> },
          ],
        },
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;