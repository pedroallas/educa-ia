/**
 * @fileoverview Testes para sistema de logging
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { logger, LogLevel } from "@/lib/logger";

describe("Logger", () => {
  let consoleDebugSpy: ReturnType<typeof vi.spyOn>;
  let consoleInfoSpy: ReturnType<typeof vi.spyOn>;
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>;
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleDebugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
    consoleInfoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("LogLevel enum", () => {
    it("should have correct log levels", () => {
      expect(LogLevel.DEBUG).toBe("debug");
      expect(LogLevel.INFO).toBe("info");
      expect(LogLevel.WARN).toBe("warn");
      expect(LogLevel.ERROR).toBe("error");
    });
  });

  describe("debug method", () => {
    it("should call console.debug with formatted message", () => {
      logger.debug("Test debug message");
      expect(consoleDebugSpy).toHaveBeenCalledWith("[DEBUG] Test debug message", "");
    });

    it("should include metadata when provided", () => {
      const meta = { userId: 123 };
      logger.debug("Test with meta", meta);
      expect(consoleDebugSpy).toHaveBeenCalledWith("[DEBUG] Test with meta", meta);
    });
  });

  describe("info method", () => {
    it("should call console.info with formatted message", () => {
      logger.info("Test info message");
      expect(consoleInfoSpy).toHaveBeenCalledWith("[INFO] Test info message", "");
    });

    it("should include metadata when provided", () => {
      const meta = { action: "download" };
      logger.info("User action", meta);
      expect(consoleInfoSpy).toHaveBeenCalledWith("[INFO] User action", meta);
    });
  });

  describe("warn method", () => {
    it("should call console.warn with formatted message", () => {
      logger.warn("Test warning");
      expect(consoleWarnSpy).toHaveBeenCalledWith("[WARN] Test warning", "");
    });

    it("should include metadata when provided", () => {
      const meta = { deprecated: true };
      logger.warn("Deprecated feature", meta);
      expect(consoleWarnSpy).toHaveBeenCalledWith("[WARN] Deprecated feature", meta);
    });
  });

  describe("error method", () => {
    it("should call console.error with formatted message", () => {
      logger.error("Test error");
      expect(consoleErrorSpy).toHaveBeenCalledWith("[ERROR] Test error", "");
    });

    it("should include error object when provided", () => {
      const error = new Error("Something went wrong");
      logger.error("Error occurred", error);
      expect(consoleErrorSpy).toHaveBeenCalledWith("[ERROR] Error occurred", error);
    });

    it("should handle non-Error objects", () => {
      const errorObj = { code: 500, message: "Server error" };
      logger.error("API error", errorObj);
      expect(consoleErrorSpy).toHaveBeenCalledWith("[ERROR] API error", errorObj);
    });
  });
});
