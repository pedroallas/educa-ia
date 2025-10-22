/**
 * @fileoverview Testes para hook useScrollTo
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useScrollTo } from "@/hooks/useScrollTo";

describe("useScrollTo Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return a function", () => {
    const { result } = renderHook(() => useScrollTo());
    expect(typeof result.current).toBe("function");
  });

  it("should scroll to element when it exists", () => {
    // Mock element
    const mockElement = document.createElement("div");
    mockElement.id = "test-section";
    document.body.appendChild(mockElement);

    const { result } = renderHook(() => useScrollTo());

    result.current("test-section");

    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });

    // Cleanup
    document.body.removeChild(mockElement);
  });

  it("should not throw error when element does not exist", () => {
    const { result } = renderHook(() => useScrollTo());

    expect(() => {
      result.current("non-existent-id");
    }).not.toThrow();
  });

  it("should handle multiple calls", () => {
    const mockElement1 = document.createElement("div");
    mockElement1.id = "section-1";
    const mockElement2 = document.createElement("div");
    mockElement2.id = "section-2";

    document.body.appendChild(mockElement1);
    document.body.appendChild(mockElement2);

    const { result } = renderHook(() => useScrollTo());

    result.current("section-1");
    result.current("section-2");

    expect(mockElement1.scrollIntoView).toHaveBeenCalled();
    expect(mockElement2.scrollIntoView).toHaveBeenCalled();

    // Cleanup
    document.body.removeChild(mockElement1);
    document.body.removeChild(mockElement2);
  });
});
