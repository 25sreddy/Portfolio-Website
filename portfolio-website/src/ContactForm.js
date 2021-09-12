import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contactform.css";
function ContactForm() {
  const [state, handleSubmit] = useForm("mvodlpjo");
  if (state.succeeded) {
    return (
      <p>
        Thank you for submitting, I will get back to you as soon as possible!
      </p>
    );
  }
  return (
    <div className="container wrapper" data-aos="zoom-out">
      <div className="socials">
        <h2 className="social">Socials</h2>
        <div className="icons">
          <a
            href="https://github.com/25sreddy"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://twitter.com/Sahil13355019"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/sahilreddy09/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div classNameName="form">
        <h2 className="form">Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="firstinputs">
            <input
              id="text"
              type="text"
              name="text"
              placeholder="Name"
              required
            />
            <ValidationError prefix="Text" field="text" errors={state.errors} />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="area">
            <textarea id="message" name="message" placeholder="Type Here..." />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              required
            />
          </div>
          <div className="button">
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
