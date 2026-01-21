import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, User, Briefcase, FileText, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  nomeCompleto: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").max(100),
  cpf: z.string().min(11, "CPF inválido").max(14).regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido"),
  telefone: z.string().min(10, "Telefone inválido").max(15),
  email: z.string().email("E-mail inválido").max(255),
  cidade: z.string().min(2, "Cidade é obrigatória").max(100),
  estado: z.string().min(2, "Estado é obrigatório").max(2),
  
  // Informações Profissionais
  profissao: z.string().min(1, "Profissão é obrigatória"),
  cadastroCAE: z.string().optional(),
  timeTorce: z.string().min(2, "Digite o nome do seu time"), 
  
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
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const formValues = watch();

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

  const steps = [
    { num: 1, label: "Dados Pessoais", icon: User },
    { num: 2, label: "Profissional", icon: Briefcase },
    { num: 3, label: "Confirmação", icon: FileText },
  ];

  return (
    <section id="participar" className="py-20 px-4 bg-gradient-to-b from-slate-100 to-white">
      <div className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <span className="section-subtitle">Faça Parte</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-4">Cadastre-se Agora</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo e comece a acumular pontos imediatamente!
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 md:gap-4">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    currentStep >= step.num 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    {currentStep > step.num ? <Check className="w-6 h-6" /> : step.num}
                  </div>
                  <span className={`text-xs mt-2 font-medium hidden md:block ${
                    currentStep >= step.num ? 'text-primary' : 'text-slate-400'
                  }`}>
                    {step.label}
                  </span>
                </div>
                {i < 2 && (
                  <div className={`w-12 md:w-20 h-1 mx-2 md:mx-4 rounded transition-all duration-300 ${
                    currentStep > step.num ? 'bg-primary' : 'bg-slate-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit(onSubmit)} className="form-section fade-in">
          {/* Step 1: Dados Pessoais */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Dados Pessoais</h3>
              </div>
              
              <div>
                <label className="form-label">Nome Completo *</label>
                <input
                  {...register("nomeCompleto")}
                  className="input-field"
                  placeholder="Digite seu nome completo"
                />
                {errors.nomeCompleto && (
                  <p className="text-red-500 text-sm mt-1">{errors.nomeCompleto.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">CPF *</label>
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
                    <p className="text-red-500 text-sm mt-1">{errors.cpf.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">WhatsApp *</label>
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
                    <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="form-label">E-mail *</label>
                <input
                  {...register("email")}
                  type="email"
                  className="input-field"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Cidade *</label>
                  <input
                    {...register("cidade")}
                    className="input-field"
                    placeholder="Sua cidade"
                  />
                  {errors.cidade && (
                    <p className="text-red-500 text-sm mt-1">{errors.cidade.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">Estado *</label>
                  <select {...register("estado")} className="input-field">
                    <option value="">Selecione o UF</option>
                    {estados.map((uf) => (
                      <option key={uf} value={uf}>{uf}</option>
                    ))}
                  </select>
                  {errors.estado && (
                    <p className="text-red-500 text-sm mt-1">{errors.estado.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Informações Profissionais */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Informações Profissionais</h3>
              </div>

              <div>
                <label className="form-label">Profissão *</label>
                <select {...register("profissao")} className="input-field">
                  <option value="">Selecione sua profissão</option>
                  {profissoes.map((prof) => (
                    <option key={prof} value={prof}>{prof}</option>
                  ))}
                </select>
                {errors.profissao && (
                  <p className="text-red-500 text-sm mt-1">{errors.profissao.message}</p>
                )}
              </div>

              <div>
                <label className="form-label">Número de Cadastro no CAE</label>
                <input
                  {...register("cadastroCAE")}
                  className="input-field"
                  placeholder="Se já for cadastrado (opcional)"
                />
                <p className="text-slate-500 text-xs mt-1">
                  Caso não possua, será criado automaticamente
                </p>
              </div>

              <div>
                <label className="form-label">Time do Coração ⚽ *</label>
                <input 
                  {...register("timeTorce")} 
                  className="input-field"
                  placeholder="Qual seu time?"
                />
                {errors.timeTorce && (
                  <p className="text-red-500 text-sm mt-1">{errors.timeTorce.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Termos e Confirmação */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Confirme seus Dados</h3>
              </div>

              {/* Summary */}
              <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500">Nome:</span>
                    <p className="font-semibold text-slate-800">{formValues.nomeCompleto || '-'}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">CPF:</span>
                    <p className="font-semibold text-slate-800">{formValues.cpf || '-'}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">WhatsApp:</span>
                    <p className="font-semibold text-slate-800">{formValues.telefone || '-'}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">E-mail:</span>
                    <p className="font-semibold text-slate-800">{formValues.email || '-'}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Cidade/Estado:</span>
                    <p className="font-semibold text-slate-800">{formValues.cidade} - {formValues.estado || '-'}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Profissão:</span>
                    <p className="font-semibold text-slate-800">{formValues.profissao || '-'}</p>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <h4 className="font-semibold text-primary mb-3">Termos e Condições</h4>
                <div className="text-sm text-blue-800/80 max-h-32 overflow-y-auto pr-2">
                  <p className="mb-3">
                    Ao participar do Programa Fidelidade CAE, você concorda com as seguintes condições:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Fornecer dados verdadeiros no cadastro</li>
                    <li>Manter seus dados atualizados</li>
                    <li>Respeitar as regras dos eventos e treinamentos</li>
                    <li>Os pontos terão validade de 6 meses a partir da data de aquisição</li>
                    <li>O CAE poderá alterar regras e benefícios mediante aviso prévio</li>
                  </ul>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer group p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <input
                  type="checkbox"
                  {...register("aceitoTermos")}
                  className="w-5 h-5 mt-0.5 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
                  Li e aceito os <strong className="text-primary">Termos e Condições</strong> do Programa Fidelidade CAE
                </span>
              </label>
              {errors.aceitoTermos && (
                <p className="text-red-500 text-sm">{errors.aceitoTermos.message}</p>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10 pt-6 border-t border-slate-200">
            {currentStep > 1 ? (
              <button type="button" onClick={prevStep} className="btn-secondary">
                Voltar
              </button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <button type="button" onClick={nextStep} className="btn-primary">
                Próximo
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-success disabled:opacity-50 disabled:cursor-not-allowed"
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