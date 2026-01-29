# World Food Map 🍴🌍

An interactive, high-performance web application built with React and Vite that allows users to explore famous traditional cuisines from around the globe. Discover iconic dishes from over 180 countries through a beautiful, color-coded interactive map.

## 🚀 Key Features

- **Global Cuisine Database**: Detailed information for **180+ countries** across all continents, including authentic descriptions of traditional dishes.
- **Dynamic Image Integration**: Real-time food image fetching via the **Wikimedia Commons API**, providing fresh and relevant visual content for every dish.
- **Topological Map Coloring**: Sophisticated map visualization with a carefully curated 6-color palette, ensuring that adjacent countries are visually distinct for maximum clarity.
- **Extreme Map Magnification**: Seamlessly zoom up to **128x** to explore even the smallest geographic details using `react-simple-maps`.
- **Pixel-Perfect Navigation**: Advanced **Zoom-to-Mouse** logic ensures the map expands exactly where your cursor points.
- **Mobile-Responsive Design**:
  - **Dynamic Viewport Height (dvh)** support for a consistent mobile experience.
  - **Safe Area Integration**: UI elements are placed ergonomically to avoid notches and device indicators.
- **Modern UI/UX**: A clean, "Modern Vibrant" palette with coordinated typography and real-time tooltips.
- **Enhanced Map Recognition**: Optimized GeoJSON name mapping for special regions like Northern Cyprus (N. Cyprus).

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite
- **Mapping**: react-simple-maps, d3-geo
- **Imagery**: Wikimedia Commons API
- **Icons**: Lucide React
- **Styling**: Bootstrap 5, Modern CSS (DVH, Safe Areas)
- **Deployment**: GitHub Pages

## 🌍 Supported Countries (180+)

- **Asia**: South Korea, Japan, China, India, Pakistan, Philippines, Singapore, Hong Kong, Thailand, Vietnam, Indonesia, Malaysia, Taiwan, Mongolia, Nepal, Kazakhstan, Sri Lanka, Bangladesh, Afghanistan, Armenia, Azerbaijan, Bhutan, Brunei, Cambodia, Kyrgyzstan, Laos, Maldives, Myanmar, North Korea, Tajikistan, Turkmenistan, Uzbekistan.
- **Middle East**: UAE, Israel, Saudi Arabia, Iran, Lebanon, Jordan, Turkey, Bahrain, Kuwait, Oman, Palestine, Qatar, Syria, Yemen.
- **Europe**: Italy, France, Spain, Germany, UK, Greece, Switzerland, Belgium, Netherlands, Sweden, Denmark, Norway, Finland, Estonia, Latvia, Lithuania, Poland, Slovakia, Hungary, Ireland, Czechia, Austria, Iceland, Luxembourg, Slovenia, Croatia, Bulgaria, Serbia, Romania, Ukraine, Russia, Albania, Andorra, Belarus, Bosnia and Herz., Kosovo, Liechtenstein, Malta, Moldova, Montenegro, North Macedonia, Northern Cyprus, Portugal, Switzerland.
- **Americas**: USA, Canada, Mexico, Brazil, Argentina, Peru, Colombia, Chile, Cuba, Jamaica, Venezuela, Ecuador, Uruguay, Bahamas, Belize, Bermuda, Bolivia, Costa Rica, Dominican Republic, El Salvador, Guatemala, Guyana, Haiti, Honduras, Nicaragua, Panama, Paraguay, Puerto Rico, Suriname, Trinidad and Tobago.
- **Africa**: Egypt, Morocco, Algeria, Tunisia, Nigeria, Ghana, Senegal, Kenya, Ethiopia, Tanzania, South Africa, Angola, Benin, Botswana, Burkina Faso, Burundi, Cameroon, Cape Verde, Central African Republic, Chad, Comoros, Republic of the Congo, Democratic Republic of the Congo, Djibouti, Equatorial Guinea, Eritrea, Eswatini, Gabon, Gambia, Guinea, Guinea-Bissau, Ivory Coast, Lesotho, Liberia, Libya, Madagascar, Malawi, Mali, Mauritania, Mauritius, Mozambique, Namibia, Niger, Rwanda, Sao Tome and Principe, Seychelles, Sierra Leone, Somalia, Somaliland, South Sudan, Sudan, Togo, Uganda, Western Sahara, Zambia, Zimbabwe.
- **Oceania**: Australia, New Zealand, Fiji, Papua New Guinea.

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

---
Developed with ❤️ for food lovers and explorers.
