import { useState } from "react"

/**
 * Custom hooks que me devuelva un UUID aleatorio y que me permite generar más UUID
 */
const useCustomUUID = () => {
    const { uuid, setUuid} = useState(generarUuid());
    function generarUuid() {
        const timeValue = Date.now();
        const randomV1 = Math.random().toString(36).substring(2);
        const randomV2 = Math.random().toString(36).substring(2);
        return `${timeValue}-${randomV1}-${randomV2}`
    }
    return [uuid, ()=> setUuid(generarUuid)];
}

export default useCustomUUID;