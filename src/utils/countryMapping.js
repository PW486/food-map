// Name mapping: GeoJSON names -> Standardized keys used in foodData
export const geoNameMap = {
    "United States of America": "United States",
    "United Arab Emirates": "UAE",
    "Czech Republic": "Czechia",
    "Russian Federation": "Russia",
    "Republic of Korea": "South Korea",
    "Dem. Rep. Korea": "North Korea",
    "Lao PDR": "Laos",
    "Dominican Rep.": "Dominican Republic",
    "Côte d'Ivoire": "Ivory Coast",
    "Syrian Arab Republic": "Syria",
    "Macedonia": "North Macedonia",
    "Dem. Rep. Congo": "DRC",
    "Republic of the Congo": "Congo",
    "Brunei Darussalam": "Brunei",
    "Central African Rep.": "Central African Republic",
    "Eq. Guinea": "Equatorial Guinea",
    "S. Sudan": "South Sudan",
    "Solomon Is.": "Solomon Islands",
    "W. Sahara": "Western Sahara",
    "eSwatini": "Eswatini",
    "Falkland Is.": "Falkland Islands",
    "Timor-Leste": "East Timor",
    "Cabo Verde": "Cape Verde",
    "N. Cyprus": "Northern Cyprus",
    "Macao": "Macau",
    "Bosnia and Herz.": "Bosnia and Herzegovina"
};

export const mapGeoName = (name) => geoNameMap[name] || name;

// ISO 2-letter codes for FlagCDN icons
export const countryCodeMapping = {
    "Afghanistan": "af", "Albania": "al", "Algeria": "dz", "Andorra": "ad", "Angola": "ao", "Argentina": "ar",
    "Armenia": "am", "Australia": "au", "Austria": "at", "Azerbaijan": "az", "Bahamas": "bs", "Bahrain": "bh",
    "Bangladesh": "bd", "Belarus": "by", "Belgium": "be", "Belize": "bz", "Benin": "bj", "Bermuda": "bm", "Bhutan": "bt",
    "Bolivia": "bo", "Bosnia and Herzegovina": "ba", "Botswana": "bw", "Brazil": "br", "Brunei": "bn", "Bulgaria": "bg",
    "Burkina Faso": "bf", "Burundi": "bi", "Cambodia": "kh", "Cameroon": "cm", "Canada": "ca", "Cape Verde": "cv",
    "Central African Republic": "cf", "Chad": "td", "Chile": "cl", "China": "cn", "Colombia": "co", "Comoros": "km",
    "Congo": "cg", "Costa Rica": "cr", "Croatia": "hr", "Cuba": "cu", "Cyprus": "cy", "Czechia": "cz",
    "Denmark": "dk", "Djibouti": "dj", "Dominican Republic": "do", "DRC": "cd",
    "East Timor": "tl", "Ecuador": "ec", "Egypt": "eg", "El Salvador": "sv", "Equatorial Guinea": "gq",
    "Eritrea": "er", "Estonia": "ee", "Eswatini": "sz", "Ethiopia": "et", "Fiji": "fj", "Finland": "fi",
    "France": "fr", "Gabon": "ga", "Gambia": "gm", "Georgia": "ge", "Germany": "de", "Ghana": "gh",
    "Greece": "gr", "Greenland": "gl", "Guatemala": "gt", "Guinea": "gn", "Guinea-Bissau": "gw", "Guyana": "gy",
    "Haiti": "ht", "Honduras": "hn", "Hong Kong": "hk", "Hungary": "hu", "Iceland": "is", "India": "in",
    "Indonesia": "id", "Iran": "ir", "Iraq": "iq", "Ireland": "ie", "Israel": "il", "Italy": "it",
    "Ivory Coast": "ci", "Jamaica": "jm", "Japan": "jp", "Jordan": "jo", "Kazakhstan": "kz", "Kenya": "ke",
    "South Korea": "kr", "Kosovo": "xk", "Kuwait": "kw", "Kyrgyzstan": "kg", "Laos": "la", "Latvia": "lv",
    "Lebanon": "lb", "Lesotho": "ls", "Liberia": "lr", "Libya": "ly", "Liechtenstein": "li", "Lithuania": "lt",
    "Luxembourg": "lu", "Macau": "mo", "Madagascar": "mg", "Malawi": "mw", "Malaysia": "my", "Maldives": "mv", "Mali": "ml",
    "Malta": "mt", "Mauritania": "mr", "Mauritius": "mu", "Mexico": "mx", "Moldova": "md", "Mongolia": "mn",
    "Montenegro": "me", "Morocco": "ma", "Mozambique": "mz", "Myanmar": "mm", "Namibia": "na", "Nepal": "np",
    "Netherlands": "nl", "New Zealand": "nz", "Nicaragua": "ni", "Niger": "ne", "Nigeria": "ng", "North Korea": "kp",
    "North Macedonia": "mk", "Northern Cyprus": "cy", "Norway": "no", "Oman": "om", "Pakistan": "pk",
    "Palestine": "ps", "Panama": "pa", "Papua New Guinea": "pg", "Paraguay": "py", "Peru": "pe", "Philippines": "ph",
    "Poland": "pl", "Portugal": "pt", "Puerto Rico": "pr", "Qatar": "qa", "Romania": "ro", "Russia": "ru",
    "Rwanda": "rw", "Sao Tome and Principe": "st", "Saudi Arabia": "sa", "Senegal": "sn", "Serbia": "rs",
    "Seychelles": "sc", "Sierra Leone": "sl", "Singapore": "sg", "Slovakia": "sk", "Slovenia": "si",
    "Somalia": "so", "Somaliland": "so", "South Africa": "za", "South Sudan": "ss", "Spain": "es", "Sri Lanka": "lk",
    "Sudan": "sd", "Suriname": "sr", "Sweden": "se", "Switzerland": "ch", "Syria": "sy", "Taiwan": "tw",
    "Tajikistan": "tj", "Tanzania": "tz", "Thailand": "th", "Togo": "tg", "Trinidad and Tobago": "tt",
    "Tunisia": "tn", "Turkey": "tr", "Turkmenistan": "tm", "UAE": "ae", "Uganda": "ug", "United Kingdom": "gb",
    "Ukraine": "ua", "Uruguay": "uy", "United States": "us", "Uzbekistan": "uz", "Venezuela": "ve", "Vietnam": "vn",
    "Western Sahara": "eh", "Yemen": "ye", "Zambia": "zm", "Zimbabwe": "zw"
};

