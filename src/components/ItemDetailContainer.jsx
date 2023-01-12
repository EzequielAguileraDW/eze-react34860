import { useState, useEffect } from 'react'
import { getProductById } from '../asyncMock'
import ItemDetail from '../components/ItemDetail'

import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()


    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <div className='bg-[#000211] w-full py-40' >
            <h1 className='text-white font-bold text-2xl text-center'>Detalle {product.name}</h1>
            <div className=''>
                <ItemDetail {...product} className=''/>
            </div>
        </div>
    )
}

export default ItemDetailContainer