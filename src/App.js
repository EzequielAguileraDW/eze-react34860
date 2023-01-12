import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Productos disponibles'/>} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer greeting='Productos filtrados'/>} />
          <Route path='/detalle/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
