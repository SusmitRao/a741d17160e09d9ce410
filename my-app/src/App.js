import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Asteroid from "./Asteroid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", asteroid: null };
    this.submit = this.submit.bind(this);
    this.random = this.random.bind(this);
  }
  componentDidMount() {}
  submit = () => {
    console.log("ok");
    if (this.state.id == "") {
      alert("ID can't be blank");
    } else {
      var self = this;
      axios
        .get(
          `https://api.nasa.gov/neo/rest/v1/neo/${this.state.id}?api_key=gs3ccLEwLOb8bvbDEwwdvivpOnBWwBB4SmqjyeP4`
        )
        .then(function (response) {
          // handle success
          console.log("success");
          console.log(response.data);
          self.setState({ asteroid: response.data });
          console.log(self.state);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          alert("This id doesn't exist");
        });
    }
  };
  random = () => {
    console.log("ok");
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=DEMO_KEY`)
      .then(function (response) {
        // handle success
        console.log(response.data.near_earth_objects);
        let neo = response.data.near_earth_objects;
        let length = neo.length;
        var id = neo[Math.floor(Math.random() * length)].id;
        console.log(id);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  render() {
    return (
      <>
        <div className="App">
          <form>
            <label htmlFor="asteroid"></label>
            <input
              type="text"
              name="asteroid"
              placeholder="Enter Asteroid ID"
              value={this.state.id}
              onChange={(e) => {
                this.setState({ id: e.target.value });
              }}
            />
            <button type="button" onClick={this.submit}>
              Submit
            </button>
          </form>
          <button type="button" onClick={this.random}>
            Random Asteroid
          </button>
        </div>
        <Asteroid asteroid={this.state.asteroid} />
      </>
    );
  }
}

export default App;
