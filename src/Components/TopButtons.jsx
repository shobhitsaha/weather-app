import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Tokyo",
    },
    {
      id: 2,
      title: "Helsinki",
    },
    {
      id: 3,
      title: "Berlin",
    },
    {
      id: 4,
      title: "Nairobi",
    },
    {
      id: 5,
      title: "Rio",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city, idx) => (
        <button
          className="text-white text-lg font-medium"
          key={idx}
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
