import { Star } from "lucide-react";

const reviews = [
  { text: "Porciones enormes y comida casera de verdad. Volvería mil veces.", author: "María G." },
  { text: "El mejor pan de carne que probé en mi vida. El puré, espectacular.", author: "Carlos R." },
  { text: "La milanesa es para compartir entre dos. Increíble relación precio-calidad.", author: "Laura P." },
  { text: "Excelente bodegón tradicional. Ambiente familiar y atención de primera.", author: "Jorge M." },
];

const ReviewsSection = () => (
  <section id="opiniones" className="py-20">
    <div className="container px-4">
      <div className="text-center mb-12">
        <span className="font-script text-2xl text-primary">Lo que dicen nuestros clientes</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Opiniones</h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} size={20} className="fill-primary text-primary" />
            ))}
            <Star size={20} className="fill-primary/30 text-primary/30" />
          </div>
          <span className="font-heading font-bold text-foreground">4.2</span>
          <span className="text-muted-foreground text-sm">· 700+ opiniones</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {reviews.map((r) => (
          <div
            key={r.author}
            className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-sm italic leading-relaxed mb-4">"{r.text}"</p>
            <p className="font-heading font-bold text-sm text-muted-foreground">— {r.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
