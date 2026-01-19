import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, User, Briefcase, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  // Dados Pessoais
  nomeCompleto: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").max(100),
  cpf: z.string().min(11, "CPF inválido").max(14).regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido"),
  telefone: z.string().min(10, "Telefone inválido").max(15),
  email: z.string().email("E-mail inválido").max(255),
  cidade: z.string().min(2, "Cidade é obrigatória").max(100),
  estado: z.string().min(2, "Estado é obrigatório").max(2),
  
  // Informações Profissionais
  profissao: z.string().min(1, "Profissão é obrigatória"),
  cadastroCAE: z.string().optional(),
  timeTorce: z.string().min(1, "Selecione seu time"),
  
  // Termos
  aceitoTermos: z.boolean().refine(val => val === true, "Você deve aceitar os termos"),
});

type FormData = z.infer<typeof formSchema>;

interface RegistrationFormProps {
  onSuccess: () => void;
}

const profissoes = [
  "Eletricista Autônomo",
  "Empreiteiro",
  "Estagiário de Elétrica",
  "Engenheiro Eletricista",
  "Técnico em Eletrotécnica",
  "Instalador",
  "Outro",
];

const times = [
  "Bahia",
  "Vitória",
  "Flamengo",
  "Corinthians",
  "Palmeiras",
  "São Paulo",
  "Santos",
  "Grêmio",
  "Internacional",
  "Outro",
  "Não torço",
];

const estados = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const onSubmit = async (data: FormData) => {
    console.log("Dados do formulário:", data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Bem-vindo ao Programa Fidelidade CAE!",
    });
    onSuccess();
  };

  const nextStep = async () => {
    const fieldsToValidate = currentStep === 1 
      ? ["nomeCompleto", "cpf", "telefone", "email", "cidade", "estado"] as const
      : ["profissao", "timeTorce"] as const;
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <section id="participar" className="py-20 px-4">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="section-title mb-4">Cadastre-se</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bem-vindo ao Programa Fidelidade do CAE! Esse programa foi criado especialmente para valorizar você, 
            eletricista, por sua participação em treinamentos, eventos e compras de materiais.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  currentStep >= step 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {currentStep > step ? <CheckCircle2 className="w-5 h-5" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 rounded transition-all duration-300 ${
                    currentStep > step ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Labels */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-8 text-sm">
            <div className={`flex items-center gap-2 ${currentStep === 1 ? 'text-primary' : 'text-muted-foreground'}`}>
              <User className="w-4 h-4" />
              <span>Dados Pessoais</span>
            </div>
            <div className={`flex items-center gap-2 ${currentStep === 2 ? 'text-primary' : 'text-muted-foreground'}`}>
              <Briefcase className="w-4 h-4" />
              <span>Profissional</span>
            </div>
            <div className={`flex items-center gap-2 ${currentStep === 3 ? 'text-primary' : 'text-muted-foreground'}`}>
              <FileText className="w-4 h-4" />
              <span>Termos</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="form-section fade-in">
          {/* Step 1: Dados Pessoais */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <User className="w-5 h-5" />
                Dados Pessoais
              </h3>
              
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                <input
                  {...register("nomeCompleto")}
                  className="input-field"
                  placeholder="Digite seu nome completo"
                />
                {errors.nomeCompleto && (
                  <p className="text-destructive text-sm mt-1">{errors.nomeCompleto.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">CPF *</label>
                <input
                  {...register("cpf")}
                  className="input-field"
                  placeholder="000.000.000-00"
                  onChange={(e) => {
                    e.target.value = formatCPF(e.target.value);
                  }}
                  maxLength={14}
                />
                {errors.cpf && (
                  <p className="text-destructive text-sm mt-1">{errors.cpf.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Telefone com WhatsApp *</label>
                <input
                  {...register("telefone")}
                  className="input-field"
                  placeholder="(00) 00000-0000"
                  onChange={(e) => {
                    e.target.value = formatPhone(e.target.value);
                  }}
                  maxLength={15}
                />
                {errors.telefone && (
                  <p className="text-destructive text-sm mt-1">{errors.telefone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-mail *</label>
                <input
                  {...register("email")}
                  type="email"
                  className="input-field"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Cidade *</label>
                  <input
                    {...register("cidade")}
                    className="input-field"
                    placeholder="Sua cidade"
                  />
                  {errors.cidade && (
                    <p className="text-destructive text-sm mt-1">{errors.cidade.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Estado *</label>
                  <select {...register("estado")} className="input-field">
                    <option value="">Selecione</option>
                    {estados.map((uf) => (
                      <option key={uf} value={uf}>{uf}</option>
                    ))}
                  </select>
                  {errors.estado && (
                    <p className="text-destructive text-sm mt-1">{errors.estado.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Informações Profissionais */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Informações Profissionais
              </h3>

              <div>
                <label className="block text-sm font-medium mb-2">Profissão *</label>
                <select {...register("profissao")} className="input-field">
                  <option value="">Selecione sua profissão</option>
                  {profissoes.map((prof) => (
                    <option key={prof} value={prof}>{prof}</option>
                  ))}
                </select>
                {errors.profissao && (
                  <p className="text-destructive text-sm mt-1">{errors.profissao.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Número de Cadastro no CAE</label>
                <input
                  {...register("cadastroCAE")}
                  className="input-field"
                  placeholder="Se já for cadastrado (opcional)"
                />
                <p className="text-muted-foreground text-xs mt-1">
                  Caso não possua, será criado automaticamente
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Time que Torce *</label>
                <select {...register("timeTorce")} className="input-field">
                  <option value="">Selecione seu time</option>
                  {times.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                {errors.timeTorce && (
                  <p className="text-destructive text-sm mt-1">{errors.timeTorce.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Termos */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Termos e Condições
              </h3>

              <div className="bg-muted/30 rounded-lg p-4 max-h-60 overflow-y-auto text-sm text-muted-foreground">
                <p className="mb-4">
                  Ao participar do Programa Fidelidade CAE, você concorda com as seguintes condições:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fornecer dados verdadeiros no cadastro</li>
                  <li>Manter seus dados atualizados</li>
                  <li>Respeitar as regras dos eventos e treinamentos</li>
                  <li>Os pontos terão validade de 6 meses a partir da data de aquisição</li>
                  <li>O CAE poderá alterar regras e benefícios mediante aviso prévio</li>
                </ul>
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  {...register("aceitoTermos")}
                  className="w-5 h-5 mt-0.5 rounded border-border bg-input accent-primary"
                />
                <span className="text-sm group-hover:text-primary transition-colors">
                  Li e aceito os <strong>Termos e Condições</strong> do Programa Fidelidade CAE
                </span>
              </label>
              {errors.aceitoTermos && (
                <p className="text-destructive text-sm">{errors.aceitoTermos.message}</p>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            {currentStep > 1 ? (
              <button type="button" onClick={prevStep} className="btn-outline-hero">
                Voltar
              </button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <button type="button" onClick={nextStep} className="btn-hero">
                Próximo
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-hero disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Finalizar Cadastro"}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
