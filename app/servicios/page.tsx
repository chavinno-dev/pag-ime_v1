// app/servicios/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios | Señorita Fisio MX",
  description:
    "Rehabilitación, masaje deportivo y terapia postural. Atención personalizada y resultados reales.",
};

type Item = {
  id: string;
  title: string;
  desc: string;
  bullets: string[];
  priceFrom: string;
  duration: string;
};

const items: Item[] = [
  {
    id: "rehabilitacion",
    title: "Rehabilitación",
    desc:
      "Recupera movilidad, fuerza y funcionalidad tras lesiones, cirugías o dolor crónico. Evaluación inicial y plan de tratamiento a tu medida.",
    bullets: [
      "Evaluación postural y de movilidad",
      "Terapia manual y ejercicio terapéutico",
      "Plan de casa con seguimiento",
    ],
    priceFrom: "$450",
    duration: "50–60 min",
  },
  {
    id: "masaje-deportivo",
    title: "Masaje deportivo",
    desc:
      "Reduce tensión muscular, mejora rendimiento y acelera la recuperación. Ideal antes o después de entrenar o competir.",
    bullets: [
      "Descarga muscular específica",
      "Técnicas de liberación miofascial",
      "Enfoque en grupos musculares clave",
    ],
    priceFrom: "$400",
    duration: "45–55 min",
  },
  {
    id: "terapia-postural",
    title: "Terapia postural",
    desc:
      "Reeducación postural para aliviar dolor cervical, dorsal o lumbar por malas posturas en oficina o actividades diarias.",
    bullets: [
      "Correcciones y hábitos posturales",
      "Movilidad y fortalecimiento",
      "Ergonomía aplicada a tu rutina",
    ],
    priceFrom: "$420",
    duration: "50 min",
  },
];

export default function ServiciosPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 md:py-14">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-3xl md:text-4xl font-extrabold text-purple-900">
          Servicios
        </h1>
        <Link
          href="/"
          className="text-sm font-semibold text-pink-700 hover:text-pink-800"
        >
          ← Volver al inicio
        </Link>
      </div>

      <p className="mt-2 text-gray-600">
        Elige el servicio que mejor se adapte a tu objetivo. Todas las sesiones
        incluyen evaluación breve y recomendaciones personalizadas.
      </p>

      {/* Índice rápido */}
      <nav className="mt-6 flex flex-wrap gap-2">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-sm text-pink-700 hover:bg-pink-100"
          >
            {it.title}
          </a>
        ))}
      </nav>

      {/* Secciones */}
      <div className="mt-10 space-y-8">
        {items.map((it) => (
          <article
            key={it.id}
            id={it.id}
            className="scroll-mt-24 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <header className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-gray-900">{it.title}</h2>
              <div className="text-sm text-right">
                <div>
                  <span className="font-semibold text-purple-700">
                    Desde {it.priceFrom}
                  </span>
                </div>
                <div className="text-gray-500">Duración: {it.duration}</div>
              </div>
            </header>

            <p className="mt-3 text-gray-700">{it.desc}</p>

            <ul className="mt-4 grid list-disc gap-1 pl-5 text-gray-700 md:grid-cols-2">
              {it.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`/galeria#contacto`}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 px-5 py-3 font-semibold text-white shadow hover:shadow-md transition"
              >
                Agendar {it.title.toLowerCase()}
              </a>
              <a
                href="#top"
                className="text-sm font-semibold text-gray-600 hover:text-gray-800"
              >
                ↑ Subir
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
