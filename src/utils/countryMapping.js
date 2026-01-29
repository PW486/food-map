// Centralized name mapping: GeoJSON names -> Our Data Keys
export const geoNameMap = {
    "United States of America": "USA",
    "United States": "USA",
    "United Kingdom": "UK",
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
    "Bosnia and Herz.": "Bosnia and Herz.",
    "Bosnia and Herzegovina": "Bosnia and Herz.",
    "Trinidad and Tobago": "Trinidad and Tobago",
    "Dem. Rep. Congo": "Democratic Republic of the Congo",
    "Congo, Dem. Rep. of the": "Democratic Republic of the Congo",
    "Congo": "Republic of the Congo",
    "Republic of the Congo": "Republic of the Congo",
    "Brunei Darussalam": "Brunei",
    "Central African Rep.": "Central African Republic",
    "Eq. Guinea": "Equatorial Guinea",
    "S. Sudan": "South Sudan",
    "South Sudan": "South Sudan",
    "Solomon Is.": "Solomon Islands",
    "W. Sahara": "Western Sahara",
    "eSwatini": "Eswatini",
    "Falkland Is.": "Falkland Islands",
    "Timor-Leste": "East Timor",
    "Puerto Rico": "Puerto Rico",
    "Bermuda": "Bermuda",
    "Cabo Verde": "Cape Verde",
    "Guinea-Bissau": "Guinea-Bissau",
    "Sao Tome and Principe": "Sao Tome and Principe",
    "Somaliland": "Somaliland",
    "Bahrain": "Bahrain",
    "Northern Cyprus": "Northern Cyprus"
};

export const mapGeoName = (name) => geoNameMap[name] || name;

