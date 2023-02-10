import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CartWidget = ({ totalQuantity }) => {
    return (
        <Link to='/cart' className='bg-sky-300 rounded hover:bg-sky-500 duration-300 p-[2px]'>
            <div className='flex items-center gap-2'>
                <FiShoppingCart className='text-[19px] text-gray-800'/>
                <p className='text-[19px] text-gray-800'>{totalQuantity}</p>
            </div>
        </Link>
    )
}

export default CartWidget;