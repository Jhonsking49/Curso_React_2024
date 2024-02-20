import { useMemo, useState } from "react";

/**
 * Usememo se utiliza para declarar una variable que necesita mucho calculo y no queremos que se vuelva a ejecutar o crear en cada reenderizado
 */
const initialState = [
    {
        name: "producto1",
        price: 10,
        stock:5
    },
    {
        name: "producto2",
        price: 20,
        stock:10
    },
    {
        name: "producto3",
        price: 30,
        stock:15
    }
]
const useMemoProductList = () => {
    const [products, setproducts] = useState(initialState);
    const [calcularConst, setcalcularConst] = useState(0);
    // FUNCION PESADA
    const calcularPrecioTotal = (product) => {
        let suma = 0;
        for (let i = 0; i < 1000000; i++){
            suma += Math.random();
        }
        return product.price * product.stock + suma;
    }

    const memorizeTotales = useMemo(() => {
        setcalcularConst(prev=>prev+1)
        const totalPrecios = products.map(product => {
            return calcularPrecioTotal(product)
        })
        return totalPrecios;
    }, [products])

    return (
        <div>
            <h1>Numero de calculos realizados {calcularConst}</h1>
            <div>
                {products.map((product, index) => {
                    <p key={index}>
                        <h2> precio total: {memorizeTotales[index]} </h2>
                    </p>
                })}
            </div>
        </div>
    );

}

export default useMemoProductList