import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      lfgData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getLFGData() {
    $.ajax({
      url: "./lfgData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ lfgData: data });
      }.bind(this),
      error: function (xhr, status, err) {
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        <Header data={this.state.lfgData.main} />
        <About data={this.state.lfgData.main} />
        {/* <LFG data={this.state.lfgData.lfg} /> */}
        <Services services={this.state.lfgData.services}/>
        {/* <Footer data={this.state.lfgData.main} /> */}
        <Testimonials testimonials={this.state.lfgData.testimonials}/>
        <Contact data={this.state.lfgData.main} />
      </div>
    );
  }
}

export default App;
