---
title: Article Generation Guide for "Why Our Rivers Are Polluted?" Series
description: Comprehensive guide for AI to generate articles in Astro + Starlight format with appropriate interactive components, infographics, and multimedia elements
---
# Article Generation Guide

This guide provides detailed instructions for generating articles in the **"Why Our Rivers Are Polluted?"** educational series. The series consists of 27 articles designed to explain river pollution to complete beginners in an engaging, visual, and interactive way.

---

## Core Principles

### 1. Writing Style
- **Audience**: Complete beginners with no scientific background
- **Tone**: Scientific but accessible, clear and engaging
- **Language**: Simple terms first, then gradually introduce technical concepts
- **Structure**: Each article should build on previous knowledge
- **Length**: Typically 1,500–2,500 words depending on complexity

### 2. Visual and Interactive Philosophy
- Articles are **text-first**, with components supporting learning
- Components should appear **after** explanatory text, not before
- Each component must have a clear educational purpose
- Components should be contextually relevant to the surrounding paragraphs
- Avoid overloading articles—2–4 interactive elements per article is ideal

### 3. Technical Format
- **Platform**: Astro + Starlight (MDX)
- **React Components**: All components use `client:idle` or `client:visible` for performance
- **Data Source**: Static JSON files (no backend required)
- **Hydration**: Lazy-loaded for optimal page speed

---

## Reference Files (MUST CONSULT)

When generating an article, the AI **MUST** read and reference these three files:

### 1. `interactive-components.md`
Contains 12 interactive learning patterns:
- Opinion Slider
- Guess-Before-Reveal Cards
- Interactive Pollution Source Breakdown
- "What Happens If…" Scenario Toggles
- Perspective Selector
- Timeline Scrubber
- Myth vs Reality Flip Cards
- Personal Impact Calculator
- Progressive Reveal Sections
- "How Would You Fix This?" Decision Paths
- Quick Knowledge Check (5 Questions)
- Before–After Image Slider

**When to use**: For engaging readers actively in learning, testing understanding, or creating emotional connection.

### 2. `nivo-infographic.md`
Contains 16+ Nivo chart components:
- ResponsiveLine (time series, trends)
- ResponsiveBar (category comparisons)
- ResponsivePie (part-to-whole)
- ResponsiveScatterPlot (correlations)
- ResponsiveRadar (multi-dimensional profiles)
- ResponsiveStream (composition over time)
- ResponsiveSunburst (hierarchical data)
- ResponsiveChord (relationships)
- ResponsiveTreemap (nested proportions)
- ResponsiveBump (ranking changes)
- ResponsiveCalendar (periodic patterns)
- ResponsiveHeatMap (intensity grids)
- ResponsiveSankey (flow diagrams)
- ResponsiveWaffle (block proportions)
- ResponsiveGeoMap / ResponsiveChoropleth (spatial data)

**When to use**: For presenting data, showing trends, comparing values, or visualizing complex relationships.

### 3. `multimedia.md`
Contains spatial storytelling tools:
- River Basin Maps (SVG or interactive)
- GIS Visualizations (React Leaflet, MapLibre)
- Satellite Images (before/after sliders, timelines)
- Interactive River Explorer
- Infographic-Style System Diagrams
- Documentary/Field Media

**When to use**: For showing geography, spatial relationships, change over time, or location-specific data.

---

## Component Selection Process

### Step-by-Step Decision Flow

**For every section of the article:**

1. **Read the context** (2–3 paragraphs above the component insertion point)
2. **Identify the learning goal**:
   - Is it explaining data? → Consider Nivo infographic
   - Is it showing geography? → Consider multimedia/maps
   - Is it engaging reflection? → Consider interactive component
   - Is it showing change over time? → Consider timeline/slider
   - Is it testing understanding? → Consider quiz/reveal cards

3. **Select the most appropriate component** from the three reference files
4. **Specify the component requirements**:
   - Component name with file reference (e.g., `[interactive-component-12]`)
   - Input data structure
   - Expected outcome/interaction
   - Contextual adaptation notes

5. **Write the component placeholder** in this format:

```

[Insert React Component Here]

**Component**: [interactive-component-X] OR [nivo-infographic-X] OR [multimedia-X]

**Description**: Brief 1–2 sentence explanation of what this component does in this context.

**Input Data Requirements**:

- Data source: [e.g., JSON file with river pollution data]
- Structure: [e.g., array of objects with keys: year, DO_level, BOD_level]
- Example: `[{year: 2015, DO: 4.2, BOD: 8.1}, ...]`

**Expected Outcome**: What the reader should learn or experience after interacting with this component.

**Contextual Notes**: Any river-specific or article-specific adaptations needed.

```
---

## Component Matching Matrix

Use this matrix to quickly identify which component fits the context:

