// src/components/ContributeBanner/ContributeBanner.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./ContributeBanner.module.css";

// ── Data ──────────────────────────────────────────────────────────────────────

const SECTIONS = [
  {
    id: "pollution",
    emoji: "🎓",
    label: "Pollution Academy",
    tag: "Educate & explain",
  },
  {
    id: "involved",
    emoji: "🌱",
    label: "Get Involved",
    tag: "Guide & inspire action",
  },
  {
    id: "rivers",
    emoji: "🗺️",
    label: "Our Rivers",
    tag: "Document & reference",
  },
  {
    id: "research",
    emoji: "🔬",
    label: "Data & Research",
    tag: "Analyse & discover",
  },
  { id: "itihaas", emoji: "🪔", label: "Itihaas", tag: "Preserve & celebrate" },
  {
    id: "thinking",
    emoji: "💬",
    label: "Thinking Grounds",
    tag: "Discuss & connect",
  },
  { id: "blog", emoji: "✍️", label: "Our Blog", tag: "Share your voice" },
];

const WRITING_TYPES: Record<
  string,
  { icon: string; label: string; desc: string }[]
> = {
  pollution: [
    {
      icon: "📚",
      label: "Article series",
      desc: "Multi-part deep-dive on a pollution topic",
    },
    {
      icon: "📖",
      label: "Educational article",
      desc: "Stand-alone explainer for any audience",
    },
    {
      icon: "🎓",
      label: "Student study guide",
      desc: "Exam-ready notes and concept summaries",
    },
    {
      icon: "🛠️",
      label: "Tool explainer",
      desc: "How to use dashboards, GIS, or field kits",
    },
    {
      icon: "🔍",
      label: "Stretch case study",
      desc: "Deep-dive on a specific polluted stretch",
    },
  ],
  involved: [
    {
      icon: "📋",
      label: "Ground-worker rulebook",
      desc: "Field guide or standard operating procedure",
    },
    {
      icon: "🔥",
      label: "Inspiration piece",
      desc: "Motivational story or call to action",
    },
    {
      icon: "📅",
      label: "Event action plan",
      desc: "Step-by-step plan for a cleanup or drive",
    },
    {
      icon: "🔎",
      label: "Event review",
      desc: "What went right or wrong — learnings for all",
    },
    {
      icon: "🌟",
      label: "Volunteer starter kit",
      desc: "Everything a new volunteer needs to begin",
    },
  ],
  rivers: [
    {
      icon: "🗺️",
      label: "Full river entry",
      desc: "Complete encyclopedia profile for a river",
    },
    {
      icon: "📊",
      label: "Extend river data",
      desc: "Add or update facts, stats, and records",
    },
    {
      icon: "🏛️",
      label: "Cultural note",
      desc: "History, folklore, or local significance",
    },
    {
      icon: "⚠️",
      label: "Pollution snapshot",
      desc: "Update the health & pollution status entry",
    },
    {
      icon: "🤝",
      label: "Community entry",
      desc: "Document local groups and ongoing actions",
    },
  ],
  research: [
    {
      icon: "📄",
      label: "Research paper",
      desc: "Write or review a scientific publication",
    },
    {
      icon: "🧪",
      label: "Scientific article",
      desc: "Analysis or findings using Nadikosh data",
    },
    {
      icon: "📦",
      label: "Dataset review",
      desc: "Annotate or document a dataset for others",
    },
    {
      icon: "⚙️",
      label: "Research tool",
      desc: "Build or document a tool for researchers",
    },
    {
      icon: "🤝",
      label: "Collaborative research",
      desc: "Help or co-author with another researcher",
    },
  ],
  itihaas: [
    {
      icon: "📜",
      label: "Granth entry",
      desc: "Write or modify a scripture-based reference",
    },
    {
      icon: "🙏",
      label: "Stotra & shloka",
      desc: "Maintain or add hymns and verses on rivers",
    },
    {
      icon: "🔤",
      label: "Text translation",
      desc: "Translate or peer-review an ancient text",
    },
    {
      icon: "🪔",
      label: "Ritual guide",
      desc: "Document a ritual with a practical how-to",
    },
    {
      icon: "📖",
      label: "Cultural narrative",
      desc: "A historical or civilisational river story",
    },
  ],
  thinking: [
    {
      icon: "💧",
      label: "River Drop fact card",
      desc: "A short, timeless fact with tags",
    },
    {
      icon: "🔗",
      label: "Discussion summary",
      desc: "Summarise a forum thread or social post",
    },
    {
      icon: "❓",
      label: "Answer a question",
      desc: "Respond in a community discussion group",
    },
    {
      icon: "✍️",
      label: "Open essay",
      desc: "Personal reflection or open-ended piece",
    },
    {
      icon: "📢",
      label: "Community spotlight",
      desc: "Highlight a person, group, or initiative",
    },
  ],
  blog: [
    {
      icon: "🌍",
      label: "Conservation article",
      desc: "Guest article on river conservation",
    },
    {
      icon: "🏕️",
      label: "Field story",
      desc: "Personal narrative from on the ground",
    },
    {
      icon: "⚖️",
      label: "Policy opinion",
      desc: "Your take on water policy or governance",
    },
    {
      icon: "📸",
      label: "Photo essay",
      desc: "Images and narrative from a river journey",
    },
    {
      icon: "🎙️",
      label: "Expert interview",
      desc: "Q&A with a researcher, activist, or local",
    },
  ],
};

