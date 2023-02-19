import React, { Component } from "react";
import { Icon } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import InstagramIcon from '@mui/icons-material/Instagram';
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/lfg-only.png";

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} color={["#7D7D7D", "#000", "#E6E5E5", "#525353"]} />

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
                <Icon fontSize="medium">home</Icon>
              </a>
            </li>

            <li>
              <a href="http://www.instagram.com/layingfoundationalgrowth">
                <InstagramIcon fontSize="medium" sx={{ width: '1.5em', height: '1.5em' }} />
              </a>

            </li>

            <li>
              <a href="mailto: John@layingfoundationalgrowth.com" >
                <Icon fontSize="medium">mail</Icon>
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
              <a className="smoothscroll" href="#services">
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
