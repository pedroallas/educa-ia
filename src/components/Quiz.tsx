import { useState } from "react";
import { Check, X, RotateCcw, Trophy } from "lucide-react";
import { Button } from "./ui/button";

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: QuizQuestion[];
}

/**
 * Componente de Quiz Interativo
 * Permite aos usuários testar conhecimentos com correção automática
 * Exibe pontuação e explicações detalhadas
 */
export const Quiz = ({ title, questions }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));

  const handleAnswerClick = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsQuizComplete(false);
    setAnswers(Array(questions.length).fill(null));
  };

  const currentQ = questions[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (isQuizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 text-primary">
            <Trophy size={40} />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Quiz Concluído!</h3>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-primary">{percentage}%</p>
            <p className="text-muted-foreground">
              Você acertou {score} de {questions.length} questões
            </p>
          </div>
          <div className="pt-4">
            <Button onClick={handleRestart} className="gap-2">
              <RotateCcw size={18} />
              Refazer Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <span aria-live="polite">
            Questão {currentQuestion + 1} de {questions.length}
          </span>
          <span aria-live="polite" aria-label={`Pontuação atual: ${score} de ${questions.length}`}>
            Pontuação: {score}
          </span>
        </div>
        {/* Progress Bar */}
        <div
          className="w-full h-2 bg-secondary rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Progresso do quiz: ${Math.round(progressPercentage)}%`}
        >
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-6" role="region" aria-label="Questão do quiz">
        <p className="text-lg text-foreground font-medium mb-4">{currentQ.question}</p>

        {/* Options */}
        <div className="space-y-3" role="radiogroup" aria-label="Opções de resposta">
          {currentQ.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQ.correctAnswer;
            const showResult = showExplanation;

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={showExplanation}
                role="radio"
                aria-checked={isSelected}
                aria-label={`Opção ${index + 1}: ${option}`}
                className={`
                  w-full text-left p-4 rounded-lg border-2 transition-all
                  ${
                    !showResult
                      ? isSelected
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 hover:bg-secondary/50"
                      : isCorrect
                        ? "border-green-500 bg-green-500/10"
                        : isSelected
                          ? "border-red-500 bg-red-500/10"
                          : "border-border opacity-50"
                  }
                  ${showExplanation ? "cursor-not-allowed" : "cursor-pointer"}
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base">{option}</span>
                  {showResult && isCorrect && (
                    <Check className="text-green-500 flex-shrink-0" size={20} />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <X className="text-red-500 flex-shrink-0" size={20} />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="mb-6 p-4 bg-secondary/50 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground mb-1 font-semibold">Explicação:</p>
          <p className="text-sm text-foreground">{currentQ.explanation}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        {!showExplanation ? (
          <Button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className="flex-1"
          >
            Confirmar Resposta
          </Button>
        ) : (
          <Button onClick={handleNextQuestion} className="flex-1">
            {currentQuestion < questions.length - 1 ? "Próxima Questão" : "Ver Resultado"}
          </Button>
        )}
      </div>
    </div>
  );
};
