import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden"
  >
    <img
      src={heroBg}
      alt="Interior del bodegón"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-foreground/60" />

    <div className="relative z-10 container px-4 py-20 flex flex-col items-center gap-6">
      <span className="inline-block border-2 border-primary-foreground/60 rounded-full px-5 py-1 font-script text-lg text-primary-foreground/90">
        Porciones abundantes
      </span>

      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-3xl">
        Comida casera como la de la abuela
      </h1>

      <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-xl">
        Platos abundantes en Buenos Aires desde siempre
      </p>

      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="#menu"
          className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Ver Menú
        </a>
        <a
          href="#contacto"
          className="px-8 py-3 rounded-full border-2 border-primary-foreground/60 text-primary-foreground font-bold text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
        >
          Cómo llegar
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
