// src/components/ContributeBanner/ContributeBanner.tsx
// A visually elevated "How to Contribute" section for the Nadikosh homepage.
// Uses Starlight CSS variables for full theme compatibility.

import { motion } from "motion/react";
import styles from "./ContributeNowBanner.module.css";

const WAYS = [
  {
    icon: "✍️",
    title: "Write for Nadikosh",
    desc: "Author articles, river profiles, or Itihaas entries. We accept Markdown and MDX.",
    link: "/nadi-stuti/how-we-work",
    cta: "Contribution guide →",
  },
  {
    icon: "💻",
    title: "Improve the wiki",
    desc: "Add data, fix inaccuracies, or build interactive components. Open source on GitHub.",
    link: "/nadi-stuti/guides/developer-guide/",
    cta: "Developer guide →",
  },
  {
    icon: "📱",
    title: "Mobile workflow",
    desc: "Contribute entirely from your phone. No laptop needed.",
    link: "/nadi-stuti/guides/mobile-workflow",
    cta: "Mobile guide →",
  },
  {
    icon: "❤️",
    title: "Share & spread",
    desc: "Share articles, print materials, and invite river-lovers into this community.",
    link: "/nadi-stuti/print",
    cta: "Print materials →",
  },
];

export default function ContributeNowBanner() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Help build Nadikosh</h2>
        <p className={styles.subtitle}>
          This is an open, community-driven knowledge base. Every article,
          dataset, and story makes it more useful for the next person who wants
          to serve our rivers.
        </p>
      </div>
      <div className={styles.grid}>
        {WAYS.map((way, i) => (
          <motion.a
            key={way.title}
            href={way.link}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -3 }}
            className={styles.card}
          >
            <span className={styles.icon}>{way.icon}</span>
            <strong className={styles.cardTitle}>{way.title}</strong>
            <p className={styles.cardDesc}>{way.desc}</p>
            <span className={styles.cardCta}>{way.cta}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
