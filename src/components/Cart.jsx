import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartList from './CartList'

const Cart = () => {

    const { cart } = useContext(CartContext)

    return (
        <div className='flex p-30 text-yellow-800'>
            <h1>Servicios agregados a tu carrito</h1>
            <CartList cart={cart} />
        </div>

    )
}

export default Cart