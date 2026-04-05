import { useState } from "react";
import { Menu, X, Scale, Briefcase, Users, Heart, Hammer, FileText, Handshake, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const WHATSAPP = "https://wa.me/5493874208027";
const INSTAGRAM = "https://www.instagram.com/estudioabdenur.martinez?igsh=MTUzaWUzZWl2MHRmZA==";
const FACEBOOK = "https://www.facebook.com/share/1CGnHCmo7q/";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "El Estudio", href: "#estudio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  { icon: Scale, title: "Derecho Penal", desc: "Defensa penal integral, querella, seguimiento de denuncias, asistencia en todas las etapas del proceso y estrategias de litigación en casos complejos." },
  { icon: Briefcase, title: "Derecho Civil y Comercial", desc: "Redacción de contratos, usucapión, sucesiones, ejecuciones y asesoramiento preventivo y litigioso." },
  { icon: Heart, title: "Derecho de Familia", desc: "Alimentos (fijación, aumento y cese), régimen de comunicación, divorcios y división de bienes." },
  { icon: Hammer, title: "Derecho Laboral", desc: "Representación ante la Secretaría de Trabajo, audiencias conciliatorias, demandas laborales y asesoramiento integral." },
  { icon: FileText, title: "Derecho Administrativo", desc: "Asesoramiento y representación en procedimientos administrativos, seguimiento de expedientes y presentación de recursos." },
  { icon: Handshake, title: "Mediación", desc: "Acompañamiento estratégico en instancias de mediación, priorizando soluciones rápidas y eficaces." },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logo} alt="Abdenur & Martínez" className="h-10 w-10 object-contain" />
            <span className="text-primary font-bold text-lg tracking-wide hidden sm:inline">ABDENUR & MARTÍNEZ</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-foreground/70 hover:text-primary transition-colors">{l.label}</a>
            ))}
            <Button asChild size="sm">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Consultanos</a>
            </Button>
          </div>
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-3">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-foreground/70 hover:text-primary transition-colors py-2">{l.label}</a>
            ))}
            <Button asChild size="sm" className="w-fit">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Consultanos</a>
            </Button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img src={logo} alt="Abdenur & Martínez Abogados" className="h-28 w-28 mx-auto mb-8 object-contain" />
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">Estudio Jurídico</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Defensa estratégica. <span className="text-primary">Litigación eficaz.</span> Soluciones concretas.
          </h1>
          <p className="text-foreground/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Asesoramiento jurídico integral en derecho penal, civil, familiar, laboral y administrativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} /> Consultá tu caso
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base border-primary/40 text-primary hover:bg-primary/10">
              <a href="#servicios">Nuestros Servicios</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="estudio" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary uppercase tracking-[0.2em] text-sm text-center mb-3">Sobre Nosotros</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">El Estudio</h2>
          <p className="text-foreground/70 text-center max-w-3xl mx-auto text-lg mb-16">
            Abdenur & Martínez es una firma jurídica enfocada en la litigación estratégica y resolución integral de conflictos. Trabajamos con compromiso, rigor técnico y un enfoque personalizado en cada caso.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold text-primary mb-4">Misión</h3>
              <p className="text-foreground/70 leading-relaxed">
                Brindar asesoramiento jurídico integral de excelencia, orientado a la defensa efectiva de los derechos de nuestros clientes, mediante estrategias sólidas, compromiso profesional y acompañamiento constante en cada etapa del proceso.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold text-primary mb-4">Visión</h3>
              <p className="text-foreground/70 leading-relaxed">
                Consolidarnos como un estudio jurídico de referencia en la región, reconocido por su profesionalismo, innovación, eficacia en la resolución de conflictos y compromiso con la calidad del servicio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-24 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary uppercase tracking-[0.2em] text-sm text-center mb-3">Áreas de Práctica</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Servicios</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(s => (
              <div key={s.title} className="bg-card rounded-lg p-8 border border-border hover:border-primary/40 transition-colors group">
                <s.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={36} />
                <h3 className="text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary uppercase tracking-[0.2em] text-sm text-center mb-3">Profesionales</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Dr. Abdenur Nahim</h3>
              <p className="text-primary text-sm mb-3">Socio Fundador</p>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Diplomado en Derecho Procesal Penal (provincial y federal) y en Derecho Procesal Civil y Comercial. Mediador.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Dra. Alejandra Martínez Acosta</h3>
              <p className="text-primary text-sm mb-3">Socia</p>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Diplomada en Derecho Procesal Civil y Comercial, con amplia experiencia en litigación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">Comunicate</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Contacto</h2>
          <p className="text-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
            Actuar a tiempo puede marcar la diferencia. Consultanos y evaluamos tu caso con atención personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-base">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2" size={20} /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base border-primary/40 text-primary hover:bg-primary/10">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2" size={20} /> Instagram
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base border-primary/40 text-primary hover:bg-primary/10">
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2" size={20} /> Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Abdenur & Martínez" className="h-8 w-8 object-contain" loading="lazy" />
            <span className="text-foreground/50 text-sm">© {new Date().getFullYear()} Abdenur & Martínez Abogados</span>
          </div>
          <div className="flex gap-4">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors"><MessageCircle size={20} /></a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default Index;
