import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (

    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Servicios disponibles' />} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer greeting='Servicios filtrados' />} />
            <Route path='/detalle/:productId' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
