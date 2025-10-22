import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

/**
 * Componente de Tabela de Conteúdos (Table of Contents)
 * Menu lateral fixo e responsivo com navegação por âncoras
 * Destaca a seção ativa conforme o scroll da página
 */
export const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detecta qual seção está visível na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset para navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Botão mobile para abrir TOC */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 md:hidden bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="Abrir índice de navegação"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-20 left-0 h-[calc(100vh-5rem)] z-40
          w-80 bg-card/95 backdrop-blur-lg border-r border-border
          transition-transform duration-300
          shadow-xl flex flex-col
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          hidden md:block
        `}
        aria-label="Navegação da página"
      >
        <div className="p-5 flex flex-col h-full">
          {/* Botão Início */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-full mb-3 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all flex items-center justify-center gap-2 group flex-shrink-0"
            aria-label="Voltar ao início da página"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-y-0.5 transition-transform"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Início
          </button>

          <nav className="space-y-1 flex-1 overflow-hidden" aria-label="Índice de conteúdo">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full text-left px-3 py-2.5 rounded-lg transition-all
                  flex items-center gap-3 group
                  ${
                    activeSection === item.id
                      ? "bg-primary/20 text-primary font-medium shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }
                `}
                aria-current={activeSection === item.id ? "true" : "false"}
              >
                {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                <span className="flex-1 text-sm">{item.label}</span>
                <ChevronRight
                  size={16}
                  className={`
                    transition-transform flex-shrink-0
                    ${
                      activeSection === item.id
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                />
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Versão Mobile - Drawer completo */}
      {isOpen && (
        <aside className="fixed inset-y-0 left-0 w-80 bg-card border-r border-border z-50 md:hidden overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="flex-1 px-3 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Início
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-2 p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="space-y-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    w-full text-left px-3 py-2.5 rounded-lg transition-all
                    flex items-center gap-3 group
                    ${
                      activeSection === item.id
                        ? "bg-primary/20 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }
                  `}
                  aria-current={activeSection === item.id ? "true" : "false"}
                >
                  {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                  <span className="flex-1 text-sm">{item.label}</span>
                  <ChevronRight
                    size={16}
                    className={`
                      transition-transform
                      ${
                        activeSection === item.id
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                  />
                </button>
              ))}
            </nav>
          </div>
        </aside>
      )}
    </>
  );
};
