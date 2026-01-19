import { Zap, Gift, Award } from "lucide-react";

interface HeroSectionProps {
  onParticipate: () => void;
  onRegulation: () => void;
}

const HeroSection = ({ onParticipate, onRegulation }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background curve */}
      <div className="hero-curve" />
      
      {/* Decorative circles */}
      <div className="absolute left-10 bottom-20 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-float" />
      <div className="absolute right-20 top-40 w-24 h-24 rounded-full bg-accent/20 blur-xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10 px-4 md:px-8">
        <div className="max-w-3xl">
          {/* Logo/Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-primary font-bold uppercase tracking-wider">Elétrica Bahiana</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-tight">
            <span className="text-primary">Programa</span>
            <br />
            <span className="text-foreground">Fidelidade</span>
            <br />
            <span className="text-accent">CAE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
            Cadastre-se agora, acumule pontos e troque por prêmios exclusivos!
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <Gift className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Brindes Exclusivos</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Treinamentos</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Descontos</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button onClick={onParticipate} className="btn-hero">
              Participar
            </button>
            <button onClick={onRegulation} className="btn-outline-hero">
              Regulamento
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements on right side */}
      <div className="hidden lg:block absolute right-20 bottom-20 z-10">
        <div className="flex gap-4">
          <div className="circle-image w-28 h-28 bg-muted flex items-center justify-center">
            <Zap className="w-12 h-12 text-primary" />
          </div>
          <div className="circle-image w-28 h-28 bg-muted flex items-center justify-center mt-10">
            <Gift className="w-12 h-12 text-primary" />
          </div>
          <div className="circle-image w-28 h-28 bg-muted flex items-center justify-center">
            <Award className="w-12 h-12 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
