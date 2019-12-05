import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city"></input>
          <input type="text" name="country"></input>
          <button className="btn-large">Show Weather Forecast</button>
        </form>
      </div>
    );
  }
}

export default Form;
