import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Target, Users, UserPlus, Star, Gift, Clock, Shield, XCircle, FileText, CheckCircle } from "lucide-react";

const regulations = [
  {
    id: "objetivo",
    icon: Target,
    title: "1. Objetivo",
    content: "O Programa Fidelidade CAE tem como objetivo reconhecer e incentivar a participação ativa dos eletricistas nas ações do CAE, oferecendo benefícios exclusivos, experiências diferenciadas, premiações e vantagens comerciais ao longo do ano.",
  },
  {
    id: "participar",
    icon: Users,
    title: "2. Quem Pode Participar",
    content: `Podem participar do programa:
• Eletricistas autônomos ou profissionais da área elétrica
• Maiores de 18 anos
• Cadastrados no CAE por meio do formulário oficial de adesão
• Residentes nas regiões de atuação da Elétrica Bahiana (Salvador, Lauro de Freitas e Aracaju)`,
  },
  {
    id: "cadastro",
    icon: UserPlus,
    title: "3. Como Se Cadastrar",
    content: "O eletricista deverá preencher o Formulário de Adesão do Programa Fidelidade CAE, informando corretamente seus dados pessoais e profissionais. Após o envio, o participante passa a integrar a base oficial do programa.",
  },
  {
    id: "pontos",
    icon: Star,
    title: "4. Como Acumular Pontos",
    content: `Os participantes acumulam pontos através das seguintes ações:
• Participação em treinamentos do CAE
• Presença em eventos e visitas técnicas
• Compras realizadas na Elétrica Bahiana mediante indicação do CPF cadastrado
• Participação em campanhas promocionais específicas
• Indicação de novos eletricistas para o CAE

A pontuação de cada ação será divulgada previamente em cada campanha ou evento.`,
  },
  {
    id: "beneficios",
    icon: Gift,
    title: "5. Benefícios e Premiações",
    content: `Os pontos acumulados poderão ser trocados por:
• Brindes e ferramentas
• Equipamentos elétricos
• Descontos em compras
• Cursos e treinamentos exclusivos
• Visitas técnicas a fábricas
• Participação em eventos especiais do CAE

O catálogo de prêmios será divulgado periodicamente.`,
  },
  {
    id: "validade",
    icon: Clock,
    title: "6. Validade dos Pontos",
    content: `• Os pontos terão validade de 6 meses a partir da data de aquisição
• Pontos expirados não poderão ser recuperados
• O saldo e histórico poderão ser consultados mediante solicitação ao CAE`,
  },
  {
    id: "responsabilidades",
    icon: Shield,
    title: "7. Responsabilidades do Participante",
    content: `• Fornecer dados verdadeiros no cadastro
• Manter seus dados atualizados
• Respeitar as regras dos eventos e treinamentos
• Cumprir os critérios de participação divulgados em cada ação`,
  },
  {
    id: "cancelamento",
    icon: XCircle,
    title: "8. Cancelamento da Participação",
    content: `O CAE poderá suspender ou excluir o participante que:
• Fornecer informações falsas
• Tiver comportamento inadequado em eventos
• Tentar obter vantagens de forma indevida
• Descumprir este regulamento`,
  },
  {
    id: "disposicoes",
    icon: FileText,
    title: "9. Disposições Gerais",
    content: `• O Programa Fidelidade CAE é gratuito
• A participação implica na aceitação total deste regulamento
• O CAE poderá alterar regras e benefícios mediante aviso prévio
• Casos omissos serão avaliados pela coordenação do CAE`,
  },
  {
    id: "aceite",
    icon: CheckCircle,
    title: "10. Aceite",
    content: "Ao realizar o cadastro, o participante declara que leu e concorda com todos os termos deste regulamento.",
  },
];

const RegulationSection = () => {
  return (
    <section id="regulamento" className="py-20 px-4 bg-slate-50">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-subtitle">Regras do Programa</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-3">Regulamento</h2>
          <p className="text-slate-600">
            Programa Fidelidade CAE — Centro de Apoio ao Eletricista
          </p>
          <p className="text-sm text-slate-500 mt-1">
            Uma iniciativa da Elétrica Bahiana para valorizar, reconhecer e premiar os eletricistas
          </p>
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
          <Accordion type="single" collapsible className="divide-y divide-slate-100">
            {regulations.map((reg) => (
              <AccordionItem key={reg.id} value={reg.id} className="border-none">
                <AccordionTrigger className="hover:bg-slate-50 transition-colors px-6 py-5 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <reg.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-left text-slate-800">{reg.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 whitespace-pre-line px-6 pb-5 pl-20">
                  {reg.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Box */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-blue-600 rounded-2xl px-10 py-8 shadow-lg">
            <p className="text-2xl font-bold text-white mb-2">Programa Fidelidade CAE</p>
            <p className="text-blue-100 mb-4">
              Mais que treinamento. Reconhecimento, crescimento e valorização do eletricista.
            </p>
            <a 
              href="#participar" 
              className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >
              Cadastrar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulationSection;