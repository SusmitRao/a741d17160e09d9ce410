import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class Asteroid extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const { asteroid } = this.props;
    return (
      <div className="container">
        <p>{asteroid && asteroid.name}</p>
        <p>{asteroid && asteroid.nasa_jpl_url}</p>
        <p>{asteroid && asteroid.is_potentially_hazardous_asteroid}</p>
      </div>
    );
  }
}

export default Asteroid;
