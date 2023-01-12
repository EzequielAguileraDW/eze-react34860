import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const CartWidget = () => {
    return (
        <li className='bg-sky-300 rounded hover:bg-sky-500 duration-300'>
            <div className='flex items-center'>
                <FiShoppingCart className='text-[19px] text-gray-800'/>
                <p className='mx-2 text-[19px] text-gray-800'>0</p>
            </div>
        </li>
    )
}

export default CartWidget;