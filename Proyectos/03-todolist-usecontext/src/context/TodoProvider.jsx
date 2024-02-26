import { useState } from "react"
import TodoContext from "./TodoContext";

const initialState = [
    {
        id: 1,
        texto: "Iniciar Actividad",
        completada: true,
    },
    {
        id: 2,
        texto: "Aprender react",
        completada: false,
        
    },
    {
        id: 3,
        texto: "Aprender context",
        completada: false,
    }
]

const TodoProvider = ({children}) => {
    const [tareas, setTareas] = useState(initialState);
    
    const addTarea = (title) => {
        const nuevaTarea = {
            id: tareas.length + 1,
            texto: title,
            completada: false,
        }
        setTareas([...tareas, nuevaTarea])
    }

    const deleteTarea = (id) => {
        setTareas(tareas.filter(tareas => tareas.id === id));
    }

    const completeTarea = (id) => {
        setTareas(tareas.map((tarea) => {
            if (tareas.id === id) {
                return {
                    ...tareas,
                    completada: !tareas.completada
                }
            }
            return tarea;
        }))
    }

    const countIncompleteTareas = () => {
        return tareas.filter(tareas => !tareas.completada).length;
    }
    return (
        <TodoContext.Provider value={(tareas, setTareas)}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider