---
title: Recommended React Infographic Components (Library + Use Case)
description: A curated list of powerful, animated infographic/chart components you can use in MDX pages with React — built from 3 top chart libraries.
---

# Infographic & Chart Components — React Library Catalogue

Below is a set of highly usable React infographic/chart components you can drop into your MDX pages (`client:idle` / `client:visible` hydration). These are chosen from three strong libraries that balance **animation, design quality, ease of use, and flexibility**.

---

## 🍭 Library: Nivo (React + D3-based, great defaults)

Nivo provides beautiful animated charts with responsive behavior and smooth transitions. :contentReference[oaicite:1]{index=1}

### 1. **ResponsiveStream (Stream / Stacked Area Chart)**  
**Use case:** Show how different pollution sources contribute over time (e.g., sewage vs industry vs agriculture).  
> Nivo’s animated stacked layers help readers *see composition over time*.  

### 2. **ResponsiveChord (Chord Diagram)**  
**Use case:** Visualize how pollutants flow between categories (e.g., sources → regions).  
> Useful for complex network-style environmental interactions.

### 3. **ResponsiveSunburst (Hierarchical Data)**  
**Use case:** Break down causes into nested levels (e.g., indirect → direct factors).  
> Great for showing part-to-whole relationships.

### 4. **ResponsiveScatterPlot**  
**Use case:** Show distribution of sample measurements (e.g., pollutants vs rivers).  
> Good for exploratory comparison with animated data points.

---

## 📈 Library: react-chartjs-2 (Wrapper for Chart.js, strong animation)

React-Chartjs-2 brings Chart.js’s smooth built-in animation and many common chart types to React. :contentReference[oaicite:2]{index=2}

### 5. **Line Chart (with Tension & Animation)**  
**Use case:** Trend of river health indicators over months/years.  
> The default animation keeps viewers’ eyes on change.

### 6. **Bar Chart (Grouped / Stacked)**  
**Use case:** Compare river pollution intensities across regions or categories.  
> Easy to interpret and highly customizable.

### 7. **Radar Chart**  
**Use case:** Compare multiple attributes at once (e.g., biodiversity, pH, dissolved oxygen).  
> Great for showing multi-dimensional profiles.

### 8. **Doughnut / Pie Chart (with Animated Segments)**  
**Use case:** Show proportions of pollution sources in a single snapshot.  
> Smooth segment entry animation improves engagement.

---

## 📊 Library: React Google Charts (lightweight + animated)

React Google Charts is a simple, highly animated chart wrapper ideal for quick integration. :contentReference[oaicite:3]{index=3}

### 9. **GeoChart**  
**Use case:** Map showing relative pollution hotspots across states/regions.  
> Geographical storytelling with animated region shading.

### 10. **Calendar Chart**  
**Use case:** Show daily sampling or incident frequency (heat per day/month).  
> A visually engaging way to show time patterns.

### 11. **Timeline Chart**  
**Use case:** Highlight key events in river policy, cleanup efforts, or degradation phases.  
> Animates through time segments and provides context.

### 12. **Annotated Timeline**  
**Use case:** Combine data values with textual notes (e.g., regulation change impacts).  
> Allows storytelling with both numbers and context.

---