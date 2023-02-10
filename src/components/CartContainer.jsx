import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartContainer = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className='text-center py-20 bg-[#000211] h-[650px]'>
            <h1 className='text-3xl font-bold text-white py-[50px]'>Carrito</h1>
            <div className='py-[25px]'>
                {
                    cart.map(prod => {
                        return (
                            <h2 className='font-bold text-white py-5' key={prod.id}>- {prod.name}, Cantidad: {prod.quantity}</h2>
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