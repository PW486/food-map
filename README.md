# World Food Map 🍴🌍

An interactive web application built with React and Vite that allows users to explore famous traditional cuisines from around the globe. Simply click on a country to discover its most iconic dishes, complete with high-quality imagery and cultural descriptions.

## 🚀 Features

- **Interactive World Map**: Seamlessly zoom and pan across the globe using `react-simple-maps`.
- **Global Cuisine Database**: Detailed information for 27+ countries, including:
  - South Korea, Japan, Italy, USA, France, Spain, Germany, UK, Thailand, Vietnam, China, and many more.
- **Verified Visuals**: High-quality, authentic food images sourced directly from verified Wikimedia Commons links.
- **Responsive Design**: Optimized for both Desktop and Mobile (including iPhone notch/safe area support).
- **Clean Architecture**: Modularized data and component-based structure for easy maintenance.
- **Custom Branding**: Integrated custom logo and favicon support.

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite
- **Mapping**: react-simple-maps, d3-geo
- **Icons**: Lucide React
- **Styling**: Bootstrap 5, Custom CSS
- **Deployment**: GitHub Pages

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/PW486/world-food-map.git
   cd world-food-map
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development mode**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── assets/             # Images and global assets (Logo)
├── components/         # Reusable UI components (MapLayer, Sidebar, Header, etc.)
├── data/               # Global data management
│   └── countries/      # Modularized per-country cuisine data
├── App.jsx             # Main application entry point
└── main.jsx            # React mounting logic
```

## 🗺️ Contributing

Interested in adding your country's cuisine? 
1. Create a new data file in `src/data/countries/`.
2. Add your country's top 10 dishes with Wikimedia image links.
3. Register the new country in `src/data/foodData.js`.

---
Developed with ❤️ for food lovers everywhere.