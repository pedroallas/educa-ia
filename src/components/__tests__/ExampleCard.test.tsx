/**
 * @fileoverview Testes para componente ExampleCard
 */

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExampleCard } from "@/components/ExampleCard";

describe("ExampleCard Component", () => {
  it("should render good example", () => {
    const { container } = render(
      <ExampleCard type="good">
        <p>Good example content</p>
      </ExampleCard>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render bad example", () => {
    const { container } = render(
      <ExampleCard type="bad">
        <p>Bad example content</p>
      </ExampleCard>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render tip", () => {
    const { container } = render(
      <ExampleCard type="tip">
        <p>Tip content</p>
      </ExampleCard>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render children content", () => {
    render(
      <ExampleCard type="good">
        <p>Example content here</p>
      </ExampleCard>
    );
    expect(screen.getByText("Example content here")).toBeInTheDocument();
  });

  it("should render title when provided", () => {
    render(
      <ExampleCard type="tip" title="Pro Tip">
        <p>Content</p>
      </ExampleCard>
    );
    expect(screen.getByText("Pro Tip")).toBeInTheDocument();
  });
});