// ISO 2-letter codes for FlagCDN
export const countryCodeMapping = {
    "Afghanistan": "af", "Albania": "al", "Algeria": "dz", "Andorra": "ad", "Angola": "ao", "Argentina": "ar",
    "Armenia": "am", "Australia": "au", "Austria": "at", "Azerbaijan": "az", "Bahamas": "bs", "Bahrain": "bh",
    "Bangladesh": "bd", "Belarus": "by", "Belgium": "be", "Benin": "bj", "Bermuda": "bm", "Bhutan": "bt",
    "Bolivia": "bo", "Bosnia and Herz.": "ba", "Botswana": "bw", "Brazil": "br", "Brunei": "bn", "Bulgaria": "bg",
    "Burkina Faso": "bf", "Burundi": "bi", "Cambodia": "kh", "Cameroon": "cm", "Canada": "ca", "Cape Verde": "cv",
    "Central African Republic": "cf", "Chad": "td", "Chile": "cl", "China": "cn", "Colombia": "co", "Comoros": "km",
    "Republic of the Congo": "cg", "Costa Rica": "cr", "Croatia": "hr", "Cuba": "cu", "Cyprus": "cy", "Czechia": "cz",
    "Denmark": "dk", "Djibouti": "dj", "Dominican Republic": "do", "Democratic Republic of the Congo": "cd",
    "East Timor": "tl", "Ecuador": "ec", "Egypt": "eg", "El Salvador": "sv", "Equatorial Guinea": "gq",
    "Eritrea": "er", "Estonia": "ee", "Eswatini": "sz", "Ethiopia": "et", "Fiji": "fj", "Finland": "fi",
    "France": "fr", "Gabon": "ga", "Gambia": "gm", "Georgia": "ge", "Germany": "de", "Ghana": "gh",
    "Greece": "gr", "Greenland": "gl", "Guatemala": "gt", "Guinea": "gn", "Guinea-Bissau": "gw", "Guyana": "gy",
    "Haiti": "ht", "Honduras": "hn", "Hong Kong": "hk", "Hungary": "hu", "Iceland": "is", "India": "in",
    "Indonesia": "id", "Iran": "ir", "Iraq": "iq", "Ireland": "ie", "Israel": "il", "Italy": "it",
    "Ivory Coast": "ci", "Jamaica": "jm", "Japan": "jp", "Jordan": "jo", "Kazakhstan": "kz", "Kenya": "ke",
    "South Korea": "kr", "Kosovo": "xk", "Kuwait": "kw", "Kyrgyzstan": "kg", "Laos": "la", "Latvia": "lv",
    "Lebanon": "lb", "Lesotho": "ls", "Liberia": "lr", "Libya": "ly", "Liechtenstein": "li", "Lithuania": "lt",
    "Luxembourg": "lu", "Madagascar": "mg", "Malawi": "mw", "Malaysia": "my", "Maldives": "mv", "Mali": "ml",
    "Malta": "mt", "Mauritania": "mr", "Mauritius": "mu", "Mexico": "mx", "Moldova": "md", "Mongolia": "mn",
    "Montenegro": "me", "Morocco": "ma", "Mozambique": "mz", "Myanmar": "mm", "Namibia": "na", "Nepal": "np",
    "Netherlands": "nl", "New Zealand": "nz", "Nicaragua": "ni", "Niger": "ne", "Nigeria": "ng", "North Korea": "kp",
    "North Macedonia": "mk", "Northern Cyprus": "ct", "Norway": "no", "Oman": "om", "Pakistan": "pk",
    "Palestine": "ps", "Panama": "pa", "Papua New Guinea": "pg", "Paraguay": "py", "Peru": "pe", "Philippines": "ph",
    "Poland": "pl", "Portugal": "pt", "Puerto Rico": "pr", "Qatar": "qa", "Romania": "ro", "Russia": "ru",
    "Rwanda": "rw", "Sao Tome and Principe": "st", "Saudi Arabia": "sa", "Senegal": "sn", "Serbia": "rs",
    "Seychelles": "sc", "Sierra Leone": "sl", "Singapore": "sg", "Slovakia": "sk", "Slovenia": "si",
    "Somalia": "so", "Somaliland": "so", "South Africa": "za", "South Sudan": "ss", "Spain": "es", "Sri Lanka": "lk",
    "Sudan": "sd", "Suriname": "sr", "Sweden": "se", "Switzerland": "ch", "Syria": "sy", "Taiwan": "tw",
    "Tajikistan": "tj", "Tanzania": "tz", "Thailand": "th", "Togo": "tg", "Trinidad and Tobago": "tt",
    "Tunisia": "tn", "Turkey": "tr", "Turkmenistan": "tm", "UAE": "ae", "Uganda": "ug", "UK": "gb",
    "Ukraine": "ua", "Uruguay": "uy", "USA": "us", "Uzbekistan": "uz", "Venezuela": "ve", "Vietnam": "vn",
    "Western Sahara": "eh", "Yemen": "ye", "Zambia": "zm", "Zimbabwe": "zw"
};

export const getCountryCode = (name) => countryCodeMapping[name] || null;

const RED = "#ef4444";
const BLUE = "#3b82f6";
const GREEN = "#22c55e";
const ORANGE = "#f59e0b";
const PURPLE = "#a855f7";
const TEAL = "#06b6d4";

