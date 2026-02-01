import HeroSvg from "@/public/assets/HeroSvg";

export const Hero = () => {
  return (
    <section className="min-h-screen max-h-320 flex gap-16 px-8">
      <div className="grid gap-12 place-content-center">
        <h1 className="text-7xl font-bold text-primary">
          Construimos lo que tu marca necesita para crecer.
        </h1>
        <p className="text-gray-900 font-normal">
          En Axom Veritas recuperamos la esencia del marketing: estrategia
          basada en hechos, ejecución sin fricciones y transparencia absoluta en
          cada dólar invertido.
        </p>
        <div className="flex gap-5 items-center justify-center">
          <button className="border border-primary px-8 py-4 text-primary hover:bg-primary hover:text-bg-primary font-bold transition-all duration-300">
            Agenda una Cita
          </button>
          <button className="border border-primary px-8 py-4 text-primary hover:bg-primary hover:text-bg-primary font-bold transition-all duration-300">
            Sobre Nosotros
          </button>
        </div>
      </div>
      <HeroSvg />
    </section>
  );
};
