/**
 * @fileoverview Hook customizado para navegação suave entre seções
 * Fornece funcionalidade de scroll suave para elementos específicos da página
 */

import { useCallback } from "react";

/**
 * Hook para navegação suave entre seções da página
 *
 * @returns Função scrollTo que aceita um ID de elemento
 *
 * @example
 * ```tsx
 * const scrollTo = useScrollTo();
 * scrollTo('intro'); // Rola suavemente até o elemento com id="intro"
 * ```
 */
export const useScrollTo = () => {
  /**
   * Rola suavemente até um elemento específico na página
   *
   * @param elementId - ID do elemento de destino
   */
  const scrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return scrollTo;
};