export const getCountryCode = (name) => countryCodeMapping[name] || null;

// Theme-based Color Palettes (Google Maps aesthetic)
export const MAP_COLORS = {
    LIGHT: {
        OCEAN: "#aadaff",
        LAND_DEFAULT: "#f5f5f5",
        LAND_TEMPERATE: "#aed581",
        LAND_DESERT: "#faeed1",
        LAND_COLD: "#e1f5fe",
        STROKE: "#ffffff",
        TEXT: "#374151"
    },
    DARK: {
        OCEAN: "#121212",
        LAND_DEFAULT: "#242424",
        LAND_TEMPERATE: "#1b3a20",
        LAND_DESERT: "#4a3728",
        LAND_COLD: "#2c3e50",
        STROKE: "#666666",
        TEXT: "#ffffff"
    }
};

const DESERT_COUNTRIES = new Set([
    "Saudi Arabia", "Egypt", "UAE", "Iraq", "Iran", "Algeria", "Libya", 
    "Oman", "Yemen", "Jordan", "Kuwait", "Qatar", "Bahrain", "Morocco", 
    "Tunisia", "Djibouti", "Somalia", "Sudan", "Chad", "Niger", "Mali", 
    "Mauritania", "Western Sahara", "Australia", "Namibia", "Botswana", 
    "Mexico", "Afghanistan", "Pakistan", "Kazakhstan", "Uzbekistan", 
    "Turkmenistan", "Syria", "Israel", "Mongolia", "Chile", "Eritrea"
]);

const COLD_COUNTRIES = new Set([
    "Russia", "Canada", "Norway", "Sweden", "Finland", "Iceland", 
    "Greenland", "Denmark", "Estonia", "Latvia", "Lithuania"
]);

export const getClimateType = (name) => {
    if (DESERT_COUNTRIES.has(name)) return "DESERT";
    if (COLD_COUNTRIES.has(name)) return "COLD";
    return "TEMPERATE";
};

// Custom centroid overrides for better label placement on fragmented territories
export const MANUAL_CENTROIDS = {
    "France": [2.2137, 46.6033],
    "United States": [-98.5795, 39.8283],
    "Norway": [8.4689, 61.4720],
    "Netherlands": [5.2913, 52.1326],
    "United Kingdom": [-3.4360, 54.5],
    "Spain": [-3.7492, 40.0],
    "Portugal": [-8.0, 39.5],
    "Malaysia": [109.0, 4.0],
    "Indonesia": [113.9213, -0.7893],
    "Japan": [138.2529, 36.2048],
    "Vietnam": [109.0, 16.0],
    "Chile": [-72.5, -38.0],
    "Peru": [-76.0, -9.0],
    "South Africa": [24.0, -31.0],
    "Croatia": [15.5, 45.5],
    "Macau": [113.5, 22.15],
    "Northern Cyprus": [33.5, 35.4],
    "Jordan": [36.5, 31.0],
    "Azerbaijan": [48.0, 40.5]
};

