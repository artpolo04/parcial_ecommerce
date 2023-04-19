import ProductImage from '../ProductImage';
import ButtonLista from '../Button';

const Card = ({
    data,
    onClick,
    setQuantity,
    isDisabledButton,
    isProductCart = false
}) => {
    return (
        <div className={isProductCart ? 'producto-carrito' : 'producto'}>
            <ProductImage src={data.image} width={isProductCart ? 150 : 200} />
            <div className='producto-detalle'>
                <p>{data.nombre}</p>
                <p>{data.Descripcion}</p>
                <p>${data.precio}</p>
                {isProductCart
                    ? (
                        <div className='producto-acciones'>
                            <input type='number' defaultValue={1} min={1} max={data.cantidad} onChange={(e) => setQuantity(e.target.value)} />
                            <ButtonLista title='Delete' onClick={onClick} />
                        </div>
                    )
                    : <ButtonLista onClick={onClick} disabled={isDisabledButton} />
                }
            </div>
        </div>
    )
}

export default Card;