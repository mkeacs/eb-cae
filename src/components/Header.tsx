import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onScrollToRegistration: () => void;
  onScrollToRegulation: () => void;
}

const Header = ({ onScrollToRegistration, onScrollToRegulation }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="CAE Logo" 
            className="h-10 w-auto object-contain" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={onScrollToRegulation}
            className={`text-sm font-medium hover:text-blue-600 transition-colors ${
              isScrolled ? "text-slate-700" : "text-white/90 hover:text-white"
            }`}
          >
            Como Funciona
          </button>
          <button 
            onClick={() => window.open("https://eletricabahiana.com.br", "_blank")}
            className={`text-sm font-medium hover:text-blue-600 transition-colors ${
              isScrolled ? "text-slate-700" : "text-white/90 hover:text-white"
            }`}
          >
            Elétrica Bahiana
          </button>
          <Button 
            onClick={onScrollToRegistration}
            variant={isScrolled ? "default" : "secondary"}
            size="sm"
            className="font-semibold"
          >
            Cadastre-se
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-slate-800" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-slate-800" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 md:hidden flex flex-col gap-4">
          <button 
            onClick={() => {
              onScrollToRegulation();
              setIsMobileMenuOpen(false);
            }}
            className="text-slate-700 font-medium py-2 text-left"
          >
            Como Funciona
          </button>
          <button 
            onClick={() => {
              window.open("https://eletricabahiana.com.br", "_blank");
              setIsMobileMenuOpen(false);
            }}
            className="text-slate-700 font-medium py-2 text-left"
          >
            Elétrica Bahiana
          </button>
          <Button 
            onClick={() => {
              onScrollToRegistration();
              setIsMobileMenuOpen(false);
            }}
            className="w-full"
          >
            Cadastre-se
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;