const categories = [
  {
    title: "Platos Principales",
    items: [
      { name: "Milanesa napolitana", price: "$14.00" },
      { name: "Suprema rellena", price: "$16.00" },
      { name: "Bife con papas fritas", price: "$18.00" },
      { name: "Hamburguesa completa", price: "$12.00" },
      { name: "Sandwich de milanesa", price: "$10.00" },
    ],
  },
  {
    title: "Platos del Día",
    badge: "Plato del día",
    items: [
      { name: "Pan de carne con puré", price: "$12.00" },
      { name: "Pastas caseras", price: "$10.00" },
      { name: "Colita de cuadril", price: "$15.00" },
      { name: "Malfattis", price: "$8.00" },
    ],
  },
  {
    title: "Postres",
    items: [
      { name: "Flan mixto", price: "$6.00" },
      { name: "Flan casero", price: "$5.00" },
      { name: "Dulce y queso", price: "$7.00" },
    ],
  },
];

const MenuSection = () => (
  <section id="menu" className="py-20 bg-chalkboard text-chalkboard-foreground text-grain">
    <div className="container px-4">
      <div className="text-center mb-12">
        <span className="font-script text-2xl text-primary-foreground/70">Nuestra carta</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">Menú</h2>
        <div className="mx-auto mt-4 w-24 h-px bg-chalkboard-foreground/30" />
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.title}>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-heading text-xl font-bold">{cat.title}</h3>
              {cat.badge && (
                <span className="bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                  {cat.badge}
                </span>
              )}
            </div>
            <ul className="space-y-4">
              {cat.items.map((item) => (
                <li key={item.name} className="flex justify-between items-baseline gap-2">
                  <span className="font-body">{item.name}</span>
                  <span className="flex-1 border-b border-dotted border-chalkboard-foreground/20 mx-2 mb-1" />
                  <span className="font-heading font-bold text-sm opacity-60">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-chalkboard-foreground/50 text-sm mt-10">
        Consultá precios en el local · Los platos del día varían según disponibilidad
      </p>
    </div>
  </section>
);

export default MenuSection;
