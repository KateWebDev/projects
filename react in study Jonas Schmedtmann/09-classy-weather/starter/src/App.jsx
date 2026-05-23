import React from "react";

function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

class App extends React.Component {
  state = {
    location: "",
    city: "",
    isLoading: false,
    error: null,
    weathers: {},
  };

  fetchData = async () => {
    this.setState({ error: "" });
    this.setState({ isLoading: true });
    try {
      // 1) Getting location (geocoding)
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`);
      const geoData = await geoRes.json();

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, country_code } = geoData.results.at(0);

      this.setState({ city: `${timezone} [${country_code}]` });

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`,
      );
      const weatherData = await weatherRes.json();

      this.setState({ weathers: weatherData.daily });
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // useEffect in []
  componentDidMount() {
    this.fetchData();
  }

  // useEffect in [****]
  componentDidUpdate(prevProps, prevState) {
    if (prevState.location !== this.state.location) {
      this.fetchData();
    }
  }

  // useEffect in return ()=>{}
  componentWillUnmount() {}

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>

        <div>
          <input
            type="text"
            placeholder="Search form location..."
            value={this.state.location}
            onChange={(evt) => this.setState({ location: evt.target.value })}
          />
        </div>
        {this.state.isLoading && <p className="loader">Loading...</p>}
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.weathers?.time?.length > 0 && (
          <>
            <WeatherList weathers={this.state.weathers} city={this.state.city} />
          </>
        )}
      </div>
    );
  }
}
export default App;

class WeatherList extends React.Component {
  render() {
    const { temperature_2m_max: max, temperature_2m_min: min, time: dates, weathercode: codes } = this.props.weathers;

    return (
      <>
        <h2>Weather for {this.props.city}</h2>
        <ul className="weather">
          {dates.map((date, index) => (
            <Weather
              key={date}
              data={date}
              max={max[index]}
              min={min[index]}
              code={codes[index]}
              isToday={index === 0}
            />
          ))}
        </ul>
      </>
    );
  }
}

class Weather extends React.Component {
  render() {
    const { code, data, min, max, isToday } = this.props;
    return (
      <li className={isToday ? "day important" : "day"}>
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday ? "Today" : formatDay(data)}</p>
        <p>
          {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
        </p>
      </li>
    );
  }
}
