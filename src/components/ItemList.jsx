import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div className='flex justify-center py-5 gap-10 text-white'>
            {products.map(prod => <Item className='mx-5' key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList