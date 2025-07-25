export default function PromoCard({ title, desc, img, price, onAdd }) {
  return (
    <div className="min-w-[250px] max-w-[250px] h-[330px] flex-shrink-0 bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col">
      <img src={img} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold text-red-700">{title}</h3>
          <p className="text-sm text-gray-600">{desc}</p>
          {price && <p className="mt-1 text-red-500 font-bold">S/ {price.toFixed(2)}</p>}
        </div>
        {onAdd && (
          <button
            onClick={() => onAdd({ title, price })}
            className="mt-3 bg-red-600 text-white px-4 py-1 rounded-full text-sm hover:bg-red-700 transition"
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
}