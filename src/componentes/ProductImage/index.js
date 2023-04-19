import React from 'react'

const ProductImage = (props) => {

    return (
        <img src={require('../../images/' + props.src)} alt='imagen_Producto' width={props.width} />
    )
}

export default ProductImage;
