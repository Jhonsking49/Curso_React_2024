import { useRef } from "react";
import { useEffect } from "react"

const EjemploUseRefInput = () => {

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const inputRef = useRef(null);
    

    return (
        <div>
            <label htmlFor="">Nombre: </label>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default EjemploUseRefInput