import React, { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";

import { usePrifina } from "@prifina/hooks";
import { API_KEY, API_BASE_URL } from "./apis/config";

import { getIcon } from "./iconsMap";

// unique appID for the widget....
const appID = "weatherWidget";

const App = (props) => {
  console.log("WEATHER WIDGET PROPS ", props);

  const { city, data } = props;

  //const city = "san francisco";

  // init hook and get provider api services...
  const { onUpdate, Prifina } = usePrifina();

  // init provider api with your appID
  const prifina = new Prifina({ appId: appID });
  let defaultCity = city;
  if (
    typeof data !== "undefined" &&
    data.hasOwnProperty("settings") &&
    typeof data.settings === "object" &&
    data.settings.hasOwnProperty("city") &&
    data.settings.city.length > 0
  ) {
    defaultCity = data.settings.city;
  }

  const [searchCity, setCity] = useState(defaultCity);

  const dataUpdate = (data) => {
    // should check the data payload... :)

    if (
      data.hasOwnProperty("settings") &&
      typeof data.settings === "object" &&
      data.settings.hasOwnProperty("city")
    ) {
      //setCity(data.settings.city);
      setUrl(
        `${API_BASE_URL}/data/2.5/weather?q=${data.settings.city}&units=metric&appid=${API_KEY}`
      );
    }
  };

  useEffect(() => {
    // init callback function for background updates/notifications
    onUpdate(appID, dataUpdate);
  }, []);

  const { weatherData, error, isLoading, setUrl } = useFetch(
    `${API_BASE_URL}/data/2.5/weather?q=${searchCity}&units=metric&appid=${API_KEY}`
  );
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  const getContent = () => {
    const [temp, setTemp] = useState("");
    const [unit, setUnit] = useState("C");
    const [feel, setFeel] = useState("");

    if (error) return <h2>Error when fetching: {error}</h2>;
    if (!weatherData && isLoading) return <h2>LOADING...</h2>;
    if (!weatherData) return null;
    console.log(JSON.stringify(weatherData));
    console.log("saddasdas", weatherData);

    /*
    {"coord":{"lon":24.9355,"lat":60.1695},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds",
    "icon":"03d"}],"base":"stations","main":{"temp":-5.81,"feels_like":-11.21,"temp_min":-6.11,
    "temp_max":-4.44,"pressure":1018,"humidity":86},"visibility":10000,"wind":{"speed":3.6,"deg":150},
    "clouds":{"all":40},"dt":1613732443,"sys":{"type":1,"id":1332,"country":"FI","sunrise":1613713683,
    "sunset":1613748027},"timezone":7200,"id":658225,"name":"Helsinki","cod":200}
    */
    //console.log(weatherData.weather);

    const convert = () => {
      if (unit === "F") {
        const newT = weatherData.main.temp * 1.8 + 32;
        setTemp(Math.ceil(newT));
        setUnit(oppositeUnit);
        const Feel = weatherData.main.feels_like * 1.8 + 32;
        setFeel(Math.ceil(Feel));
      }

      if (unit === "C") {
        const newT = weatherData.main.temp;
        setTemp(Math.ceil(newT));
        setUnit(oppositeUnit);
        const Feel = weatherData.main.feels_like;
        setFeel(Math.ceil(Feel));
      }
    };

    const oppositeUnit = unit === "F" ? "C" : "F";

    const iconName = weatherData.weather[0].icon;
    const State = weatherData.sys.country;
    console.log("state name", State);

    // const icon = weatherData.weather[0].icon;
    const weatherCity = weatherData.name;
    return (
      <React.Fragment>
        <div
          alt="main"
          style={{
            width: "200px",
            height: "200px",
            padding: "5px",
            paddingTop: 10,
            borderRadius: "20px",
            background: "linear-gradient(to left, #36d1dc, #5b86e5)",
          }}
        >
          <div
            alt="left"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img
              width={"100"}
              // src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              src={require(`./assets/${iconName}.png`)}
            />

            <div
              alt="right"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <div style={{ fontSize: 35, paddingLeft: 5, color: "white" }}>
                {temp}°{oppositeUnit}
              </div>
            </div>
          </div>
          <div
            alt="bottom"
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: 5,
              paddingLeft: 10,
              justifyContent: "flex-start",
            }}
          >
            <div
              alt="bottom-left"
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: 15,
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  textTransform: "capitalize",
                  fontSize: 14,
                  color: "white",
                }}
              >
                {weatherCity}
                {", "}
                {State}
              </div>
              <div
                style={{
                  width: "100px",
                  textTransform: "capitalize",
                  fontSize: 12,
                  color: "white",
                }}
              >
                {weatherData.weather[0].description}
              </div>
              <div
                style={{
                  width: "100px",
                  textTransform: "capitalize",
                  fontSize: 12,
                  color: "white",
                }}
              >
                Feels like: {feel}
              </div>
            </div>
            <div
              alt="bottom-right"
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: 15,
              }}
            >
              <button
                style={{ background: "transparent", border: 0 }}
                onClick={convert}
              >
                Unit
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div>
      {/* 
        <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} />
  */}
      {/* conditionally render  */}
      {getContent()}
    </div>
  );
};
App.defaultProps = {
  city: "San Francisco",
};

App.displayName = "Weather";

export default App;
