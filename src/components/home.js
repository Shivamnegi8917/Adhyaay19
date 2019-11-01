import React, { Component, Fragment } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import MainLogo from "./mainLogo";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import ImageSlider from "./ImageSlider";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Logout from "./auth/Logout";

import About from "./about";
import Gallery from "./gallery";
//images
import lightRaysImage from "../images/lightRays.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Home extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <li>
          <span className="navbar-text mr-3">
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </li>
        <li>
          <Logout />
        </li>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <Link to="/register" className="link left">
          <li>Register</li>
        </Link>
        <Link to="/login" className="link left">
          <li>Login</li>
        </Link>
      </Fragment>
    );

    return (
      <div className="homeMain">
        <div className="container1">
          <nav className="navbar1">
            <ul>
              <li>
                <a href="#home" className="left">
                  Home
                </a>
                <a href="#about" className="left">
                  About
                </a>
                <Link to="/events" className="link left">
                  <li>Events</li>
                </Link>
                {/* <a href="#sponsor" className="left">
                  Sponsors
                </a>
                <a href="#contact" className="left">
                  Contact Us
                </a> */}
                {isAuthenticated ? authLinks : guestLinks}
              </li>
            </ul>
          </nav>

          <section id="home">
            <div className="section-main">
              <div className="stars-wrapper">
                <div className="night">
                  <div className="shooting_star"></div>
                  <div className="shooting_star"></div>
                  <div className="shooting_star"></div>
                </div>
              </div>
              <div className="row home-main">
                <div className="col s4">
                  <MainLogo />
                </div>
                <div className="tl col s8 ">
                  <div className="container main-title">
                    <div className="foo row">
                      <span className="letter col s1" data-letter="A">
                        A
                      </span>
                      <span className="letter col s1" data-letter="D">
                        D
                      </span>
                      <span className="letter col s1" data-letter="H">
                        H
                      </span>
                      <span className="letter col s1" data-letter="Y">
                        Y
                      </span>
                      <span className="letter col s1" data-letter="A">
                        A
                      </span>
                      <span className="letter col s1" data-letter="A">
                        A
                      </span>
                      <span className="letter col s1" data-letter="Y">
                        Y
                      </span>
                    </div>
                    <p>
                      The wise have spoken and the plethora of events have been
                      set. We have fastened our seatbelts and advise the same as
                      the launch is near. Let us take you on an astral journey
                      of psychedelic bliss and glee. As Adhyaay19 unravels, its
                      boarders will find exhilarating competition, entrancing
                      talent, and gripping showbiz on their voyage.We’ll witness
                      the magic of Kavya Sandhya, mesmerising moments of
                      celebrity night, and pulse synchronising EDM concert. Join
                      us on our expedition and you might unfold the best moments
                      of your college life. Get on board voyagers!
                    </p>
                  </div>
                </div>
              </div>
              <div className="particle-js-wrapper">
                <Particles
                  params={{
                    particles: {
                      number: {
                        value: 250,
                        density: {
                          enable: true,
                          value_area: 1500
                        }
                      },
                      line_linked: {
                        enable: false,
                        opacity: 0.02
                      },
                      move: {
                        direction: "right",
                        speed: 0.05
                      },
                      size: {
                        value: 1
                        // "random": true,
                      },
                      opacity: {
                        anim: {
                          enable: true,
                          speed: 1,
                          opacity_min: 0.05
                        }
                      }
                    },
                    interactivity: {
                      events: {
                        onclick: {
                          enable: true,
                          mode: "push"
                        }
                      },
                      modes: {
                        push: {
                          particles_nb: 1
                        }
                      }
                    },
                    retina_detect: true
                  }}
                />
              </div>
            </div>
          </section>
          <section id="gallery">
            <div className="section-gallery">
              <Gallery />
            </div>
          </section>
          <section id="about">
            <div className="section-about">
              <About />
            </div>
          </section>

          {/* <section id="sponsor">
            <h1>Sponsors</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos architecto iure adipisci in odit corporis.
            </p>
          </section>
          <section id="contact">
            <h1>Contact</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos architecto iure adipisci in odit corporis.
            </p>
          </section> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Home);
