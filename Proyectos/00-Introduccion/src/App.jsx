// IMPORTS
import "./App.css";
import TodoListTailWindCss from "./components/useState/TodoListTailWindCss";
import RegistrarFormulario from "./components/useState/registrarFormulario";



const App = () =>{
  return (
    <>
      <h1>Ejemplos básicos de React</h1>
      <RegistrarFormulario/>
      <TodoListTailWindCss/>
    </>
  )
}

export default App

// Declaracion de variables globales
/**
 const App = () => {
   // Hooks
 
   //Declaracion de variables globales
   const texto = "Hola";
   const numero = 1;
   const array = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
   const objeto = {
     nombre: "Juan",
     edad: 21
   };
   return(
     <>
       <Contador/>
       <contadorDoble/>
     </>
   )
 
 
   //Funciones de mi componente
   /**
    * 
   return (
     <>
     <h1>Ejemplo Básico JSX</h1>
     <h2>Variables en JSX y objetos</h2>
     <div>
       <h3>La variable del texto vale: {texto}</h3>
       <h3>La variable del numero vale: {numero}</h3>
       <h3>El nombre de la variable objeto vale: {objeto.nombre}</h3>
       <h3>El nombre de la variable objeto vale: {objeto.edad}</h3>
     </div>
     <div>
         <ul>La variable del array vale: {array.map((mes, index) => <li key={index}>{mes}</li>)}</ul>
     </div>
     </>
   )
    */
 

 

