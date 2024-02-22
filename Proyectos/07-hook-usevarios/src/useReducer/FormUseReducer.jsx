import { useReducer } from "react"
// fuera en un fichero aparte.... intialstate y el formreducer

const initialState = {
    name: 'juan',
    password: 'rey'
}

const FormReducer = (state, action) => {
    switch (action.type) {
        case 'SET-NAME':
            return {
                ...state, // se clona el estado original
                nombre: action.payload //
            };
        case 'SET-PASSWORD':
            return {
                ...state,
                password: action.payload
            };
        case "RESET":
            return initialState;
        default:
            return state
    }
} 

const FormUseReducer = () => {
    const [state, dispatch] = useReducer(FormReducer, initialState)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Usuario ${state.name}  Password: ${state.password}`)
    }
    const handleChangeName = (e) => {
        dispatch({type:"SET-NAME",payload:e.target.value})
    }

    const handleChangePassword = (e) => {
        dispatch({type:"SET-PASSWORD",payload:e.target.value})
    }

    return (
        <form onSubmit={handleSubmit}
        className=" max-w-md mx-auto mt-4 p-4 bg-gray-100 rounded">
            <div>
                <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="name">
                    Nombre
                </label>
                <input
                type="text"
                id="name"
                value={state.name}
                onChange={handleChangeName}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div>
                <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="password">
                    Contraseña
                </label>
                <input
                type="text"
                id="password"
                value={state.password}
                onChange={handleChangePassword}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight "
                />
            </div>
        </form>
    )
}

export default FormUseReducer