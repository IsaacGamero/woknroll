export default function PromoCard({ title, desc, img }) {
  return (
    <div className="min-w-[250px] max-w-[250px] h-[280px] flex-shrink-0 bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col">
      <img src={img} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-red-700 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}