import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "@/styles/components-tokens.css";
import "./ZoneMap.css";

export interface ZonePosition {
  x: number;
  y: number;
}

export interface Zone {
  id: string;
  label: string;
  description: string;
  position: ZonePosition;
  icon?: string;
  color?: string;
}

export interface MapLabel {
  text: string;
  x: number;
  y: number;
}

export interface ZoneMapProps {
  zones: Zone[];
  title?: string;
  connectDots?: boolean;
  labels?: MapLabel[];
  backgroundImage?: string;
}

function generateRiverPath(zones: Zone[]) {
  if (zones.length < 2) return "";

  let path = `M ${zones[0].position.x} ${zones[0].position.y}`;

  for (let i = 1; i < zones.length; i++) {
    const prev = zones[i - 1].position;
    const curr = zones[i].position;

    const midY = (prev.y + curr.y) / 2;

    path += ` Q ${prev.x} ${midY} ${curr.x} ${curr.y}`;
  }

  return path;
}

export default function ZoneMap({
  zones,
  title,
  connectDots = true,
  labels = [],
  backgroundImage,
}: ZoneMapProps) {
  const [activeZone, setActiveZone] = useState<Zone | null>(null);

  const toggleZone = (zone: Zone) =>
    setActiveZone((prev) => (prev?.id === zone.id ? null : zone));

  const riverPath = connectDots ? generateRiverPath(zones) : "";

  const startColor = zones[0]?.color || "#7EC8E3";
  const endColor = zones[zones.length - 1]?.color || "#2E7D6B";

  return (
    <div className="river-component zone-map">
      {title && <h3 className="rbm-title">{title}</h3>}

      <div className="rbm-layout">
        <div className="rbm-svg-container">
          <svg viewBox="0 0 100 85" className="rbm-svg">
            <defs>
              <linearGradient id="riverGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={startColor} />
                <stop offset="100%" stopColor={endColor} />
              </linearGradient>

              <linearGradient id="bgGrad" x1="0" y1="0" x2="0.6" y2="1">
                <stop offset="0%" stopColor="#1a2a3a" />
                <stop offset="50%" stopColor="#162a22" />
                <stop offset="100%" stopColor="#0f1f1a" />
              </linearGradient>
            </defs>

            {/* Background */}
            {backgroundImage ? (
              <image
                href={backgroundImage}
                x="0"
                y="0"
                width="100"
                height="85"
                preserveAspectRatio="xMidYMid slice"
              />
            ) : (
              <rect width="100" height="85" fill="url(#bgGrad)" rx="3" />
            )}

            {/* Grid */}
            <line x1="0" y1="28" x2="100" y2="28" className="rbm-grid" />
            <line x1="0" y1="56" x2="100" y2="56" className="rbm-grid" />
            <line x1="33" y1="0" x2="33" y2="85" className="rbm-grid" />
            <line x1="66" y1="0" x2="66" y2="85" className="rbm-grid" />

            {/* Labels */}
            {labels.map((label, i) => {
              const charWidth = 4;
              const paddingX = 2;
              const width = label.text.length * charWidth + paddingX;

              return (
                <g key={i}>
                  <rect
                    x={label.x - width / 2}
                    y={label.y - 4}
                    width={width}
                    height="6"
                    rx="3"
                    className="rbm-label-bg"
                  />

                  <text
                    x={label.x}
                    y={label.y}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    className="rbm-label-text"
                  >
                    {label.text}
                  </text>
                </g>
              );
            })}

            {/* River */}
            {connectDots && riverPath && (
              <path
                d={riverPath}
                stroke="url(#riverGrad)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            )}

            {/* Zones */}
            {zones.map((zone) => {
              const isActive = activeZone?.id === zone.id;
              const color = zone.color || "#4EAAD1";

              return (
                <g
                  key={zone.id}
                  onClick={() => toggleZone(zone)}
                  style={{ cursor: "pointer" }}
                >
                  {isActive && (
                    <motion.circle
                      cx={zone.position.x}
                      cy={zone.position.y}
                      r={7}
                      fill="none"
                      stroke={color}
                      strokeWidth="1"
                      opacity={0.45}
                      initial={{ scale: 0.6 }}
                      animate={{ scale: 1 }}
                    />
                  )}

                  <motion.circle
                    cx={zone.position.x}
                    cy={zone.position.y}
                    r={isActive ? 5 : 4}
                    fill={color}
                    stroke="white"
                    strokeWidth="0.9"
                    whileHover={{ r: 5.5 }}
                    whileTap={{ r: 3.5 }}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="rbm-panel">
          <AnimatePresence mode="wait">
            {activeZone ? (
              <motion.div
                key={activeZone.id}
                className="rbm-info"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {activeZone.icon && (
                  <span className="rbm-info-icon">{activeZone.icon}</span>
                )}

                <h4 className="rbm-zone-title">{activeZone.label}</h4>

                <p className="rbm-zone-desc">{activeZone.description}</p>

                <button
                  className="rbm-close"
                  onClick={() => setActiveZone(null)}
                >
                  ✕
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="prompt"
                className="rbm-prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="rbm-prompt-icon">👆</span>
                <p>Click a zone on the map to explore.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="rbm-pills">
        {zones.map((zone) => (
          <motion.button
            key={zone.id}
            className={`rbm-pill${
              activeZone?.id === zone.id ? " rbm-pill--active" : ""
            }`}
            onClick={() => toggleZone(zone)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={
              {
                "--zone-color": zone.color || "var(--sl-color-accent)",
              } as React.CSSProperties
            }
          >
            {zone.icon && `${zone.icon} `}
            {zone.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
