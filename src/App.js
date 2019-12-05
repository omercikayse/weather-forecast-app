import React, { Component } from "react";
import "./App.css";
import Title from "./component/Titles";
import Form from "./component/Form";
import Weather from "./component/Weather";

const API_KEY = "c431b05e699eeeac549d376619580d69";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();

    console.log("data : ", data);

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter valid information.."
      });
    }
  };

  render() {
    return (
      <div className="App container">
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temp={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
