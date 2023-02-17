import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const ItemCart = ({ id, name, quantity, price }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div>
            <h3 className='text-white'>{name}</h3>
            <h4 className='text-white'>Cantidad {quantity}</h4>
            <h4 className='text-white'>Precio: ${price}</h4>
            <h4 className='text-white'>Subtotal: ${price * quantity}</h4>
            <button className='text-white' onClick={() => removeItem(id)}>Remover</button>
        </div>
    )
}

export default ItemCart