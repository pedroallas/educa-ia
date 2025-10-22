/**
 * @fileoverview Testes para componente Quiz
 */

import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Quiz } from "@/components/Quiz";
import { QUIZ_QUESTIONS } from "@/constants";

describe("Quiz Component", () => {
  beforeEach(() => {
    render(<Quiz title="Test Quiz" questions={QUIZ_QUESTIONS} />);
  });

  it("should render quiz title", () => {
    expect(screen.getByText("Test Quiz")).toBeInTheDocument();
  });

  it("should render first question", () => {
    expect(screen.getByText(QUIZ_QUESTIONS[0].question)).toBeInTheDocument();
  });

  it("should render all options for first question", () => {
    QUIZ_QUESTIONS[0].options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("should show question counter", () => {
    expect(screen.getByText(/Questão 1 de 5/i)).toBeInTheDocument();
  });

  it("should select an answer when clicked", async () => {
    const user = userEvent.setup();
    const firstOption = screen.getByText(QUIZ_QUESTIONS[0].options[0]);

    await user.click(firstOption);

    const button = firstOption.closest("button");
    expect(button).toHaveClass("bg-primary/10");
  });

  it("should show correct answer feedback", async () => {
    const user = userEvent.setup();
    const correctOption = screen.getByText(
      QUIZ_QUESTIONS[0].options[QUIZ_QUESTIONS[0].correctAnswer]
    );

    await user.click(correctOption);

    const confirmButton = screen.getByRole("button", {
      name: /Confirmar Resposta/i,
    });
    await user.click(confirmButton);

    // Verifica que a resposta está marcada como correta (border verde)
    const button = correctOption.closest("button");
    expect(button).toHaveClass("border-green-500");
  });

  it("should show wrong answer feedback", async () => {
    const user = userEvent.setup();
    const wrongIndex = QUIZ_QUESTIONS[0].correctAnswer === 0 ? 1 : 0;
    const wrongOption = screen.getByText(QUIZ_QUESTIONS[0].options[wrongIndex]);

    await user.click(wrongOption);

    const confirmButton = screen.getByRole("button", {
      name: /Confirmar Resposta/i,
    });
    await user.click(confirmButton);

    // Verifica que a resposta está marcada como incorreta (border vermelho)
    const button = wrongOption.closest("button");
    expect(button).toHaveClass("border-red-500");
  });

  it("should show explanation after answering", async () => {
    const user = userEvent.setup();
    const firstOption = screen.getByText(QUIZ_QUESTIONS[0].options[0]);

    await user.click(firstOption);

    const confirmButton = screen.getByRole("button", {
      name: /Confirmar Resposta/i,
    });
    await user.click(confirmButton);

    expect(screen.getByText(QUIZ_QUESTIONS[0].explanation)).toBeInTheDocument();
  });

  it("should advance to next question", async () => {
    const user = userEvent.setup();
    const firstOption = screen.getByText(QUIZ_QUESTIONS[0].options[0]);

    await user.click(firstOption);

    const confirmButton = screen.getByRole("button", {
      name: /Confirmar Resposta/i,
    });
    await user.click(confirmButton);

    const nextButton = screen.getByRole("button", { name: /Próxima Questão/i });
    await user.click(nextButton);

    expect(screen.getByText(QUIZ_QUESTIONS[1].question)).toBeInTheDocument();
    expect(screen.getByText(/Questão 2 de 5/i)).toBeInTheDocument();
  });

  it("should complete quiz and show results", async () => {
    const user = userEvent.setup();

    // Responder todas as questões
    for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
      const correctOption = screen.getByText(
        QUIZ_QUESTIONS[i].options[QUIZ_QUESTIONS[i].correctAnswer]
      );
      await user.click(correctOption);

      const confirmButton = screen.getByRole("button", {
        name: /Confirmar Resposta/i,
      });
      await user.click(confirmButton);

      if (i < QUIZ_QUESTIONS.length - 1) {
        const nextButton = screen.getByRole("button", {
          name: /Próxima Questão/i,
        });
        await user.click(nextButton);
      } else {
        const finishButton = screen.getByRole("button", {
          name: /Ver Resultado/i,
        });
        await user.click(finishButton);
      }
    }

    expect(screen.getByText(/Quiz Concluído!/i)).toBeInTheDocument();
    expect(screen.getByText(/5 de 5/i)).toBeInTheDocument();
  });

  it("should restart quiz", async () => {
    const user = userEvent.setup();

    // Completar quiz
    for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
      const firstOption = screen.getByText(QUIZ_QUESTIONS[i].options[0]);
      await user.click(firstOption);

      const confirmButton = screen.getByRole("button", {
        name: /Confirmar Resposta/i,
      });
      await user.click(confirmButton);

      if (i < QUIZ_QUESTIONS.length - 1) {
        const nextButton = screen.getByRole("button", {
          name: /Próxima Questão/i,
        });
        await user.click(nextButton);
      } else {
        const finishButton = screen.getByRole("button", {
          name: /Ver Resultado/i,
        });
        await user.click(finishButton);
      }
    }

    // Reiniciar
    const restartButton = screen.getByRole("button", { name: /Refazer Quiz/i });
    await user.click(restartButton);

    expect(screen.getByText(QUIZ_QUESTIONS[0].question)).toBeInTheDocument();
    expect(screen.getByText(/Questão 1 de 5/i)).toBeInTheDocument();
  });
});
