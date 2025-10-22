import { useState, useEffect } from "react";
import { Contrast, Volume2, Type } from "lucide-react";
import { Button } from "./ui/button";

/**
 * Componente de Acessibilidade
 * Fornece controles para melhorar a experiência de usuários com necessidades especiais
 * - Modo alto contraste
 * - Ajuste de tamanho de fonte
 * - Narração de texto (Text-to-Speech)
 */
export const AccessibilityControls = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">("normal");
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    // Carregar preferências salvas
    const savedContrast = localStorage.getItem("highContrast") === "true";
    const savedFontSize = (localStorage.getItem("fontSize") as typeof fontSize) || "normal";

    setHighContrast(savedContrast);
    setFontSize(savedFontSize);

    // Aplicar configurações
    if (savedContrast) {
      document.documentElement.classList.add("high-contrast");
    }
    document.documentElement.setAttribute("data-font-size", savedFontSize);
  }, []);

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem("highContrast", String(newValue));

    if (newValue) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  };

  const changeFontSize = (size: typeof fontSize) => {
    setFontSize(size);
    localStorage.setItem("fontSize", size);
    document.documentElement.setAttribute("data-font-size", size);
  };

  const toggleTextToSpeech = () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    } else {
      const textContent = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(textContent);
      utterance.lang = "pt-BR";
      utterance.rate = 0.9;
      utterance.onend = () => setIsReading(false);
      window.speechSynthesis.speak(utterance);
      setIsReading(true);
    }
  };

  return (
    <>
      {/* Botão Flutuante de Acessibilidade */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label={
          isOpen ? "Fechar controles de acessibilidade" : "Abrir controles de acessibilidade"
        }
        aria-expanded={isOpen}
        title="Acessibilidade"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
        </svg>
      </button>

      {/* Painel de Controles */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Painel */}
          <div
            className="fixed bottom-24 left-6 z-50 bg-card border border-border rounded-xl shadow-2xl p-6 w-80 animate-in slide-in-from-bottom-4 fade-in duration-300"
            role="dialog"
            aria-labelledby="accessibility-title"
          >
            <h3 id="accessibility-title" className="text-lg font-bold text-foreground mb-4">
              Controles de Acessibilidade
            </h3>

            {/* Alto Contraste */}
            <div className="mb-4 pb-4 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Contrast size={20} className="text-primary" />
                  <span className="text-sm font-medium">Alto Contraste</span>
                </div>
                <Button
                  variant={highContrast ? "default" : "outline"}
                  size="sm"
                  onClick={toggleHighContrast}
                  aria-pressed={highContrast}
                  aria-label={highContrast ? "Desativar alto contraste" : "Ativar alto contraste"}
                >
                  {highContrast ? "Ativado" : "Desativado"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Aumenta o contraste para melhor legibilidade
              </p>
            </div>

            {/* Tamanho da Fonte */}
            <div className="mb-4 pb-4 border-b border-border">
              <div className="flex items-center gap-2 mb-3">
                <Type size={20} className="text-primary" />
                <span className="text-sm font-medium">Tamanho da Fonte</span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={fontSize === "normal" ? "default" : "outline"}
                  size="sm"
                  onClick={() => changeFontSize("normal")}
                  className="flex-1"
                >
                  Normal
                </Button>
                <Button
                  variant={fontSize === "large" ? "default" : "outline"}
                  size="sm"
                  onClick={() => changeFontSize("large")}
                  className="flex-1"
                >
                  Grande
                </Button>
                <Button
                  variant={fontSize === "xlarge" ? "default" : "outline"}
                  size="sm"
                  onClick={() => changeFontSize("xlarge")}
                  className="flex-1"
                >
                  Maior
                </Button>
              </div>
            </div>

            {/* Narração de Texto */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Volume2 size={20} className="text-primary" />
                  <span className="text-sm font-medium">Ler em Voz Alta</span>
                </div>
                <Button
                  variant={isReading ? "default" : "outline"}
                  size="sm"
                  onClick={toggleTextToSpeech}
                >
                  {isReading ? "Parar" : "Iniciar"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Narração automática do conteúdo da página
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
