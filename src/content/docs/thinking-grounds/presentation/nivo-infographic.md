---
title: Nivo Infographic Component Catalogue
description: A curated list of powerful Nivo components for visualizing data interactively in MDX articles — each with a clear use case.
---

# Infographic Components Using **Nivo**

**Library:** Nivo — a rich React data visualization library built on D3 with animated transitions and responsive charts. 

Below are 12 Nivo components you can use to *show your data in fun, interactive ways* — each with what it is, example use, why it works, and best use cases.

---

## 1. ResponsiveLine

**What it is:**  
A smooth, animated line chart showing one or more data series over a continuous axis (typically time).

**Example use:**  
Visualize river pH or pollutant levels over months/years.

**Why it works:**  
Readers can trace trends easily. The motion of lines growing from left to right feels intuitive and engaging.

**Best for:**  
Time-based trends and long-term changes.

---

## 2. ResponsiveBar

**What it is:**  
Classic bar chart with vertical/horizontal orientations, stacked or grouped.

**Example use:**  
Compare pollutant contributions by category (domestic, sewage, industrial).

**Why it works:**  
Bar lengths are easy for eyes to compare — especially with color and animation.

**Best for:**  
Comparing values across categories or regions.

---

## 3. ResponsivePie

**What it is:**  
Circular pie chart showing part-to-whole proportions with animated segment transitions.

**Example use:**  
Show percentage share of different pollution sources in a river.

**Why it works:**  
Pie segments animate in, making composition memorable.

**Best for:**  
Snapshot proportions and categorical breakdowns.

---

## 4. ResponsiveScatterPlot

**What it is:**  
Scatter plot with animated points representing multi-dimensional data.

**Example use:**  
Plot water quality samples (e.g., dissolved oxygen vs turbidity).

**Why it works:**  
Interactive points encourage exploration; tooltips can reveal details.

**Best for:**  
Correlation stories and distributed measurements.

---

## 5. ResponsiveStream

**What it is:**  
Stream (stacked area) chart showing how multiple layers change over a continuous axis.

**Example use:**  
Show how different pollutant sources contribute over time.

**Why it works:**  
The flowing layers make trends feel organic and continuous.

**Best for:**  
Composition over time with multiple categories.

---

## 6. ResponsiveRadar

**What it is:**  
Radar chart displaying values on multiple axes from a central point.

**Example use:**  
Compare river health metrics like pH, biodiversity, clarity, oxygen.

**Why it works:**  
Multi-axis radial layout makes patterns immediately visible.

**Best for:**  
Profiles across multiple dimensions.

---

## 7. ResponsiveSunburst

**What it is:**  
Hierarchical circular visualization showing nested data.

**Example use:**  
Show nested causes of river pollution (e.g., societal → local → direct sources).

**Why it works:**  
Hierarchy is visually intuitive and compact.

**Best for:**  
Nested breakdown stories.

---

## 8. ResponsiveChord

**What it is:**  
Circular diagram showing interrelationships between categories.

**Example use:**  
Visualize how sources connect to impacts (e.g., industry → sediments, nutrients).

**Why it works:**  
Chords animate to reveal flows, making complex systems easier to grasp.

**Best for:**  
Network or flow relationships.

---

## 9. ResponsiveTreemap

**What it is:**  
Rectangular regions sized by value, nested by category.

**Example use:**  
Show relative contribution of each sub-source of pollution.

**Why it works:**  
Space-filling layout gives instant visual weight to large contributors.

**Best for:**  
Part-to-whole with many categories.

---

## 10. ResponsiveBump

**What it is:**  
A chart showing rankings over time with smooth animated lines.

**Example use:**  
Track which rivers are most polluted year by year.

**Why it works:**  
Rank shifts become visually engaging as lines weave.

**Best for:**  
Rank progression stories.

---

## 11. ResponsiveCalendar

**What it is:**  
Calendar heatmap showing values per day/month.

**Example use:**  
Visualize sampling frequency or pollution incidents over a year.

**Why it works:**  
Gamified look and color intensity makes patterns pop.

**Best for:**  
Daily or periodic patterns.

---

## 12. ResponsiveHeatMap

**What it is:**  
Grid where color intensity represents value per cell.

**Example use:**  
Show pollutant intensity by region/time combinations.

**Why it works:**  
Color gradients communicate density instantly.

**Best for:**  
Complex dense grids and intensity patterns.

---

## Tips for MDX Integration

- Wrap your Nivo components with `client:idle` or `client:visible` hydration to keep article text fast.  
- Use static JSON data for charts so you don’t need a backend.  
- Pair charts with short captions that explain *why this visualization matters for the story*.

---

**Why Nivo works for storytelling**  
Nivo’s visual components are highly customizable with intuitive props, responsive out of the box, and include smooth motion and transitions that make data *feel alive* rather than static points on a page — ideal for engaging articles.

--- 

Below is a **complete, structured catalogue** of Nivo components, grouped by purpose.

