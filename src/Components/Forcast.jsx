import React from "react";
import { iconUrlFromCode } from "../Services/weatherService";

function Forcast({ title, items }) {
  // console.log(items);
  return (
    <div className="text-white">
      <div className="flex flex-col mt-4 ">
        <p className="uppercase font-medium">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex flex-row items-center justify-between mt-2">
        {items.map((item, x) => (
          <div className="flex flex-col items-center justify-between" key={x}>
            <p className="text-sm mt-3">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              alt=""
              className="w-12 mt-4"
            />
            <p className="flex from-neutral-50 mt-3">
              {Math.floor(item.temp)}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forcast;
