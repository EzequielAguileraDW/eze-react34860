import ItemCount from '../components/ItemCount'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const handleOnAdd = (quantity) => {
        console.log(`Agregué al carrito: ${quantity} ${name}`)
    }

    return (
        <div className='bg-[#000211] flex-col text-center'>
            <div className=''>
                <h2 className=''>{name}</h2>
            </div>
            <div className='flex justify-center'>
                <img src={img} alt={name} className='w-[250px] h-[250px] object-cover'/>
            </div>
            <div>
                <p className='text-white py-1'>Categoria: {category}</p>
                <p className='text-white py-1'>Descripción: {description}</p>
                <p className='text-white py-1'>Precio: ${price}</p>
            </div>
            <div>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </div>
        </div>
    )
}

export default ItemDetail