import milanesaImg from "@/assets/milanesa.jpg";
import tortillaImg from "@/assets/tortilla.jpg";
import flanImg from "@/assets/flan.jpg";
import interiorImg from "@/assets/interior.jpg";
import fachadaImg from "@/assets/fachada.jpg";
import cocinaImg from "@/assets/cocina.jpg";

const photos = [
  { src: milanesaImg, alt: "Milanesa napolitana" },
  { src: tortillaImg, alt: "Tortilla rellena" },
  { src: flanImg, alt: "Flan mixto" },
  { src: interiorImg, alt: "Interior del bodegón" },
  { src: fachadaImg, alt: "Fachada" },
  { src: cocinaImg, alt: "Cocina" },
];

const GallerySection = () => (
  <section id="galeria" className="py-20">
    <div className="container px-4">
      <div className="text-center mb-12">
        <span className="font-script text-2xl text-primary">Mirá nuestro bodegón</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Galería</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {photos.map((p) => (
          <div key={p.alt} className="overflow-hidden rounded-lg shadow-md group aspect-[4/3]">
            <img
              src={p.src}
              alt={p.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
