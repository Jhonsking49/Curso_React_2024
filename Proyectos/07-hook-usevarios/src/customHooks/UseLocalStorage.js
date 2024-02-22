/**
 * Crear un custom hook que se le pase como parametro una key y un valor inicial, y me permita generar un custom hook llamado
 * uselocalstorage para guardar datos dentro de esa clave. El estado inicial será el valor pasado por parametro siempre y cuando
 * no exista la clave en el local storage, si existe la clave, el valor inicial sera la clave del local storage
 */

import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [saveValueStorage, setSaveValueStorage] = useState(() => {
        // Hay que comprobar si la key ya está en el localStorage
        const valorKeyLocalStorage = window.localStorage.getItem(key);
        return valorKeyLocalStorage
        ? JSON.parse(valorKeyLocalStorage)
        : initialValue;
    });

    const setValueInLocalStorage = (value) => {
        setSaveValueStorage(value); // <-- lo almaceno en el estado y ahora lo almaceno en el LOCALStorage
        window.localStorage.setItem(key, JSON.stringify(value)); 
    };

    return [saveValueStorage, setValueInLocalStorage];
};

export default useLocalStorage;