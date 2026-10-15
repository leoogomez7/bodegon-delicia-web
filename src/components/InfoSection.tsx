import { MapPin, Clock, Phone, UtensilsCrossed } from "lucide-react";

const InfoSection = () => (
  <section id="contacto" className="py-20 bg-muted/50">
    <div className="container px-4">
      <div className="text-center mb-12">
        <span className="font-script text-2xl text-primary">Vení a visitarnos</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          Información
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
          <MapPin className="mx-auto mb-3 text-primary" size={28} />
          <h3 className="font-heading font-bold text-foreground mb-2">Dirección</h3>
          <p className="text-muted-foreground text-sm">Buenos Aires</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
          <Clock className="mx-auto mb-3 text-primary" size={28} />
          <h3 className="font-heading font-bold text-foreground mb-2">Horario</h3>
          <p className="text-muted-foreground text-sm">Todos los días de 8:00 – 16:00</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
          <Phone className="mx-auto mb-3 text-primary" size={28} />
          <h3 className="font-heading font-bold text-foreground mb-2">Teléfono</h3>
          <p className="text-muted-foreground text-sm">011 2222-1111</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
          <UtensilsCrossed className="mx-auto mb-3 text-primary" size={28} />
          <h3 className="font-heading font-bold text-foreground mb-2">Servicios</h3>
          <p className="text-muted-foreground text-sm">Comer en el lugar</p>
          <p className="text-muted-foreground text-sm">Para llevar · Delivery</p>
        </div>
      </div>
    </div>
  </section>
);

export default InfoSection;
