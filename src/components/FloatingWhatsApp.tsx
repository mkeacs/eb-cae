import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  // Substitua pelo número real
  const phoneNumber = "5571999999999"; 
  const message = "Olá! Gostaria de saber mais sobre o Programa Fidelidade CAE.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Dúvidas? Fale conosco!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;