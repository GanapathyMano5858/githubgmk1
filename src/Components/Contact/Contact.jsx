import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_995rs6n",
        "template_4ykphlc",
        form.current,
        "EzekblhteHAOuXaU0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_995rs6n",
  //       "template_4ykphlc",
  //       form.current,
  //       "EzekblhteHAOuXaU0"
  //     )
  //     .then((result) => {
  //       console.log(result.text);
  //       setDone(true);
  //     })
  //     .catch((err) => {
  //       console.log(err.text);
  //     });
  // };

  return (
    <div className="contact-form">
      {/* left side */}

      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
        </div>
        <div className="blue s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contact me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
