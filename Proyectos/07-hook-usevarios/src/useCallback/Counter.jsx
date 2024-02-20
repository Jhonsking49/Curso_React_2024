import { useCallback, useState } from "react"

const Counter = () => {
    const [count, setcount] = useState(0)
    const handleIncrement = useCallback(() => {
        setcount(prev => prev+1)
    },[])
    const handleDecrement = useCallback(() => {
        setcount((prev) => prev-1)
    },[])
    return (
        <>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </>
    )
}

export default Counter