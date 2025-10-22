/**
 * Componente Skip Link para acessibilidade
 * Permite que usuários de teclado/screen readers pulem diretamente para o conteúdo principal
 */
export const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg transition-all"
    >
      Pular para o conteúdo principal
    </a>
  );
};
