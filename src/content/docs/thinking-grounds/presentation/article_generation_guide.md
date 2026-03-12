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
- **Tone**: Friendly and warm, like a knowledgeable friend explaining things, but still precise and respectful
- **Language**: Simple terms first, then gradually introduce technical concepts
- **Structure**: Each article should build on previous knowledge
- **Length**: Ideally 800–1,200 words per article. Do not exceed 1,300 words unless absolutely necessary

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
- **Starlight Components**: Use built-in Starlight components thoughtfully (see section below)

---

## Role of this Space (Article Writer Only)

This Space focuses on writing clear, short articles and suggesting components, not on full React implementation.

For each component, describe:

- Type (interactive, Nivo chart, multimedia, UI)
- Purpose in this article
- Basic data shape (e.g., "array of questions", "list of phases with counts")

The actual React component code will be built separately in the "River Components Library" Space. Keep specs high-level and readable.

---

## 🌟 Starlight Components (Built-in) – Use Thoughtfully

Starlight provides beautiful, pre-styled components for MDX. **Use 1–2 per article maximum** where they genuinely add visual clarity and readability. **Do not overuse**—articles must stay text-first and welcoming.

### Import Statement (Add at top of MDX when needed)

```mdx
import {
  Card,
  CardGrid,
  LinkCard,
  Aside,
  Badge,
  Steps,
  Tabs,
  TabItem,
  FileTree,
  Icon,
  LinkButton,
  Code,
} from "@astrojs/starlight/components";
```

### Available Starlight Components & When to Use

| Component              | When to Use                                  | Example Use Case                                                             |
| ---------------------- | -------------------------------------------- | ---------------------------------------------------------------------------- |
| `<Aside>`              | Important notes, tips, warnings, cautions    | "Did you know?" facts, safety warnings, key reminders                        |
| `<Card>`               | Highlight 1 key fact or concept              | "One Big Idea" summary box                                                   |
| `<CardGrid>`           | Display 2–4 related items side-by-side       | Compare pollution sources, river types, solution approaches                  |
| `<LinkCard>`           | Prominently link to related article/resource | Link to next article in series, external resource                            |
| `<Badge>`              | Status labels or category tags               | "High Risk", "Easy Fix", "Critical", "Beginner"                              |
| `<Steps>`              | Sequential numbered processes                | How to test water, steps to report pollution                                 |
| `<Tabs>` + `<TabItem>` | Show 2–3 alternative views/options           | "Before/After", "Urban vs Rural", "Healthy vs Polluted"                      |
| `<FileTree>`           | Show file/folder structures                  | (Rarely needed in river articles—skip unless showing data file organization) |
| `<LinkButton>`         | Call-to-action button                        | "Start the series", "Take action now" (mostly for landing pages)             |
| `<Icon>`               | Display built-in icons inline                | Decorative icons in headings or lists                                        |
| `<Code>`               | Syntax-highlighted code blocks               | (Rarely needed in river articles—skip unless showing data format examples)   |

### Usage Rules (CRITICAL)

- **Sparingly**: Maximum 1–2 Starlight components per article. Never more than 3.
- **Purpose-driven**: Only use when it makes content more scannable, visually organized, or emotionally engaging.
- **Placement**: Insert after relevant explanatory paragraph, before continuing text.
- **No decorative spam**: Never use just to "fill space" or make article "look fancy".
- **Text-first always**: Starlight components support the narrative, they don't replace it.

### Most Useful for River Articles

For this series, you'll mostly use:

1. **`<Aside>`** – for "Did you know?" facts, warnings about pollution risks, key takeaways
2. **`<CardGrid>` + `<Card>`** – to compare pollution sources, river types, or solution categories
3. **`<Steps>`** – for processes like "How to test river water" or "Steps to report pollution"
4. **`<Tabs>`** – for before/after comparisons, urban vs rural contexts, healthy vs polluted states

Components like `<FileTree>`, `<Code>`, and `<LinkButton>` are rarely needed—skip unless truly essential.

### Real Examples in Context

**Example 1: Using `<Aside>` for key facts**

