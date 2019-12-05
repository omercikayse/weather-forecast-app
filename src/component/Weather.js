import React, { Component } from "react";
import "./Weather.css";

class Weather extends Component {
  render() {
    return (
      <div className="weather flow-text">
        {this.props.country && (
          <div>
            <b>Country : </b> {this.props.country}
          </div>
        )}
        {this.props.city && (
          <div>
            <b>City : </b>
            {this.props.city}
          </div>
        )}
        {this.props.temp && (
          <div>
            <b>Temp : </b>
            {this.props.temp}
          </div>
        )}
        {this.props.humidity && (
          <div>
            <b>Humidity : </b>
            {this.props.humidity}
          </div>
        )}
        {this.props.description && (
          <div>
            <b>Description : </b>
            {this.props.description}
          </div>
        )}
        {this.props.error && (
          <div>
            <b>Error :</b> {this.props.error}
          </div>
        )}
      </div>
    );
  }
}

export default Weather;
