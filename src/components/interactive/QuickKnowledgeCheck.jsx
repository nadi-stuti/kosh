// src/components/interactive/QuickKnowledgeCheck.jsx
import { motion } from "motion/react";

const QuickKnowledgeCheck = ({ questions, resultLabels }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="river-component quiz-container"
    >
      Hello World
    </motion.div>
  );
};

export default QuickKnowledgeCheck;
