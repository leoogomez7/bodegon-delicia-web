import interiorImg from "@/assets/interior.jpg";

const NosotrosSection = () => (
  <section id="nosotros" className="py-20">
    <div className="container px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-script text-2xl text-primary">Nuestra historia</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            Un bodegón de barrio, de los de verdad
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              En el corazón de Buenos Aires, nuestro bodegón lleva décadas sirviendo comida casera.
              Recetas de familia, ingredientes frescos y porciones que no dejan a nadie con hambre.
            </p>
            <p>
              La cocina está a cargo de la familia desde siempre. Acá no hay platos
              sofisticados: hay milanesas gigantes, pan de carne con puré, tortillas rellenas
              y el mejor flan mixto del barrio.
            </p>
            <p>
              Vení como estés, sentate y comé tranquilo. Esto es un bodegón porteño de verdad:
              ambiente cálido, trato familiar y sabor de siempre.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={interiorImg}
            alt="Interior del bodegón"
            className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
            loading="lazy"
            width={800}
            height={600}
          />
          <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-5 py-2 rounded font-script text-lg shadow-lg">
            Desde siempre
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NosotrosSection;
