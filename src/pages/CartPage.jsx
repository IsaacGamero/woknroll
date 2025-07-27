import { useCart } from '../context/useCart';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, removeFromCart, total, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-3xl font-bold text-red-600 mb-6">🛒 Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <div className="text-gray-500 text-center">
          <p>No hay productos en tu carrito.</p>
          <Link to="/menu" className="text-red-600 underline mt-4 block">Ir al menú</Link>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 max-w-3xl mx-auto">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-red-600 font-bold">S/ {(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 underline mt-1"
                  >
                    Quitar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="max-w-3xl mx-auto mt-8 text-right">
            <p className="text-xl font-bold text-red-700 mb-2">Total: S/ {total.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="bg-gray-200 text-sm px-4 py-2 rounded-full mr-4"
            >
              Vaciar carrito
            </button>
            <button
              onClick={() => alert('Pedido enviado (ficticio)')}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              Finalizar pedido
            </button>
          </div>
        </>
      )}
    </div>
  );
}
