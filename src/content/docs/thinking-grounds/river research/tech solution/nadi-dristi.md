---
title: Nadi-Drishti
description: Nadi-Drishti (The Vision of the River)
---

> **Type:** Satellite-Based Remote Sensing & Monitoring System

This tool utilizes free satellite imagery to monitor water quality indicators (turbidity, chlorophyll-a, suspended matter) and land-use changes along the river banks. It provides a macro-level view of the river's health.

### Technical Specifications

- **Tech Stack:**
  - **Backend:** Python (FastAPI).
  - **Core Engine:** Google Earth Engine (GEE) Python API (Free for research/non-commercial).
  - **Analysis:** NumPy, Pandas, Rasterio.
  - **Frontend:** Streamlit or Leaflet.js for map visualization.
- **Resources & Data:**
  - **Sentinel-2 (ESA):** For high-resolution optical imagery (10m resolution, 5-day revisit).
  - **Landsat-8/9 (NASA):** Thermal and surface data.
  - **SRTM:** Digital Elevation Models (DEM) for flow direction.

### AI Usage

- **Computer Vision (Segmentation):** Just as self-driving cars identify "drivable areas" vs. "obstacles," the AI experts can implement Semantic Segmentation (U-Net architecture) to precisely delineate water bodies from land, even during floods.
- **Pattern Recognition:** Train models to detect specific "plume patterns" (e.g., a dark discharge from a factory vs. green algal bloom from farms).

### Operation Details

- **Time Estimate (MVP):** 2–3 Weeks.
- **Cost to Develop:** $0. (Hosting on Hugging Face Spaces or Streamlit Cloud; GEE is free).
- **Monetization Strategy:**
  - **B2B Reports:** Sell "Historical Environmental Risk Assessment" reports to real estate developers or industries planning to build near the river.
  - **Crop Advisory:** Sell water quality data to farmer cooperatives downstream.

---

## Detailed description

### System Overview

**Nadi-Drishti** (The Vision of the River) is a zero-cost, scalable remote sensing platform designed to act as a "Digital Twin" for river ecosystems. Unlike traditional monitoring that relies on expensive, localized hardware sensors (IoT buoys) which are prone to theft and damage, Nadi-Drishti utilizes multi-spectral satellite imagery to monitor river health from orbit.

It leverages **Google Earth Engine (GEE)** for processing petabytes of geospatial data and integrates **Computer Vision (AI)** to detect anomalies, pollution plumes, and morphological changes in the Mahanadi and Kaveri rivers.

### How It Works (The Scientific Mechanism)

The system operates on the principles of **Spectrometry** . Water, sediment, algae, and chemicals reflect light differently across various wavelengths (Visible, Near-Infrared, Shortwave-Infrared).

1. **Data Acquisition:**
   - The system pulls real-time data from the **Sentinel-2** (European Space Agency) and **Landsat-8/9** (NASA) satellite constellations.
   - **Sentinel-2** provides high-resolution optical imagery (10 meters/pixel) with a revisit time of approx. 5 days.
2. **Spectral Analysis (The Math):**
   - Instead of just looking at "photos," the system calculates specific indices using spectral bands:
     - **NDTI (Normalized Difference Turbidity Index):** Detects physical pollutants and sediment loads (mud/dirt).
     - **NDCI (Normalized Difference Chlorophyll Index):** Detects Algal Blooms, which indicate high nitrogen/phosphorus runoff from fertilizers (Eutrophication).
     - **NDWI (Normalized Difference Water Index):** Differentiates water from land to track drying riverbeds or flood expansion.
3. **AI Layer (The Intelligence):**
   - Raw spectral data is noisy. The AI layer filters out clouds and shadows.
   - It uses **Semantic Segmentation** to identify specific pollution sources (e.g., a dark plume entering the river from an industrial zone) versus natural sedimentation.

### Implementation Roadmap

#### Phase 1: The Pipeline Setup (Week 1)

