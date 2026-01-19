import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import RegistrationForm from "@/components/RegistrationForm";
import RegulationSection from "@/components/RegulationSection";
import SuccessScreen from "@/components/SuccessScreen";
import Footer from "@/components/Footer";

const Index = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const regulationRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRegulation = () => {
    regulationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSuccess = () => {
    setShowSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setShowSuccess(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <SuccessScreen onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onParticipate={scrollToForm} onRegulation={scrollToRegulation} />
      
      <div ref={formRef}>
        <RegistrationForm onSuccess={handleSuccess} />
      </div>
      
      <div ref={regulationRef}>
        <RegulationSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
