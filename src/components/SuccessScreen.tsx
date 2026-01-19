import { CheckCircle2, Zap, Gift, Award, ArrowLeft } from "lucide-react";

interface SuccessScreenProps {
  onBack: () => void;
}

const SuccessScreen = ({ onBack }: SuccessScreenProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 success-animation">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-success/20 border-4 border-success">
            <CheckCircle2 className="w-12 h-12 text-success" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">
          Cadastro Confirmado!
        </h1>

        {/* Message */}
        <p className="text-xl text-foreground mb-6">
          Obrigado por se inscrever no Programa Fidelidade CAE da Elétrica Bahiana!
        </p>

        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Em breve você começará a acumular pontos com suas participações, compras e treinamentos.
          Fique ligado nas próximas ações e benefícios exclusivos!
        </p>

        {/* Benefits reminder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-bold mb-1">Treinamentos</h3>
            <p className="text-sm text-muted-foreground">Acumule pontos participando</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <Gift className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="font-bold mb-1">Prêmios</h3>
            <p className="text-sm text-muted-foreground">Troque por brindes exclusivos</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-bold mb-1">Descontos</h3>
            <p className="text-sm text-muted-foreground">Vantagens em compras</p>
          </div>
        </div>

        {/* Back button */}
        <button onClick={onBack} className="btn-outline-hero inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Início
        </button>
      </div>
    </section>
  );
};

export default SuccessScreen;