- **Objective:** Establish connection with satellite archives.
- **Action:**
  - Set up a Python environment using **`geemap`** (a Python package for Google Earth Engine).
  - Define the "Region of Interest" (ROI) shapefiles for the Mahanadi and Kaveri basins.
  - Write scripts to filter image collections by "Cloud Cover < 10%".

#### Phase 2: Index Calculation & Processing (Week 2)

- **Objective:** Convert raw pixels into meaningful scientific data.
- **Action:**
  - Implement algorithms to calculate NDTI and NDCI for every pixel within the river boundaries.
  - Create a "Time-Series Generator" to plot how these values change over 6 months (Trend Analysis).

#### Phase 3: The "Computer Vision" Integration (Week 3)

- **Objective:** Apply the "AI Vision" logic.
- **Action:**
  - **Input:** Multi-band satellite images.
  - **Model:** A lightweight U-Net or ResNet architecture.
  - **Task:** Train the model to segment the river and flag "Anomalies" (e.g., sudden color change in a specific sector).
  - **Correction:** Use AI to "fill in the gaps" on cloudy days using temporal interpolation (predicting what the river looks like based on previous days).

#### Phase 4: Visualization & Deployment (Week 4)

- **Objective:** Make it usable for non-coders.
- **Action:**
  - Build a **Streamlit** dashboard.
  - **Features:** A slider to see the river "Then vs. Now," heatmaps showing pollution hotspots, and auto-generated PDF reports.

### Problems Solved

#### A. The "Blind Spot" Problem

- **Issue:** Physical sensors only measure the water _exactly_ where they are placed. If a factory dumps waste 5km downstream, the sensor misses it.
- **Solution:** Nadi-Drishti monitors the _entire_ length of the river simultaneously. No blind spots.

#### B. The Cost Barrier

- **Issue:** A single industrial-grade water quality buoy costs $5,000+. Covering two major rivers requires millions of dollars.
- **Solution:** Nadi-Drishti costs **$0** in hardware. It democratizes high-end environmental monitoring.

#### C. The "Source Tracking" Dilemma

- **Issue:** When pollution is found, it is hard to prove _who_ did it.
- **Solution:** The system offers historical playback. We can rewind time to see exactly when and where a pollution plume started, pinpointing the specific drain or industrial outlet.

#### D. Accessibility & Safety

- **Issue:** Many parts of the Mahanadi/Kaveri are in dense forests or difficult terrain where researchers cannot go daily.
- **Solution:** Orbital monitoring requires no human presence on the ground.

### Technology Stack & Resource Requirements

| **Component**          | **Technology / Tool**                 | **Cost**             |
| ---------------------- | ------------------------------------- | -------------------- |
| **Satellite Data**     | Sentinel-2 MSI, Landsat-8 OLI         | Free (Open Access)   |
| **Computation Engine** | Google Earth Engine (Python API)      | Free (Research Tier) |
| **Backend Logic**      | Python (Pandas, NumPy, Rasterio)      | Open Source          |
| **AI/ML Framework**    | TensorFlow / PyTorch                  | Open Source          |
| **Frontend UI**        | Streamlit (Python-based framework)    | Open Source          |
| **Hosting**            | Hugging Face Spaces / Streamlit Cloud | Free Tier            |

### How the "AI Experts" adds Unique Value

AI experts who have expereince in **Full Self-Driving (FSD)** technology is the critical differentiator here. Here is how FSD logic applies to River Monitoring:

1. **Road Segmentation **➡️** River Segmentation:**
   - _FSD Logic:_ A car must know exactly where the road ends and the sidewalk begins.
   - _River Application:_ The AI uses the same segmentation logic to define dynamic river boundaries, separating water from wet soil or vegetation, which is crucial for accurate water volume estimation.
2. **Obstacle Detection **➡️** Plume Detection:**
   - _FSD Logic:_ Identifying foreign objects (pedestrians, debris) on the road.
   - _River Application:_ Detecting "foreign objects" in water—specifically oil slicks, plastic islands, or sudden foam accumulation. The vision model treats these as "obstacles" on the water surface.
