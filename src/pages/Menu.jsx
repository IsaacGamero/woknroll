import { useState } from 'react';
import MenuItem from '../components/MenuItems';
import Cart from '../components/Cart';
import { useCart } from '../context/useCart';
import { Link } from 'react-router-dom';

import { products } from '../data/products';

const allItems = products.filter(p => ["Ramen", "Toppings", "Bebidas", "Licores", "Snacks"].includes(p.category));

const categories = ["Ramen", "Toppings", "Bebidas", "Licores", "Snacks"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Ramen");
  const { cartItems, addToCart, removeFromCart, total } = useCart();

  const filteredItems = allItems.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-red-50 py-10 px-4 relative">
      <h1 className="text-3xl font-bold text-red-600 mb-6">🍱 Menú Wok N Roll</h1>

      {/* Categorías */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-medium border transition ${
              selectedCategory === cat
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-red-600 border-red-300 hover:bg-red-100"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Productos */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {filteredItems.map((item) => (
          <MenuItem key={item.id} item={item} onAdd={addToCart} />
        ))}
      </div>

      <div className="fixed bottom-4 right-4 w-72 bg-white border shadow-lg rounded-xl p-4 z-50">
      <h3 className="text-lg font-bold text-red-600 mb-3">🛒 Carrito</h3>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-sm">Tu carrito está vacío</p>
      ) : (
        <ul className="space-y-2 max-h-40 overflow-y-auto">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between text-sm text-gray-800">
              <span>{item.name} x{item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:underline">
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 text-right font-bold text-red-600">
        Total: S/ {total.toFixed(2)}
      </p>
    </div>

      {/* ✅ Botón para ir al carrito */}
      {cartItems.length > 0 && (
        <Link
          to="/carrito"
          className="fixed bottom-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition z-50"
        >
          Ver carrito 🛒 ({cartItems.reduce((sum, i) => sum + i.quantity, 0)})
        </Link>
      )}
    </div>
  );
}
