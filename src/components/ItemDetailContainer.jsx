import { useState, useEffect } from 'react'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()


    useEffect(() => {
        document.title = 'Detalle del servicio'
    }, [])

    useEffect(() => {
        (async () => {
            const productRef = doc(db, 'products', productId)

            try {
                const snapshot = await getDoc(productRef)

                const fields = snapshot.data()
                const productAdapted = { id: snapshot.id, ...fields }

                setProduct(productAdapted)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [productId])


    if (loading) {
        return (
            <div>
                <h1 className='font-bold py-40 text-center text-white bg-[#000211] h-[650px]'>Cargando...</h1>
            </div>
        )
    }

    return (
        <div className='bg-[#000211] w-full py-40' >
            <h1 className='text-white font-bold text-2xl text-center'>Detalle {product.name}</h1>
            <div className=''>
                <ItemDetail {...product} className='' />
            </div>
        </div>
    )
}

export default ItemDetailContainer