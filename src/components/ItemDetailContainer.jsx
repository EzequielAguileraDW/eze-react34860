import { useState, useEffect } from 'react'
// import { getProductById } from '../asyncMock'
import ItemDetail from '../components/ItemDetail'

import { getDoc, doc } from 'firebase/firestore'

import { useParams } from 'react-router-dom'
import { db } from '../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()


    useEffect(() => {
        document.title = 'Detalle del servicio'
    }, [])

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc => {
            const dataProduct = doc.data()
            const productAdapted = { id: doc.id, ...dataProduct }
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [productId])

    if (loading) {
        return <h1>Cargando...</h1>
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