// Hierarchical zoom levels for label visibility (1, 3, 5, 7, 9, 11, 13, 15)
// Non-European countries promoted by -2 tiers (capped at Tier 1)
export const LABEL_MIN_ZOOM = {
    // TIER 1: GLOBAL & PROMOTED ANCHORS
    "Canada": 1, "United States": 1, "Mexico": 1, "Brazil": 1, "Argentina": 1, 
    "Russia": 1, "China": 1, "India": 1, "Australia": 1, "South Africa": 1, 
    "Egypt": 1, "Nigeria": 1, "United Kingdom": 1, "France": 1, "Germany": 1, 
    "Japan": 1, "South Korea": 1, "Indonesia": 1, "Saudi Arabia": 1, "Turkey": 1, "Iran": 1,
    "Ethiopia": 1, "DRC": 1, "Algeria": 1, "Kenya": 1, "Morocco": 1, "Thailand": 1, 
    "Pakistan": 1, "Kazakhstan": 1, "Ukraine": 1, "Poland": 1, "Italy": 1, "Spain": 1, 
    "Colombia": 1, "Peru": 1, "Chile": 1, "Greenland": 1, "Serbia": 1,
    "Bolivia": 1, "Iceland": 1, "New Zealand": 1, "Sweden": 1, "Norway": 1, 
    "Finland": 1, "Greece": 1, "Mongolia": 1, "Botswana": 1, "Madagascar": 1, "Philippines": 1,
    // Promoted from Tier 3 (-2)
    "Libya": 1, "Vietnam": 1, "Myanmar": 1, "Venezuela": 1, "Mali": 1, "Niger": 1, 
    "Chad": 1, "Somalia": 1, "Sudan": 1, "Angola": 1, "Tanzania": 1, "Iraq": 1, 
    "Afghanistan": 1, "Uzbekistan": 1, "Malaysia": 1,

    // TIER 3: REGIONAL PLAYERS (Europe maintained, others promoted)
    "Romania": 3, "Belarus": 3,
    // Promoted from Tier 5 (-2)
    "Syria": 3, "Jordan": 3, "Yemen": 3, "Oman": 3, "Azerbaijan": 3, "Georgia": 3,
    "Nepal": 3, "Bangladesh": 3, "Sri Lanka": 3, "Cambodia": 3, "Laos": 3, "North Korea": 3,
    "Ecuador": 3, "Paraguay": 3, "Uruguay": 3, "Cuba": 3, "Ghana": 3, "Ivory Coast": 3, 
    "Cameroon": 3, "Senegal": 3, "Tunisia": 3, "Uganda": 3, "Papua New Guinea": 3, 
    "Zambia": 3, "Mozambique": 3, "Honduras": 3, "Costa Rica": 3, "Suriname": 3, "Fiji": 3, "East Timor": 3,

    // TIER 5: STANDARD COUNTRIES
    "Portugal": 5, "Ireland": 5, "Czechia": 5, "Hungary": 5, "Austria": 5, "Switzerland": 5,
    "Croatia": 5, "Bulgaria": 5,
    // Promoted from Tier 7 (-2)
    "Israel": 5, "Lebanon": 5, "Tajikistan": 5, "Kyrgyzstan": 5, 
    "Taiwan": 5, "Nicaragua": 5, "Panama": 5, 
    "Liberia": 5, "Sierra Leone": 5, "Benin": 5, "Togo": 5, 
    "Eritrea": 5, "Djibouti": 5, "Malawi": 5, "Guatemala": 5, 
    "Burkina Faso": 5, "Guinea": 5, "Hong Kong": 7,

    // TIER 7: DETAILED COUNTRIES (Europe maintained)
    "Netherlands": 7, "Belgium": 7, "Denmark": 7, "Slovakia": 7, "Estonia": 7, 
    "Latvia": 7, "Lithuania": 7, "Moldova": 7, "Bosnia and Herzegovina": 7,
    // Promoted from Tier 9 (-2)
    "Guyana": 7, "Gabon": 7, "Equatorial Guinea": 7, "Gambia": 7, 
    "Guinea-Bissau": 7, "Rwanda": 7, "Burundi": 7, "Bhutan": 7,
    "Solomon Islands": 7, "El Salvador": 7, "Belize": 7, "Namibia": 7, 
    "Zimbabwe": 7,

    // TIER 9: DENSE REGIONAL (Europe maintained)
    "Albania": 9, "Dominican Republic": 9, "Haiti": 9, "Palestine": 9, "Armenia": 9,
    // Promoted from Tier 11 (-2)
    "Kuwait": 9, "Qatar": 9, "Jamaica": 9, "Lesotho": 9, "Eswatini": 9, 
    "Trinidad and Tobago": 9, "Mauritius": 9,

    // TIER 11: SMALL STATES
    "Slovenia": 11, "Northern Cyprus": 11, "Cyprus": 11, // Kept conservative for overlap
    // Promoted from Tier 13 (-2)
    "Bahrain": 11, "Brunei": 11, "Cape Verde": 11,

    // TIER 13: MICRO/CITY STATES A
    "North Macedonia": 13, "Luxembourg": 13,
    // Promoted from Tier 15 (-2)
    "Maldives": 13, "Seychelles": 13, "Comoros": 13, 
    "Sao Tome and Principe": 13, "Barbados": 13, "Saint Lucia": 13,

    // TIER 15: MICRO/CITY STATES B
    "Montenegro": 15, "Kosovo": 15, "Liechtenstein": 15, "Andorra": 15, 
    "Monaco": 15, "San Marino": 15, "Vatican City": 15, "Singapore": 15, "Malta": 15, "Macau": 15
};