const COMPONENT_LIBRARY: Record<
  string,
  { icon: string; name: string; desc: string }[]
> = {
  Interactive: [
    { icon: "🗺️", name: "River Map", desc: "Zoomable map with annotations" },
    {
      icon: "⏱️",
      name: "Pollution Timeline",
      desc: "Scrollable historical timeline",
    },
    {
      icon: "🧠",
      name: "Quiz Block",
      desc: "Interactive MCQ with live scoring",
    },
    { icon: "📊", name: "Data Table", desc: "Sortable, filterable data grid" },
    {
      icon: "🔥",
      name: "Hotspot Explorer",
      desc: "Click-to-explore pollution zones",
    },
  ],
  Infographic: [
    { icon: "📈", name: "Line Chart", desc: "Time-series via Nivo" },
    { icon: "📊", name: "Bar Chart", desc: "Comparative data via Nivo" },
    {
      icon: "🌊",
      name: "Sankey Diagram",
      desc: "Pollution source flow visual",
    },
    { icon: "🗾", name: "Basin Map", desc: "River basin infographic overlay" },
    {
      icon: "🔀",
      name: "Comparison Table",
      desc: "Side-by-side comparison card",
    },
  ],
  Multimedia: [
    { icon: "🎥", name: "Video Embed", desc: "YouTube / Vimeo inline player" },
    { icon: "🖼️", name: "Photo Gallery", desc: "Lightbox image gallery" },
    { icon: "🎙️", name: "Audio Player", desc: "Podcast or field recording" },
    {
      icon: "🎞️",
      name: "Documentary Clip",
      desc: "Short doc embed with caption",
    },
  ],
};

const MOCK_FIELDS: Record<
  string,
  { key: string; type: string; value: string | boolean }[]
