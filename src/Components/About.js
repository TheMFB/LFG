import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const bio = this.props.data.bio;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
            </div>
            <div className="nine columns main-col">
              <h2>Laying Foundational Growth</h2>

              <p>{bio}</p>

              <ul className="social">
                <a href="http://www.instagram.com/layingfoundationalgrowth" className="button btn project-btn">
                  <i className="fa fa-instagram"></i>Instagram
                </a>
                <a href="mailto: John@layingfoundationalgrowth.com" className="button btn github-btn">
                  <i className="fa fa-envelope"></i>Book Consultation
                </a>
              </ul>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
