import { useState } from 'react';


const initialState = {
    name:"",
    email:"",
    password:""
};
function RegistrarFormulario() {

    //Declaracion de estados

    //Declaracion de hooks
    const [formData, setFormData] = useState(initialState)
    
    //Declaracion de funciones
    function handleSubmit(e) {
        e.preventDefault();

    }
    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    }
    return (
        <div className="max-w-md mx-auto mt-4 p-6 bg-slate-500 shadow-md rounded-md">
            <h1 className="text-2xl font-bold text-gray-900">Formulario de Registro</h1>
            <form onSubmit={handleSubmit}>
                <div className="max-w-md mx-auto mt-4 p-6 bg-slate-300 shadow-md rounded-md">
                    <label className="mx-4 text-2xl mb-4">
                        Nombre:
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name}
                            className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={handleChange}
                            />
                    </label>
                </div>
                <div className="max-w-md mx-auto mt-4 p-6 bg-slate-300 shadow-md rounded-md">
                    <label className="mx-4 text-2xl mb-4">
                        Email:
                        <input 
                            type="text" 
                            name="email" 
                            value={formData.email} 
                            className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={handleChange}
                            />
                    </label>
                </div>
                <div className="max-w-md mx-auto mt-4 p-6 bg-slate-300 shadow-md rounded-md">
                    <label className="mx-4 text-2xl mb-4">
                        Password:
                        <input 
                            type="password"  
                            name="password" 
                            value={formData.password}
                            className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={handleChange}
                            />
                    </label>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md">Registrar Usuario</button>
            </form>
        </div>
    )
}

export default RegistrarFormulario