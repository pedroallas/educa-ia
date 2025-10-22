/**
 * @fileoverview Testes para componente Hero
 */

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";

describe("Hero Component", () => {
  it("should render the main title", () => {
    render(<Hero />);
    expect(screen.getByText(/A Arte de Criar Prompts Eficazes/i)).toBeInTheDocument();
  });

  it("should render the subtitle", () => {
    render(<Hero />);
    expect(screen.getByText(/Domine a habilidade essencial da era da IA/i)).toBeInTheDocument();
  });

  it("should render the badge with icon", () => {
    render(<Hero />);
    expect(screen.getByText(/E-book Completo sobre Prompt Engineering/i)).toBeInTheDocument();
  });

  it("should render CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText(/Começar a Ler/i)).toBeInTheDocument();
    expect(screen.getByText(/Ver Fundamentos/i)).toBeInTheDocument();
  });

  it("should have proper accessibility structure", () => {
    const { container } = render(<Hero />);
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });
});
