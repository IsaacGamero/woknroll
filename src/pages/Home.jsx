import PromoCard from '../components/PromoCard';
import { useCart } from '../context/useCart';
import { Link } from "react-router-dom";
import { products } from '../data/products';

const promos = products.filter(p => p.category === "Promociones");

function scrollLeftPromos() {
  const container = document.getElementById("promo-scroll-promos");
  container.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRightPromos() {
  const container = document.getElementById("promo-scroll-promos");
  container.scrollBy({ left: 300, behavior: "smooth" });
}

function scrollLeftBest() {
  const container = document.getElementById("promo-scroll-vendidos");
  container.scrollBy({ left: -300, behavior: "smooth" });
}
function scrollRightBest() {
  const container = document.getElementById("promo-scroll-vendidos");
  container.scrollBy({ left: 300, behavior: "smooth" });
}

export default function Home() {
  const { cartItems, addToCart, removeFromCart, total } = useCart();

   return (
    <><div className="overflow-x-hidden"><div className="text-center p-10 bg-gradient-to-b from-red-100 to-white min-screen">
      <div className="max-md mx-auto">
        <img src="/imagee.png" alt="ChinaWok Logo" style={{ width: '100px', height: 'auto' }} className="mx-auto mb-6" />
        <h1 className="text-4xl font-extrabold text-red-600">Bienvenido a Wok N Roll 🍜</h1>
        <p className="mt-4 text-gray-700 text-lg">Deliciosa comida oriental a un clic</p>
        <a
          href="/menu"
          className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-full shadow hover:bg-red-700 transition"
        >
          Explora nuestro menú
        </a>
      </div>
    </div>
    <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-6">🎉 Promociones</h2>
        <div className="relative">
        {/* Flecha izquierda */}
        <button
        onClick={() => scrollLeftPromos()}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black rounded-full shadow p-2 z-10 hidden md:block">
        ◀</button>
        {/*Promociones*/}
        <div id="promo-scroll" className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-4" style={{ maxWidth: '1472px' }}>
              {promos.map(promo => (
                <PromoCard key={promo.id} {...promo} />
              ))}
            </div>
        {/* Flecha derecha */}
        <button
          onClick={() => scrollRightPromos()}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black rounded-full shadow p-2 z-10 hidden md:block"
        >
          ▶
        </button>
        </div>
      </section>
    <section className="py-12 px-6 text-center">
      <div className="relative">
        {/* Flecha izquierda */}
        <button
        onClick={() => scrollLeftBest()}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black rounded-full shadow p-2 z-10 hidden md:block">
        ◀</button>
        <h2 className="text-3xl font-bold text-red-600 mb-6">🔥 Más Vendidos</h2>
        <div id="promo-scroll-vendidos" className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-4"  style={{ maxWidth: '1472px' }}>
          <PromoCard id={9} title="Combo Chaufa" desc="Arroz chaufa + bebida" img="chaufa.png" price={19.90} onAdd={addToCart}/>
          <PromoCard id={10} title="2x1 en Ramen" desc="Todos los martes, ¡lleva dos ramen por el precio de uno!" img="ramen.png" price={19.90} onAdd={addToCart}/>
          <PromoCard id={11} title="Sushi Lovers" desc="15 piezas surtidas a solo S/24.90" img="sushi.png" price={19.90} onAdd={addToCart}/>
          <PromoCard id={12} title="Oferta Primavera" desc="Noodles con bebida por solo S/16.90" img="noodles.png" price={19.90} onAdd={addToCart}/>
          <PromoCard id={13} title="Menú Ejecutivo" desc="Sopa + chaufa + bebida por S/20" img="ejecutivo.png" price={19.90} onAdd={addToCart}/>
          <PromoCard id={14} title="Combo Chaufa" desc="Arroz chaufa + bebida" img="chaufa.png" price={19.90} onAdd={addToCart}/>
          <PromoCard id={15} title="Combo Chaufa" desc="Arroz chaufa + bebida" img="chaufa.png" price={19.90} onAdd={addToCart}/>
          <PromoCard id={16} title="Combo Chaufa" desc="Arroz chaufa + bebida" img="chaufa.png" price={19.90} onAdd={addToCart}/>
          
        </div>
        <button
          onClick={() => scrollRightBest()}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black rounded-full shadow p-2 z-10 hidden md:block"
        >
          ▶
        </button>
        </div>
      </section>
    <footer className="bg-red-600 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3 text-sm">
        <div>
          <h4 className="font-bold text-lg mb-3">Wok N Roll</h4>
          <p>Auténtico sabor oriental desde 2024.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">Redes Sociales</h4>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TikTok</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">Ayuda</h4>
          <ul className="space-y-2">
            <li>Preguntas frecuentes</li>
            <li>Contáctanos</li>
            <li>Política de privacidad</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs mt-10">&copy; 2025 Wok N Roll. Todos los derechos reservados.</p>
    </footer>
    </div>
    {/*Carrito*/}
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
    <Link
  to="/carrito"
  className="fixed bottom-20 left-4 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition z-50 text-sm"
>
  Ver carrito 🛒 ({cartItems.reduce((sum, i) => sum + i.quantity, 0)})
</Link>
    </>
  );
}