3. **Sensor Fusion:**
   - _FSD Logic:_ Combining Camera and Lidar data.
   - _River Application:_ Fusing "Optical Data" (Sentinel-2) with "Radar Data" (Sentinel-1 SAR). Radar can "see" through clouds, allowing the system to monitor floods even during the monsoon when optical satellites are blinded by clouds.

### Beneficiary Experts (Target Audience)

This tool is designed to assist specific categories of experts and organizations in India and globally.

#### In India

- **State & Central Pollution Control Boards:** Officials responsible for regulatory compliance who lack manpower for daily physical inspection.
- **Hydrologists & River Basin Planners:** Experts working on river interlinking or dam management who need data on water surface area changes.
- **Agricultural Scientists:** Researchers studying the impact of fertilizers; they need to see the correlation between farming seasons and algal blooms in the river.
- **Disaster Management Authorities:** Officials needing real-time flood mapping to plan evacuations.
- **Urban Planners (Smart Cities):** Teams designing riverfront developments who need historical data on river course shifting to prevent construction in flood-prone zones.

#### Around the World (Global Context)

- **International Water Security Researchers:** Academics studying the decline of major river deltas due to climate change.
- **ESG (Environmental, Social, and Governance) Auditors:** Firms that audit supply chains for multinational corporations, verifying that their factories are not polluting local water bodies.
- **Conservation NGOs:** Organizations like the WWF or The Nature Conservancy that require data to lobby for policy changes without the budget for private satellite contracts.
- **Climate Change Data Scientists:** Researchers feeding real-world surface water data into global climate models.

## Market analysis and Business plan

### Competitive Analysis

Several players already exist in the market, but their weaknesses are our biggest opportunity.

**1. Global Giants**

**EOMAP (Germany):**

- What they do: Measure water quality (turbidity, chlorophyll) via satellite. They're the largest player in this space.
- Weakness: Extremely expensive (thousands of dollars per report). Their system is highly complex and primarily designed for European/American standards. They don't understand the 'religious' or 'social' dimensions.

**Planet Labs / Descartes Labs (USA):**

- What they do: Sell raw imagery data.
- Weakness: They don't provide 'insights.' You have to purchase their data and analyze it yourself. A typical government official or spiritual leader can't interpret their data.

**Bluefield Technologies:**

- What they do: Primarily track methane leaks.
- Weakness: Their focus isn't river pollution—it's climate gases.

**2. Indian Players**

**Vassar Labs / Skymet:**

- What they do: Build 'Water Management' systems for the government, but rely heavily on IoT sensors (hardware).
- Weakness: Installing hardware is expensive, and theft/damage is a widespread problem in India.

**Farmonaut:**

- What they do: Monitor agriculture via satellite.
- Weakness: Their focus is on 'farms,' not 'rivers.'

**Our USP (Unique Selling Proposition)**

"We don't sell hardware; we sell truth."

- **Zero-Hardware Cost:** We have no sensors that can be stolen. We're 100% software.
- **Spiritual + Scientific:** No company in the world provides "cultural context" with data. We will.
- **Community of FSD AI experts:** We will reach out to 'Full Self-Driving' AI experts whose experience will help us catch subtle details that others' standard algorithms miss (like thin oil slicks or small plastic islands).

### The Business Plan (Zero to Scale)

This plan is designed so you we can launch this project in minimum cost, and the project generates its own revenue.

**Phase 1: The 'Zero-Cost' Launch (Months 1-3)**

- **Goal:** Create a Proof of Concept (PoC)
- **Investment:** $0 (just time)
- **Action:** Build a dashboard for just 50km of the Mahanadi/Kaveri using Google Earth Engine (free) and Sentinel-2 data.
- **Customers (Free):** Local leaders and social workers. (Local ashrams, river protection groups, and environmental influencers.)
- **Strategy:** Gift them this tool. When they mention it in their speeches or show data to the government, our "brand value" grows. This is called "Trust Capital."
- **Marketing:** Get our tool mentioned in a government meeting or a major news outlet. This "earned media" replaces a ₹10 Lakh marketing budget.

