// src/components/RiverActionCenter/RiverActionCenter.tsx
// Triveni-net · River Action Center — Demo Component
// Uses Starlight CSS variables for full theme compatibility

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./RiverActionCenter.module.css";

// ─── Data ────────────────────────────────────────────────────────────────────

const MAJOR_RIVER_COLORS: Record<string, string> = {
  Ganga: "--sl-color-red-low",
  Yamuna: "--sl-color-blue-low",
  Sindhu: "--sl-color-purple-low",
  Brahmaputra: "--sl-color-green-low",
  Godavari: "--sl-color-orange-low",
  Narmada: "--sl-color-teal-low",
  Mahanadi: "--sl-color-yellow-low",
  Krishna: "--sl-color-gray-5",
  Kaveri: "--sl-color-pink-low",
};

// Map each minor river to its closest major river zone
const MINOR_TO_MAJOR: Record<string, string> = {
  Chambal: "Yamuna",
  Betwa: "Yamuna",
  Son: "Ganga",
  Ramganga: "Ganga",
  Kosi: "Ganga",
  Gandak: "Ganga",
  Ghaghra: "Ganga",
  Tapti: "Narmada",
  Sabarmati: "Sindhu",
  Tungabhadra: "Krishna",
  Mahi: "Narmada",
  Banas: "Yamuna",
  Damodar: "Mahanadi",
  Subarnarekha: "Mahanadi",
  Teesta: "Brahmaputra",
};

const MAJOR_RIVERS = [
  "Ganga",
  "Yamuna",
  "Sindhu",
  "Brahmaputra",
  "Godavari",
  "Narmada",
  "Mahanadi",
  "Krishna",
  "Kaveri",
];

const MINOR_RIVERS = [
  "Chambal",
  "Betwa",
  "Son",
  "Ramganga",
  "Kosi",
  "Gandak",
  "Ghaghra",
  "Tapti",
  "Sabarmati",
  "Tungabhadra",
  "Mahi",
  "Banas",
  "Damodar",
  "Subarnarekha",
  "Teesta",
];

const ACTIONS = [
  {
    id: "study",
    emoji: "📚",
    label: "Study",
    desc: "Structured learning from basics to expert level",
  },
  {
    id: "research",
    emoji: "🔬",
    label: "Research",
    desc: "Access datasets, methods & scientific tools",
  },
  {
    id: "work",
    emoji: "🌱",
    label: "Ground Action",
    desc: "Cleanup guides, field protocols & volunteering",
  },
  {
    id: "discuss",
    emoji: "💬",
    label: "Discussions",
    desc: "Latest news, forums & live conversations",
  },
  {
    id: "meditate",
    emoji: "🪔",
    label: "Itihaas",
    desc: "Rituals, holy scriptures & river history",
  },
  {
    id: "monitor",
    emoji: "📊",
    label: "Monitor",
    desc: "Pollution alerts & water quality indicators",
  },
];

const TRIVENI_STREAMS = [
  {
    icon: "🌐",
    label: "Web Intelligence",
    desc: "Scans news, forums, social posts & research articles in real time",
  },
  {
    icon: "🛰️",
    label: "Satellite Layer",
    desc: "Processes ISRO & ESA imagery for land-use, flood & pollution mapping",
  },
  {
    icon: "📖",
    label: "Kosh Knowledge",
    desc: "Queries the full Nadikosh database — articles, river data & community notes",
  },
];

function getRiverColor(river: string): string {
  // Direct major river match
  if (MAJOR_RIVER_COLORS[river]) return MAJOR_RIVER_COLORS[river];
  // Minor river → look up its major → get that color
  const major = MINOR_TO_MAJOR[river];
  if (major && MAJOR_RIVER_COLORS[major]) return MAJOR_RIVER_COLORS[major];
  // Fallback
  return "--sl-color-accent";
}

// ─── Types ───────────────────────────────────────────────────────────────────

type Step = "river" | "action" | "result";
type RiverType = "major" | "minor";

// ─── Main Component ──────────────────────────────────────────────────────────

