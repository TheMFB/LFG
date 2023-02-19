import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    if (!this.props.testimonials) return null;

    const testimonials = this.props.testimonials.testimonials.map(function (testimonials) {
      return (
        <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
          </blockquote>
        </li>
      );
    });

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              {this.props.title && (

                <h1>
                  <span>{this.props.testimonials.title}</span>
                </h1>
              )}
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
            </div>
          </div>*
        </div>
      </section>
    );
  }
}

export default Testimonials;
