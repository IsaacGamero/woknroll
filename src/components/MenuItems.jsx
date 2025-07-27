export default function MenuItem({ item, onAdd }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-sm text-gray-600">S/ {item.price.toFixed(2)}</p>
      <button
        onClick={() => onAdd(item)}
        className="mt-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
      >
        Agregar al carrito
      </button>
    </div>
  );
}