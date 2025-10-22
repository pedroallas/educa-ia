import { useEffect } from "react";

/**
 * Interface para as propriedades do componente SEO
 */
interface SEOProps {
  /** Título da página */
  title?: string;
  /** Descrição da página */
  description?: string;
  /** Palavras-chave da página */
  keywords?: string;
  /** URL canônica da página */
  canonicalUrl?: string;
  /** URL da imagem para Open Graph */
  ogImage?: string;
  /** Tipo de conteúdo Open Graph */
  ogType?: "website" | "article" | "book";
}

/**
 * Componente SEO para gerenciar meta tags dinamicamente
 *
 * @example
 * ```tsx
 * <SEO
 *   title="Minha Página"
 *   description="Descrição da página"
 *   keywords="palavra1, palavra2"
 * />
 * ```
 */
export const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
}: SEOProps) => {
  useEffect(() => {
    // Atualizar título
    if (title) {
      document.title = title;
    }

    // Função auxiliar para atualizar ou criar meta tag
    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute("content", content);
      } else {
        element = document.createElement("meta");
        const [attr, value] = selector.match(/\[(.*?)=['"](.*)['"]/)?.slice(1, 3) || [];
        if (attr && value) {
          element.setAttribute(attr, value);
          element.setAttribute("content", content);
          document.head.appendChild(element);
        }
      }
    };

    // Atualizar description
    if (description) {
      updateMetaTag('meta[name="description"]', description);
      updateMetaTag('meta[property="og:description"]', description);
      updateMetaTag('meta[name="twitter:description"]', description);
    }

    // Atualizar keywords
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', keywords);
    }

    // Atualizar canonical URL
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute("href", canonicalUrl);
      } else {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        link.setAttribute("href", canonicalUrl);
        document.head.appendChild(link);
      }
      updateMetaTag('meta[property="og:url"]', canonicalUrl);
    }

    // Atualizar Open Graph image
    if (ogImage) {
      updateMetaTag('meta[property="og:image"]', ogImage);
      updateMetaTag('meta[name="twitter:image"]', ogImage);
    }

    // Atualizar Open Graph type
    if (ogType) {
      updateMetaTag('meta[property="og:type"]', ogType);
    }

    // Atualizar Open Graph title
    if (title) {
      updateMetaTag('meta[property="og:title"]', title);
      updateMetaTag('meta[name="twitter:title"]', title);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType]);

  return null;
};
