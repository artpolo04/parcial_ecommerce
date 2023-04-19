import React from 'react'
import Nike from "../../images/Nike.jpg";

export const Header = ({ cantidad }) => {
    return (
        <header>
            <a href='#'>
                <div className='logo'>
                    <img src={Nike} alt='logo' width="100" />
                </div>
            </a>
            <ul>
                <li>
                    <a href='#'>Inicio</a>
                    <a href='#'>Productos</a>
                    <a href='#'>Nuevos Lanzamientos</a>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className='item_total'>{cantidad}</span>

            </div>
        </header>
    )
}