> = {
  "River Map": [
    { key: "title", type: "text", value: "Ganga Basin Overview" },
    { key: "zoom", type: "range", value: "6" },
    { key: "showHotspots", type: "toggle", value: true },
    { key: "colorTheme", type: "color", value: "#4fa8d8" },
  ],
  "Line Chart": [
    { key: "title", type: "text", value: "BOD Levels 2015–2024" },
    { key: "dataSource", type: "select", value: "CPCB Water Quality" },
    { key: "showLegend", type: "toggle", value: true },
    { key: "height", type: "number", value: "320" },
  ],
  "Quiz Block": [
    { key: "title", type: "text", value: "Test your knowledge" },
    { key: "passingScore", type: "number", value: "70" },
    { key: "showExplanations", type: "toggle", value: true },
    { key: "colorTheme", type: "color", value: "#6d4fc2" },
  ],
  "Bar Chart": [
    { key: "title", type: "text", value: "Pollution by source" },
    { key: "dataSource", type: "select", value: "India-WRIS" },
    { key: "horizontal", type: "toggle", value: false },
    { key: "colorTheme", type: "color", value: "#e07b39" },
  ],
  "Photo Gallery": [
    { key: "title", type: "text", value: "River Field Photos" },
    { key: "columns", type: "number", value: "3" },
    { key: "showCaptions", type: "toggle", value: true },
    { key: "colorTheme", type: "color", value: "#2d8c6f" },
  ],
};

const STEP_LABELS = [
  "Section",
  "Content Type",
  "Write",
  "Components",
  "Series",
  "Done",
];

const AI_IMAGES = [
  { caption: "Industrial effluents entering a tributary near Kanpur" },
  { caption: "Aerial view of foam on Yamuna near Okhla Barrage" },
  { caption: "Volunteer water-quality testing on the Ganga ghat" },
];

const SYNTAX_SNIPPETS = [
  {
    label: "Tip callout",
    code: '<Aside type="tip">\n  Your helpful tip here.\n</Aside>',
  },
  {
    label: "Warning callout",
    code: '<Aside type="caution">\n  Important warning.\n</Aside>',
  },
  { label: "Stat badge", code: '<Badge text="New" variant="success" />' },
  {
    label: "Info card",
    code: '<Card title="Did you know?">\n  Your content.\n</Card>',
  },
];

// ── Types ──────────────────────────────────────────────────────────────────────
type Step = 1 | 2 | 3 | 4 | 5 | 6;

