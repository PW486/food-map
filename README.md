# World Food Map 🍴🌍

An interactive and immersive world map designed to explore iconic traditional cuisines from around the globe. Discover dishes from over 180 countries with a beautiful, modern interface.

![Project Preview](public/og-image.png)

## ✨ Features

- **🔍 Smart Search**: Quickly find any country or cuisine with real-time auto-complete and keyboard support.
- **🌗 Adaptive Dark Mode**: Automatically detects system preferences and supports manual toggling for a comfortable viewing experience.
- **🌍 Dynamic Climate Map**: Countries are color-coded based on their climate (Desert, Cold, Temperate) for a rich visual experience.
- **✈️ Smooth Fly-to Transitions**: Fluid map movement with synchronized UI animations when selecting countries or exploring randomly.
- **⌨️ Keyboard Navigation**: Use the **Escape** key to instantly close sidebars or search menus for a snappier experience.
- **📱 Mobile Optimized**: Fully responsive design with intuitive touch controls, optimized search bar, and Safari status bar color synchronization.
- **📸 Live Visuals**: Dynamic traditional dish images fetched via the Wikimedia Commons API with fallback placeholders.
- **📲 PWA Support**: Installable on home screens with a custom maskable icon and offline-ready features.
- **🏷️ Intelligent Labels**: Hierarchical label visibility based on zoom levels to prevent spatial clutter.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [Bootstrap 5](https://getbootstrap.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Map & Geo**: [react-simple-maps](https://www.react-simple-maps.io/), [d3-geo](https://github.com/d3/d3-geo), [topojson-client](https://github.com/topojson/topojson-client)
- **APIs**: [Wikimedia Commons API](https://commons.wikimedia.org/wiki/API:Main_page) (Images), [FlagCDN](https://flagcdn.com/) (Flags)

## 📂 Project Structure

```text
foodmap/
├── public/                 # Static assets (icons, manifests, etc.)
├── src/
│   ├── assets/             # Images and local assets
│   ├── components/         # React components (Map, Sidebar, etc.)
│   ├── data/               # Cuisine data
│   │   ├── countries/      # Modular country-specific data files
│   │   └── foodData.js     # Main data entry point
│   ├── utils/              # Helper functions and map configurations
│   ├── App.jsx             # Main application logic
│   └── main.jsx            # Entry point
├── eslint.config.js        # Linting configuration
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies and scripts
```

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/foodmap.git
   cd foodmap
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run development mode**
   ```bash
   npm run dev
   ```
4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

This project is automatically deployed to GitHub Pages via GitHub Actions. Any push to the `main` branch will trigger a build and deploy process.

For manual deployment, you can use:
```bash
npm run deploy
```

## 🗺️ Customization

- **Adding a Country**: Create a new `.js` file in `src/data/countries/` and export the dish data. Import it in `src/data/foodData.js`.
- **Map Colors**: Adjust `MAP_COLORS` in `src/utils/countryMapping.js` to change the aesthetic.
- **Zoom Logic**: Modify `LABEL_MIN_ZOOM` in `src/utils/countryMapping.js` to control when labels appear.

## 🤝 Contributing

Contributions are welcome! Whether it's adding new recipes, fixing bugs, or improving the UI, feel free to open an issue or submit a pull request.

---
Developed for food lovers, travelers, and cultural explorers. 🌍🥘