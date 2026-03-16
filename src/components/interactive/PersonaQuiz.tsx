import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "@/styles/components-tokens.css";
import "./PersonaQuiz.css";

// --- TypeScript Interfaces ---
export interface QuizOption {
  text: string;
  weights: Record<string, number>;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
  quote?: string; // NEW: Added optional quote per question
}

export interface PersonaResult {
  title: string;
  message: string;
  summary?: string;
  section?: string;
}

export interface PersonaQuizProps {
  questions: QuizQuestion[];
  personas: Record<string, PersonaResult>;
  onComplete?: (
    winningPersonaId: string,
    scores: Record<string, number>,
  ) => void;
}

// --- Component Implementation ---
const PersonaQuiz: React.FC<PersonaQuizProps> = ({
  questions,
  personas,
  onComplete,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (weights: Record<string, number>) => {
    // Accumulate the weights from the selected option
    const newScores = { ...scores };
    Object.entries(weights).forEach(([personaId, weight]) => {
      newScores[personaId] = (newScores[personaId] || 0) + weight;
    });
    setScores(newScores);

    // Progress to next question or finish
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
      if (onComplete) {
        const winningPersona = calculateWinner(newScores);
        onComplete(winningPersona, newScores);
      }
    }
  };

  const calculateWinner = (finalScores: Record<string, number>) => {
    return Object.keys(finalScores).reduce((a, b) =>
      finalScores[a] > (finalScores[b] || 0) ? a : b,
    );
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScores({});
    setIsFinished(false);
  };

  const currentQuestion = questions[currentIndex];
  let winnerId = "";
  let winningPersona: PersonaResult | null = null;

  if (isFinished) {
    winnerId = calculateWinner(scores);
    winningPersona = personas[winnerId];
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="river-component persona-quiz"
    >
      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key={`question-${currentIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="persona-quiz-header"
              style={{ alignItems: "flex-start" }}
            >
              <span style={{ whiteSpace: "nowrap", marginRight: "1rem" }}>
                Question {currentIndex + 1} of {questions.length}
              </span>

              {/* Question-specific Quote Display */}
              {currentQuestion.quote && (
                <span
                  style={{
                    textAlign: "right",
                    fontStyle: "italic",
                    maxWidth: "60%",
                    opacity: 0.8,
                  }}
                >
                  "{currentQuestion.quote}"
                </span>
              )}
            </div>

            <h3 className="persona-quiz-question">{currentQuestion.text}</h3>

            <div className="persona-quiz-options">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option.weights)}
                  className="persona-quiz-option"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="persona-quiz-result"
          >
            <p className="persona-quiz-result-label">Your Profile</p>
            <h3 className="persona-quiz-result-title">
              {winningPersona?.title || "Unknown"}
            </h3>
            <h4 className="persona-quiz-result-title">
              Recomended Section: {winningPersona?.section || "Unknown"}
            </h4>
            <p className="persona-quiz-result-message">
              {winningPersona?.message}
            </p>
            {winningPersona?.summary && (
              <p className="persona-quiz-result-summary">
                {winningPersona.summary}
              </p>
            )}
            <button onClick={resetQuiz} className="persona-quiz-retake-btn">
              Retake Quiz
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PersonaQuiz;
