import { useEffect, useState } from 'react'
import Card from '../Card'

function Carrito({ carrito, setCarrito }) { //recive 2 props carrito que es un array con los agregados al carrito y setCarrito se ejecuta cuando se actualice el carrito
    const [quantity, setQuantity] = useState(1)
    // const bandera = arrayProductos.filter(existe => existe.id === array.id); //Filtro del arreglo de los Productos
    const [descuento, setDescuento] = useState(0);

    const handleDeleteProductCart = (id) => {
        const newCarrito = carrito.filter(producto => producto.id !== id)
        setCarrito(newCarrito)
    }

    const handleSubtotal = () => {
        let Subtotal = 0

        carrito.forEach(producto => {
            Subtotal += producto.precio * quantity
        })

        return (Subtotal)
    }

    return (
        <div className='carrito'>
            <h3>Carrito de compra</h3>
            <div className='container-carrito'>
                <div className='lista-carrito'>
                    {carrito?.map(producto =>
                        <Card key={producto.id} data={producto} onClick={() => handleDeleteProductCart(producto.id)} isProductCart setQuantity={setQuantity} />
                    )}
                </div>

                <div className='container-summary'>
                    <h3>Resúmen de la orden</h3>
                    <p className='total-carrito'>Subtotal: ${handleSubtotal()}</p>
                    <p className='total-carrito'>Descuento:</p>
                    <input type="number" value={descuento} min={1} onChange={(e) => setDescuento(parseInt(e.target.value))} />
                    <p className='total-carrito'>Total: ${handleSubtotal() - descuento}</p>

                </div>
            </div>
        </div>
    )
}

export default Carrito