```mdx
## Why Sewage Is Dangerous

Untreated sewage contains harmful bacteria, viruses, and nutrients that deplete oxygen in rivers...

<Aside type="caution" title="Why This Matters">
  When rivers lose oxygen, fish and other aquatic life suffocate. Even small
  amounts of untreated sewage can make water unsafe to drink or bathe in.
</Aside>

This is why sewage treatment plants are so critical...
```

**Example 2: Using `<CardGrid>` for pollution source comparison**

```mdx
## Main Pollution Sources

Rivers face different types of pollution. Here's a quick overview:

<CardGrid>
  <Card title="Sewage" icon="warning">
    80% of organic pollution in Indian rivers comes from untreated sewage.
  </Card>
  <Card title="Plastic Waste" icon="trash">
    Visible but smaller volume. Takes centuries to break down.
  </Card>
  <Card title="Industrial Chemicals" icon="flask">
    Invisible toxins like heavy metals and dyes. Extremely harmful.
  </Card>
</CardGrid>

Each source requires different solutions...
```

**Example 3: Using `<Steps>` for a process**

```mdx
## How to Test River Water (Simple Method)

Citizens can test basic water quality using simple kits:

<Steps>
  1. Collect water sample in a clean bottle from mid-stream (not the edge). 2.
  Use pH test strip: dip for 2 seconds, compare color to chart. 3. Use dissolved
  oxygen (DO) test: follow kit instructions, note the number. 4. Record
  location, date, time, and weather conditions. 5. Upload results to citizen
  science app or share with local authorities.
</Steps>

With these simple steps, anyone can contribute data...
```

**Example 4: Using `<Tabs>` for before/after comparison**

```mdx
## What Happens When Sewage Treatment Improves?

<Tabs>
  <TabItem label="Before Treatment" icon="close">
    - Black, foul-smelling water - No fish or plant life - Unsafe for any use -
    Dissolved oxygen near zero
  </TabItem>
  <TabItem label="After Treatment" icon="check">
    - Clear or slightly turbid water - Fish and aquatic plants return - Safe for
    irrigation, some recreation - Dissolved oxygen above 5 mg/L
  </TabItem>
</Tabs>

The difference is dramatic and measurable...
```

### Aside Types Reference

The `<Aside>` component has 4 variants:

| Type      | When to Use                                       | Default Title | Color  |
| --------- | ------------------------------------------------- | ------------- | ------ |
| `note`    | General information, context, extra details       | Note          | Blue   |
| `tip`     | Helpful advice, suggestions, best practices       | Tip           | Green  |
| `caution` | Warnings, things to watch out for                 | Caution       | Orange |
| `danger`  | Critical warnings, safety risks, serious problems | Danger        | Red    |

**Example usage:**

```mdx
<Aside type="tip" title="Pro Tip">
  Test river water early morning for most accurate dissolved oxygen readings.
</Aside>

<Aside type="danger" title="Safety Warning">
  Never drink river water without proper testing and treatment, even if it looks
  clear.
</Aside>
```

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
   - Highlighting a key fact? → Consider Starlight `<Aside>` or `<Card>`
   - Comparing 2–4 options? → Consider Starlight `<CardGrid>` or `<Tabs>`
   - Sequential process? → Consider Starlight `<Steps>`
   - Explaining data/trends? → Consider custom Nivo chart
   - Showing geography? → Consider custom multimedia map
   - Engaging reflection/quiz? → Consider custom interactive component
   - Testing understanding? → Consider custom quiz/reveal component

3. **Choose between Starlight (built-in) vs Custom (React) components**:
   - **Starlight**: Use for simple layout, highlighting, comparison, or process display
   - **Custom**: Use for interactive data visualization, quizzes, maps, or complex engagement

4. **Specify the component requirements**:
   - For Starlight components: Write them directly in MDX with props
   - For custom components: Write placeholder + high-level spec (type, purpose, data shape)

5. **Write the component in MDX**:

**For Starlight components (write directly):**

```mdx
<Aside type="tip" title="Key Takeaway">
  This is the main point to remember.
</Aside>
```

