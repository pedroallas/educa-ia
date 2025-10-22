import { useEffect } from "react";

/**
 * Interface para os dados estruturados do schema.org
 */
interface StructuredDataProps {
  /** Tipo do schema (WebSite, Article, Book, etc) */
  type: "WebSite" | "Article" | "Book" | "Course" | "Organization";
  /** Dados personalizados do schema */
  data: Record<string, unknown>;
}

/**
 * Componente para adicionar dados estruturados (JSON-LD) ao head do documento
 * Melhora o SEO e a apresentação nos resultados de busca
 *
 * @example
 * ```tsx
 * <StructuredData
 *   type="WebSite"
 *   data={{
 *     name: "Meu Site",
 *     url: "https://meusite.com",
 *     description: "Descrição do site"
 *   }}
 * />
 * ```
 */
export const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `structured-data-${type}`;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    };

    script.text = JSON.stringify(structuredData);

    // Remove script anterior se existir
    const existingScript = document.getElementById(script.id);
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(script.id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
};
