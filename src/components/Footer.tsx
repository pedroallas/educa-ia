import logo from "/Logo Padevs School.svg";
import foto from "/foto.svg";

/**
 * Componente de rodapé do site
 * Exibe informações da escola, créditos e links externos
 */
export const Footer = () => {
  return (
    <footer
      className="bg-secondary/30 border-t border-border py-8 md:py-12 px-4"
      aria-label="Rodapé do site"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Padevs School" className="h-12 md:h-16" />
          </div>

          <div className="text-center md:text-right w-full md:w-auto">
            <p className="text-muted-foreground text-sm md:text-sm mb-2">
              E-book desenvolvido para apoiar educadores e profissionais
            </p>
            <p className="text-muted-foreground text-xs md:text-xs">
              Práticas éticas, criativas e eficazes na geração de prompts
            </p>
          </div>
        </div>

        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <a
              href="https://portifoliopedroallas.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-center gap-3 hover:opacity-80 transition-opacity"
              aria-label="Visite o portfólio de Pedro Allas"
            >
              <img
                src={foto}
                alt="Pedro Allas dos Santos Borges"
                className="h-16 w-16 md:h-16 md:w-16 rounded-full object-cover border-2 border-border flex-shrink-0"
              />
              <div className="text-center md:text-left">
                <p className="text-sm md:text-sm font-medium text-foreground">
                  Desenvolvido por Pedro Allas dos Santos Borges
                </p>
                <p className="text-xs md:text-xs text-muted-foreground">
                  Professor e Engenheiro de Software
                </p>
              </div>
            </a>
            <p className="text-center text-xs md:text-sm text-muted-foreground px-4 w-full">
              © 2025 A Arte de Criar Prompts Eficazes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
