import React from 'react'
import ItemCart from './ItemCart'

const CartList = ({ cart }) => {
    return (
        <div className='flex p-30 text-yellow-800'>
            {
                cart.map(prod => <ItemCart key={prod.id} {...prod}/>)
            }
        </div>
    )
}

export default CartList