import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { AlertTriangle, BookOpen } from "lucide-react";

const Informativo = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* HEADER */}
      <header className="nav-header text-white fixed top-0 left-0 right-0 z-50 bg-[#0A1F5C]/90 backdrop-blur-md border-b border-white/10">
        <div className="container max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between py-3">
            <Link to="/" className="flex items-center gap-3">
              <img src="/caelogo.png" alt="CAE Logo" className="h-8 w-auto brightness-0 invert" />
              <div className="w-px h-8 bg-white/30 mx-1" />
              <img src="/logo.png" alt="Elétrica Bahiana Logo" className="h-12 md:h-16 w-auto brightness-0 invert" />
            </Link>
            
            <Link 
              to="/" 
              className="text-white hover:text-blue-200 transition-colors font-medium text-sm flex items-center gap-2"
            >
              ← Voltar ao Início
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION DO ARTIGO */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-200">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full border border-red-100 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-600" /> 
            <span className="text-red-700 font-semibold tracking-wide text-xs uppercase">Alerta de Segurança</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#0A1F5C] uppercase leading-tight">
            Escolher a fiação errada pode fazer sua casa pegar fogo
          </h1>
        </div>
      </section>

      {/* CONTEÚDO DO ARTIGO */}
      <section className="flex-1 py-12 bg-slate-50 relative z-40">
        <div className="container max-w-4xl mx-auto px-4">
          <article className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-700 leading-relaxed text-lg space-y-6">
            
            <p>
              Dados de uma pesquisa da <em>Datastore</em> apontam que o "sonho da casa própria" ainda faz parte do imaginário de milhões de brasileiros. Sonho este, conquistado com anos de luta e suor de muito trabalho, que pode acabar virando cinzas em decorrência de incidentes domésticos causados por problemas com a eletricidade.
            </p>
            
            <p>
              Segundo publicação da <u>Agência Brasil</u>, que traz estatísticas relacionadas às causas de incêndios domésticos, a sobrecarga e curto-circuito foram apontados como os incidentes causadores de <strong>mais de 50% dos incêndios em casas e apartamentos no ano de 2020.</strong>
            </p>

            {/* IMAGEM DO ARTIGO - Você precisará adicionar "Imagem1.png" na pasta public */}
            <figure className="my-10">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 flex justify-center p-4">
                <img src="/placeholder.svg" alt="Risco de Incêndio" className="max-h-80 object-contain mix-blend-multiply" />
              </div>
              <figcaption className="text-center text-sm text-slate-500 mt-3">Imagem: Reprodução da Internet</figcaption>
            </figure>

            <p>
              A arquiteta Jam Karla alerta que tais incidentes podem estar ligados à escolha errada dos fios que irão compor o projeto elétrico de uma casa, pois podem causar danos que vão desde o desperdício de energia, choques causados por mau contatos, superaquecimentos até chegar a um incêndio com dimensões inimagináveis. <span className="italic">"Por exemplo, você compra um fio com bitola inferior ao adequado para a corrente elétrica ou não adequada para o uso… isso pode gerar aquecimento e provavelmente provocar riscos de maiores acidentes."</span>, aponta.
            </p>

            <p>
              Os maus-hábitos relacionados ao uso de utensílios domésticos ligados à tomada, bem como uso inadequado de aparelhos adaptadores como "tê" ou benjamins, usado muitas vezes como fonte para conexões múltiplas de eletrodomésticos, são também apontados como potenciais causas de incêndio em residências.
            </p>

            <p>
              Matheus Praeiro, estudante de Engenharia Elétrica pela Universidade Federal da Bahia – UFBA, afirma que uma casa pode pegar fogo dada a fiação errada, pela especificação ou qualidade dos fios. Para ele, o <span className="italic">"uso de materiais de má qualidade e a ausência de um projeto de dimensionamento do fluxo de energia acabam gerando um consumo elevado e por muitas vezes um superaquecimento e, se o projeto não possuir uma proteção passiva é muito provável que ocorra um incêndio decorrente desse superaquecimento."</span>
            </p>

            <div className="bg-[#0A1F5C] text-white p-8 rounded-xl my-10 relative overflow-hidden">
              <BookOpen className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                Saiba como proteger o seu imóvel de um incêndio
              </h3>
              <p className="mb-4 text-blue-50 text-base">
                Para escapar do risco de entrar para esta estatística, é preciso estar atento a ações capazes de prevenir qualquer risco de incêndio em sua residência, uma delas é a escolha certa da fiação de sua casa, elegendo bons produtos para a instalação elétrica do seu imóvel, seja ele residencial ou comercial.
              </p>
              <p className="mb-4 text-blue-50 text-base">
                Praeiro acredita que uma das formas mais assertivas de evitar incêndios residenciais é "não economizar na compra de materiais, logicamente relacionado a qualificação do projeto", além da escolha de um bom fornecedor.
              </p>
              <p className="text-blue-50 text-base">
                E por falar em bom fornecedor, a <strong>Elétrica Bahiana</strong>, empresa distribuidora de material elétrico com mais de 20 anos de atuação, se preocupa em disponibilizar para os seus clientes as melhores marcas do mercado.
              </p>
            </div>

            <p className="text-center font-bold text-[#0A1F5C] text-xl">
              A Elétrica Bahiana tem o produto certo para a necessidade e segurança do seu imóvel! Não perca tempo, fale com a gente!
            </p>

          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Informativo;