**Phase 2: The 'Grant & Pilot' Stage (Months 4-9)**

- **Goal:** Earn first revenue
- **Target Audience:** CSR (Corporate Social Responsibility) wings, Large Power Plants, Steel Factories, and FMCG companies (like HUL, Tata, or Vedanta) operating near Mahanadi/Kaveri.
- **Pitch:** "Sir, you're funding river cleaning, but do you know if cleaning is actually happening? Our tool provides an 'Impact Audit.'"
- **The Problem**: These companies spend crores on CSR but can't "see" the result.
- **Monetization Model:** Report Selling at ₹50,000 - ₹1 Lakh per report (companies need this to prove their CSR money is well-spent).
- **Action:** Approach 2-3 large factories (steel/power plants) along the Mahanadi/Kaveri.
- **Our Solution:** The Audit Tool: Give them a dashboard showing, "Since your CSR project started, the Chlorophyll levels in this 10km stretch decreased by 14%."
  - The Shield: Offer a private monitoring tool to factories. If their own waste-gate leaks, the AI alerts them via WhatsApp instantly, saving them crores in legal fines and "Environmental Compensation" costs.

**Phase 3: The 'Compliance' Scale-Up (Months 10-18)**

- **Goal:** Fixed monthly income (SaaS Model)
- **Target Audience:** State Pollution Control Boards (SPCB) and Industrial Estates, Smart City Projects, and Jal Shakti Ministry
- **Product:** "Nadi-Drishti Alert System"
- **Pitch:** "Sir, before any activist or court fines you, our system will tell you if your factory is leaking contaminated water."
- **Strategy**: Participate in government "Grand Challenges" (like the Startup India WASH challenge).
- **Pricing:** ₹25,000 per month per factory (subscription)
- **Growth:** If just 100 factories sign up, that's ₹25 lakh/month in revenue.

**Phase 3.5: Farmers’ Associations & Insurance (The Data Goldmine)**

- **Target:** Sugar Mills, Rice Cooperatives, and Crop Insurance companies.
- **The Problem:** Toxic river water kills crops, but farmers only find out after the harvest fails.
- **Our Solution:** _ **The Safety Alert:** A low-cost SMS/WhatsApp alert to farmer cooperatives: _"Warning: High Lead/Acidity detected 5km upstream. Do not pump water for the next 24 hours."
  - **Insurance:** Provide "Water Risk Scores" to insurance companies. They will pay for this data to decide the premium for farms located near industrial zones.

**Phase 4: The Ecosystem Play (Year 2+)**

- **Goal:** Global expansion
- **New Product:** "River Credits" (like Carbon Credits)
- **Concept:** Factories that keep rivers clean earn 'River Credits' they can sell in international markets.
- **Partnership:** Align with World Bank or UN Water.

#### The Master Business Map: Audience vs. Strategy

| **Phase**               | **Target Customer**            | **Their Main Pain Point**                                    | **Our Solution (USP)**                                        | **Revenue Model**                                     |
| ----------------------- | ------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------- | ----------------------------------------------------- |
| **Phase 1: Validation** | **Local Leaders & NGOs**       | Lack of scientific proof to drive public & govt action.      | "Evidence as a Service" (Free high-res pollution maps).       | **$0** (Trust Capital & Social Media Visibility)      |
| **Phase 2: Pilot**      | **Corporate CSR Wings**        | Hard to measure "Impact" of their water projects for audits. | "Impact Verification Dashboards" for CSR compliance.          | **Project-Based Fees** (₹5L - ₹15L per river stretch) |
| **Phase 3: Scale**      | **Industries & Govt**          | Hefty fines for pollution; lack of 24/7 monitoring staff.    | "Early Warning System" (Alerts before the inspector arrives). | **SaaS Subscription** (₹50k - ₹2L per month)          |
| **Phase 3.5: Global**   | **Farmer Assocs & Agri-Corps** | Crop failure due to toxic water or drought.                  | "Water Quality Forecasts" for Precision Irrigation.           | **Per-Acre / Per-**                                   |