export const countryColorMapping = {
    "Afghanistan": GREEN, "Albania": BLUE, "Algeria": RED, "Andorra": BLUE, "Angola": BLUE, "Argentina": GREEN,
    "Armenia": BLUE, "Australia": ORANGE, "Austria": ORANGE, "Azerbaijan": RED, "Bahamas": GREEN, "Bahrain": ORANGE,
    "Bangladesh": BLUE, "Belarus": GREEN, "Belgium": GREEN, "Benin": BLUE, "Bermuda": RED, "Bhutan": BLUE,
    "Bolivia": BLUE, "Bosnia and Herz.": GREEN, "Botswana": GREEN, "Brazil": ORANGE, "Brunei": RED, "Bulgaria": BLUE,
    "Burkina Faso": GREEN, "Burundi": GREEN, "Cambodia": RED, "Cameroon": RED, "Canada": RED, "Cape Verde": BLUE,
    "Central African Republic": BLUE, "Chad": GREEN, "Chile": RED, "China": ORANGE, "Colombia": RED, "Comoros": RED,
    "Republic of the Congo": GREEN, "Costa Rica": GREEN, "Croatia": RED, "Cuba": ORANGE, "Cyprus": BLUE, "Czechia": GREEN,
    "Denmark": GREEN, "Djibouti": ORANGE, "Dominican Republic": RED, "Democratic Republic of the Congo": ORANGE,
    "East Timor": BLUE, "Ecuador": BLUE, "Egypt": ORANGE, "El Salvador": GREEN, "Equatorial Guinea": ORANGE,
    "Eritrea": GREEN, "Estonia": GREEN, "Eswatini": GREEN, "Ethiopia": BLUE, "Fiji": GREEN, "Finland": RED,
    "France": RED, "Gabon": BLUE, "Gambia": RED, "Georgia": GREEN, "Germany": BLUE, "Ghana": BLUE,
    "Greece": GREEN, "Greenland": BLUE, "Guatemala": RED, "Guinea": ORANGE, "Guinea-Bissau": RED, "Guyana": GREEN,
    "Haiti": BLUE, "Honduras": BLUE, "Hong Kong": BLUE, "Hungary": GREEN, "Iceland": GREEN, "India": GREEN,
    "Indonesia": RED, "Iran": ORANGE, "Iraq": BLUE, "Ireland": GREEN, "Israel": BLUE, "Italy": BLUE,
    "Ivory Coast": RED, "Jamaica": GREEN, "Japan": GREEN, "Jordan": RED, "Kazakhstan": GREEN, "Kenya": ORANGE,
    "South Korea": BLUE, "Kosovo": GREEN, "Kuwait": RED, "Kyrgyzstan": BLUE, "Laos": GREEN, "Latvia": RED,
    "Lebanon": ORANGE, "Lesotho": BLUE, "Liberia": BLUE, "Libya": BLUE, "Liechtenstein": RED, "Lithuania": BLUE,
    "Luxembourg": ORANGE, "Madagascar": GREEN, "Malawi": BLUE, "Malaysia": GREEN, "Maldives": RED, "Mali": BLUE,
    "Malta": RED, "Mauritania": GREEN, "Mauritius": BLUE, "Mexico": GREEN, "Moldova": BLUE, "Mongolia": RED,
    "Montenegro": RED, "Morocco": ORANGE, "Mozambique": ORANGE, "Myanmar": RED, "Namibia": BLUE, "Nepal": RED,
    "Netherlands": ORANGE, "New Zealand": GREEN, "Nicaragua": RED, "Niger": ORANGE, "Nigeria": BLUE,
    "North Korea": RED, "North Macedonia": RED, "Northern Cyprus": GREEN, "Norway": GREEN, "Oman": RED,
    "Pakistan": BLUE, "Palestine": GREEN, "Panama": BLUE, "Papua New Guinea": BLUE, "Paraguay": RED,
    "Peru": GREEN, "Philippines": ORANGE, "Poland": RED, "Portugal": GREEN, "Puerto Rico": BLUE,
    "Qatar": BLUE, "Romania": RED, "Russia": BLUE, "Rwanda": BLUE, "Sao Tome and Principe": BLUE,
    "Saudi Arabia": GREEN, "South Korea": BLUE, "Senegal": BLUE, "Serbia": ORANGE, "Seychelles": RED,
    "Sierra Leone": GREEN, "Singapore": BLUE, "Slovakia": BLUE, "Slovenia": RED, "Somalia": GREEN,
    "Somaliland": RED, "South Africa": RED, "South Sudan": GREEN, "Spain": ORANGE, "Sri Lanka": RED,
    "Sudan": RED, "Suriname": RED, "Sweden": BLUE, "Switzerland": GREEN, "Syria": GREEN, "Taiwan": RED,
    "Tajikistan": RED, "Tanzania": BLUE, "Thailand": BLUE, "Togo": RED, "Trinidad and Tobago": RED,
    "Tunisia": GREEN, "Turkey": RED, "Turkmenistan": RED, "UAE": BLUE, "Uganda": RED, "UK": BLUE,
    "Ukraine": ORANGE, "Uruguay": BLUE, "USA": BLUE, "Uzbekistan": BLUE, "Venezuela": BLUE, "Vietnam": RED,
    "Western Sahara": BLUE, "Yemen": GREEN, "Zambia": RED, "Zimbabwe": BLUE
};

export const getCountryColor = (name) => countryColorMapping[name] || "#f8fafc";
