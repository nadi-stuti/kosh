import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "@/styles/components-tokens.css";
import "./ProgressiveReveal.css";

export interface RevealTopic {
  label: string;
  link?: string;
}

export interface RevealItem {
  id: string;
  category: string;
  title: string;
  description: string;
  meta?: string;
  topics?: RevealTopic[];
}

export interface ProgressiveRevealProps {
  items: RevealItem[];
  initialVisibleCount?: number;
  title?: string;
  subtitle?: string;
}

export default function ProgressiveReveal({
  items,
  initialVisibleCount = 1,
  title,
  subtitle,
}: ProgressiveRevealProps) {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const handleShowNext = () => {
    setVisibleCount((prev) => Math.min(prev + 1, items.length));
  };

  const handleExpandAll = () => {
    setVisibleCount(items.length);
  };

  const allVisible = visibleCount >= items.length;
  const visibleItems = items.slice(0, visibleCount);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 24 },
    show: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -24 },
  };

  return (
    <motion.div
      className="river-component progressive-reveal"
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
    >
      {title && (
        <motion.h3
          className="prr-title"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          {title}
        </motion.h3>
      )}

      {subtitle && <p className="prr-subtitle">{subtitle}</p>}

      <motion.ol
        className="prr-list"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {visibleItems.map((item, index) => (
            <motion.li
              key={item.id}
              className="prr-item"
              variants={itemVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              layout
            >
              <div className="prr-step-indicator">
                <span className="prr-step-number">{index + 1}</span>
                <span className="prr-step-label">{item.category}</span>
              </div>

              <div className="prr-content">
                <h4 className="prr-group-title">{item.title}</h4>

                <p className="prr-summary">{item.description}</p>

                {item.meta && (
                  <div className="prr-meta">
                    <span className="prr-badge prr-badge-count">
                      {item.meta}
                    </span>
                  </div>
                )}

                {item.topics && (
                  <ul className="prr-topics">
                    {item.topics.map((topic, tIndex) => (
                      <li key={tIndex} className="prr-topic">
                        {topic.link ? (
                          <a href={topic.link} className="prr-topic-link">
                            {topic.label}
                          </a>
                        ) : (
                          topic.label
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ol>

      <div className="prr-controls">
        {!allVisible && (
          <button
            type="button"
            className="prr-btn prr-btn-primary"
            onClick={handleShowNext}
          >
            Show next →
          </button>
        )}

        {!allVisible && (
          <button
            type="button"
            className="prr-btn prr-btn-secondary"
            onClick={handleExpandAll}
          >
            Reveal all
          </button>
        )}

        {allVisible && (
          <span className="prr-all-visible">
            All sections are visible. Explore any step that interests you.
          </span>
        )}
      </div>
    </motion.div>
  );
}
