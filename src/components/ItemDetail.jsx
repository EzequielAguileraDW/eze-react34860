import { useContext } from 'react'
import ItemCount from '../components/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { NotificationContext } from '../nofitication/NotificationService'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart } = useContext(CartContext)
    const setNotification = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity)

        addItem({ id, name, price, quantity })
        setNotification('error', `Se agregó correctamente ${quantity} servicios al carrito`, 5)
    }

    return (
        <div className='bg-[#000211] flex-col text-center'>
            <div className='flex justify-center py-3'>
                <img src={img} alt={name} className='w-[250px] h-[250px] object-cover' />
            </div>
            <div className='py-2'>
                <p className='text-white py-1'>Categoria: {category}</p>
                <p className='text-white py-1'>Descripción: {description}</p>
                <p className='text-white py-1'>Precio: ${price}</p>
            </div>
            <div>
                {
                    isInCart(id) ? (
                        <Link className='bg-blue-500 mx-4 rounded hover:bg-blue-700 duration-300 text-white p-2  cursor-pointer' to='/cart'>Ir a pagar</Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail