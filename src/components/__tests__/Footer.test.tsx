/**
 * @fileoverview Testes para componente Footer
 */

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/Footer";

describe("Footer Component", () => {
  it("should render the school logo", () => {
    render(<Footer />);
    const logo = screen.getByAltText(/Padevs School/i);
    expect(logo).toBeInTheDocument();
  });

  it("should render description text", () => {
    render(<Footer />);
    expect(screen.getByText(/E-book desenvolvido para apoiar educadores/i)).toBeInTheDocument();
  });

  it("should render ethics text", () => {
    render(<Footer />);
    expect(screen.getByText(/Práticas éticas, criativas e eficazes/i)).toBeInTheDocument();
  });

  it("should have external link to portfolio", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /Pedro Allas/i });
    expect(link).toHaveAttribute("href", "https://portifoliopedroallas.netlify.app/");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render author name", () => {
    render(<Footer />);
    expect(screen.getByText(/Pedro Allas/i)).toBeInTheDocument();
  });

  it("should render professional title", () => {
    render(<Footer />);
    expect(screen.getByText(/Professor e Engenheiro de Software/i)).toBeInTheDocument();
  });

  it("should render as footer element", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});
