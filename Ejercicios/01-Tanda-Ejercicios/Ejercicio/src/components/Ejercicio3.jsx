import { useState } from "react"

const Ejercicio3 = () => {
  const [isClicked, setisClicked] = useState(false);
  const changeColor = () => {
    setisClicked(!isClicked);
  }
  return (
    <>
      <button className={`rounded-lg ${isClicked ? 'text-red-600 bg-black' : 'text-blue-600 bg-slate-300'}`} onClick={changeColor}>{isClicked ? "Rojo" : "Azul"}</button>
    </>
  )
}

export default Ejercicio3