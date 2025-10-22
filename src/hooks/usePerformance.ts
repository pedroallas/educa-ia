import { useEffect } from "react";
import { logger } from "@/lib/logger";

/**
 * Tipo para métricas de Web Vitals
 */
interface WebVitalsMetric {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  id: string;
}

/**
 * Hook para monitoramento de Web Vitals
 * Mede métricas de performance: LCP, INP, CLS, FCP, TTFB
 *
 * @example
 * ```tsx
 * function App() {
 *   useWebVitals();
 *   return <div>...</div>;
 * }
 * ```
 */
export const useWebVitals = () => {
  useEffect(() => {
    // Função para reportar métricas
    const reportMetric = (metric: WebVitalsMetric) => {
      logger.info(`Web Vital - ${metric.name}:`, {
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
      });

      // Aqui você poderia enviar para serviço de analytics
      // analytics.track('web_vital', { name: metric.name, value: metric.value });
    };

    // Importa dinamicamente web-vitals se disponível
    import("web-vitals")
      .then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(reportMetric);
        onINP(reportMetric);
        onFCP(reportMetric);
        onLCP(reportMetric);
        onTTFB(reportMetric);
      })
      .catch(() => {
        // web-vitals não instalado, ignorar silenciosamente
        logger.debug("web-vitals não está instalado");
      });
  }, []);
};

/**
 * Hook para monitorar tempo de renderização de componentes
 *
 * @param componentName Nome do componente para identificação
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   useComponentRenderTime('MyComponent');
 *   return <div>...</div>;
 * }
 * ```
 */
export const useComponentRenderTime = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;

      if (renderTime > 50) {
        // Log apenas se render demorar mais de 50ms
        logger.warn(`${componentName} render time:`, {
          duration: `${renderTime.toFixed(2)}ms`,
        });
      }
    };
  }, [componentName]);
};

/**
 * Utilitário para medir performance de funções
 *
 * @param fn Função a ser medida
 * @param label Label para identificar a medição
 * @returns Resultado da função
 *
 * @example
 * ```tsx
 * const result = measurePerformance(() => {
 *   // operação cara
 *   return processData(data);
 * }, 'processData');
 * ```
 */
export const measurePerformance = <T>(fn: () => T, label: string): T => {
  const startTime = performance.now();
  const result = fn();
  const endTime = performance.now();
  const duration = endTime - startTime;

  logger.debug(`Performance - ${label}:`, {
    duration: `${duration.toFixed(2)}ms`,
  });

  return result;
};
