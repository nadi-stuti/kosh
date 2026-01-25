---
title: Satya-Setu
description: Satya-Setu (The Bridge of Truth)
---

> **Type:** Data Aggregator & Anomaly Detection Dashboard

Satya-Setu is a centralized intelligence dashboard designed to unify fragmented river and pollution data from multiple Indian government and public sources (CPCB, SPCBs, Namami Gange, India-WRIS, data.gov.in, and more). It exposes discrepancies between officially reported data and independent satellite/ground truth, acting as a **"Bridge of Truth"** between what is claimed and what is actually happening in the rivers.

Satya-Setu is further strengthened by two sibling systems:

- [**Nadi-Drishti** _eye in the sky_](/thinking-grounds/river-research/tech-solution/nadi-dristi): a satellite-based system for river health.
- [**Jan-Prahari** _eye on the ground_](/thinking-grounds/river-research/tech-solution/Jan-Prahari): a WhatsApp-powered citizen sentinel for on-ground evidence

together they provide independent satellite and crowd-sourced truth streams that Satya-Setu uses to cross-verify government data and expose “Truth Gaps.”

---

### Technical Specifications

- **Tech Stack:**
  - **Scraping & Ingestion:** Python (Selenium or Playwright for dynamic dashboards; Requests + BeautifulSoup for static HTML; pdfplumber/Tesseract OCR for PDF reports).
  - **Data Processing & Storage:** Pandas, NumPy; flat files (CSV/Parquet) or lightweight SQLite/PostgreSQL for structured storage.
  - **Backend API (Optional but recommended):** FastAPI or Flask to serve unified JSON APIs.
  - **Visualization:** PowerBI (Public) embeds, or a custom frontend using Next.js + Chart.js / ECharts; alternatively Streamlit for faster MVP.
  - **Automation & Scheduling:** GitHub Actions (cron-based workflows), or low-cost alternatives like Railway/Render scheduled jobs.
  - **Integration with Other Systems:** Webhooks / REST API for downstream tools (e.g., Nadi-Drishti, alerting bots, newsroom dashboards).

- **Core Resources & Data Sources (India-focused):**
  - **CPCB RTWQMS:** Central Pollution Control Board's Real-Time Water Quality Monitoring System dashboard for river monitoring stations.
  - **CPCB / SPCB Portals:**
    - CPCB central site (dashboards, PDF reports, station-wise data).
    - State Pollution Control Boards (SPCBs) for Ganga basin states: UPPCB (Uttar Pradesh), UKPCB (Uttarakhand), BSPCB (Bihar), WBPCB (West Bengal), etc.
    - Other key SPCBs (Karnataka, Tamil Nadu, Chhattisgarh, Maharashtra, etc.) for broader river coverage.
  - **Namami Gange / NMCG Platforms:**
    - PRAYAG (Platform for Real-time Analysis of Yamuna, Ganga and their Tributaries) – real-time & historical water quality and STP performance dashboards.
    - Namami Gange official project and STP progress pages.
  - **India-WRIS / NWIC:**
    - Water Data from National Water Informatics Centre (discharge, flow, and water level at key locations).
  - **data.gov.in:**
    - Datasets such as "Water Quality Data for River Ganga" and similar river datasets.
  - **Other Relevant Sources (extensible list):**
    - CPCB annual reports and river action plan PDFs.
    - State Environment Department reports (often in PDF/Excel).
    - Jal Jeevan Mission & Jal Shakti ministry dashboards where relevant.

---

### AI Usage

- **Unsupervised Anomaly Detection:**
  - Implement Isolation Forests, One-Class SVMs, or Local Outlier Factor models on multivariate time-series (pH, BOD, COD, DO, turbidity, coliform counts, flow).
  - Learn the "normal" behavioral profile of each monitoring station (diurnal/seasonal variation), then flag outliers that deviate strongly from historical patterns.

- **Cross-Modal Validation (Sensor Fusion Mindset):**
  - Combine government sensor data with:
    - Satellite-derived indices from Nadi-Drishti (NDTI, NDCI, NDWI, turbidity proxies).
    - Rainfall and runoff data (IMD / NASA GPM) to understand when spikes are hydrologically plausible.
  - If a station reports "excellent" quality (e.g., DO high, BOD low) while satellite data shows dense algal bloom or heavy sediment plume, classify this as a **"Truth Gap"** anomaly.

