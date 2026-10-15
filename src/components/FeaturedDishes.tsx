import milanesaImg from "@/assets/milanesa.jpg";
import tortillaImg from "@/assets/tortilla.jpg";
import supremaImg from "@/assets/suprema.jpg";
import pancarneImg from "@/assets/pancarne.jpg";
import flanImg from "@/assets/flan.jpg";

const dishes = [
  { name: "Milanesa Napolitana Gigante", desc: "Con jamón, queso y salsa, acompañada de papas fritas", img: milanesaImg },
  { name: "Tortilla Rellena", desc: "De jamón y queso, doradita y crocante como debe ser", img: tortillaImg },
  { name: "Suprema Rellena con Fritas", desc: "Pollo relleno con jamón y queso, rebozado a mano", img: supremaImg },
  { name: "Pan de Carne con Puré", desc: "Receta de la abuela, con puré de papas casero", img: pancarneImg },
  { name: "Flan Mixto Casero", desc: "Con dulce de leche y crema, hecho en el día", img: flanImg },
];

const FeaturedDishes = () => (
  <section className="py-20 bg-muted/50">
    <div className="container px-4">
      <div className="text-center mb-12">
        <span className="font-script text-2xl text-primary">Lo que nos hace famosos</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          Nuestros Platos Destacados
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((d) => (
          <div
            key={d.name}
            className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src={d.img}
                alt={d.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="p-5">
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                Especialidad
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{d.name}</h3>
              <p className="text-muted-foreground text-sm">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedDishes;
