export default function MenuItem({ item, onAdd }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 border border-red-100 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
        <p className="text-red-500 font-semibold mt-1">S/ {item.price.toFixed(2)}</p>
      </div>
      <button
        onClick={() => onAdd(item)}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
