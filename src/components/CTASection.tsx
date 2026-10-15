import { Phone, MapPin } from "lucide-react";

const CTASection = () => (
  <section className="py-20 bg-primary text-primary-foreground">
    <div className="container px-4 text-center">
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
        Vení a comer como en casa
      </h2>
      <p className="font-body text-primary-foreground/70 text-lg mb-8 max-w-lg mx-auto">
        Te esperamos todos los días en Buenos Aires
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="tel:01145815117"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary-foreground text-primary font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          <Phone size={16} /> Llamar
        </a>
        <a
          href="https://maps.google.com/?q=Rojas+2050+Villa+Crespo+Buenos+Aires"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary-foreground/60 text-primary-foreground font-bold text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
        >
          <MapPin size={16} /> Cómo llegar
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
