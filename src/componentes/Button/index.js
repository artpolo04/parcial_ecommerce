
const ButtonLista = ({ title = 'Add to cart', onClick, disabled = false }) => {
    return (
        <button className="button" onClick={onClick} disabled={disabled}>{title}</button>
    )
}

export default ButtonLista;