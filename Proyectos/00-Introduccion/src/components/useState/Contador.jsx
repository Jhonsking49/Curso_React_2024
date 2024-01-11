import { useState } from "react";

const initialState = 0;

const Contador = () => {
    const [counter, setCounter] = useState(initialState);
    // Declaracion de funciones
    function handleIncrement() {
        setCounter(counter + 1);
        //para asegurar traer el ultimo valor de la variable
        //setCounter((prevCounter) => prevCounter + 1);
    }
    function handleDecrement() {
        setCounter(counter - 1);
    }
    return (
    <>
    <h1>Ejemplo de contador en React</h1>
    <h2>El contador vale {counter}</h2>
    <button onClick={handleIncrement}>Incrementar</button>
    <button onClick={handleDecrement}>Decrementar</button>
    </>
    )
}


export default Contador