export default function RiverActionCenter() {
  const [step, setStep] = useState<Step>("river");
  const [riverType, setRiverType] = useState<RiverType>("major");
  const [selectedRiver, setSelectedRiver] = useState<string | null>(null);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const rivers = riverType === "major" ? MAJOR_RIVERS : MINOR_RIVERS;

  const handleRiverSelect = (river: string) => {
    setSelectedRiver(river);
    setSelectedAction(null);
    setStep("action");
  };

  const handleReset = () => {
    setStep("river");
    setSelectedRiver(null);
    setSelectedAction(null);
  };

  const stepKeys: Step[] = ["river", "action", "result"];
  const currentIndex = stepKeys.indexOf(step);

  return (
    <section className={styles.wrapper}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <span className={styles.badge}>
          <motion.span
            className={styles.badgeDot}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          TRIVENI-NET · COMING SOON
        </span>
        <h2 className={styles.title}>River Action Center</h2>
        <p className={styles.subtitle}>
          Select your river and what you want to do. Triveni-net will surface
          the most relevant knowledge, live data, and next steps — all from
          Nadikosh.
        </p>
      </div>

      {/* ── Step Indicator ── */}
      <div className={styles.stepper} role="list">
        {["Select River", "Choose Action", "Your Plan"].map((label, i) => {
          const isActive = currentIndex === i;
          const isDone = currentIndex > i;
          return (
            <div
              key={label}
              role="listitem"
              className={[
                styles.stepItem,
                isActive ? styles.stepActive : "",
                isDone ? styles.stepDone : "",
              ].join(" ")}
            >
              <motion.div
                className={styles.stepDot}
                animate={isActive ? { scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {isDone ? "✓" : i + 1}
              </motion.div>
              <span className={styles.stepLabel}>{label}</span>
              {i < 2 && <span className={styles.stepLine} />}
            </div>
          );
        })}
      </div>

      {/* ── Panels ── */}
      <div className={styles.panelShell}>
        <AnimatePresence mode="wait">
          {/* Step 1 — River selection */}
          {step === "river" && (
            <motion.div
              key="river"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.3 }}
              className={styles.panel}
            >
              <div className={styles.toggleRow}>
                <button
                  className={`${styles.toggleBtn} ${riverType === "major" ? styles.toggleActive : ""}`}
                  onClick={() => setRiverType("major")}
                >
                  9 Major River Zones
                </button>
                <button
                  className={`${styles.toggleBtn} ${riverType === "minor" ? styles.toggleActive : ""}`}
                  onClick={() => setRiverType("minor")}
                >
                  Minor Rivers
                </button>
              </div>

              <p className={styles.panelHint}>Select a river to continue</p>

              <div className={styles.riverGrid}>
                {rivers.map((river, index) => {
                  const colorVar = getRiverColor(river);
                  return (
                    <motion.button
                      key={river}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className={`${styles.riverBtn} ${selectedRiver === river ? styles.riverSelected : ""}`}
                      style={{
                        backgroundColor: `var(${colorVar})`,
                        borderColor:
                          selectedRiver === river
                            ? `var(${colorVar.replace("-low", "-high")})`
                            : "var(--sl-color-hairline)",
                      }}
                      onClick={() => handleRiverSelect(river)}
                    >
                      <span className={styles.riverWave}>{index + 1}</span>
                      {river}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 2 — Action selection */}
          {step === "action" && (
            <motion.div
              key="action"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.3 }}
              className={styles.panel}
            >
              <p className={styles.panelHint}>
                River: <strong>{selectedRiver}</strong> · What do you want to
                do?
              </p>

              <div className={styles.actionGrid}>
                {ACTIONS.map((action) => (
                  <motion.button
                    key={action.id}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`${styles.actionBtn} ${selectedAction === action.id ? styles.actionSelected : ""}`}
                    onClick={() => setSelectedAction(action.id)}
                  >
                    <span className={styles.actionEmoji}>{action.emoji}</span>
                    <strong className={styles.actionLabel}>
                      {action.label}
                    </strong>
                    <span className={styles.actionDesc}>{action.desc}</span>
                  </motion.button>
                ))}
              </div>

              <AnimatePresence>
                {selectedAction && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={styles.generateRow}
                  >
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={styles.generateBtn}
                      onClick={() => setStep("result")}
                    >
                      Show me what I can {selectedAction} on {selectedRiver} →
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                className={styles.backBtn}
                onClick={() => setStep("river")}
              >
                ← Change river
              </button>
            </motion.div>
          )}

          {/* Step 3 — Triveni-net WIP result */}
          {step === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className={styles.panel}
            >
              <TriveniWIP
                river={selectedRiver!}
                action={ACTIONS.find((a) => a.id === selectedAction)!}
                onReset={handleReset}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Triveni WIP Screen ───────────────────────────────────────────────────────

interface TriveniWIPProps {
  river: string;
  action: (typeof ACTIONS)[number];
  onReset: () => void;
}

function TriveniWIP({ river, action, onReset }: TriveniWIPProps) {
  return (
    <div className={styles.wipRoot}>
      {/* Orbit animation */}
      <div className={styles.wipOrbitWrap}>
        <motion.div
          className={styles.wipOrbitRing}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className={styles.wipOrbitRingSmall}
          animate={{ rotate: -360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
        <span className={styles.wipCenterIcon}>🌊</span>
      </div>

      {/* Context */}
      <p className={styles.wipContext}>
        {river} · {action.emoji} {action.label}
      </p>
      <h3 className={styles.wipTitle}>Triveni-net is being built</h3>
      <p className={styles.wipDesc}>
        When live, Triveni-net will merge three intelligent data streams to
        build a personalised action plan for every river in Nadikosh.
      </p>

      {/* Three data streams */}
      <div className={styles.streamGrid}>
        {TRIVENI_STREAMS.map((stream, i) => (
          <motion.div
            key={stream.label}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.15 }}
            className={styles.streamCard}
          >
            <div className={styles.streamPulseWrap}>
              <motion.div
                className={styles.streamPulse}
                animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.6 }}
              />
              <span className={styles.streamIcon}>{stream.icon}</span>
            </div>
            <div className={styles.streamText}>
              <strong>{stream.label}</strong>
              <p className={styles.streamDesc}>{stream.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className={styles.wipCta}>
        <p className={styles.wipCtaText}>
          Want to be notified when this goes live?
        </p>
        <a
          href="https://chat.whatsapp.com/GWWZngBJzYsDZ8AGzF6Xt4"
          className={styles.wipCtaBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join NadiStuti Sabha →
        </a>
      </div>

      <button className={styles.backBtn} onClick={onReset}>
        ← Try another river
      </button>
    </div>
  );
}
