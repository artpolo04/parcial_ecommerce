import Card from '../Card'

const ProductosLista = ({ datos, carrito, setCarrito }) => {

    const handleAddProductCart = (producto) => {
        setCarrito([...carrito, producto])
    }

    const handleIsDisabled = (id) => {
        return carrito.find(producto => producto.id === id)
    }

    return (
        <div className='productos'>
            <h3>Lista de productos</h3>
            <div className='lista-productos'>
                {datos?.map(producto =>
                    <Card
                        key={producto.id}
                        data={producto}
                        onClick={() => handleAddProductCart(producto)}
                        isDisabledButton={handleIsDisabled(producto.id)}
                    />
                )}
            </div>
        </div>
    )
}
export default ProductosLista;
