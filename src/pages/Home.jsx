import PromoCard from '../components/PromoCard';

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
        <div id="promo-scroll-promos" className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-4" style={{ maxWidth: '1472px' }}>
          <PromoCard title="Combo Chaufa" desc="Arroz chaufa + bebida por solo S/19.90" img="chaufa.png" />
          <PromoCard title="2x1 en Ramen" desc="Todos los martes, ¡lleva dos ramen por el precio de uno!" img="ramen.png" />
          <PromoCard title="Sushi Lovers" desc="15 piezas surtidas a solo S/24.90" img="sushi.png"/>
          <PromoCard title="Oferta Primavera" desc="Noodles con bebida por solo S/16.90" img="noodles.png"/>
          <PromoCard title="Menú Ejecutivo" desc="Sopa + chaufa + bebida por S/20" img="ejecutivo.png"/>
          <PromoCard title="Menú Ejecutivo" desc="Sopa + chaufa + bebida por S/20" img="ejecutivo.png"/>
          <PromoCard title="Menú Ejecutivo" desc="Sopa + chaufa + bebida por S/20" img="ejecutivo.png"/>
          <PromoCard title="Menú Ejecutivo" desc="Sopa + chaufa + bebida por S/20" img="ejecutivo.png"/>
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
          <PromoCard title="Combo Chaufa" desc="Arroz chaufa + bebida por solo S/19.90" img="chaufa.png" />
          <PromoCard title="2x1 en Ramen" desc="Todos los martes, ¡lleva dos ramen por el precio de uno!" img="ramen.png" />
          <PromoCard title="Sushi Lovers" desc="15 piezas surtidas a solo S/24.90" img="sushi.png"/>
          <PromoCard title="Oferta Primavera" desc="Noodles con bebida por solo S/16.90" img="noodles.png"/>
          <PromoCard title="Menú Ejecutivo" desc="Sopa + chaufa + bebida por S/20" img="ejecutivo.png"/>
          <PromoCard title="Combo Chaufa" desc="Arroz chaufa + bebida por solo S/19.90" img="chaufa.png" />
          <PromoCard title="Combo Chaufa" desc="Arroz chaufa + bebida por solo S/19.90" img="chaufa.png" />
          <PromoCard title="Combo Chaufa" desc="Arroz chaufa + bebida por solo S/19.90" img="chaufa.png" />
          
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
    </div></>
  );
}