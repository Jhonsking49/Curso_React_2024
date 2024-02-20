import { useReducer } from 'react'

const initialState = {edad:10};
const reducer(state,action) {
    switch (action.type) {
        case 'increment':
            return {
                edad: state.edad + 1
            }
        case 'decrement':
            return {
                edad: state.edad - 1
            }
        case "RESET":
            return initialState;
        default:
            return initialState;
    }
}
const BasicoReducer = () => {
    const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <div className=" container mx-auto text-center">
        <div className=" text-2xl font-bold mb-4">
            Basico de useReducer
        </div>
        <div className=" text-xl mb-4">
            Tu edad es: {state.edad}
        </div>
        <div className=" flex justify-center">
            <button type="button" className=" bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button type="button" className=" bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button type="button" className=" bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    </div>
  )
}

export default BasicoReducer