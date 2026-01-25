---
title: ReadME [About Triveni-net]
description: Tech solution suggestions
---

**Project Triveni-Net**

> Tagline: “Sky, Data, and People united for living rivers.”

**Mission**: To rejuvenate the Mahanadi and Kaveri rivers through AI/ML tech.

**Constraint**: Low cost, fast development MVP/POC

**Innovation Strategy**. Leveraging advanced AI/Computer Vision expertise to automate monitoring without expensive hardware sensors.

Triveni-Net is a three-part river intelligence system that unites satellite vision, open data, and citizen power to protect and heal India’s sacred rivers

At its core are three sibling projects:

- **Satya-Setu (The Bridge of Truth)**  
  A data aggregation and anomaly detection dashboard that unifies fragmented government and public water-quality data (CPCB, SPCBs, Namami Gange, India-WRIS, data.gov.in, and more) and highlights “Truth Gaps” between official claims and actual river conditions.

- **Nadi-Drishti (The Vision of the River)**  
  A satellite-based remote sensing system that uses free imagery (Sentinel-2, Landsat-8/9) and AI to detect turbidity, algal blooms, pollution plumes, and land-use change, creating a digital twin of river health from orbit.

- **Jan-Prahari (The Citizen Sentinel)**  
  A WhatsApp-based, AI-verified reporting bot that turns citizens into human sensors, collecting geo-tagged photos of foam, plastic, and other pollution to build a real-time ground map of river abuse and cleanup needs.

Together, these three tools form Triveni-Net: **the sky watching, the data auditing, and the people witnessing**—all working in sync to make Indian rivers cleaner, safer, and more accountable.

---

**Please read about all 3 project first before your proceed to next section.**

- [**Nadi-Drishti** _eye in the sky_](/thinking-grounds/river-research/tech-solution/nadi-dristi): a satellite-based system for river health.
- [**Jan-Prahari** _eye on the ground_](/thinking-grounds/river-research/tech-solution/Jan-Prahari): a WhatsApp-powered citizen sentinel for on-ground evidence
- [**Satya-Setu** _bridge of truth_](/thinking-grounds/river-research/tech-solution/satya-setu): a centralized intelligence dashboard designed to unify fragmented river and pollution data from multiple Indian government and public sources

---

## A combined solution

We can treat Nadi-Drishti and Jan-Prahari as Satya-Setu’s **two strongest data streams** : one from the sky (satellites) and one from the ground (citizens). Together, they make Satya-Setu’s “Bridge of Truth” much sharper, more credible, and more action-oriented.

Below are concrete ways to plug them in.

---

### 1. Data Flow: Who Feeds Whom?

- Nadi-Drishti → Satya-Setu
  - Push satellite indices (NDTI, NDCI, NDWI, turbidity, algal bloom flags) for each river segment and date into Satya-Setu’s unified database as an additional data source alongside CPCB/SPCB sensors.
  - Expose a small internal API from Nadi-Drishti (e.g., `/segment/{id}/daily-indices`) that Satya-Setu ingests during its ETL jobs.
- Jan-Prahari → Satya-Setu
  - Stream verified WhatsApp reports (class, confidence, GPS, timestamp, photo URL) into Satya-Setu as “citizen-observed events”.
  - Use MongoDB’s GeoJSON location in Jan-Prahari, then a simple ETL job to upsert into Satya-Setu’s relational store with a `station_or_segment_id` mapping.

This turns Satya-Setu from “only government + open data” into “government + satellite + people”.

---

### 2. Better Anomaly Detection Using Nadi-Drishti

- Cross-modal anomaly rules
  - For each CPCB/SPCB station, join with the nearest Nadi-Drishti pixel/segment. If satellite turbidity or algal bloom index is in the 95th percentile but official turbidity/BOD look “normal”, auto-flag a **Truth Gap** .
  - Likewise, if satellite shows very clean water but sensors show chronic high pollution, flag as “sensor error or delayed update”.
- Station health scoring
  - Create a **“Credibility Score”** per station: combine data quality checks (flat lines, missing data) with correlation to satellite patterns. Low correlation + bad metadata → low credibility.
  - Visualize this score on the Satya-Setu dashboard so you can quickly see which stations to distrust.
- Spatio-temporal hotspot detection
  - Use Nadi-Drishti’s time-series generator to identify stretches where pollution indices are consistently bad, then overlay that onto Satya-Setu to show “chronic vs. episodic” problem zones.

This makes Satya-Setu’s anomalies more science-backed, not just sensor-statistics-based.

---

### 3. Ground-Truth Layer Using Jan-Prahari

- Citizen reports as **evidence**
  - When Satya-Setu sees a Truth Gap (e.g., official data clean, satellite dirty), it can check Jan-Prahari for nearby citizen reports (plastic, foam, dead fish) in that time window.
  - If multiple reports cluster around the same point (DBSCAN cluster), boost the severity of that anomaly and tag it as “High-confidence, citizen-confirmed”.
- Incident timeline on Satya-Setu
  - For each river segment, show a mini-timeline: official data trend, satellite trend, and citizen incidents stacked together.
  - This helps you narrate stories like: “Satellite saw bloom on 5th, citizens reported dead fish on 7th, but CPCB data stayed flat.”
- Spam and noise reduction
  - Jan-Prahari already filters irrelevant images with YOLOv8 and spam logic; only validated events go into Satya-Setu, so your dashboard shows **clean, high-signal** citizen data.

Now Satya-Setu becomes legally and socially stronger because every red flag can be backed by photos and coordinates.

---

### 4. Unified Dashboard & Storytelling

- Single pane of glass
  - In Satya-Setu’s UI, add toggle layers: **Gov Data** , **Satellite Layer (Nadi-Drishti)** , **Citizen Layer (Jan-Prahari)** for each map and chart.
  - Clicking a hotspot should show: sensor readings, satellite metrics, and latest citizen photos with timestamps.
- “Bridge of Truth” narratives
  - Auto-generate simple, human-readable cards:
    - “Segment X: Government says ‘moderate’, satellite shows high turbidity, 12 citizen reports of foam and plastic this week → Likely underreported pollution.”
  - These cards are what you can send to journalists, PIL lawyers, or local leaders.

This turns Satya-Setu from a nerdy data tool into a storytelling tool that can actually move people and institutions.
