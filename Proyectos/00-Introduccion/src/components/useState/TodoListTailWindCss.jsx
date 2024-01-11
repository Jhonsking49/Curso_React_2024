import { useState } from 'react'
import idGenerator from '../../helpers/idGenerator';

const initialState = [
    {
        id:1,
        title:"Estudiar",
        completed:true,
    },
    {
        id:2,
        title:"Estudiar mas",
        completed:false,
    },
    {
        id:3,
        title:"Aprobar React",
        completed:false,
    }];
const TodoListTailWindCss = () => {
    const [tasks, setTasks] = useState(initialState);
    const [newTask, setNewTask] = useState("");


    function handleAddTask() {
        const newId = idGenerator();
        if(newTask.trim() !== ""){
            const newTaskObject = {
                id:newId,
                title: newTask.trim(),
                completed: false,
            }
            setTasks([...tasks, newTaskObject]);
        }
    }

    function handleDeleteTask(taskId) {
        setTasks(tasks.filter(task => task.id!== taskId));
    }

    function handleToggleTaskCompleted(taskId) {
        const updateTasks = tasks.map(task => (task.id === taskId? {...task, completed:!task.completed } : task));
        setTasks(updateTasks);
    }


    return (
    <>
        <div className="max-w-md mx-auto mt-8 p-6 bg-yellow-200 shadow-md rounded-md">
            <h1 className="text-2xl mb-4 font-bold uppercase">TodoList</h1>
            <div className="flex mb-4">
                <input 
                    type="text" 
                    className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Nueva tarea"
                    value={newTask}
                    onChange={(e)=>setNewTask(e.target.value)}
                    //onkeydown={}
                    />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md" onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <div>
                <ul>
                    {   tasks.map(task => (
                            <li className="flex items-center mb-2" 
                            key={task.id}>
                                <input 
                                    type="checkbox" 
                                    className="mr-2"
                                    checked={task.completed}
                                    onChange={() => handleToggleTaskCompleted(task.id)}
                                    />
                                    <span className={task.completed ? "line-through" : ""}>{task.title}</span>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-md ml-auto"
                                    onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </>
    )
}

export default TodoListTailWindCss