**For custom components (placeholder + spec):**

```mdx
[Insert React Component Here]

**Component**: [interactive-component-11] QuickKnowledgeCheck

**Description**: 5-question quiz to assess reader's baseline river pollution awareness.

**Input Data Requirements**:

- Data source: Static array of 5 question objects
- Structure: Each question has: `id`, `text`, `options` (array), `correctIndex` (number), `explanation` (string)

**Expected Outcome**: Readers get encouraging feedback on awareness level; no judgment, just a friendly starting point.

**Contextual Notes**: Keep questions simple, avoid technical jargon, tone should be warm and inviting.
```

---

## Component Matching Matrix

Use this matrix to quickly identify which component fits the context:

| Context/Purpose                        | Best Component Type | Specific Component                               |
| -------------------------------------- | ------------------- | ------------------------------------------------ |
| Highlight 1 key fact                   | Starlight           | `<Card>` or `<Aside type="note">`                |
| Important warning/tip                  | Starlight           | `<Aside type="caution">` or `<Aside type="tip">` |
| Compare 2–4 items visually             | Starlight           | `<CardGrid>` with multiple `<Card>`              |
| Sequential process steps               | Starlight           | `<Steps>`                                        |
| Before/after comparison                | Starlight           | `<Tabs>` + `<TabItem>`                           |
| Explaining time-based pollution trends | Nivo Infographic    | ResponsiveLine                                   |
| Comparing pollution sources            | Nivo Infographic    | ResponsiveBar or ResponsivePie                   |
| Showing river geography                | Multimedia          | River Basin Map (SVG or Leaflet)                 |
| Before/after river degradation         | Multimedia          | Before–After Image Slider                        |
| Testing reader's assumptions           | Interactive         | Opinion Slider or Guess-Before-Reveal            |
| Breaking common myths                  | Interactive         | Myth vs Reality Flip Cards                       |
| Showing multi-dimensional river health | Nivo Infographic    | ResponsiveRadar                                  |
| Explaining nested pollution causes     | Nivo Infographic    | ResponsiveSunburst                               |
| Showing flow from source to impact     | Nivo Infographic    | ResponsiveSankey                                 |
| Tracking ranking changes over time     | Nivo Infographic    | ResponsiveBump                                   |
| Pollution intensity by region          | Nivo Infographic    | ResponsiveHeatMap or Choropleth                  |
| Interactive exploration of rivers      | Multimedia          | Interactive River Explorer                       |
| Personal responsibility calculation    | Interactive         | Personal Impact Calculator                       |
| End-of-article knowledge check         | Interactive         | Quick Knowledge Check                            |
| Showing satellite/aerial change        | Multimedia          | Timeline Image Sequence                          |
| System explanation (sewage pathway)    | Multimedia          | Infographic-Style Diagram                        |

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
- **Optional**: 1 Starlight component if it genuinely adds value (max 2 per article)
- **Insert 1 custom React component per section maximum** (for data viz, interactivity, maps)

**Updated Component Placement Pattern:**

```markdown
## Section Heading

[2–4 paragraphs explaining the concept in friendly, beginner language]

<!-- Optional: Starlight component for highlighting/layout -->
<Aside type="tip" title="Key Takeaway">
Simple summary of the main point.
</Aside>

<!-- Optional: Custom React component for interactivity/data -->

[Insert React Component Here]

**Component**: [component-type-id] ComponentName
**Description**: What it does in this context
**Input Data**: Basic data shape needed
**Expected Outcome**: What reader learns from it
**Contextual Notes**: Any river-specific notes

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

## Example Article Opening (With Starlight Components)

```mdx
---
title: "Sewage: What Really Happens After We Flush?"
description: "A simple explanation of how sewage from homes reaches rivers and why untreated sewage is the biggest pollution problem in Indian cities."
---

import { Aside, CardGrid, Card } from "@astrojs/starlight/components";

Have you ever wondered where the water goes after you flush the toilet or wash dishes? Most of us don't think about it—it disappears down the drain, and that's that. But in many Indian cities, that water doesn't disappear at all. It travels through pipes, into drains, and often ends up flowing directly into rivers without any cleaning.

