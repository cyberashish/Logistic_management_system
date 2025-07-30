'use client';

import { useTheme } from "next-themes";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// GeoJSON source
const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Matching your progress data
const data = [
  { label: "Europe", percentage: 36.56, color: "var(--color-subtleprimary)" },
  { label: "United States", percentage: 20.33, color: "var(--color-secondary)" },
  { label: "Germany", percentage: 17.36, color: "var(--color-pink)" },
  { label: "Romania", percentage: 12.22, color: "var(--color-brown)" },
  { label: "Africa", percentage: 8.87, color: "var(--color-success)" },
  { label: "Australia", percentage: 4.66, color: "var(--color-error)" },
];

// Coordinates for each label
const countryCoordinates: Record<string, [number, number]> = {
  "Europe": [10, 50],          // Central Europe (approximate)
  "United States": [-95.7129, 37.0902],
  "Germany": [10.4515, 51.1657],
  "Romania": [24.9668, 45.9432],
  "Africa": [20.0, 10.0],
  "Australia": [133.7751, -25.2744],
};

const WorldMap = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <ComposableMap
        projection="geoNaturalEarth1"
        width={960}
        height={480}
        style={{ width: "100%", height: "auto" }}
      >
        {/* 🌍 Base map */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={theme === "light" ? "#e4ddf8" : "#ffffff2a"}
                stroke="#fff"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: {
                    fill: "rgba(var(--primary),0.3)",
                    outline: "none",
                  },
                  pressed: {
                    fill: "rgba(var(--primary),0.3)",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>

        {/* 📍 Data-based markers */}
        {data.map(({ label, color }) => {
          const coordinates = countryCoordinates[label];
          if (!coordinates) return null;

          return (
            <Marker key={label} coordinates={coordinates}>
              <circle
                r={6}
                fill={color}
                stroke="#fff"
                strokeWidth={2}
              />
              <text
                textAnchor="middle"
                y={-10}
                style={{
                  fontFamily: "inherit",
                  fill: "var(--color-primary)",
                  fontSize: "10px",
                }}
              >
                {label}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
