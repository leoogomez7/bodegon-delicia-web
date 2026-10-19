import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/70 py-12">
    <div className="container px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <span className="font-heading text-xl font-bold text-background block mb-1">
            Bodegón Delicia
          </span>
          <span className="font-script text-sm">Buenos Aires</span>
        </div>

        <div>
          <h4 className="font-heading font-bold text-background mb-2">Dirección</h4>
          <p className="text-sm">Buenos Aires, Argentina</p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-background mb-2">Horarios</h4>
          <p className="text-sm">Todos los días de 8:00 – 16:00</p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-background mb-2">Contacto</h4>
          <p className="text-sm">011 2222-1111</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm mt-2 hover:text-background transition-colors"
          >
            <Instagram size={14} /> Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-background/10 mt-8 pt-6 text-center text-xs">
        © {new Date().getFullYear()} Bodegón Delicia. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
