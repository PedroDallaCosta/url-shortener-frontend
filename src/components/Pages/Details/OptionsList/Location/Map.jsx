import React from 'react';
import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

const countryClicks = {
  AUS: 10,
  US: 5,
  FR: 3,
};

export default function Map() {
  const [tooltipContent, setTooltipContent] = useState('');

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
              const nameCountry = geo?.properties?.name || ""
              const countryCode = geo.id;
              const clicks = countryClicks[countryCode] || 0;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={clicks > 0 ? '#CCA462' : '#F4ECDB'}
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