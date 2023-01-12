import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {
    return (
        <div  className='shadow-sm shadow-[#10112b] hover:shadow-md hover:shadow-[#1c2044] duration-500 p-3'>
            <div className='py-2'>
                <h2 className='font-bold text-center'>{name}</h2>
            </div>
            <div>
                <img src={img} alt={name} className='w-[250px] h-[250px] object-cover' />
            </div>
            <div className='py-2 text-center'>
                <p className='font-bold'>Precio: ${price}</p>
            </div>
            <div className='py-2 text-center'>
                <Link to={`/detalle/${id}`} className='bg-gray-900 text-white p-2 rounded cursor-pointer hover:bg-gray-800 duration-300'>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item