import { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const CartContainer = () => {
    const { cart } = useContext(CartContext)

    const { removeItem } = useContext(CartContext)

    useEffect(() => {
        document.title = 'Carrito'
    }, [])

    return (
        <div className='text-center py-20 bg-[#000211] h-[650px]'>
            <h1 className='text-3xl font-bold text-white py-[50px]'>Servicios en el carrito</h1>
            <div className='py-[25px]'>
                {
                    cart.map(prod => {
                        return (
                            <div className='flex justify-center py-[25px]' key={prod.id}>
                                <img src={prod.img} alt="Foto" />
                            <h3 className='text-white px-[20px] font-bold'>{prod.name}</h3>
                            <h4 className='text-white px-[20px]'>Cantidad: {prod.quantity}</h4>
                            <h4 className='text-white px-[20px]'>Precio: ${prod.price}</h4>
                            <h4 className='text-white px-[20px]'>Subtotal: ${prod.price * prod.quantity}</h4>
                            <button className='bg-red-900 mx-4 rounded hover:bg-red-500 duration-300 text-white  px-1 cursor-pointer' onClick={() => removeItem(prod.id)}>Eliminar</button>
                        </div>
                        )
                    })
                }

                <div className='py-[75px]'>
                    <Link to='/checkout' className='bg-blue-500 mx-4 rounded hover:bg-blue-700 duration-300 text-white p-2  cursor-pointer'>Checkout</Link>
                </div>
            </div>


        </div>
    )
}

export default CartContainer