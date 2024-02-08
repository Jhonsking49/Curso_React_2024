
const Ejercicio2 = () => {
  const frutas = ["Manzana","Platano","Pera","Cereza"];
  return (
    <>
      <ul className=' list-disc bg-slate-500 text-red-500 rounded-md'>
        {frutas.map((fruta,index) =>(
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </>
  )
}

export default Ejercicio2