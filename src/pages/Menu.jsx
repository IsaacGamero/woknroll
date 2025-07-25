export default function Menu() {
  return <div className="min-h-screen bg-gradient-to-b from-white to-red-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-10">🍜 Menú Wok N Roll</h1>

      {/* RAMEN */}
      <Section title="🍥 Ramen">
        <MenuItem name="Jin Mild (Sin Picante)" />
        <MenuItem name="Udon (Picante Bajo)" />
        <MenuItem name="Neoguri" />
        <MenuItem name="Kimchi (Picante Medio)" />
        <MenuItem name="Shin Ramen" />
        <MenuItem name="Yeul (Picante Alto)" />
      </Section>

      {/* PLATOS SECOS */}
      <Section title="🍽️ Platos Secos">
        <MenuItem name="Buldak Carbonara" />
        <MenuItem name="Buldak Cheese" />
        <MenuItem name="Jjajangmyeon" />
      </Section>

      {/* TOPPINGS */}
      <Section title="🧂 Toppings">
        <MenuItem name="Porción extra de fideo" />
        <MenuItem name="Queso derretido + salchicha ahumada" />
      </Section>

      {/* LICORES */}
      <Section title="🍶 Licores (Soju)">
        <MenuItem name="Manzana" />
        <MenuItem name="Frutos Rojos" />
        <MenuItem name="Uva" />
        <MenuItem name="Arándano" />
        <MenuItem name="Citron" />
      </Section>

      {/* BEBIDAS COREANAS */}
      <Section title="🥤 Baolisu Vera">
        <MenuItem name="Aloe Vera" />
        <MenuItem name="Piña" />
        <MenuItem name="Mango" />
        <MenuItem name="Sandía" />
        <MenuItem name="Uva" />
      </Section>

      <Section title="🥛 Milkis (Refresco con leche)">
        <MenuItem name="Original" />
        <MenuItem name="Zero" />
        <MenuItem name="Fresa" />
        <MenuItem name="Melón" />
        <MenuItem name="Uva" />
        <MenuItem name="Banana" />
        <MenuItem name="Manzana" />
      </Section>

      <Section title="🍋 Glinter (Sparkling)">
        <MenuItem name="Limón" />
        <MenuItem name="Toronja" />
        <MenuItem name="Uva" />
        <MenuItem name="Fresa" />
        <MenuItem name="Cereza" />
      </Section>

      <Section title="🧃 Houssy Vera (Botella grande)">
        <MenuItem name="Aloe Vera" />
        <MenuItem name="Fresa" />
        <MenuItem name="Piña" />
      </Section>

      {/* SNACKS */}
      <Section title="🍫 Pepero">
        <MenuItem name="Original" />
        <MenuItem name="Oreo" />
        <MenuItem name="Fresa" />
        <MenuItem name="Almendra con chocolate" />
        <MenuItem name="Almendra con chocolate blanco" />
        <MenuItem name="Relleno de chocolate" />
      </Section>

      <Section title="🍰 Otros Snacks">
        <MenuItem name="ChocoPie (Original)" />
        <MenuItem name="ChocoPie (Doble Chocolate)" />
        <MenuItem name="Galleta de la fortuna" />
      </Section>
    </div>
  ;
}

// Componentes auxiliares
function Section({ title, children }) {
  return (
    <section className="mb-12 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-red-500 border-b border-red-200 pb-2 mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function MenuItem({ name }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
      <span className="text-gray-800 font-medium">{name}</span>
      {/* Aquí puedes poner el precio luego */}
      <span className="text-red-500 font-semibold">S/ --</span>
    </div>
  );
}