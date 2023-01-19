import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';


const CartWidget = ({ totalQuantity }) => {
    return (
        <li className='bg-sky-300 rounded hover:bg-sky-500 duration-300'>
            <div className='flex items-center gap-2'>
                <FiShoppingCart className='text-[19px] text-gray-800'/>
                <p className='text-[19px] text-gray-800'>{totalQuantity}</p>
            </div>
        </li>
    )
}

export default CartWidget;