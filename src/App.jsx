import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext.jsx';
import { AnimatePresence} from 'framer-motion';



function App() {
    return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/carrito" element={<CartPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
