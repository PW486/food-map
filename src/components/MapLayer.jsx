import React, { useMemo } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { foodData } from "../data/foodData";
import { getCountryColor, mapGeoName } from "../utils/countryMapping";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

// Extract style logic to keep the component clean
const getGeographyStyle = ({ isMobile, isSelected, hasData, countryColor, darkMode }) => {
  const baseColors = {
    default: darkMode ? "#2d2d2d" : "#f8fafc",
    hover: darkMode ? "#3d3d3d" : "#f1f5f9",
    pressed: darkMode ? "#1d1d1d" : "#cbd5e1",
    stroke: darkMode ? "#444444" : "#666666",
    strokeHover: darkMode ? "#555555" : "#666666",
  };

  const baseStyle = {
    outline: "none",
    strokeWidth: 0.5,
    vectorEffect: "non-scaling-stroke",
    transition: "all 0.3s ease",
  };

  // On mobile, we suppress hover/active states to avoid "sticky" styles on touch
  const effectiveHoverFill = isMobile ? baseColors.default : baseColors.hover;
  const effectivePressedFill = isMobile ? baseColors.default : baseColors.pressed;
  const effectiveStroke = isMobile ? baseColors.stroke : baseColors.strokeHover;
  
  // Opacity Logic
  const defaultOpacity = (!isMobile && isSelected) ? 1 : (hasData ? 0.7 : 1);
  const activeOpacity = isMobile ? (hasData ? 0.7 : 1) : 1;
  const pressedOpacity = isMobile ? (hasData ? 0.7 : 1) : 0.8;

  return {
    default: {
      ...baseStyle,
      fill: hasData ? countryColor : baseColors.default,
      stroke: baseColors.stroke,
      opacity: defaultOpacity,
    },
    hover: {
      ...baseStyle,
      fill: hasData ? countryColor : effectiveHoverFill,
      stroke: effectiveStroke,
      opacity: activeOpacity,
      cursor: hasData ? "pointer" : "default",
    },
    pressed: {
      ...baseStyle,
      fill: hasData ? countryColor : effectivePressedFill,
      stroke: effectiveStroke,
      opacity: pressedOpacity,
    },
  };
};

const MapLayer = ({ 
  width, 
  height, 
  position, 
  handleMoveEnd, 
  handleCountryClick, 
  selectedCountry, 
  setTooltipContent, 
  animationMode, 
  darkMode, 
  onMapClick 
}) => {
  const isMobile = width < 600;

  const scale = useMemo(() => {
    return width < 600 ? (width / 6.5) : 150;
  }, [width]);

  return (
    <div 
      id="map-container"
      className="position-absolute top-0 start-0 w-100 h-100" 
      style={{ zIndex: 0, touchAction: "none" }} 
      onClick={onMapClick}
    >
      <ComposableMap 
        width={width}
        height={height}
        projection="geoMercator" 
        projectionConfig={{ scale }} 
      >
        <ZoomableGroup 
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          minZoom={1}
          maxZoom={128}
          className={animationMode === "fast" ? "map-animating-fast" : (animationMode === "slow" ? "map-animating-slow" : "")}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => {
                  const geoName = mapGeoName(geo.properties.name);
                  const isSelected = selectedCountry === geoName;
                  const hasData = !!foodData[geoName];
                  const countryColor = getCountryColor(geoName);
                  
                  const geoStyles = getGeographyStyle({
                    isMobile,
                    isSelected,
                    hasData,
                    countryColor,
                    darkMode
                  });

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => !isMobile && setTooltipContent(geoName)}
                      onMouseLeave={() => !isMobile && setTooltipContent("")}
                      onClick={() => {
                        const centroid = geoCentroid(geo);
                        handleCountryClick(geo, centroid);
                      }}
                      style={geoStyles}
                    />
                  );
                })}
              </>
            )}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapLayer;