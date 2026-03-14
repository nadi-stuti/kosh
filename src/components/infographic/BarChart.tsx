import "@/styles/components-tokens.css";
import { ResponsiveBar, type BarTooltipComponent } from "@nivo/bar";
import { motion } from "motion/react";
import "./BarChart.css";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BarDatum {
  category: string;
  value: number;
  label?: string;
  color?: string;
  description?: string;
}

export interface BarChartProps {
  data: BarDatum[];
  title?: string;
  caption?: string;
  colors?: string[];
  xAxisLabel?: string;
  yAxisLabel?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

const BAR_THEME = {
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

    legend: {
      text: {
        fontSize: 14,
        fontFamily: "inherit",
        fill: "var(--sl-color-gray-2)",
        fontWeight: 500,
      },
    },
  },
  tooltip: {
    container: {
      zIndex: 9999,
      background: "var(--sl-color-bg-nav)",
      color: "var(--sl-color-white)",
    },
  },
};

const BAR_CONSTANS = {
  margin: { top: 8, right: 64, bottom: 64, left: 168 },
  axisLeft: {
    tickSize: 0,
    tickPadding: 12,
    legendPosition: "middle",
    legendOffset: -140,
  } as const,
  axisBottom: {
    tickSize: 0,
    tickPadding: 8,
    legendPosition: "middle",
    legendOffset: 40,
  } as const,
};

export default function BarChart({
  data,
  title,
  caption,
  colors,
  xAxisLabel,
  yAxisLabel,
}: BarChartProps) {
  const nivoData = data.map((d) => ({ category: d.category, value: d.value }));
  const [isParentReady, setIsParentReady] = useState(false);

  // Dynamic canvas height: scales cleanly with any number of bars
  const canvasHeight = Math.max(300, data.length * 56 + 32);

  // Cycle through caller-supplied colors or fall back to accent-toned defaults
  const resolvedColors =
    colors && colors.length > 0
      ? colors
      : ["#6366f1", "#818cf8", "#a5b4fc", "#c7d2fe", "#e0e7ff"];

  const colorFn = (bar: { index: number }) =>
    data[bar.index]?.color || resolvedColors[bar.index % resolvedColors.length];

  const toolTipFn:
    | BarTooltipComponent<{
        category: string;
        value: number;
      }>
    | undefined = ({ indexValue, formattedValue }) => {
    const datum = data.find((item) => item.category === indexValue);
    return (
      <div className="custom-tooltip">
        <div className="tooltip-title">{indexValue}</div>
        <div className="tooltip-value">{datum?.label || formattedValue}</div>
        <div className="tooltip-desc">{datum?.description}</div>
      </div>
    );
  };

  return (
    <motion.div
      className="river-component bar-chart"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.7 }}
      onAnimationComplete={() => setIsParentReady(true)}
    >
      {title && <h3 className="bar-chart__title">{title}</h3>}

      <div
        className="bar-chart__canvas  not-content"
        style={{ height: canvasHeight }}
      >
        <ResponsiveBar
          data={isParentReady ? nivoData : []}
          keys={["value"]}
          indexBy="category"
          layout="horizontal"
          margin={BAR_CONSTANS.margin}
          padding={0.35}
          colors={colorFn}
          borderRadius={4}
          label={(d) =>
            data.find((item) => item.category === d.indexValue)?.label ||
            d.value
          }
          tooltip={toolTipFn}
          axisLeft={{ ...BAR_CONSTANS.axisLeft, legend: yAxisLabel || "Value" }}
          axisBottom={{
            ...BAR_CONSTANS.axisBottom,
            legend: xAxisLabel || "Value",
          }}
          enableGridX
          enableGridY={false}
          labelSkipWidth={28}
          motionConfig="gentle"
          theme={BAR_THEME}
        />
      </div>

      {caption && <p className="bar-chart__caption">{caption}</p>}
    </motion.div>
  );
}
