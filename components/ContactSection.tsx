// components/ContactSection.tsx
"use client";

export default function ContactSection() {
  const WHATSAPP_NUMBER = "525500000000";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const servicio = String(fd.get("servicio") || "");
    const fecha = String(fd.get("fecha") || "");
    const mensaje = String(fd.get("mensaje") || "");

    const text =
      `Hola, soy ${name}.\n` +
      `Me interesa el servicio: ${servicio || "—"}.\n` +
      (fecha ? `Fecha preferente: ${fecha}.\n` : "") +
      (mensaje ? `Mensaje: ${mensaje}\n` : "") +
      `¿Tienen disponibilidad?`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="mt-14">
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-purple-900">Agenda tu cita</h2>
        <p className="mt-1 text-gray-600">
          Déjanos tus datos y te contactamos. O escribe directo por WhatsApp.
        </p>

        <div className="mt-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hola, me gustaría agendar una cita de fisioterapia."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 px-5 py-3 font-semibold text-white shadow hover:shadow-md transition"
          >
            Escribir por WhatsApp
          </a>
        </div>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:border-pink-300"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Servicio</label>
            <select
              name="servicio"
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:border-pink-300"
              defaultValue=""
            >
              <option value="" disabled>
                Selecciona un servicio
              </option>
              <option>Rehabilitación</option>
              <option>Masaje deportivo</option>
              <option>Terapia postural</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Fecha preferente</label>
            <input
              name="fecha"
              type="date"
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:border-pink-300"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              name="mensaje"
              rows={4}
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:border-pink-300"
              placeholder="Cuéntanos brevemente tu caso o disponibilidad…"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-purple-700 hover:bg-purple-800 px-5 py-3 font-semibold text-white shadow transition"
            >
              Enviar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
