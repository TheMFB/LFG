import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import LFG from "./Components/LFG";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      lfgData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getLFGData() {
    $.ajax({
      url: "./lfgData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ lfgData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getLFGData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.lfgData.main} />
        <About data={this.state.lfgData.main} />
        {/* <LFG data={this.state.lfgData.lfg} /> */}
        {/* <Portfolio data={this.state.lfgData.portfolio} /> */}
        {/* <Contact data={this.state.lfgData.main} /> */}
        {/* <Footer data={this.state.lfgData.main} /> */}
      </div>
    );
  }
}

export default App;
