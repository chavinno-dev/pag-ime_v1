// components/Hero.tsx
export default function Hero() {
    return (
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pink-50 via-fuchsia-50 to-white" />
        <div className="max-w-5xl mx-auto px-4 py-14 md:py-20">
          <div className="mx-auto mb-8 h-6 w-2/3 md:w-1/2 rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 blur-[.5px]" />
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-purple-800 text-center">
            Tu espacio de fisioterapia y bienestar
          </h1>
          <p className="mt-5 text-center text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Atención personalizada para aliviar dolor, recuperar movilidad y mejorar tu calidad de vida.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 md:gap-4">
            <a
              href="/galeria#contacto"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white font-semibold shadow transition hover:shadow-md bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600"
            >
              Agenda tu cita
            </a>
            <a
              href="/servicios"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 border border-pink-100 transition"
            >
              Ver servicios
            </a>
          </div>
          <div className="mt-10 md:mt-12 bg-white/90 backdrop-blur rounded-2xl shadow-md px-6 py-5 md:px-8 md:py-6 border border-gray-100">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">Sobre mí</h2>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Hola, soy Imelda, fisioterapeuta certificada con enfoque humano y resultados reales.
              Diseño planes de tratamiento a tu medida.
            </p>
          </div>
        </div>
      </section>
    );
  }
  