- **Meta-Data Quality Checks:**
  - Detect suspicious patterns such as:
    - Repeated constant values for long periods (e.g., pH = 7.00 for 30 consecutive days).
    - Sensors that go offline at the same time every night or weekend.
    - Sudden resets to "perfect" values after being critical.

- **Explainable Alerts:**
  - Attach human-readable explanations to each anomaly:
    - "Unusual BOD spike compared to past 90 days and similar flow conditions."
    - "Satellite imagery indicates turbidity increase not reflected in CPCB station data."

---

### Operation Details

- **Time Estimate (MVP):** ~2 Weeks (solo developer, focused scope).
  - Week 1: Scraper development for 3–5 priority sources (CPCB RTWQMS, one SPCB, PRAYAG, one data.gov.in dataset).
  - Week 2: Data model design, basic anomaly detection scripts, and a minimal dashboard (Streamlit or static site with embedded charts).

- **Cost to Develop & Run (MVP):**
  - Hosting: GitHub Pages (static frontend) – free.
  - Automation: GitHub Actions (limited free minutes per month) – free at small scale.
  - Compute: Local machine or a free-tier cloud instance for periodic scrapes.
  - External APIs: Using only open/public government portals and open satellite data – free.

- **Monetization Strategy:**
  - **Premium Aggregated Data API:**
    - Offer a cleaned, unified, well-documented REST API for:
      - Environmental NGOs.
      - Researchers and universities.
      - Newsrooms and data journalists.
  - **Compliance & Early-Warning Alerts for Industry:**
    - SaaS-style subscription where industrial clusters or individual factories get:
      - Trend alerts when their downstream water quality indicators approach legal thresholds.
      - Comparative benchmarks vs. other units in the same sector/river segment.
  - **Custom Reporting:**
    - Paid, on-demand analyses for PIL lawyers, policy think-tanks, or investigative journalists.

---

## Detailed description

### System Overview

**Satya-Setu (The Bridge of Truth)** is a data aggregation and anomaly detection platform focused on river and water-quality governance. It is designed for an environment where:

- Data is **fragmented** across dozens of portals (CPCB, SPCBs, NMCG, WRIS, PDFs, and scattered Excel sheets).
- Data is sometimes **incomplete, delayed, or misreported** due to faulty sensors, poor maintenance, or deliberate manipulation.
- Citizens, activists, and honest officials struggle to see the **"full picture"** of river health.

Satya-Setu ingests all of this into one unified system, then layers **AI-driven anomaly detection** and **cross-validation with satellite/independent data**. The goal is not only to visualize the data but to **expose inconsistencies and structural blind spots**.

Where Nadi-Drishti is the "eye in the sky" watching the physical river, Satya-Setu is the **forensic accountant** checking the books.

---

### How It Works (Data & Logic Flow)

1. **Data Ingestion Layer (Extract):**
   - Scheduled jobs (via GitHub Actions) run at fixed intervals (e.g., hourly or daily).
   - For each source:
     - Navigate dashboards (CPCB RTWQMS, PRAYAG) with Selenium/Playwright.
     - Download CSV/Excel where available; otherwise, scrape HTML tables.
     - For PDF-based reports, download and parse them with pdfplumber + OCR.

2. **Normalization & Harmonization (Transform):**
   - Convert all measurements into consistent units and schemas:
     - pH (unitless, but rounding/precision standardized).
     - BOD, COD, DO (mg/L).
     - Flow/discharge (m³/s or MLD, standardized per river/segment).
   - Map diverse station identifiers into a unified station model:
     - Each station gets a canonical ID, coordinates, river name, and jurisdiction (State/District, SPCB).
   - Handle missing values and outliers:
     - Use rolling medians and interpolation for mild gaps.
     - Tag impossible values (e.g., negative BOD) as "invalid" for anomaly logs.

3. **Storage & Versioning (Load):**
   - Store daily snapshots (or even hourly, where available) in versioned CSV/Parquet files.
   - Maintain a simple metadata log of:
     - When data was last successfully scraped from each source.
     - How many stations responded vs. expected.

