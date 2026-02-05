import { Button } from "./ui/button";

interface HeroSectionProps {
  onScrollToRegistration: () => void;
}

export const HeroSection = ({ onScrollToRegistration }: HeroSectionProps) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 relative">
      <div className="w-full text-white space-y-6 text-center lg:text-left z-10">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Ganhe Prêmios Incríveis com o Programa Fidelidade CAE!
        </h1>
        <p className="text-lg lg:text-xl opacity-90 max-w-lg mx-auto lg:mx-0">
          Acumule pontos em suas compras e troque por recompensas exclusivas.
          Participe agora e comece a ganhar!
        </p>
        <Button
          onClick={onScrollToRegistration}
          size="lg"
          variant="secondary"
          className="font-semibold text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hidden lg:inline-flex"
        >
          Quero Participar
        </Button>
      </div>
      <div className="w-full animate-fade-in z-10 flex justify-center lg:justify-end">
        <img
          src="/assets/img-hero.png"
          alt="Eletricista profissional com equipamentos"
          className="w-full max-w-[400px] lg:max-w-none"
        />
      </div>

      {/* Grafismos de fundo */}
      <img
        src="/assets/grafismo-azul.png"
        alt=""
        className="absolute top-[-10%] left-[-10%] w-2/3 lg:w-1/2 opacity-50 pointer-events-none mix-blend-overlay"
      />
      <img
        src="/assets/grafismo-laranja-e-azul.png"
        alt=""
        className="absolute bottom-[-10%] right-[-10%] w-2/3 lg:w-1/2 opacity-50 pointer-events-none mix-blend-overlay"
      />
    </div>
  );
};