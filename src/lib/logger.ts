/**
 * @fileoverview Sistema de logging centralizado
 * Substitui chamadas diretas a console.* com sistema estruturado e controlável
 */

/**
 * Níveis de log disponíveis
 */
export enum LogLevel {
  DEBUG = "debug",
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

/**
 * Configuração do logger
 */
interface LoggerConfig {
  enabled: boolean;
  level: LogLevel;
  isDevelopment: boolean;
}

/**
 * Configuração padrão do logger
 * Em produção, apenas erros são registrados
 */
const config: LoggerConfig = {
  enabled: true,
  level: import.meta.env.DEV ? LogLevel.DEBUG : LogLevel.ERROR,
  isDevelopment: import.meta.env.DEV,
};

/**
 * Classe Logger centralizada para controle de logs
 * Fornece métodos estruturados e controláveis para logging
 */
class Logger {
  /**
   * Registra mensagem de debug (apenas em desenvolvimento)
   *
   * @param message - Mensagem a ser registrada
   * @param meta - Dados adicionais opcionais
   */
  debug(message: string, meta?: unknown): void {
    if (config.enabled && config.isDevelopment) {
      console.debug(`[DEBUG] ${message}`, meta || "");
    }
  }

  /**
   * Registra mensagem informativa
   *
   * @param message - Mensagem a ser registrada
   * @param meta - Dados adicionais opcionais
   */
  info(message: string, meta?: unknown): void {
    if (config.enabled && config.isDevelopment) {
      console.info(`[INFO] ${message}`, meta || "");
    }
  }

  /**
   * Registra aviso
   *
   * @param message - Mensagem de aviso
   * @param meta - Dados adicionais opcionais
   */
  warn(message: string, meta?: unknown): void {
    if (config.enabled) {
      console.warn(`[WARN] ${message}`, meta || "");
    }
  }

  /**
   * Registra erro
   *
   * @param message - Mensagem de erro
   * @param error - Objeto de erro opcional
   */
  error(message: string, error?: unknown): void {
    if (config.enabled) {
      console.error(`[ERROR] ${message}`, error || "");

      // Em produção, aqui seria integrado com Sentry/DataDog
      // Exemplo: Sentry.captureException(error);
    }
  }
}

/**
 * Instância singleton do logger
 * Use esta instância em toda a aplicação
 *
 * @example
 * ```tsx
 * import { logger } from '@/lib/logger';
 *
 * logger.info('Usuário fez login', { userId: 123 });
 * logger.error('Falha ao carregar dados', error);
 * ```
 */
export const logger = new Logger();