4. **Anomaly Detection Layer:**
   - For each station and parameter, build a historical time-series (e.g., last 365 days).
   - Train unsupervised models (Isolation Forest, LOF, or basic z-score filters) to detect:
     - Sudden jumps inconsistent with seasonal patterns.
     - Long periods of suspicious constancy.
     - Correlation breaks (e.g., BOD increasing while DO remains unrealistically high).
   - Integrate satellite-derived indicators from Nadi-Drishti for cross-validation:
     - Spatially align satellite pixels with station coordinates.
     - Create a rule base: "If satellite turbidity index is in the 95th percentile but turbidity sensor shows normal, flag a mismatch."

5. **Dashboard & Alerts:**
   - The front-end presents:
     - **Map View:** All monitoring stations with status colors (normal / anomalous / offline / inconsistent-with-satellite).
     - **Timeline View:** Station-wise trend charts with anomaly points highlighted.
     - **Discrepancy View:** A list of places and dates where official data and satellite/derived data diverge.
   - Alerts can be exposed via:
     - Email digests.
     - Webhook callbacks for other systems.
     - Public RSS/JSON feeds.

---

### Implementation Roadmap

#### Phase 1: Source Mapping & Prototype Scrapers (Days 1–3)

- Identify and document priority sources (for an MVP):
  - CPCB RTWQMS main dashboard.
  - One high-impact SPCB portal (e.g., Uttar Pradesh for Ganga segments).
  - PRAYAG (Namami Gange real-time portal).
  - One historical dataset from data.gov.in.
- Implement basic scrapers:
  - Target 5–10 representative stations across different states.
  - Save raw output to `/data/raw/{source}/{date}.csv`.

#### Phase 2: Data Model & Cleaning (Days 4–6)

- Design a unified schema (e.g., `station_id`, `river`, `lat`, `lon`, `parameter`, `value`, `unit`, `timestamp`, `source`).
- Write transformation scripts:
  - Unit normalization.
  - Handling of missing and obviously invalid values.
  - Mapping station names to consistent IDs and coordinates.
- Generate first cleaned dataset snapshot.

#### Phase 3: Anomaly Engine (Days 7–9)

- Implement baseline anomaly detection:
  - Simple statistical rules (e.g., z-scores, rolling mean/standard deviation).
  - Upgrade to Isolation Forest or similar unsupervised methods.
- Integrate a small subset of Nadi-Drishti satellite outputs (e.g., turbidity index at each station location).
- Define rule-based "mismatch" alerts:
  - Data present vs. satellite contradiction.
  - Data missing vs. expected reporting frequency.

#### Phase 4: MVP Dashboard & Public Output (Days 10–14)

- Build a thin front-end:
  - Option A: Streamlit app that reads cleaned CSVs directly from GitHub.
  - Option B: Static site (Next.js) that consumes a minimal FastAPI backend.
- Implement views:
  - River-wise and state-wise filtering.
  - Station details page with time-series charts and anomaly annotations.
  - Export options (CSV/PNG/PDF).

---

### Problems Solved

#### A. The "Fragmented Data" Problem

- **Issue:** River and pollution data is scattered, inconsistent, and often difficult to access programmatically.
- **Satya-Setu Solution:** A single pane of glass that aggregates, cleans, and standardizes this data, making it easily queryable and comparable.

#### B. The "Broken or Manipulated Sensor" Problem

- **Issue:** Sensors can be offline, mis-calibrated, or in some cases manipulated (e.g., shutting down when discharging effluents).
- **Satya-Setu Solution:**
  - Tracks uptime and reporting patterns to detect suspicious behavior (e.g., nightly shutdowns).
  - Cross-validates with satellite and hydrological data to detect improbable claims ("river looks clean" vs. "sensor says dirty" or vice versa).

#### C. The "PDF Graveyard" Problem

- **Issue:** Historical data and compliance reports are usually stuck in scanned PDFs.
- **Satya-Setu Solution:**
  - Uses OCR and table extraction to convert legacy documents into structured datasets.
  - Makes long-term trend analysis and pre/post-intervention comparisons possible.

#### D. The "Lack of Accountability" Problem

- **Issue:** Without unified, auditable timelines of data, it is hard to prove systemic negligence or chronic pollution.
- **Satya-Setu Solution:**
  - Maintains versioned time-series and anomaly logs that can be cited in media investigations or legal filings.
  - Highlights specific dates, locations, and parameters where data behavior deviates from expected norms.

---

### Technology Stack & Resource Requirements

