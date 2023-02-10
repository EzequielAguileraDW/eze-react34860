import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const ItemCart = ({ id, name, quantity, price }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div>
            <h3>{name}</h3>
            <h4>Cantidad {quantity}</h4>
            <h4>Precio: ${price}</h4>
            <h4>Subtotal: ${price * quantity}</h4>
            <button className='' onClick={() => removeItem(id)}>Remover</button>
        </div>
    )
}

export default ItemCart