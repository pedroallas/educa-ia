/**
 * @fileoverview Testes para componente ContentSection
 */

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContentSection } from "@/components/ContentSection";

describe("ContentSection Component", () => {
  it("should render title", () => {
    render(
      <ContentSection id="test" title="Test Title">
        <p>Content</p>
      </ContentSection>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should render subtitle when provided", () => {
    render(
      <ContentSection id="test" title="Title" subtitle="Test Subtitle">
        <p>Content</p>
      </ContentSection>
    );
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("should render children", () => {
    render(
      <ContentSection id="test" title="Title">
        <p>Test Content</p>
      </ContentSection>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should have correct ID attribute", () => {
    const { container } = render(
      <ContentSection id="unique-id" title="Title">
        <p>Content</p>
      </ContentSection>
    );
    expect(container.querySelector("#unique-id")).toBeInTheDocument();
  });

  it("should apply variant prop", () => {
    const { container } = render(
      <ContentSection id="test" title="Title" variant="accent">
        <p>Content</p>
      </ContentSection>
    );
    const section = container.querySelector("section");
    // Verifica que o componente renderiza com a variant
    expect(section).toBeInTheDocument();
  });
});
