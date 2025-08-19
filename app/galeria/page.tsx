// app/galeria/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import ContactSection from "../../components/ContactSection"; // ajusta si usas alias

export const metadata: Metadata = {
  title: "Galería & Contacto | Señorita Fisio MX",
  description:
    "Mira nuestro espacio y agenda tu cita por WhatsApp o formulario.",
};

const gallery = [
  { src: "/next.svg", alt: "Sesión 1" },
  { src: "/vercel.svg", alt: "Sesión 2" },
  { src: "/globe.svg", alt: "Sesión 3" },
  { src: "/file.svg", alt: "Sesión 4" },
  { src: "/window.svg", alt: "Sesión 5" },
  { src: "/favicon.ico", alt: "Sesión 6" },
];

export default function GaleriaPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 md:py-14">
      {/* Encabezado */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-purple-900">
        Galería & Contacto
      </h1>
      <p className="mt-2 text-gray-600">
        Un vistazo a nuestro espacio y resultados. Agenda tu cita al final.
      </p>

      {/* Galería */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {gallery.map((it, i) => (
          <figure
            key={i}
            className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm"
          >
            <div className="relative aspect-[4/3]">
              <Image src={it.src} alt={it.alt} fill className="object-contain p-6" />
            </div>
            <figcaption className="px-3 py-2 text-sm text-gray-600">
              {it.alt}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Contacto */}
      <ContactSection />
    </section>
  );
}
