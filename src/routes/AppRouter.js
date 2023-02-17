import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer'
import Cart from '../components/Cart'
import Checkout from '../components/Checkout'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer greeting='Todos nuestros servicios' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Servicios filtrados' />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
    )
}

export default AppRouter