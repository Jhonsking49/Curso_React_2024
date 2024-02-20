/**
 * Crear un custom hook que se le pase como parametro una key y un valor inicial, y me permita generar un custom hook llamado
 * uselocalstorage para guardar datos dentro de esa clave. El estado inicial será el valor pasado por parametro siempre y cuando
 * no exista la clave en el local storage, si existe la clave, el valor inicial sera la clave del local storage
 */

import { useState } from "react";

const uselocalstorage = (key, initialValue) => {
    const [saveValue, setSaveValue] = useState(() => {
        const valorKeyLocalStorage = window.localStorage.getItem(key);
        return valorKeyLocalStorage? JSON.parse(valorKeyLocalStorage) : initialValue;
    });

    const setValueLocalStorage = (value) => {
        setSaveValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [saveValue, setValueLocalStorage];
}

export default uselocalstorage;s