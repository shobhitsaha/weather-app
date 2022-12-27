import { useState, useEffect } from "react";
import "./App.css";
import Forcast from "./Components/Forcast";
import Inputs from "./Components/Inputs";
import TempAndDetails from "./Components/TempAndDetails";
import TimeAndLoaction from "./Components/TimeAndLocation";
import TopButtons from "./Components/TopButtons";
import { getFormattedData } from "./Services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "Delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const message = query.q ? query.q : "current location";
    toast.info("Fetching weather for " + message);
    const fetchWeather = async () => {
      await getFormattedData({ ...query, units }).then((data) => {
        // console.log(data);
        setWeather(data);
        toast.success(
          `Successfully fetched for ${data.name}, ${data.country}.`
        );
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-600";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-600 to-blue-600";

    return "from-yellow-700 to-orange-700";
  };

  return (
    // gradient to bottom-left/bottom-right
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-bl ${formatBackground()} h fit shadow-xl shadow-gray-400`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather ? (
        <div>
          <TimeAndLoaction weather={weather} />
          <TempAndDetails weather={weather} />
          <Forcast title="hourly forcast" items={weather.hourly} />
          <Forcast title="Daily forcast" items={weather.daily} />
        </div>
      ) : (
        <div></div>
      )}
      <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
