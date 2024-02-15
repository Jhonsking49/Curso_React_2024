import { useLocation, useNavigate } from 'react-router-dom'
import Swal from "firebase";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {state} = location;
  const totalStock = state?state.stockTotal :0;
  const IVA = 1.21;
  const precioBase = 4;
  const totalPagar = totalStock*IVA*precioBase;

  const handleClickPay = () => {
    Swal.fire({
      title: 'Pagar',
      text: `Total a Pagar: $${totalPagar}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Pagar'
    })
  }

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <div className=" bg-white p-4 rounded shadow-lg max-w-md w-full">
        <h2 className=" text-2xl font-semibold mb-4">
          Resumen del pago
        </h2>
        <div className="mb-4">
          <span>Total del stock</span>
          <span>
            {totalPagar.toFixed(2)}
          </span>
        </div>
        <div className=" flex justify-between items-center mt-4">
          <button className=" bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
          onClick={handleClickPay}>
            Pagar
          </button>
          <button className=" bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
          onClick={handleGoBack}>
            Volver
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage