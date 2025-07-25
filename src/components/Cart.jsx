export default function Cart({ items, onRemove }) {
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="fixed right-4 bottom-4 bg-white shadow-lg border border-red-200 rounded-xl p-4 w-72">
      <h3 className="text-lg font-bold text-red-600 mb-3">🛒 Carrito</h3>
      {items.length === 0 ? (
        <p className="text-gray-500 text-sm">Tu carrito está vacío</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <span>{item.name} x{item.quantity}</span>
              <button
                onClick={() => onRemove(item.id)}
                className="text-sm text-red-500 hover:underline"
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 font-bold text-right text-red-600">Total: S/ {total.toFixed(2)}</p>
    </div>
  );
}