| Component             | Technology / Tool                                     | Cost          |
| --------------------- | ----------------------------------------------------- | ------------- |
| **Scraping**          | Python (Selenium/Playwright, Requests, BeautifulSoup) | Open Source   |
| **Data Processing**   | Pandas, NumPy                                         | Open Source   |
| **Anomaly Detection** | Scikit-Learn (Isolation Forest, LOF, etc.)            | Open Source   |
| **Database**          | CSV/Parquet on Git, or SQLite/PostgreSQL              | Free/Open Src |
| **Backend API**       | FastAPI / Flask                                       | Open Source   |
| **Frontend UI**       | Streamlit, or Next.js + Chart.js/ECharts              | Open Source   |
| **Automation**        | GitHub Actions                                        | Free Tier     |
| **Hosting**           | GitHub Pages, Streamlit Cloud, or similar             | Free Tier     |

---

### How Technical Experts Add Unique Value

This project requires more than just web developers; it needs specific high-level expertise to handle the complexity of environmental data.

#### 1. The Computer Vision Expert (The "Eyes")

A specialist in Computer Vision (CV) brings the ability to "see" pollution that numerical sensors miss. Their role is to turn satellite imagery into actionable data points.

- **Sensor Fusion (The "Trust but Verify" Logic):**
  - _Concept:_ A single data source is rarely perfect. A government sensor might report "Clean Water" because it is broken or placed in a clean pocket of the river.
  - _Application:_ The CV expert builds a **Multi-Modal Validation System**. They fuse the _numerical data_ (from ground sensors) with _visual data_ (satellite imagery). If the sensor says "Low Turbidity" but the satellite sees a massive brown plume, the system flags a **"Truth Gap"** anomaly.
- **Pattern Recognition Beyond Human Scale:**
  - _Concept:_ Pollution has visual "fingerprints"—oil slicks look different from algal blooms, which look different from mud.
  - _Application:_ They train Deep Learning models (like U-Nets or CNNs) to automatically classify these textures. The system learns to distinguish between a **natural sediment flow** (after rain) and an **industrial chemical discharge** (which might be an unnatural color like dark black or foam-white), even in areas where no ground sensors exist.

#### 2. The Data Scraping & Engineering Expert (The "Memory")

A specialist in advanced web scraping and data engineering builds the pipeline that keeps the system alive. Their role is to ensure we have a continuous, clean stream of data from hundreds of fragmented sources.

- **Resilience Against "Data Rot":**
  - _Concept:_ Government portals are notoriously unstable. They change layouts, go offline, or hide data behind captchas.
  - _Application:_ The expert builds **Self-Healing Scrapers**. If the CPCB website changes its table structure, the scraper detects the break and attempts to parse the new layout automatically, or alerts the team instantly. They use **Headless Browsers** (like Playwright/Selenium) to navigate complex, dynamic dashboards that standard scripts can't read.
- **Unsupervised Anomaly Detection:**
  - _Concept:_ We don't always know what a "pollution event" looks like mathematically, but we know what "normal" looks like.
  - _Application:_ The expert implements algorithms (like **Isolation Forests**) that learn the "heartbeat" of every monitoring station. If a factory suddenly releases a massive load of effluent at 3 AM, the data pattern will deviate from the historical norm. The system flags this "statistical noise" as a probable **illegal discharge**, even if the specific pollutant wasn't explicitly programmed into the rules.

---

### Beneficiary Experts (Target Audience)

This tool is designed to assist specific categories of experts and organizations, with a primary focus on the Mahanadi and Kaveri basins.

#### In India (Mahanadi & Kaveri Focus)

- **State & Regional Regulators:**
  - **Odisha & Chhattisgarh SPCB Officials:** Who need to monitor the heavy industrial belt (Iron, Steel, Power) in the Mahanadi basin without relying solely on factory self-reports.
  - **Tamil Nadu & Karnataka PCB Officials:** Who need real-time alerts for textile dyeing effluent in the Noyyal/Kaveri belt (Erode/Tiruppur) and sugar distillery waste in Mandya.
- **River Basin Authorities:**
  - **Mahanadi River Basin Organization & cMahanadi (NIT Raipur/Rourkela):** Researchers needing integrated data to plan the "Mahanadi River Basin Management Plan."
  - **Cauvery Water Management Authority (CWMA):** Officials monitoring flow and quality disputes between states.
- **Environmental Journalists:**
  - Reporters in Cuttack, Sambalpur, or Erode who need hard data to expose illegal dumping during monsoon seasons.
