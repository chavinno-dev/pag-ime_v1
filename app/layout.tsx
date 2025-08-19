// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "../components/Footer";

// Viewport (aquí va themeColor)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "Señorita Fisio MX",
    template: "%s | Señorita Fisio MX",
  },
  description: "Fisioterapia y bienestar en CDMX. Atención personalizada.",
  keywords: [
    "fisioterapia",
    "rehabilitación",
    "masaje deportivo",
    "terapia postural",
    "CDMX",
  ],
  metadataBase: new URL("https://senoritafisio.mx"), // cámbialo a tu dominio real
  openGraph: {
    title: "Señorita Fisio MX",
    description:
      "Fisioterapia y bienestar en CDMX. Recupera movilidad y alivia dolor.",
    url: "https://senoritafisio.mx",
    siteName: "Señorita Fisio MX",
    images: [
      {
        url: "/og-cover.jpg", // en /public/og-cover.jpg (1200x630)
        width: 1200,
        height: 630,
        alt: "Señorita Fisio MX",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Señorita Fisio MX",
    description:
      "Fisioterapia y bienestar en CDMX. Recupera movilidad y alivia dolor.",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://senoritafisio.mx",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* SEO local con JSON-LD */}
        <Script
          id="ldjson-business"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Señorita Fisio MX",
              image: "https://senoritafisio.mx/og-cover.jpg",
              "@id": "",
              url: "https://senoritafisio.mx",
              telephone: "+52 55 1234 5678", // <-- cambia a tu número real
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Ejemplo 123", // <-- cambia a tu dirección
                addressLocality: "Ciudad de México",
                addressRegion: "CDMX",
                postalCode: "00000",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 19.4326, // <-- cambia a tus coordenadas reales
                longitude: -99.1332,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white text-gray-800 antialiased">
        <nav className="w-full bg-white border-b">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-bold text-purple-700 text-xl tracking-wide">
              Señorita Fisio MX
            </span>
            <div className="hidden md:flex gap-6">
              <a href="/" className="hover:text-pink-600">Inicio</a>
              <a href="/servicios" className="hover:text-pink-600">Servicios</a>
              <a href="/galeria" className="hover:text-pink-600">Galería &amp; Contacto</a>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-4 py-10">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
