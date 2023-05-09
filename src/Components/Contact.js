import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    isFormValid: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.validateForm);
  };

  validateForm = () => {
    const { name, email, message } = this.state;
    const isFormValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
    this.setState({ isFormValid });
  };

  render() {
    if (!this.props.data) return null;

    const { contactMessage, contactTitle, submitButtonText, messageError, messageSuccess } = this.props.data;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>{contactTitle}</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{contactMessage}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form action="" method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={this.state.name}
                      size="35"
                      id="contactName"
                      name="name"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={this.state.email}
                      size="35"
                      id="contactEmail"
                      name="email"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      value={this.state.message}
                      id="contactMessage"
                      name="message"
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit" disabled={!this.state.isFormValid}>
                      {submitButtonText}
                    </button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning">{messageError}</div>
              <div id="message-success">
                <i className="fa fa-check"></i>
                {messageSuccess}
                <br />
              </div>
            </div>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
