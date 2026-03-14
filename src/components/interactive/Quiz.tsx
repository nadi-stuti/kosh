import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "@/styles/components-tokens.css";
import "./Quiz.css";

export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface QuizResultLabel {
  key: string;
  minScore: number;
  maxScore: number;
  title: string;
  message: string;
}

export interface QuizProps {
  questions: QuizQuestion[];
  resultLabels?: QuizResultLabel[];
}

export default function Quiz({ questions, resultLabels = [] }: QuizProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = questions.length;
  const isAnswered = answers[currentQuestion.id] !== undefined;
  const isComplete = answeredCount === totalQuestions;

  useEffect(() => {
    if (showCorrectAnswer) {
      const timer = setTimeout(() => {
        if (currentQuestionIndex < totalQuestions - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
          setShowCorrectAnswer(false);
        } else {
          handleSubmit();
        }
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [showCorrectAnswer, currentQuestionIndex, totalQuestions]);

  const handleAnswer = (optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
  };

  const handleNext = () => {
    setShowCorrectAnswer(true);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.correctOptionIndex) calculatedScore++;
    });

    setScore(calculatedScore);
    setShowResults(true);
  };

  const resultLabel = resultLabels.find(
    (l) => l.minScore <= score && score <= l.maxScore,
  );

  const isCorrect =
    answers[currentQuestion.id] === currentQuestion.correctOptionIndex;

  const progressPercent = (score / totalQuestions) * 100;

  return (
    <AnimatePresence mode="wait">
      {showResults ? (
        <motion.div
          key="results"
          className="river-component quick-knowledge-check"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            className="qk-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Your Level: {resultLabel?.title || "Complete"}
          </motion.h3>

          <motion.p
            className="qk-result-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {resultLabel?.message || ""}
          </motion.p>

          <motion.p
            className="qk-score"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            Score: {score}/{totalQuestions}
          </motion.p>

          {/* Progress Bar */}
          <div
            style={{
              width: "100%",
              height: "10px",
              background: "var(--sl-color-gray-5)",
              borderRadius: "6px",
              overflow: "hidden",
              marginBottom: "1.5rem",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                height: "100%",
                background: "var(--sl-color-accent)",
              }}
            />
          </div>

          <motion.button
            onClick={() => window.location.reload()}
            className="qk-btn qk-btn-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            Retake Quiz
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          key="quiz"
          className="river-component quick-knowledge-check"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h3
            className="qk-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Quick Knowledge Check
          </motion.h3>

          <p className="qk-progress">
            {answeredCount}/{totalQuestions} answered
          </p>

          <motion.div
            key={currentQuestion.id}
            className="qk-question"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h4>{currentQuestion.text}</h4>

            <motion.div
              className="qk-options"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {currentQuestion.options.map((option, index) => {
                const userSelected = answers[currentQuestion.id] === index;
                const isCorrectAnswer =
                  index === currentQuestion.correctOptionIndex;

                let optionClass = "";

                if (showCorrectAnswer) {
                  if (isCorrectAnswer) optionClass = "correct";
                  else if (userSelected) optionClass = "wrong";
                } else if (userSelected) {
                  optionClass = "selected";
                }

                return (
                  <motion.label
                    key={index}
                    variants={itemVariants}
                    className={`qk-option ${optionClass}`}
                    whileHover={showCorrectAnswer ? {} : { scale: 1.02 }}
                    whileTap={showCorrectAnswer ? {} : { scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      name="quiz-answer"
                      checked={userSelected}
                      onChange={() => !showCorrectAnswer && handleAnswer(index)}
                      disabled={showCorrectAnswer}
                    />
                    <span>{option}</span>
                  </motion.label>
                );
              })}
            </motion.div>

            {showCorrectAnswer ? (
              <motion.p
                className={`qk-feedback ${isCorrect ? "correct" : "wrong"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {isCorrect
                  ? "✅ Correct!"
                  : `❌ Correct answer: ${
                      currentQuestion.options[
                        currentQuestion.correctOptionIndex
                      ]
                    }`}
                <br />
                <small>{currentQuestion.explanation}</small>
              </motion.p>
            ) : isAnswered ? (
              <motion.button
                onClick={handleNext}
                className="qk-btn qk-btn-primary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isComplete ? "See My Level →" : "Next Question →"}
              </motion.button>
            ) : (
              <p className="qk-hint">Select an answer to continue</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
