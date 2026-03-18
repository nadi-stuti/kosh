import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "@/styles/components-tokens.css";
import "./FlipCards.css";

export interface FlipCardSide {
  label?: string;
  content: string;
}

export interface FlipCard {
  id: string;
  sides: [FlipCardSide, FlipCardSide];
}

export interface FlipCardsProps {
  cards: FlipCard[];
}

export default function FlipCards({ cards }: FlipCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [ripple, setRipple] = useState(false);

  const currentCard = cards[currentIndex];

  const flipCard = () => {
    setRipple(true);
    setFlipped((f) => !f);

    setTimeout(() => setRipple(false), 400);
  };

  const nextCard = () => {
    setFlipped(false);
    setCurrentIndex((i) => Math.min(i + 1, cards.length - 1));
  };

  const prevCard = () => {
    setFlipped(false);
    setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  return (
    <div className="river-component flipcards">
      <div className="flipcards-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            className="flipcard"
            onClick={flipCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ scale: 1.03 }}
          >
            {ripple && (
              <motion.span
                className="flipcard-ripple"
                initial={{ scale: 0, opacity: 0.4 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}

            <motion.div
              className="flipcard-inner"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              {/* FRONT */}

              <div className="flipcard-face flipcard-front">
                {currentCard.sides[0].label && (
                  <span className="flipcard-label">
                    {currentCard.sides[0].label}
                  </span>
                )}

                <p className="flipcard-content">
                  {currentCard.sides[0].content}
                </p>

                <span className="flipcard-hint">Click to reveal</span>
              </div>

              {/* BACK */}

              <div className="flipcard-face flipcard-back">
                {currentCard.sides[1].label && (
                  <span className="flipcard-label flipcard-label-accent">
                    {currentCard.sides[1].label}
                  </span>
                )}

                <p className="flipcard-content">
                  {currentCard.sides[1].content}
                </p>

                <span className="flipcard-hint">Click to flip back</span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flipcards-controls">
        <button
          className="flipcards-btn"
          onClick={prevCard}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>

        <span className="flipcards-progress">
          {currentIndex + 1} / {cards.length}
        </span>

        <button
          className="flipcards-btn"
          onClick={nextCard}
          disabled={currentIndex === cards.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