| Context/Purpose | Best Component Type | Specific Component |
|----------------|---------------------|-------------------|
| Explaining time-based pollution trends | Nivo Infographic | ResponsiveLine |
| Comparing pollution sources | Nivo Infographic | ResponsiveBar or ResponsivePie |
| Showing river geography | Multimedia | River Basin Map (SVG or Leaflet) |
| Before/after river degradation | Multimedia | Before–After Image Slider |
| Testing reader's assumptions | Interactive | Opinion Slider or Guess-Before-Reveal |
| Breaking common myths | Interactive | Myth vs Reality Flip Cards |
| Showing multi-dimensional river health | Nivo Infographic | ResponsiveRadar |
| Explaining nested pollution causes | Nivo Infographic | ResponsiveSunburst |
| Showing flow from source to impact | Nivo Infographic | ResponsiveSankey |
| Tracking ranking changes over time | Nivo Infographic | ResponsiveBump |
| Pollution intensity by region | Nivo Infographic | ResponsiveHeatMap or Choropleth |
| Interactive exploration of rivers | Multimedia | Interactive River Explorer |
| Personal responsibility calculation | Interactive | Personal Impact Calculator |
| End-of-article knowledge check | Interactive | Quick Knowledge Check |
| Showing satellite/aerial change | Multimedia | Timeline Image Sequence |
| System explanation (sewage pathway) | Multimedia | Infographic-Style Diagram |

---

## Article Structure Template

Every article should follow this general structure:

### 1. Opening (2–3 paragraphs)
- Hook: Start with a relatable question or observation
- Context: Connect to previous articles if applicable
- Preview: Briefly explain what this article covers

### 2. Main Content (divided into 3–5 sections)

**For each section:**
- Start with clear heading (H2 or H3)
- Explain concept in 2–4 paragraphs
- Build from simple to complex
- Use examples from Indian rivers
- **Insert 1 component per section maximum**

**Component Placement Pattern:**
```markdown
## Section Heading

[2–4 paragraphs explaining the concept]

[Insert React Component Here]
[Component specification as detailed above]

[1–2 paragraphs reflecting on or extending the concept]
```


### 3. Connections \& Cross-References

- Link to related articles in the series
- Reference previous concepts when building on them
- Preview upcoming topics briefly


### 4. Closing (1–2 paragraphs)

- Summarize key takeaways
- Connect to real-world relevance
- Provide hopeful or actionable closing thought


### 5. Optional End Component

- Knowledge check quiz (for longer articles)
- Action checklist (for solution-focused articles)

---

## Data Specification Guidelines

When specifying input data for components, follow these rules:

### For Nivo Charts

```json
{
  "description": "River pollution data 2015-2025",
  "dataStructure": "Array of objects",
  "keys": ["year", "DO", "BOD", "pH"],
  "example": [
    {"year": "2015", "DO": 4.2, "BOD": 8.1, "pH": 7.8},
    {"year": "2020", "DO": 3.8, "BOD": 9.4, "pH": 7.5}
  ]
}
```


### For Interactive Components

```json
{
  "componentType": "Opinion Slider",
  "question": "How responsible are households for river pollution?",
  "scale": "0-100%",
  "revealText": "Households contribute approximately 60% of river pollution through untreated sewage and solid waste",
  "additionalContext": "This is higher than most people expect"
}
```


### For Multimedia/Maps

```json
{
  "mapType": "River Basin Map",
  "rivers": ["Ganga", "Yamuna", "Brahmaputra"],
  "overlayData": "Pollution hotspots",
  "interactionType": "Click river to see details",
  "dataSource": "rivers-basin-data.json"
}
```


---

## Component Reference Format

When inserting a component placeholder, use this exact format:

```
[Insert React Component Here]

**Component**: [interactive-component-11]

**Description**: A 5-question knowledge check to help readers assess their understanding of river pollution sources.

**Input Data Requirements**:
- Data source: Static questions embedded in component
- Structure: Array of question objects with multiple choice options
- Example questions:
  1. "Which contributes more to Ganga pollution: sewage or plastic?"
  2. "What percentage of sewage in Ganga basin is untreated?"

**Expected Outcome**: Readers receive friendly feedback on their understanding level and are encouraged to revisit unclear concepts.

**Contextual Notes**: Questions should focus specifically on sewage, industrial waste, and agricultural runoff as covered in this article. Avoid questions about concepts not yet introduced (like BOD or pH).
```


---

## River-Specific Adaptation

When writing about specific rivers, ensure components are contextually adapted:

### For Ganga/Yamuna Articles:

- Use actual data from these rivers where possible
- Reference real cities (Delhi, Varanasi, Prayagraj)
- Show sewage treatment capacity vs generation
- Include cultural/religious context


### For Peninsular Rivers (Narmada, Godavari, Krishna, Kaveri):

- Highlight dam and water availability issues
- Focus on industrial belts
- Show mining impacts where relevant
- Reference specific cities in basin


