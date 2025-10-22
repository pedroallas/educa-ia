import { useState, useEffect } from "react";
import logo from "/Logo Padevs School.svg";

/**
 * Componente de navegação principal
 * Navbar fixo com efeito de transparência baseado no scroll
 */
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-background/80 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none border-b border-border md:border-b-0"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-center md:justify-start">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Voltar ao início"
          >
            <img src={logo} alt="Padevs School" className="h-8 md:h-12" />
          </button>
        </div>
      </div>
    </nav>
  );
};