- **Public Interest Litigators:**
  - Legal teams fighting cases in the NGT (National Green Tribunal) regarding fly ash disposal in Talcher or untreated sewage in Trichy.

#### Around the World (Global Context)

- **International Water Security Researchers:** Academics studying the decline of major river deltas due to climate change.
- **ESG (Environmental, Social, and Governance) Auditors:** Firms that audit supply chains for multinational corporations, verifying that their factories are not polluting local water bodies.
- **Conservation NGOs:** Organizations like the WWF or The Nature Conservancy that require data to lobby for policy changes without the budget for private satellite contracts.
- **Climate Change Data Scientists:** Researchers feeding real-world surface water data into global climate models.

---

## Market analysis and Business plan

### Competitive Analysis

The market for environmental data is crowded, but heavily segmented. Most players focus on _Air Quality_ (because it affects rich urbanites) or _Global Climate Trends_ (for insurance/finance). Very few focus on **hyper-local river compliance** in India's industrial hinterlands.

#### 1. The "Open Data" Aggregators (Civic Tech)

These are our closest functional relatives—platforms that scrape government data for public good.

**OpenAQ (Global):**

- **What they do:** The gold standard for air quality. They scrape government portals worldwide (including CPCB) to create a single, harmonized API for PM2.5/PM10.[](https://openaq.org/)
- **Weakness:**
  - **Air-Only:** They do not touch Water Quality. The complexities of water (river flow vs. BOD vs. pH vs. heavy metals) are much harder to standardize than simple air particulates.
  - **No "Actionable" Intelligence:** They provide the data "as is." They don't have a "Lie Detector" layer that says, "This sensor is likely broken because the value has been constant for 48 hours."

**OpenCity.in / Oorvani Foundation (India):**

- **What they do:** An excellent repository of urban data (Bengaluru/Chennai), including some lake water quality reports (PDFs from KSPCB).[](https://data.opencity.in/dataset/bengaluru-lake-monthly-water-quality-reports/resource/b8e4b804-d989-4737-b5f6-fc4d22916d12)\*\*\*\*
- **Weakness:**
  - **Static & Manual:** They mostly host static files (PDFs/CSVs) uploaded manually or semi-manually. They don't have real-time, minute-by-minute scrapers running against industrial effluent dashboards.
  - **Urban Bias:** Focus is on cities (Bangalore Lakes), not major river basins like the Mahanadi or Kaveri industrial belts

* **What they do:** They build "Command & Control" centers for state governments (e.g., Andhra Pradesh Water Resources Dept). They integrate IoT sensors and hydrological models for flood management. [web:78][web:84]
* **Weakness:** They are a B2G (Business-to-Government) partner. This means they are _part of the system_. They cannot serve as a "Watchdog" because the government is their client. If a state-owned thermal plant is polluting, Vassar’s dashboard is internal to the government and unlikely to flag it publicly.
* **Satya-Setu Advantage:** Independence. We are an external auditor. We serve the _public_, not the _polluter_.

**India Water Portal / Arghyam:**

- **What they do:** A massive knowledge repository for water. They host articles and some datasets.[](https://www.indiawaterportal.org/articles/parsing-and-visualizing-indian-flood-forecast)\*\*\*\*
- **Weakness:** It is a "Library," not a "Live Dashboard." You go there to read a report from 2023, not to see what NALCO discharged into the Mahanadi 10 minutes ago.

#### 2. The Government Portals (Our Raw Material)

**CPCB Central Portal & Ganga PRAYAG:**

- **What they do:** The official repository of Real-Time Water Quality Monitoring Systems (RTWQMS). It aggregates data from ~4,000 industrial sensors.
- **Weakness:**
  - **The "Friday Night Glitch":** Sensors notoriously go "offline" or show flat-line data during illegal dumping hours. The portal accepts this "No Data" status passively.
  - **Fragmentation:** Data for the Mahanadi (Odisha/Chhattisgarh) is often on a completely different URL than data for the Kaveri (TN/Karnataka). There is no single API to query both.
- **Satya-Setu Advantage:** **Active Anomaly Detection.** We don't just display "No Data." We flag "No Data" as a suspicious event if it correlates with satellite-detected plumes or occurs repeatedly at specific times.

#### 3. Global & Academic Databases

**WRI Aqueduct (World Resources Institute):**

- **What they do:** A global water risk atlas used by investors to see if a region has high water stress.
- **Weakness:** It relies on annual or monthly averages. It cannot tell you that "Factory X dumped sludge yesterday at 3 AM." It is a strategic planning tool, not a tactical policing tool.
- **Satya-Setu Advantage:** Real-time tactical intelligence. We operate on a 24-hour cycle, not an annual cycle.

#### 4. The "Compliance Intelligence" Firms (Private/Dark Data)

These companies scrape data to sell "Risk Signals" to banks and investors.

**Respirer Living Sciences (India):**

- **What they do:** They started with low-cost air sensors but now aggregate CPCB data for their "NCAP Tracker" and "Atlas AQ" dashboard. They have successfully built a business on top of government data.
- **Weakness:**
  - **Hardware Heavy:** A lot of their business is still selling their own sensors (Atmos). Satya-Setu avoids the hardware logistics trap entirely.
  - **Air Focus:** Like OpenAQ, their mature products are Air-centric. Water is a secondary frontier they haven't fully conquered with the same depth.

**Generic "Alternative Data" Scrapers (Bright Data / Import.io users):**

- **What they do:** Hedge funds hire teams to scrape specific factories to predict production output (e.g., "If the factory is using more water, they are producing more steel").
- **Weakness:**
  - **Opaque & Expensive:** This data never sees the light of day. It is sold privately to traders. Satya-Setu democratizes this "Insider Information" for the public.

### How Satya-Setu is Better (The "Lie Detector" Moat)

Most scrapers (like OpenAQ) assume the government data is **true** . They just make it _readable_ .
**Satya-Setu assumes the data might be false.**

| Feature           | OpenAQ / OpenCity   | Government Portals  | **Satya-Setu**                           |
| ----------------- | ------------------- | ------------------- | ---------------------------------------- |
| **Data Trust**    | "Trust the Source"  | "We are the Source" | **"Trust but Verify" (Zero Trust)**      |
| **Handling PDFs** | Host them as files  | Publish them        | **OCR & Digitize them into Graphs**      |
| **Context**       | Raw Numbers         | Raw Numbers         | **Context (e.g., "This pH is illegal")** |
| **Cross-Check**   | None                | None                | **Satellite vs. Sensor Comparison**      |
| **Cost**          | Free (Grant funded) | Public              | **Free (Public) + Paid API (Business)**  |

### The Business Plan (Zero to Scale)

**Phase 1: The "Truth Prototype" (Months 1–3)**

- **Goal:** Build a "Watchdog Dashboard" for 2 critical stretches:
  1. **Mahanadi:** The industrial corridor from **Sambalpur to Cuttack** (monitoring NALCO, NTPC, and Coal belts).
  2. **Kaveri:** The textile belt from **Erode to Karur**.
- **Data Sources:** Scrape data from OSPCB (Odisha), CECB (Chhattisgarh), and TNPCB (Tamil Nadu) portals.
- **Customer:** Free for local activists and cMahanadi researchers to build credibility.

**Phase 2: Corporate Accountability & CSR (Months 4–9)**

- **Goal:** Monetize via "Impact Validation" reports.
- **Pitch to Industry:** "You spend crores on CSR. Use our dashboard to prove to shareholders that your initiatives are actually cleaning the river."
- **Target Revenue:** ₹5 Lakh - ₹15 Lakh per customized river-audit report.

**Phase 3: The "Green Passport" (Supply Chain Assurance) (Year 1+)**

_Replaces the "Compliance Shield" with a "Verification Engine."_

Instead of helping factories avoid fines (which is low-impact), we help them **win business** by proving they are clean. We target the **Global Brands** and **Banks** that hold the power.

- **Goal:** Create a "Satya-Setu Verified" data layer for the Global Supply Chain.
- **The Shift:** We don't ask the factory for money to hide data. We ask the **Buyer (e.g., H&M, Tata Motors)** for money to _verify_ the factory's data.

### The "Green Passport" Product Line

**1. For Global Buyers (The "Tiruppur Model")**
_Target: Fashion Brands (H&M, Zara, Decathlon) sourcing from the Kaveri Basin._

- **Problem:** These brands have pledged "Zero Discharge" (ZDHC) goals. They currently rely on annual paper audits, which are easy to fake.
- **Our Solution:** A **"Live Water Audit" API**.
  - When a brand places an order for 10,000 shirts, they query Satya-Setu: _"Did Supplier Factory #402 have any illegal discharge alerts during the production month?"_
  - If Satya-Setu detects a "Truth Gap" (Satellite showed plume vs. Sensor showed clean), the brand gets a **Risk Alert**.
  - **Impact:** The factory _must_ clean up to keep the contract.

**2. For Green Finance (The "Mahanadi Model")**
_Target: Banks (SBI, Axis) & Green Bond Issuers lending to Steel/Power plants._

- **Problem:** Banks are issuing "Sustainability-Linked Loans" (SLLs) where interest rates drop if the factory meets environmental targets. Currently, banks lack data to verify if targets are met.
- **Our Solution:** **Dynamic Credit Scoring**.
  - We provide a "Water Risk Score" for every borrower in the Mahanadi belt.
  - If a steel plant consistently accurately reports data (Low Anomaly Score), their risk rating improves.
  - **Impact:** Pollution becomes a financial liability. Clean factories get cheaper loans.

**3. The "Satya-Setu Certificate" (QR Code)**

- A public-facing QR code for factories to display on their website.
- Scans show a "Real-Time Trust Score" based on their last 30 days of data transparency (Uptime + Consistency).
- **Monetization:** Factories pay a certification fee to display this badge, validated by our independent scraping.

#### Why This Business Model Wins

1.  **Cleaner Incentives:** We align profit with _cleanliness_, not _secrecy_.
2.  **Deeper Pockets:** Global brands and banks have millions in "Sustainability Budgets," whereas local factories have tight margins.
3.  **Adversarial Truth:** We don't need the factory's permission. We audit them from the outside (Satellite + Public Data) and sell the truth to their financiers.

---

### Possible Customers (Mahanadi & Kaveri Specific)

These are the specific entities we will target for Phase 2 (CSR Reports) and Phase 3 (Compliance Subscriptions).

#### A. Mahanadi Basin (Odisha & Chhattisgarh)

_Focus: Heavy Metal, Thermal Pollution, Fly Ash_

1. **Mining & Metal Giants (The "Big Fish"):**
   - **NALCO (National Aluminium Company):** Angul & Damanjodi units.
   - **SAIL - Bhilai Steel Plant:** Major water consumer and potential effluent source in Chhattisgarh.
   - **Vedanta Aluminium:** Jharsuguda & Lanjigarh refineries.
   - **Jindal Steel & Power Ltd (JSPL):** Angul.
   - **Hindalco Industries:** Hirakud.

2. **Power Generation (Thermal Plumes):**
   - **NTPC Talcher & NTPC Kaniha:** Large thermal power plants that discharge heated water (thermal pollution).
   - **Mahanadi Coalfields Limited (MCL):** Opencast mines affecting groundwater and surface runoff.

3. **Fertilizers:**
   - **IFFCO Paradip:** Phosphatic fertilizer plant near the delta.

#### B. Kaveri Basin (Karnataka & Tamil Nadu)

_Focus: Chemical Dyeing, Organic Waste, Salinity_

1. **Textile & Paper (The "Chemical" Cluster):**
   - **Tamil Nadu Newsprint and Papers Limited (TNPL):** Karur (Large water consumer).
   - **Seshasayee Paper and Boards Ltd:** Erode.
   - **Tiruppur Exporters’ Association:** Represents hundreds of dyeing units (potential bulk subscription for the association).

2. **Sugar & Distilleries (The "Organic" Load):**
   - **E.I.D. Parry (India) Ltd:** Sugar factories in the basin.
   - **Mysore Sugar Company:** Mandya, Karnataka.
   - **Bannari Amman Sugars:** Operations in Tamil Nadu.

3. **Cement & Chemicals:**
   - **Chemplast Sanmar:** Mettur (PVC/Chemicals).
   - **Chettinad Cement / Dalmia Cement:** Ariyalur belt.

#### C. Institutional & Government Partners

_For Grants, Data Partnerships, and Pilot Projects_

1. **cMahanadi (Center for Mahanadi River Basin Management):** A consortium of NIT Raipur & NIT Rourkela; ideal for academic collaboration and credible data endorsement
2. **Cauvery Calling (Isha Foundation) / Art of Living:** Large NGOs with massive river rejuvenation funds that need "Proof of Work" data.
3. **Odisha State Pollution Control Board (OSPCB):** Direct collaboration for the "Star Rating" program for industries.