This article explains what sewage is, how it reaches rivers, and why untreated sewage is the single biggest enemy of river health in India.

## What Is Sewage?

Sewage is the wastewater that comes from our homes: toilets, sinks, showers, washing machines, and kitchens. It contains human waste, soap, food scraps, grease, and sometimes chemicals from cleaning products.

<Aside type="note" title="Sewage vs Drainage">
  "Sewage" specifically means wastewater from homes and buildings. "Drainage" is
  a broader term that includes rainwater and street runoff.
</Aside>

When sewage is fresh, it's full of organic matter—things that bacteria and other microbes can break down. This organic matter needs oxygen to decompose. When untreated sewage enters a river, those bacteria consume all the oxygen in the water, leaving none for fish and plants.

## How Sewage Travels from Your Home to the River

Here's the typical journey:

1. You flush or drain water in your home
2. It flows into underground pipes called sewer lines
3. These pipes connect to larger municipal drains
4. Municipal drains lead to open channels called _nallas_
5. Nallas flow directly into rivers—often without any treatment

<Aside type="caution" title="The Treatment Gap">
  In India, only about 30–40% of sewage gets treated before reaching rivers. The
  rest flows in raw and untreated.
</Aside>

[Insert React Component Here]

**Component**: [infographic-10] CategoryBreakdownChart

**Description**: Bar chart showing the breakdown of sewage treatment coverage across different Indian city tiers (Tier 1, Tier 2, Tier 3, rural).

**Input Data**: Array of objects with `cityTier` (string), `percentageTreated` (number), `populationAffected` (number in millions).

**Expected Outcome**: Readers visually grasp that most sewage in smaller cities and towns goes untreated, making it clear why rivers near these areas are heavily polluted.

**Contextual Notes**: Use simple bar chart (ResponsiveBar), color-code by treatment level (green = high treatment, red = low treatment).

## What Happens When Untreated Sewage Enters a River?

When raw sewage flows into a river, several things happen almost immediately...

[Continue article...]
```

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
    { "year": "2015", "DO": 4.2, "BOD": 8.1, "pH": 7.8 },
    { "year": "2020", "DO": 3.8, "BOD": 9.4, "pH": 7.5 }
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

## Quality Checklist

Before finalizing an article, verify:

- [ ] **Length**: 800–1,200 words (never exceed 1,300)
- [ ] **Tone**: Friendly, warm, knowledgeable but not preachy
- [ ] **Starlight components**: 0–2 maximum, used only where they add value
- [ ] **Custom components**: 2–3 maximum, each with clear purpose and high-level spec
- [ ] **Component placement**: All components inline after relevant text, never bunched at end
- [ ] **No "Component X" headings**: Components live inside content sections
- [ ] **Beginner language**: Technical terms introduced gently with simple explanations
- [ ] **Indian examples**: Rivers, cities, contexts familiar to Indian readers
- [ ] **Inline imports**: If using Starlight components, import statement at top of MDX
- [ ] **Accessible**: Content makes sense even if components fail to load
- [ ] **No overload**: Article feels welcoming and scannable, not crowded

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

## Final Reminders

1. **Starlight components are helpers, not the main show.** Use 1–2 per article max.
2. **Custom React components are for interactivity and data viz.** Use 2–3 per article.
3. **Text comes first.** Explain the idea, _then_ show the component.
4. **Keep it crisp.** 800–1,200 words. Readers should finish and want more, not feel exhausted.
5. **Inline everything.** Components go exactly where they support the narrative, never at the end.
6. **Friendly tone.** Like a knowledgeable friend, not a textbook.
7. **Hope, not doom.** End every article with connection to action or recovery.

---

## Final Note

This guide ensures consistency, quality, and educational effectiveness across all 27 articles in the series. By following this structured approach and properly consulting the three reference files, AI can generate articles that are engaging, accessible, and pedagogically sound—transforming complex environmental science into clear, actionable understanding for every reader.
