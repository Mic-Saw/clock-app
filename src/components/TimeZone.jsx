import React, { useState, useEffect } from "react";

const TimeZone = ({ icon, daytime, city, country }) => {
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const getTime = async () => {
    const url = "http://worldtimeapi.org/api/ip";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setTime(data.datetime.slice(11, 16));
    } catch (error) {
      console.log(error);
    }
    //console.log(timezone);
  };

  const getLocation = async () => {
    const url =
      "https://api.ipbase.com/v2/info?apikey=feaQx0A4DNcHAF8a1aJU5i4GwSdUjPYu43zth0un&ip=1.1.1.1";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setLocation(data);
      console.log(location);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getLocation(), []);

  setInterval(() => {
    getTime();
  }, 1000);

  return (
    <div className="timezone">
      <h4 className="timezone-greeting">
        <img src={icon} />
        <span>good {daytime}, it's currently</span>
      </h4>
      <h1 className="timezone-time">{time}</h1>
      <h3 className="timezone-location">
        IN {city}, {country}
      </h3>
    </div>
  );
};

export default TimeZone;
