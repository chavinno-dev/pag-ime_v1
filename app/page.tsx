// app/page.tsx
import Hero from "../components/hero";
import Services from "../components/Services";
import GaleriaContact from "../components/GaleriaContact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <GaleriaContact />
    </>
  );
}
