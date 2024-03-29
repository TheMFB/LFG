import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const profilepic = "images/lfg-only.png";

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a href="http://www.instagram.com/layingfoundationalgrowth">
                Instagram
              </a>
            </li>

            <li>
              <a href="mailto: John@layingfoundationalgrowth.com" >
                Contact Us
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#lfg">
                LFG
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              {/* <h1 className="responsive-headline">{name}</h1> */}
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </Fade>
            {/* <Fade bottom duration={1200}>
              <h2 textColor="white">{description}</h2>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>Lets discuss how we can improve your company’s revenue-generating plans</h3>
            </Fade>
            <hr /> */}
            {/* <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-instagram"></i>Instagram
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-envelope"></i>Book Consultation
                </a>
              </ul>
            </Fade> */}
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
