import React from "react";
import { formatToLocalTime } from "../Services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white">{formatToLocalTime(dt, timezone)}</p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white text-3xl font-bold">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
