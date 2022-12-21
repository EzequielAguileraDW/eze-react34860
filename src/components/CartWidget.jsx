import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const CartWidget = () => {
    return (
        <li>
            <div className='flex items-center'>
                <FiShoppingCart className='text-[19px]'/>
                <p className='mx-2 text-[19px]'>0</p>
            </div>
        </li>
    )
}

export default CartWidget;