import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { db } from '../services/firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)
    const [datos, setDatos] = useState({
        nombre: '',
        email: ''
    })

    const handeInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Checkout'
    }, [])


    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: 'Ezequiel Aguilera',
                    phone: '1337',
                    email: 'ezequielaguilera.dev@gmail.com'
                },
                items: cart,
                total
            }

            const batch = writeBatch(db)

            const ids = cart.map(prod => prod.id)
            console.log(ids)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))


            const productsAddedToCartFromFirestore = await getDocs(productsRef)
            const { docs } = productsAddedToCartFromFirestore

            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                const { id } = orderAdded
                setOrderId(id)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 5000)

                console.log(id)
            } else {
                console.error('Hay servicios fuera de stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }


    }

    if (loading) {
        return <h1 className='flex justify-center text-2xl font-bold py-40 text-white bg-[#000211] h-[650px]'>Generando orden :)</h1>
    }

    if (orderId) {
        return (
            <div>
                <h1 className='flex justify-center font-bold text-white py-40 bg-[#000211] h-[650px]'>Hola {datos.nombre}, el ID de su compra es: {orderId}, el mismo te fue enviado a {datos.email}</h1>
            </div>
        )
    }

    if (cart.length === 0) {
        return (
            <h1 className='flex justify-center font-bold py-40 text-white bg-[#000211] h-[650px]'>No hay servicios en el carrito :(</h1>
        )
    }

    return (
        <div className='text-center py-[115px] bg-[#000211] h-[650px]'>
            <h1 className='font-bold text-2xl text-white py-[15px]'>Checkout</h1>
            <div className='flex-col text-white'>
                <form action="" className='py-10'>
                    <label htmlFor="" className='px-2'>Nombre</label>
                    <input type="text" name='nombre' className='text-black px-2' placeholder='Ingrese su nombre' onChange={handeInputChange}/>
                    <label htmlFor="" className='px-2'>E-mail</label>
                    <input type="email" name='email' className='text-black px-2' placeholder='Ingrese su e-mail' onChange={handeInputChange}/>
                    <label htmlFor="" className='px-2'>Celular</label>
                    <input type="number" className='text-black px-2' placeholder='Ingrese su celular'/>
                    <button type='submit' onClick={createOrder} className='bg-blue-500 mx-4 rounded hover:bg-blue-700 duration-300 text-white p-2 cursor-pointer my-20'>Generar orden</button>
                </form>
            </div>
        </div>
    )


}




export default Checkout