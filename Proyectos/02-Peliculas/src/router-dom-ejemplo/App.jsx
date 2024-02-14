import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Administracion from "./Administracion";

function App() {
    const router = createBrowserRouter([
        {
            path: "/datos",
            element: <RootLayout />,
            errorChildren: <ErrorPage />,
            children: [
                { index:true, element: <HomePage /> },
                { path: "/productos", element: <Products /> },
                { path: "productos/:productId", element: <ProductDetails /> },
            ],
        },
        {
            path: "/admin",
            element: <Administracion />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;