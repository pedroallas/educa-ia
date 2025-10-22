/**
 * @fileoverview Testes para componente Navbar
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "@/components/Navbar";

describe("Navbar Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the logo", () => {
    render(<Navbar />);
    const logo = screen.getByAltText(/Padevs School/i);
    expect(logo).toBeInTheDocument();
  });

  it("should render as fixed navigation", () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("fixed");
  });

  it("should scroll to top when logo is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const button = screen.getByRole("button", { name: /Voltar ao início/i });
    await user.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("should have proper ARIA label", () => {
    render(<Navbar />);
    expect(screen.getByLabelText(/Voltar ao início/i)).toBeInTheDocument();
  });
});
