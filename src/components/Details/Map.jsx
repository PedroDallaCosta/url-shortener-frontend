import React from 'react';
import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

export default function Map({ countrys }) {
  const [tooltipContent, setTooltipContent] = useState('');

  const getColor = (clicks) => {
    if (clicks === 0) return '#F4ECDB';

    const maxClicks = 20;
    const ratio = Math.min(clicks / maxClicks, 1);

    const start = [244, 236, 219];
    const end = [102, 70, 30];

    const r = Math.round(start[0] + (end[0] - start[0]) * ratio);
    const g = Math.round(start[1] + (end[1] - start[1]) * ratio);
    const b = Math.round(start[2] + (end[2] - start[2]) * ratio);

    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div style={{ position: 'relative' }}>
      {tooltipContent && (
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            padding: '6px 10px',
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: 'white',
            borderRadius: 4,
            pointerEvents: 'none',
            fontSize: 12,
            zIndex: 1000,
          }}
        >
          {tooltipContent}
        </div>
      )}

      <ComposableMap
        projectionConfig={{
          rotate: [0, 0, 0],
          scale: 125,
        }}
        style={{ width: '100%', height: 'auto', backgroundColor: '#85B9B5' }}
        projection="geoMercator"
      >
        <Geographies geography={'../public/features.json'} className="select-none">
          {({ geographies }) =>
            geographies.map((geo) => {
              const nameCountry = (geo?.properties?.name).toLowerCase() || ""
              const { clicks = 0 } = countrys.find(country => country.country == nameCountry) || {}

              console.log(`Country = ${nameCountry} / ${countrys.find(country => country.country == nameCountry)}`)

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getColor(clicks)}
                  stroke="#bbb"
                  style={{
                    default: {
                      outline: 'none',
                      filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.15))',
                      transition: 'all 0.2s',
                    },
                    hover: {
                      outline: 'none',
                      fill: clicks > 0 ? '#B98E49' : '#EFCF8F',
                      cursor: 'pointer',
                      filter: 'drop-shadow(3px 3px 4px rgba(0,0,0,0.3))',
                    },
                    pressed: {
                      outline: 'none',
                      fill: clicks > 0 ? '#B98E49' : '#EFCF8F',
                      filter: 'drop-shadow(3px 3px 4px rgba(0,0,0,0.3))',
                    },
                  }}
                  onMouseEnter={() => {
                    setTooltipContent(
                      `${nameCountry}: ${clicks} click${clicks !== 1 ? 's' : ''}`
                    );
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}