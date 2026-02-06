# World Food Map 🍴🌍

Interactive world map exploring iconic cuisines from 180+ countries.

## ✨ Features
- **🔍 Smart Search**: Real-time country/cuisine lookup.
- **🌗 Dark Mode**: Adaptive themes with Google Maps aesthetic.
- **🌍 Climate Map**: Color-coded by terrain (Desert, Cold, Temperate).
- **📱 Mobile Optimized**: Robust label rendering and one-hand zoom support.
- **📸 Wiki Integration**: Dynamic dish images from Wikimedia.

## 🛠️ Tech Stack
- **Core**: React, Vite, Vitest (Unit Testing)
- **Maps**: react-simple-maps, d3-geo
- **Styling**: Bootstrap 5, Lucide React

## 📦 Commands
- `npm install` : Setup dependencies
- `npm run dev` : Start dev server
- `npm test` : Run unit tests (Vitest)
- `npm run build` : Production build

## 🗺️ Customization
- **Cuisine Data**: `src/data/countries/*.js`
- **Map Config**: `src/utils/countryMapping.js` (Colors, Zoom, Centroids)

---
*Automated CI/CD deployment via GitHub Actions.*