// ── Main Component ─────────────────────────────────────────────────────────────
export default function ContributeBanner() {
  const [step, setStep] = useState<Step>(1);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const sectionObj = SECTIONS.find((s) => s.id === selectedSection);

  const go = (s: Step) => setStep(s);
  const reset = () => {
    setStep(1);
    setSelectedSection(null);
    setSelectedType(null);
  };

  return (
    <section className={`not-content ${styles.wrapper}`}>
      {/* Badge */}
      <div className={styles.topBar}>
        <span className={styles.badge}>
          <motion.span
            className={styles.badgeDot}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          CONTRIBUTION STUDIO · COMING SOON
        </span>
        <h2 className={styles.title}>Write for Nadikosh</h2>
        <p className={styles.subtitle}>
          Every river needs a voice. This studio will guide you — writer,
          researcher, devotee, or activist — through creating rich, beautifully
          structured content for the world's most comprehensive river knowledge
          base.
        </p>
      </div>

      {/* Step Indicator */}
      <div className={styles.stepper}>
        {STEP_LABELS.map((label, i) => {
          const n = (i + 1) as Step;
          const isActive = step === n;
          const isDone = step > n;
          return (
            <div
              key={label}
              className={`${styles.stepItem} ${isActive ? styles.sActive : ""} ${isDone ? styles.sDone : ""}`}
            >
              <motion.div
                className={styles.stepDot}
                animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                {isDone ? "✓" : n}
              </motion.div>
              <span className={styles.stepLabel}>{label}</span>
              {i < STEP_LABELS.length - 1 && (
                <span className={styles.stepLine} />
              )}
            </div>
          );
        })}
      </div>

      {/* Panels */}
      <div className={styles.panelShell}>
        <AnimatePresence mode="wait">
          {/* ── Step 1: Section ── */}
          {step === 1 && (
            <motion.div key="s1" {...anim} className={styles.panel}>
              <p className={styles.hint}>
                Which section do you want to write for?
              </p>
              <div className={styles.sectionGrid}>
                {SECTIONS.map((sec) => (
                  <motion.button
                    key={sec.id}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`${styles.sectionCard} ${selectedSection === sec.id ? styles.sectionSelected : ""}`}
                    onClick={() => {
                      setSelectedSection(sec.id);
                      setSelectedType(null);
                      go(2);
                    }}
                  >
                    <span className={styles.sectionEmoji}>{sec.emoji}</span>
                    <strong className={styles.sectionLabel}>{sec.label}</strong>
                    <span className={styles.sectionTag}>{sec.tag}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Step 2: Content Type ── */}
          {step === 2 && selectedSection && (
            <motion.div key="s2" {...anim} className={styles.panel}>
              <p className={styles.hint}>
                Writing for{" "}
                <strong>
                  {sectionObj?.emoji} {sectionObj?.label}
                </strong>{" "}
                — What do you want to write?
              </p>
              <div className={styles.typeList}>
                {WRITING_TYPES[selectedSection]?.map((t) => (
                  <motion.button
                    key={t.label}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${styles.typeRow} ${selectedType === t.label ? styles.typeSelected : ""}`}
                    onClick={() => {
                      setSelectedType(t.label);
                    }}
                  >
                    <span className={styles.typeIcon}>{t.icon}</span>
                    <div className={styles.typeText}>
                      <strong>{t.label}</strong>
                      <span className={styles.typeDesc}>{t.desc}</span>
                    </div>
                    <span className={styles.typeArrow}>›</span>
                  </motion.button>
                ))}
              </div>
              <AnimatePresence>
                {selectedType && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={styles.nextRow}
                  >
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={styles.nextBtn}
                      onClick={() => go(3)}
                    >
                      Start writing: {selectedType} →
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
              <button className={styles.backBtn} onClick={() => go(1)}>
                ← Change section
              </button>
            </motion.div>
          )}

          {/* ── Step 3: Editor ── */}
          {step === 3 && (
            <motion.div key="s3" {...anim} className={styles.panel}>
              <p className={styles.hint}>
                <strong>
                  {sectionObj?.emoji} {sectionObj?.label}
                </strong>{" "}
                · {selectedType} — Write your article below
              </p>
              <div className={styles.editorLayout}>
                {/* Mock editor */}
                <div className={styles.editorLeft}>
                  <div className={styles.editorToolbar}>
                    {["H1", "H2", "B", "I", '"', "🔗", "🖼️"].map((t) => (
                      <span key={t} className={styles.toolbarBtn}>
                        {t}
                      </span>
                    ))}
                    <span
                      className={`${styles.toolbarBtn} ${styles.toolbarComponent}`}
                    >
                      ⚡ Component
                    </span>
                  </div>
                  <div className={styles.editorBody}>
                    <div className={styles.editorLine}>
                      <span className={styles.mdH1}>
                        # Why Our Rivers Are Polluted
                      </span>
                    </div>
                    <div className={styles.editorLine}>
                      <span className={styles.mdMeta}>
                        Part 1 of 27 · Pollution Academy · Nadikosh
                      </span>
                    </div>
                    <div
                      className={styles.editorLine + " " + styles.editorBlank}
                    />
                    <div className={styles.editorLine}>
                      <span className={styles.mdH2}>## The Silent Crisis</span>
                    </div>
                    <div className={styles.editorLine}>
                      <span className={styles.mdText}>
                        India's rivers carry the memory of civilisations. But
                        over the last century, the choices
                      </span>
                    </div>
                    <div className={styles.editorLine}>
                      <span className={styles.mdText}>
                        we made upstream have begun to silence them...
                      </span>
                    </div>
                    <div
                      className={styles.editorLine + " " + styles.editorBlank}
                    />
                    <div className={styles.editorLine}>
                      <span className={styles.mdComponent}>
                        {'<Aside type="tip">'}
                      </span>
                    </div>
                    <div className={styles.editorLine}>
                      <span className={styles.mdComponentInner}>
                        {" "}
                        BOD levels above 3 mg/L indicate moderate pollution.
                        Most
                      </span>
                    </div>
                    <div className={styles.editorLine}>
                      <span className={styles.mdComponentInner}>
                        {" "}
                        Indian urban stretches exceed 8 mg/L during dry season.
                      </span>
                    </div>
                    <div className={styles.editorLine}>
                      <span className={styles.mdComponent}>{"</Aside>"}</span>
                    </div>
                    <div
                      className={styles.editorLine + " " + styles.editorBlank}
                    />
                    <div className={styles.editorCursor} />
                  </div>
                </div>
                {/* Right assist panel */}
                <div className={styles.editorRight}>
                  <AssistPanel />
                </div>
              </div>
              <div className={styles.stepNavRow}>
                <button className={styles.backBtn} onClick={() => go(2)}>
                  ← Back
                </button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className={styles.nextBtn}
                  onClick={() => go(4)}
                >
                  Add components →
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* ── Step 4: Component Library ── */}
          {step === 4 && (
            <motion.div key="s4" {...anim} className={styles.panel}>
              <p className={styles.hint}>
                Enrich your article with interactive, infographic, and
                multimedia components.
              </p>
              <ComponentLibrary />
              <div className={styles.stepNavRow}>
                <button className={styles.backBtn} onClick={() => go(3)}>
                  ← Back
                </button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className={styles.nextBtn}
                  onClick={() => go(5)}
                >
                  Link to series →
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* ── Step 5: Series Linker ── */}
          {step === 5 && (
            <motion.div key="s5" {...anim} className={styles.panel}>
              <p className={styles.hint}>
                Connect your article to a series so readers always know what
                comes next.
              </p>
              <SeriesLinker title={selectedType || "Your Article"} />
              <div className={styles.stepNavRow}>
                <button className={styles.backBtn} onClick={() => go(4)}>
                  ← Back
                </button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className={styles.nextBtn}
                  onClick={() => go(6)}
                >
                  See it live →
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* ── Step 6: Completion ── */}
          {step === 6 && (
            <motion.div key="s6" {...anim} className={styles.panel}>
              <CompletionScreen onReset={reset} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ── Assist Panel (Step 3 right column) ─────────────────────────────────────────
function AssistPanel() {
  const [tab, setTab] = useState<"images" | "syntax">("images");
  return (
    <div className={styles.assistPanel}>
      <div className={styles.assistTabs}>
        <button
          className={`${styles.assistTab} ${tab === "images" ? styles.assistTabActive : ""}`}
          onClick={() => setTab("images")}
        >
          🤖 AI Images
        </button>
        <button
          className={`${styles.assistTab} ${tab === "syntax" ? styles.assistTabActive : ""}`}
          onClick={() => setTab("syntax")}
        >
          ⚡ Syntax
        </button>
      </div>
      <AnimatePresence mode="wait">
        {tab === "images" && (
          <motion.div
            key="img"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.assistBody}
          >
            <p className={styles.assistHint}>
              Suggested images for your article
            </p>
            {AI_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={styles.imgCard}
              >
                <motion.div
                  className={styles.imgPlaceholder}
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                >
                  <span>🖼️</span>
                </motion.div>
                <p className={styles.imgCaption}>{img.caption}</p>
                <button className={styles.imgInsert}>Insert →</button>
              </motion.div>
            ))}
            <button className={styles.generateMore}>
              Generate more suggestions
            </button>
          </motion.div>
        )}
        {tab === "syntax" && (
          <motion.div
            key="syn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.assistBody}
          >
            <p className={styles.assistHint}>
              Starlight components for richer articles
            </p>
            {SYNTAX_SNIPPETS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={styles.snippetCard}
              >
                <div className={styles.snippetLabel}>{s.label}</div>
                <pre className={styles.snippetCode}>{s.code}</pre>
                <button className={styles.imgInsert}>Insert →</button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Component Library (Step 4) ─────────────────────────────────────────────────
function ComponentLibrary() {
  const tabs = Object.keys(COMPONENT_LIBRARY);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selected, setSelected] = useState<string | null>(null);

  const fields = selected
    ? (MOCK_FIELDS[selected] ?? MOCK_FIELDS["River Map"])
    : null;

  return (
    <div className={styles.compLayout}>
      {/* Left: browser */}
      <div className={styles.compLeft}>
        <div className={styles.compTabs}>
          {tabs.map((t) => (
            <button
              key={t}
              className={`${styles.compTab} ${activeTab === t ? styles.compTabActive : ""}`}
              onClick={() => {
                setActiveTab(t);
                setSelected(null);
              }}
            >
              {t}
            </button>
          ))}
        </div>
        <div className={styles.compGrid}>
          {COMPONENT_LIBRARY[activeTab].map((c) => (
            <motion.button
              key={c.name}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`${styles.compCard} ${selected === c.name ? styles.compSelected : ""}`}
              onClick={() => setSelected(c.name)}
            >
              <span className={styles.compIcon}>{c.icon}</span>
              <strong className={styles.compName}>{c.name}</strong>
              <span className={styles.compDesc}>{c.desc}</span>
            </motion.button>
          ))}
        </div>
      </div>
      {/* Right: customizer */}
      <AnimatePresence mode="wait">
        {selected && fields ? (
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className={styles.customizerPanel}
          >
            <div className={styles.customizerHeader}>
              <strong>⚙️ Customise: {selected}</strong>
              <span className={styles.customizerSub}>
                Edit properties below — changes preview instantly
              </span>
            </div>
            <div className={styles.fieldList}>
              {fields.map((f) => (
                <div key={f.key} className={styles.fieldRow}>
                  <label className={styles.fieldLabel}>{f.key}</label>
                  {f.type === "text" && (
                    <input
                      readOnly
                      className={styles.fieldInput}
                      defaultValue={f.value as string}
                    />
                  )}
                  {f.type === "number" && (
                    <input
                      readOnly
                      className={styles.fieldInput}
                      type="number"
                      defaultValue={f.value as string}
                    />
                  )}
                  {f.type === "range" && (
                    <input
                      readOnly
                      className={styles.fieldRange}
                      type="range"
                      min="1"
                      max="12"
                      defaultValue={f.value as string}
                    />
                  )}
                  {f.type === "select" && (
                    <select disabled className={styles.fieldSelect}>
                      <option>{f.value as string}</option>
                    </select>
                  )}
                  {f.type === "toggle" && (
                    <div
                      className={`${styles.toggle} ${f.value ? styles.toggleOn : ""}`}
                    >
                      <div className={styles.toggleThumb} />
                    </div>
                  )}
                  {f.type === "color" && (
                    <div
                      className={styles.colorSwatch}
                      style={{ background: f.value as string }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className={styles.customizerFooter}>
              <span className={styles.codeHint}>Generated MDX:</span>
              <pre
                className={styles.customizerCode}
              >{`<${selected.replace(" ", "")}\n  title="${(fields.find((f) => f.key === "title")?.value as string) ?? "My component"}"\n  dataSource="Nadikosh DB"\n/>`}</pre>
              <button className={styles.insertCompBtn}>
                ⚡ Insert into article
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className={styles.customizerPlaceholder}
          >
            <span>👆</span>
            <p>Select a component to customise it</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Series Linker (Step 5) ─────────────────────────────────────────────────────
const MOCK_ARTICLES = [
  "Part 2 — Sewage & Untreated Wastewater",
  "Part 3 — Industrial Effluents",
  "Part 4 — Agricultural Runoff",
  "Part 5 — Solid Waste & Plastics",
];

function SeriesLinker({ title }: { title: string }) {
  const [linked, setLinked] = useState(false);
  const [nextArticle, setNextArticle] = useState(MOCK_ARTICLES[0]);

  return (
    <div className={styles.seriesRoot}>
      {/* Chain visualisation */}
      <div className={styles.seriesChain}>
        <div className={`${styles.seriesNode} ${styles.seriesDone}`}>
          ✓ Part 1<br />
          <span>Introduction</span>
        </div>
        <div className={styles.seriesArrow}>→</div>
        <div className={`${styles.seriesNode} ${styles.seriesCurrent}`}>
          ✏️ Current
          <br />
          <span>{title.length > 18 ? title.slice(0, 18) + "…" : title}</span>
        </div>
        <div className={styles.seriesArrow}>→</div>
        <motion.div
          animate={linked ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.4 }}
          className={`${styles.seriesNode} ${linked ? styles.seriesLinked : styles.seriesEmpty}`}
        >
          {linked ? (
            <>
              🔗 Linked
              <br />
              <span>{nextArticle.slice(0, 18)}…</span>
            </>
          ) : (
            <>
              + Next
              <br />
              <span>not linked</span>
            </>
          )}
        </motion.div>
      </div>
      {/* Link selector */}
      {!linked ? (
        <div className={styles.linkPanel}>
          <p className={styles.hint}>
            Search or select the next article in this series
          </p>
          <select
            className={styles.linkSelect}
            value={nextArticle}
            onChange={(e) => setNextArticle(e.target.value)}
          >
            {MOCK_ARTICLES.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={styles.nextBtn}
            onClick={() => setLinked(true)}
          >
            Link articles →
          </motion.button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.linkSuccess}
        >
          <span>✓</span> <strong>Series linked.</strong> Readers will
          automatically see "{nextArticle}" as the next step.
          <button
            className={styles.backBtn}
            style={{ marginLeft: "1rem" }}
            onClick={() => setLinked(false)}
          >
            Change
          </button>
        </motion.div>
      )}
    </div>
  );
}

// ── Completion Screen (Step 6) ──────────────────────────────────────────────────
function CompletionScreen({ onReset }: { onReset: () => void }) {
  return (
    <div className={styles.completionRoot}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
        className={styles.completionCheck}
      >
        ✓
      </motion.div>
      <h3 className={styles.completionTitle}>
        Your article is ready to contribute
      </h3>
      <p className={styles.completionDesc}>
        Rich, structured, and beautifully linked — this is exactly the kind of
        content that helps Nadikosh grow. Here are two live examples of what you
        could build:
      </p>
      <div className={styles.exampleGrid}>
        <a
          href="/pollution-academy/why-rivers-are-polluted/"
          className={styles.exampleCard}
        >
          <span className={styles.exampleEmoji}>📚</span>
          <strong>"Why Our Rivers Are Polluted"</strong>
          <span className={styles.exampleMeta}>
            27-part article series · Pollution Academy
          </span>
          <span className={styles.exampleCta}>View series →</span>
        </a>
        <a href="/thinking-grounds/river-drops/" className={styles.exampleCard}>
          <span className={styles.exampleEmoji}>💧</span>
          <strong>"River Facts & Information"</strong>
          <span className={styles.exampleMeta}>
            Curated fact cards · Thinking Grounds
          </span>
          <span className={styles.exampleCta}>View River Drops →</span>
        </a>
      </div>
      <p className={styles.completionSub}>
        Write articles this rich in a fraction of the time — and share your
        knowledge with the world.
      </p>
      <div className={styles.completionActions}>
        <a
          href="/nadi-stuti/how-we-work"
          className={styles.nextBtn}
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          Start contributing →
        </a>
        <button className={styles.backBtn} onClick={onReset}>
          Try another section
        </button>
      </div>
    </div>
  );
}

// ── Shared animation props ─────────────────────────────────────────────────────
const anim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.28 },
};
