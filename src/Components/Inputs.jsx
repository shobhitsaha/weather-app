import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchCLick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };
  const handleLocationClick = () => {
    // toast.info("Fetching Loaction");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude: lat, longitude: lon } = pos.coords;
        setQuery({ lat, lon });
      });
    }
  };
  const handleUnitsChange = (e) => {
    const selectedUnits = e.currentTarget.name;
    if (units !== selectedUnits) {
      setUnits(selectedUnits);
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="search..."
          className="text-xl p-2 focus:outline-none font-light rounded shadow-xl"
        />

        <UilSearch
          size={25}
          onClick={handleSearchCLick}
          className="text-white text-xl hover:cursor-pointer transition ease-in-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          onClick={handleLocationClick}
          className="text-white hover:cursor-pointer transition ease-in-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center space-x-4">
        <button
          name="metric"
          className="text-xl text-white hover:cursor-pointer transition ease-in-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-white text-xl">|</p>
        <button
          name="imperial"
          className="text-xl text-white hover:cursor-pointer transition ease-in-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
