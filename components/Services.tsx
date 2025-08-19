// components/Services.tsx
import type { JSX } from "react";

type Service = {
  slug: string;
  title: string;
  desc: string;
  priceFrom: string;
  duration: string;
  icon: JSX.Element;
};

const services: Service[] = [
  {
    slug: "rehabilitacion",
    title: "Rehabilitación",
    desc: "Recupera movilidad y fuerza tras lesiones o cirugías.",
    priceFrom: "$450",
    duration: "50–60 min",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12 2a5 5 0 0 0-5 5v3H5a3 3 0 0 0-3 3v7h4v-6h2v6h4v-7a3 3 0 0 0-3-3H9V7a3 3 0 0 1 6 0v3h1a3 3 0 0 1 3 3v7h3v-7a6 6 0 0 0-6-6h-1V7a5 5 0 0 0-5-5Z"/>
      </svg>
    ),
  },
  {
    slug: "masaje-deportivo",
    title: "Masaje deportivo",
    desc: "Reduce tensión muscular, mejora rendimiento y recuperación.",
    priceFrom: "$400",
    duration: "45–55 min",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7V3Zm0 4a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Z"/>
      </svg>
    ),
  },
  {
    slug: "terapia-postural",
    title: "Terapia postural",
    desc: "Corrección postural y alivio de dolor por malas posturas.",
    priceFrom: "$420",
    duration: "50 min",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-2 7h4a4 4 0 0 1 4 4v7h-3v-5h-2v5H6v-7a4 4 0 0 1 4-4Z"/>
      </svg>
    ),
  },
];

function Card({ s }: { s: Service }) {
  return (
    <a
      href={`/servicios#${s.slug}`}
      className="group relative rounded-2xl border border-gray-100 bg-white/90 p-5 shadow hover:shadow-md transition"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-pink-50 text-pink-600 p-3">{s.icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="font-medium text-purple-700">Desde {s.priceFrom}</span>
        <span className="text-gray-500">Duración: {s.duration}</span>
      </div>

      <span className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </a>
  );
}

export default function Services() {
  return (
    <section className="relative py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-purple-900 text-center">
          Servicios
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Tratamientos personalizados según tu objetivo y condición.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.slug} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
