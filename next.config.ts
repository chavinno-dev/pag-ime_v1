import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // 🔑 Genera carpeta estática en `out/`
  images: { unoptimized: true },
  assetPrefix: "./",       // 🔑 Rutas relativas
  trailingSlash: true,     // 🔑 Necesario para Netlify
};

export default nextConfig;