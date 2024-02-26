import ComponenteProvider from "./context/ComponenteProvider";
import Componente1 from "./components/Componente1";
import Componente5 from "./components/Componente5";

const InicioApp = () => {
    return (
        <ComponenteProvider>
            <Componente1 />
            <Componente5 />
        </ComponenteProvider>
    )
}

export default InicioApp