---

## Core Charts (Most Common)

These are the charts you’ll use most often in articles and explanations.

- **ResponsiveLine**  
  Time-series data, trends, gradual change

- **ResponsiveBar**  
  Category comparison, grouped or stacked values

- **ResponsivePie**  
  Part-to-whole composition at a glance

- **ResponsiveScatterPlot**  
  Correlations and distributions

- **ResponsiveRadar**  
  Multi-dimensional comparison (profiles)

- **ResponsiveStream**  
  Composition changes over time with flowing layers

---

## Hierarchical & Relational Visualizations

Used when data has structure, nesting, or relationships.

- **ResponsiveSunburst**  
  Circular hierarchical breakdown of causes or categories

- **ResponsiveTreemap**  
  Rectangular hierarchy showing relative weight of sub-categories

- **ResponsiveChord**  
  Relationship and flow between categories in a circular layout

---

## Time, Ranking & Intensity Charts

Best for showing progression, frequency, or density.

- **ResponsiveBump**  
  Rank changes over time (who moves up or down)

- **ResponsiveCalendar**  
  Calendar heatmap for daily or periodic activity

- **ResponsiveHeatMap**  
  Grid-based intensity visualization (region × time, category × metric)

---

## Flow & Special Layouts

Useful for showing movement or proportions in a playful way.

- **ResponsiveSankey**  
  Flow diagrams (source → target → outcome)

- **ResponsiveWaffle**  
  Block-based percentage or count representation

---

## Geospatial Visualizations

Used when geography matters.

- **ResponsiveGeoMap**  
  Geospatial maps with overlays and interactions

- **ResponsiveChoropleth**  
  Region-based color intensity maps (states, countries, districts)

---

## Low-Level & Advanced Building Blocks

These are not full charts, but powerful helpers for custom visualizations.

- **Annotations**  
  Add contextual labels and callouts directly on charts

- **Mesh / Voronoi**  
  Improve tooltip interaction for dense data

- **CartesianAxis**  
  Build or customize chart axes manually

- **SvgWrapper**  
  Base wrapper for creating custom SVG-based visuals

---

## How many components does Nivo actually provide?

In total, Nivo offers:

- **16+ ready-to-use chart components**
- **Multiple flow, hierarchy, and map visualizations**
- **Low-level primitives for custom infographics**
- **Built-in animation and responsiveness across all charts**

This makes Nivo a strong **single-library choice** for interactive, animated, and educational data storytelling.

---

## Practical takeaway

You don’t need to use all of them.

A strong setup for content-driven articles usually includes:
- Line, Bar, Pie (core understanding)
- Stream or HeatMap (patterns)
- One of Sankey / Sunburst / Chord (systems & relationships)
- Occasional Calendar or Bump (time & ranking)

Everything else becomes optional depth as your storytelling evolves.

| Category             | Components                                   |
| -------------------- | -------------------------------------------- |
| Line & Bar           | ResponsiveLine, ResponsiveBar                |
| Pie & Donut          | ResponsivePie                                |
| Scatter & Radar      | ResponsiveScatterPlot, ResponsiveRadar       |
| Stream               | ResponsiveStream                             |
| Hierarchical         | ResponsiveSunburst, ResponsiveTreemap        |
| Relational / Network | ResponsiveChord, ResponsiveSankey            |
| Time & Ranking       | ResponsiveBump, ResponsiveCalendar           |
| Heat / Intensity     | ResponsiveHeatMap                            |
| Geospatial           | ResponsiveGeoMap, ResponsiveChoropleth       |
| Special Layouts      | ResponsiveWaffle                             |
| Low-level tools      | SvgWrapper, CartesianAxis, Mesh, Annotations |
### 🔹 **ResponsiveWaffle**

**What it is:** A grid of blocks representing counts/percentages.  
**Nice for:** Showing proportions in a playful, tactile way (e.g., “70% of rivers affected by sewage”).

---

### 🔹 **ResponsiveSankey**

**What it is:** Flow diagram from sources to targets.  
**Nice for:** Visualizing movements between categories (e.g., pollutant source → affected sectors).

---

### 🔹 **ResponsiveGeoMap / ResponsiveChoropleth**

**What it is:** Map with region shading based on data.  
**Nice for:** Spatial storytelling (pollution intensity by state/city).

---

### 🔹 **Low-level helpers**

Not charts themselves, but useful when building something bespoke:

- **Annotations**  
    → Add labels directly on SVG charts
    
- **Mesh / Voronoi**  
    → Better tooltips on dense scatter plots
    
- **CartesianAxis**  
    → Build custom axis layouts

## 🧠 When to use the extras

Here’s a quick map of the “optional” ones:

|Component|Best for|
|---|---|
|Waffle|Proportions, simple share visualization|
|Sankey|Flow / transfer visualization|
|GeoMap / Choropleth|Map-based data|
|Annotations|Adding rich explanations on any chart|
