import React from "react";
import { motion } from "motion/react";
import { ResponsiveBar } from "@nivo/bar";
import "@/styles/components-tokens.css";
import "./BarChart.css";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BarDatum {
  category: string;
  value: number;
}

export interface BarChartProps {
  data: BarDatum[];
  title?: string;
  caption?: string;
  colors?: string[];
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BarChart({
  data,
  title,
  caption,
  colors,
}: BarChartProps) {
  const nivoData = data.map((d) => ({ category: d.category, value: d.value }));

  // Dynamic canvas height: scales cleanly with any number of bars
  const canvasHeight = Math.max(200, data.length * 56 + 32);

  // Cycle through caller-supplied colors or fall back to accent-toned defaults
  const resolvedColors =
    colors && colors.length > 0
      ? colors
      : ["#6366f1", "#818cf8", "#a5b4fc", "#c7d2fe", "#e0e7ff"];

  const colorFn = (bar: { index: number }) =>
    resolvedColors[bar.index % resolvedColors.length];

  return (
    <motion.div
      className="river-component bar-chart"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8 }}
    >
      {title && <h3 className="bar-chart__title">{title}</h3>}

      <div
        className="bar-chart__canvas  not-content"
        style={{ height: canvasHeight }}
      >
        <ResponsiveBar
          data={nivoData}
          keys={["value"]}
          indexBy="category"
          layout="horizontal"
          margin={{ top: 8, right: 64, bottom: 24, left: 168 }}
          padding={0.35}
          colors={colorFn}
          borderRadius={4}
          axisLeft={{
            tickSize: 0,
            tickPadding: 12,
          }}
          axisBottom={{
            tickSize: 0,
            tickPadding: 8,
          }}
          enableGridX
          enableGridY={false}
          labelSkipWidth={28}
          motionConfig="gentle"
          theme={{
            text: {
              fontSize: 18,
              fontFamily: "inherit",
            },
            grid: {
              line: {
                stroke: "var(--sl-color-gray-4)",
                strokeWidth: 1,
              },
            },
            axis: {
              ticks: {
                text: {
                  fontSize: 13,
                  fontFamily: "inherit",
                  fill: "var(--sl-color-gray-2)",
                },
              },
            },
            tooltip: {
              container: {
                background: "var(--sl-color-bg-nav)",
                color: "var(--sl-color-white)",
              },
            },
          }}
        />
      </div>

      {caption && <p className="bar-chart__caption">{caption}</p>}
    </motion.div>
  );
}
