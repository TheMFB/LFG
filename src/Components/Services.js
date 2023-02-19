import React, { Component } from "react";
import Fade from "react-reveal";
import Service from './Service';

class Services extends Component {
  render() {
    if (!this.props.services) return null;
    return (
      <section id="services">
        <Fade duration={1000}>
          <div className="row center">

            <div className="nine columns main-col">
              <h1>{this.props.services.title}</h1>
              {this.props.services.services.map((service) => (<Service icon={service.icon} text={service.text} color={this.props.services.color} bgColor={this.props.services.bgColor} bgColor2={this.props.services.bgColor2} />))}
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Services;