### Possible Customers

This list identifies specific entities along the **Mahanadi and Kaveri** river basins that would be the primary users of the Nadi-Drishti system across our business phases.

#### **Phase 2: CSR & Impact Validation (Corporate Sector)**

These are large-scale industries located directly on the river banks with significant CSR budgets for water conservation.

##### **Mahanadi Basin (Odisha/Chhattisgarh)**

- **Vedanta Aluminium Ltd.** (Jharsuguda/Lanjigarh)
- **Mahanadi Coalfields Limited (MCL)**
- **Jindal Steel & Power Ltd. (JSPL)** (Angul)
- **National Aluminium Company (NALCO)** (Angul)
- **NTPC Limited** (Kaniha/Talcher)
- **Tata Steel** (Kalinganagar/Dhenkanal)
- **GMR Kamalanga Energy Ltd.**
- **Adani Power** (Raigarh/Chhattisgarh)
- **JSW Steel** (Paradip)
- **IFFCO** (Paradip - Fertilizer unit)

##### **Kaveri Basin (Karnataka/Tamil Nadu)**

- **E.I.D. Parry (India) Ltd.** (Sugar/Distillery)
- **The Mysore Sugar Company Ltd.** (Mandya)
- **BHEL** (Tiruchirappalli)
- **Seshasayee Paper and Boards Ltd.** (Erode)
- **Tamil Nadu Newsprint and Papers Limited (TNPL)** (Karur)
- **KPR Mill Limited** (Coimbatore/Tiruppur)
- **TVS Motor Company** (Hosur - Kaveri tributary region)
- **Chemplast Sanmar** (Mettur)
- **UltraTech Cement** (Ariyalur units)

---

#### **Phase 3: Institutional & Compliance (Government & Industrial Bodies)**

These entities are responsible for monitoring pollution and enforcing environmental laws.

##### **Regulatory Boards**

- **Central Pollution Control Board (CPCB)**
- **Odisha State Pollution Control Board (OSPCB)**
- **Chhattisgarh Conservation of Environment Pollution Control Board (CECB)**
- **Karnataka State Pollution Control Board (KSPCB)**
- **Tamil Nadu Pollution Control Board (TNPCB)**

##### **Municipal & Planning Authorities**

- **Mahanadi River Basin Organization**
- **Cauvery Water Management Authority (CWMA)**
- **National Mission for Clean Ganga (NMCG)** (For technical collaboration/frameworks)
- **Cuttack Municipal Corporation** (Riverfront monitoring)
- **Tiruchirappalli City Corporation**
- **Department of Water Resources (Odisha/Karnataka)**
- **Odisha Space Applications Centre (ORSAC)** (For data cross-verification)

---

#### **Phase 3.5: Risk Management & Global Scale (Agri-Business & Insurance)**

These organizations require water quality data for long-term food security and financial risk assessment.

##### **Farmer Producer Organizations (FPOs) & Cooperatives**

- **Thanjavur Cooperative Marketing Federation** (Cauvery Delta)
- **TNAU Agritech Portal Associations** (Erode/Trichy)
- **Odisha State Cooperative Milk Producers' Federation (OMFED)**
- **Karnataka Milk Federation (KMF - Nandini)**
- **South Indian Sugar Mills Association (SISMA)**

##### **Agri-Insurance & Finance**

- **Agriculture Insurance Company of India (AICIL)**
- **HDFC ERGO** (Crop Insurance Wing)
- **Bajaj Allianz General Insurance** (Agri-division)
- **SBI General Insurance** (PM Fasal Bima Yojana)
- **NABARD** (National Bank for Agriculture and Rural Development)
- **World Bank (Water Global Practice)**
- **ICICI Lombard** (Weather-based insurance)
