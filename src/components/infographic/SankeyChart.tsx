import { ResponsiveSankey } from "@nivo/sankey";
import { motion } from "motion/react";
import "@/styles/components-tokens.css";
import "./SankeyChart.css";

export type SankeyNode = {
  id: string;
  label?: string;
  color?: string;
};

export type SankeyLink = {
  source: string;
  target: string;
  value: number;
};

export type SankeyData = {
  nodes: SankeyNode[];
  links: SankeyLink[];
};

export interface SankeyDataProps {
  data: SankeyData;
  title?: string;
}

const nivoTheme = {
  // Sets the color of the labels next to the nodes
  labels: {
    text: {
      fill: "var(--sl-color-gray-2)", // Uses Starlight's CSS variables
      fontSize: 12,
    },
  },
  // Fixes the tooltip background and text for dark mode
  tooltip: {
    container: {
      background: "var(--sl-color-bg-nav)",
      color: "var(--sl-color-white)",
      fontSize: 12,
    },
  },
};

export default function SankeyChart({ data, title }: SankeyDataProps) {
  return (
    <motion.div
      className="river-component sankey-chart"
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {title && <h3 className="sankey-title">{title}</h3>}

      <div className="sankey-container not-content">
        <ResponsiveSankey
          data={data}
          margin={{ top: 40, right: 120, bottom: 40, left: 50 }}
          align="justify"
          theme={nivoTheme}
          colors={{ scheme: "nivo" }}
          enableLinkGradient
          nodeOpacity={0.7}
          nodeThickness={18}
          nodeSpacing={24}
          nodeBorderWidth={1}
          nodeBorderColor={{
            from: "color",
            modifiers: [["darker", 0.8]],
          }}
          linkOpacity={1}
          linkHoverOthersOpacity={0.1}
          labelPosition="outside"
          labelOrientation="horizontal"
          labelPadding={16}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1]],
          }}
          animate={true}
          motionConfig="gentle"
        />
      </div>
    </motion.div>
  );
}
