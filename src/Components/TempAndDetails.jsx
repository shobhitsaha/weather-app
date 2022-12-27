import React from "react";
import {
  UilTemperatureThreeQuarter,
  UilWind,
  UilTear,
  UilSun,
  UilArrowDown,
  UilArrowUp,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../Services/weatherService";

function TempAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />

        <p className="text-5xl">{Math.floor(temp)}°</p>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-evenly font-light">
            <UilTemperatureThreeQuarter size={18} />
            <p className="text-sm mx-2">
              Real feel <b className="mx-1">{Math.floor(feels_like)}°</b>
            </p>
          </div>
          <div className="flex flex-row items-center justify-evenly font-light">
            <UilTear size={18} />
            <p className="text-sm mx-2">
              Humidity <b className="mx-1">{Math.floor(humidity)}%</b>
            </p>
          </div>
          <div className="flex flex-row font-light items-center justify-between">
            <UilWind size={18} />
            <p className="text-sm mx-2">
              Wind <b className="mx-1">{Math.floor(speed)} km/h</b>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center space-x-2 text-white text-sm font-light py-3">
        <UilSun />
        <p>
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh mm a")}
          </span>
        </p>
        <p>|</p>

        <UilSunset />
        <p>
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh mm a")}
          </span>
        </p>
        <p>|</p>

        <UilArrowUp />
        <p>
          High:{" "}
          <span className="font-medium ml-1">{Math.floor(temp_max)}°</span>
        </p>
        <p>|</p>

        <UilArrowDown />
        <p>
          Low: <span className="font-medium ml-1">{Math.floor(temp_min)}°</span>
        </p>
      </div>
    </div>
  );
}

export default TempAndDetails;
