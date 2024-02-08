
const Ejercicio1 = () => {
    const isloged = true;

  return (
    <>
        <p className='font-bold p-4 y-3 rounded-md bg-slate-700 text-white'>
            {isloged ? "Bienvenido" : "Por favor, inicia sesión"}
        </p>
    </>
  )
}

export default Ejercicio1