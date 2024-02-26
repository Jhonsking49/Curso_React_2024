
import TodoContext from './context/TodoContext'
import TodoProvider from './context/TodoProvider'

function App() {

  return (
    <div className="text-5xl">
      <TodoProvider/>
      <TodoContext/>
    </div>
  )
}

export default App
