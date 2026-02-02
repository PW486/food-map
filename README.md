# World Food Map 🍴🌍

An interactive world map to explore iconic traditional cuisines from 180+ countries.

## ✨ Features

- **🔍 Smart Search**: Real-time country and cuisine search.
- **🌗 Dark Mode**: Adaptive theme based on system preference.
- **🌍 Climate Map**: Dynamic color-coding (Desert, Cold, Temperate).
- **✈️ Smooth Navigation**: Fluid transitions and intelligent zooming.
- **📱 Responsive**: Optimized for both desktop and mobile (PWA support).
- **📸 Live Images**: Dynamic dish visuals from Wikimedia Commons.

## 🛠️ Tech Stack

- **Core**: React, Vite, Bootstrap 5
- **Maps**: react-simple-maps, d3-geo
- **Icons**: Lucide React
- **APIs**: Wikimedia Commons, FlagCDN

## 📦 Quick Start

1. **Install**
   ```bash
   npm install
   ```
2. **Run**
   ```bash
   npm run dev
   ```
3. **Build**
   ```bash
   npm run build
   ```

> **Deployment**: Automatically deployed to GitHub Pages via GitHub Actions on push to `main`.

## 🗺️ Customization

- **Add Cuisine**: Add `.js` files in `src/data/countries/`.
- **Map Styles**: Edit `MAP_COLORS` in `src/utils/countryMapping.js`.
- **Zoom Logic**: Adjust `LABEL_MIN_ZOOM` in `src/utils/countryMapping.js`.

---
Developed for food lovers and travelers. 🌍🥘