### For Smaller Urban Rivers/Nallas:

- Make it locally relatable
- Show how nallas connect to main rivers
- Use simple, visible pollution examples
- Emphasize personal connection

---

## Performance and Technical Notes

### Astro + Starlight Best Practices:

- Use `client:visible` for components below the fold
- Use `client:idle` for components that can wait
- Keep initial page load fast
- Lazy-load heavy maps and charts
- Prefer SVG over large PNGs where possible


### File Organization:

```text
/src/components/
  interactive/
    OpinionSlider.jsx
    GuessBeforeReveal.jsx
    [etc.]
  infographic/
    PollutionBreakdown.jsx (uses Nivo ResponsivePie)
    TrendChart.jsx (uses Nivo ResponsiveLine)
    [etc.]
  multimedia/
    RiverMap.jsx (React Leaflet)
    BeforeAfterSlider.jsx
    [etc.]

/public/data/
  ganga-pollution-data.json
  yamuna-sewage-data.json
  [etc.]
```


---

## Quality Checklist

Before finalizing an article, verify:

- [ ] Writing is accessible to complete beginners
- [ ] Technical terms are introduced gradually with clear explanations
- [ ] Each component has clear educational purpose
- [ ] Component placement is after explanatory text
- [ ] Component specifications are complete (type, data, outcome)
- [ ] Data structures are clearly defined
- [ ] River-specific adaptations are noted
- [ ] Cross-references to other articles are included
- [ ] Article length is appropriate (1,500–2,500 words)
- [ ] 2–4 interactive elements maximum per article
- [ ] Opening and closing are engaging and clear

---

## Example Component Integration

### Good Example:

```markdown
## How Sewage Pollutes Rivers

When we flush toilets or drain sinks, the wastewater travels through underground pipes to a treatment plant—or it should. In many Indian cities, sewage treatment capacity has not kept up with population growth. In the Ganga basin, about 75% of sewage is released untreated directly into rivers.

Untreated sewage contains organic matter, nutrients, and harmful microbes. When it enters a river, microbes consume oxygen while breaking down the organic waste. This drops the dissolved oxygen (DO) level, making it hard for fish and other aquatic life to survive.

[Insert React Component Here]

**Component**: [nivo-infographic-1]

**Description**: Line chart showing dissolved oxygen (DO) levels in the Yamuna River before and after Delhi over a 10-year period (2015–2025).

**Input Data Requirements**:
- Data source: `yamuna-do-levels.json`
- Structure: Array of objects with keys: year, location, DO_level
- Example: `[{year: 2015, location: "Before Delhi", DO: 7.2}, {year: 2015, location: "After Delhi", DO: 2.1}, ...]`

**Expected Outcome**: Readers visually see how DO drops dramatically after untreated sewage enters the river in Delhi, making the abstract concept concrete and memorable.

**Contextual Notes**: Highlight the "After Delhi" line in red to emphasize the pollution spike. Add annotation at 2019 showing "Critical DO threshold for fish" at 4.0 mg/L.

The drop in oxygen creates "dead zones" where almost nothing can live. This is why stretches of the Yamuna through Delhi often appear black and smell foul—the river is essentially suffocating.
```


---

## Prompt Template for Generating Articles

**When the user requests an article, use this structure:**

```
Generate article [X] of 27 in the "Why Our Rivers Are Polluted?" series.

Article title: [Title from the 27-part index]

Instructions:
1. Read and reference `interactive-components.md`, `nivo-infographic.md`, and `multimedia.md`
2. Follow the article structure template from `article_generation_guide.md`
3. Write for complete beginners in accessible scientific language
4. Insert 2–4 appropriate components with full specifications
5. Ensure components match the context and learning goals
6. Provide complete data structure specifications for each component
7. Include river-specific adaptations where applicable
8. Keep article length between 1,500–2,500 words
9. Add cross-references to related articles in the series
10. End with clear takeaway or actionable insight

Output format: Markdown suitable for Astro + Starlight MDX
```


---

## Common Mistakes to Avoid

1. **Don't front-load components** - Always explain concepts first, then add visual/interactive support
2. **Don't overuse components** - 2–4 per article maximum; quality over quantity
3. **Don't assume technical knowledge** - Always define terms first
4. **Don't skip data specifications** - Every component needs clear data structure
5. **Don't ignore context** - Components must fit naturally with surrounding paragraphs
6. **Don't forget performance** - Note hydration strategy (client:visible, client:idle)
7. **Don't make components generic** - Adapt to specific river or article context
8. **Don't lose the narrative** - Components should support the story, not interrupt it

---

## Final Note

This guide ensures consistency, quality, and educational effectiveness across all 27 articles in the series. By following this structured approach and properly consulting the three reference files, AI can generate articles that are engaging, accessible, and pedagogically sound—transforming complex environmental science into clear, actionable understanding for every reader.


