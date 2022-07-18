
import './App.css';
import NavBar from'./Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './Components/ItemListContainer/ItemList/ItemDetailContainer/ItemDetail/ItemDetail';
import { CartProvider } from './Context/CartContext';
import CartPage from './Components/CartPage/CartPage'
import FormContact from './Components/Form/form';
import MissingPage from './Components/page404/Page404'
import Footer from './Components/Footer/Footer';
import ProductPage from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/productos/' element={<ProductPage />} />
          <Route path='/productos/:id' element={<ItemDetail />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/contactanos' element={<FormContact />} />
          <Route path='*' element={<MissingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
