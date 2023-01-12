import React, { useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(prev => prev + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    return (
        <div className=''>
            <div className='flex justify-center my-5'>
                <button className=' bg-blue-500 w-[40px] text-white mx-4 rounded hover:bg-blue-700 duration-300' onClick={decrement}>-</button>
                <h4 className='text-white mx-4'>{quantity}</h4>
                <button className=' bg-blue-500 w-[40px] text-white mx-4 rounded hover:bg-blue-700 duration-300' onClick={increment}>+</button>
            </div>
            <div>
                <button className='text-white bg-blue-500 w-[150px] rounded hover:bg-blue-700 duration-300 p-1' onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )

}
export default ItemCount