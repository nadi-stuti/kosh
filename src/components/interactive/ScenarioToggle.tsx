import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "@/styles/components-tokens.css";
import "./ScenarioToggle.css";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ScenarioMetric {
  label: string;
  value: number; // 0–100, used to drive the meter width
  unit?: string;
}

export interface ScenarioItem {
  id: string;
  label: string;
  description: string;
  status: "critical" | "warning" | "healthy";
  metrics: ScenarioMetric[];
}

export interface ScenarioToggleProps {
  scenarios: ScenarioItem[];
  title?: string;
  caption?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ScenarioToggle({
  scenarios,
  title,
  caption,
}: ScenarioToggleProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = scenarios[activeIndex];

  return (
    <div className="river-component scenario-toggle">
      {/* Title */}
      {title && <h3 className="scenario-toggle__title">{title}</h3>}

      {/* Toggle Buttons */}
      <div className="scenario-toggle__tabs" role="tablist">
        {scenarios.map((scenario, index) => (
          <button
            key={scenario.id}
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`scenario-panel-${scenario.id}`}
            className={[
              "scenario-toggle__tab",
              `scenario-toggle__tab--${scenario.status}`,
              index === activeIndex ? "scenario-toggle__tab--active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setActiveIndex(index)}
          >
            {scenario.label}
          </button>
        ))}
      </div>

      {/* Active Scenario Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          role="tabpanel"
          id={`scenario-panel-${active.id}`}
          className={`scenario-toggle__panel scenario-toggle__panel--${active.status}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <span
            className={`scenario-toggle__badge scenario-toggle__badge--${active.status}`}
          >
            {active.status}
          </span>

          {/* Description */}
          <p className="scenario-toggle__description">{active.description}</p>

          {/* Metrics */}
          <div className="scenario-toggle__metrics">
            {active.metrics.map((metric) => (
              <div key={metric.label} className="scenario-toggle__metric">
                <div className="scenario-toggle__metric-header">
                  <span className="scenario-toggle__metric-label">
                    {metric.label}
                  </span>
                  <span className="scenario-toggle__metric-value">
                    {metric.value}
                    {metric.unit ?? "%"}
                  </span>
                </div>

                {/* Animated meter bar */}
                <div
                  className="scenario-toggle__meter-track"
                  role="meter"
                  aria-valuenow={metric.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={metric.label}
                >
                  <motion.div
                    className={`scenario-toggle__meter-fill scenario-toggle__meter-fill--${active.status}`}
                    initial={{ width: "0%" }}
                    animate={{ width: `${metric.value}%` }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      {caption && <p className="scenario-toggle__caption">{caption}</p>}
    </div>
  );
}
