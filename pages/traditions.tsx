import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Tradition() {
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const handleClick = (geo: any) => () => {
    setSelectedCountry(geo.name)
  };
  return (
    <>
      <div className="text-center text-[50px] pt-6">🎁Choose country to discover Christmas🎄</div>
      <div className="text-center text-[25px] pt-6">
        {selectedCountry ? 'Selected country: ' + selectedCountry : 'Please select the country on map'}
      </div>
      <div className="scale-y-90 relative left-[-5%]">
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={handleClick(geo.properties)}
                  style={{
                    default: {
                      fill: "#EEE",
                    },
                    hover: {
                      fill: "#339933",
                    },
                    pressed: {
                      fill: "#009900",
                    },
                  }}
                  stroke="#000000"
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </>
  );
}
