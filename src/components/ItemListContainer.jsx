import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className='flex flex-col justify-center align-center py-40'>
            <h1 className='text-3xl text-black font-bold mx-10'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;