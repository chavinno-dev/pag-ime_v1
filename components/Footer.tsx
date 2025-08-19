// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const WHATSAPP_NUMBER = "5255XXXXXXXX"; // cámbialo a tu número real sin '+'
  const ADDRESS = "Calle Falsa 123, Col. Centro, CDMX";
  const GOOGLE_MAPS_URL =
    "https://maps.google.com/?q=Calle+Falsa+123,+CDMX"; // reemplaza por la tuya

  return (
    <footer className="mt-16 border-t border-gray-200 bg-white/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="text-xl font-extrabold text-purple-800">Señorita Fisio MX</div>
          <p className="mt-2 text-sm text-gray-600">
            Fisioterapia con enfoque humano. Recupera movilidad, alivia dolor y mejora tu bienestar.
          </p>
        </div>

        {/* Horarios */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Horarios</h3>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>Lun–Vie: 9:00–19:00</li>
            <li>Sáb: 10:00–14:00</li>
            <li>Domingo: cerrado</li>
          </ul>
        </div>

        {/* Dirección */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Dirección</h3>
          <p className="mt-2 text-sm text-gray-600">{ADDRESS}</p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex text-sm font-medium text-pink-700 hover:text-pink-800"
          >
            Ver en Google Maps →
          </a>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Contacto</h3>
          <div className="mt-2 flex flex-col gap-2">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md transition"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hola, me gustaría agendar una cita de fisioterapia."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="text-sm text-gray-700 hover:text-gray-900"
              href="mailto:contacto@senoritafisio.mx"
            >
              contacto@senoritafisio.mx
            </a>
            <div className="flex gap-3 pt-1">
              <a className="text-gray-500 hover:text-gray-700" href="#" aria-label="Instagram">
                {/* Instagram icon */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
                </svg>
              </a>
              <a className="text-gray-500 hover:text-gray-700" href="#" aria-label="Facebook">
                {/* Facebook icon */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M13 3h4a1 1 0 1 1 0 2h-3v3h3a1 1 0 1 1 0 2h-3v9a1 1 0 1 1-2 0v-9H8a1 1 0 1 1 0-2h3V5a2 2 0 0 1 2-2Z"/>
                </svg>
              </a>
              <a className="text-gray-500 hover:text-gray-700" href="#" aria-label="TikTok">
                {/* TikTok icon */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M15 3a6 6 0 0 0 6 6V11a8 8 0 0 1-5-1.7V15a6 6 0 1 1-6-6c.34 0 .67.03 1 .1V11a4 4 0 1 0 4 4V3h0Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Señorita Fisio MX. Todos los derechos reservados.</div>
          <nav className="flex gap-4">
            <Link href="/servicios" className="hover:text-gray-700">Servicios</Link>
            <Link href="/galeria" className="hover:text-gray-700">Galería & Contacto</Link>
            <a href="#" className="hover:text-gray-700">Aviso de privacidad</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
