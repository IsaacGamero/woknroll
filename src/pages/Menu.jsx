import { useState } from 'react';
import MenuItem from '../components/MenuItems';
import Cart from '../components/Cart';

const menuItems = [
  { id: 1, name: "Ramen Clásico", price: 24.90, category: "Ramen" },
  { id: 2, name: "Udon", price: 26.90, category: "Ramen" },
  { id: 3, name: "Arroz Chaufa", price: 21.90, category: "Platos Secos" },
  { id: 4, name: "Soju Uva", price: 18.00, category: "Licores" },
  { id: 5, name: "Pepero Oreo", price: 10.00, category: "Snacks" },
];

export default function Menu() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 relative">
      <h1 className="text-3xl font-bold text-red-600 mb-6">🍱 Menú Wok N Roll</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} onAdd={addToCart} />
        ))}
      </div>

      <Cart items={cartItems} onRemove={removeFromCart} />
    </div>
  );
}
