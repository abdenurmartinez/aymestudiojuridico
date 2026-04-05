import { useState } from "react";
import { Menu, X, Scale, Briefcase, Users, Heart, Hammer, FileText, Handshake, Phone, Instagram, Facebook, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import nahimPhoto from "@/assets/nahim.png";
import alejandraPhoto from "@/assets/alejandra.png";

const WHATSAPP = "https://wa.me/5493874208027";
const INSTAGRAM = "https://www.instagram.com/estudioabdenur.martinez?igsh=MTUzaWUzZWl2MHRmZA==";
const FACEBOOK = "https://www.facebook.com/share/1CGnHCmo7q/";
const ADDRESS = "General Paz 261, Salta Capital";

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

const team = [
  {
    name: "Dr. Abdenur Nahim",
    role: "Socio Fundador",
    photo: nahimPhoto,
    bio: "Diplomado en Derecho Procesal Penal (provincial y federal) y en Derecho Procesal Civil y Comercial. Mediador. Con una sólida formación académica y amplia experiencia en litigación, lidera la estrategia legal del estudio con enfoque en resultados concretos y defensa comprometida.",
  },
  {
    name: "Dra. Alejandra Martínez Acosta",
    role: "Socia",
    photo: alejandraPhoto,
    bio: "Diplomada en Derecho Procesal Civil y Comercial, con amplia experiencia en litigación. Su dedicación y enfoque meticuloso en cada caso garantizan una representación legal de excelencia, priorizando siempre los intereses de sus clientes.",
  },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="hidden md:block bg-secondary/60 border-b border-border text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-6 text-foreground/60">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" /> {ADDRESS}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={14} className="text-primary" /> +54 9 3874 20-8027
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors"><Instagram size={16} /></a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors"><Facebook size={16} /></a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors"><MessageCircle size={16} /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
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
        <div className="max-w-5xl mx-auto">
          <p className="text-primary uppercase tracking-[0.2em] text-sm text-center mb-3">Profesionales</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {team.map(member => (
              <div key={member.name} className="bg-card rounded-xl border border-border overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <div className="p-8 -mt-12 relative">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    {member.role}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">{member.name}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
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
      <footer className="bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main footer */}
          <div className="py-12 grid md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Abdenur & Martínez" className="h-10 w-10 object-contain" loading="lazy" />
                <span className="text-primary font-bold text-lg tracking-wide">ABDENUR & MARTÍNEZ</span>
              </div>
              <p className="text-foreground/50 text-sm leading-relaxed">
                Estudio jurídico enfocado en la litigación estratégica y resolución integral de conflictos legales.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Navegación</h4>
              <ul className="space-y-2">
                {navLinks.map(l => (
                  <li key={l.href}>
                    <a href={l.href} className="text-foreground/50 hover:text-primary transition-colors text-sm">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Contacto</h4>
              <ul className="space-y-3 text-sm text-foreground/50">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-primary shrink-0" />
                  <span>+54 9 3874 20-8027</span>
                </li>
                <li className="flex items-center gap-4 pt-2">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors"><MessageCircle size={20} /></a>
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors"><Instagram size={20} /></a>
                  <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors"><Facebook size={20} /></a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-foreground/40 text-xs">© {new Date().getFullYear()} Abdenur & Martínez Abogados. Todos los derechos reservados.</span>
            <span className="text-foreground/30 text-xs">Salta, Argentina</span>
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
