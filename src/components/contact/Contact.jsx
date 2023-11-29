import { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_15w33tm",
        "template_uuj8aw7",
        form.current,
        "WDDdCEe7T51JVWym-"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent Successfully!!!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contacts">
      <h2 className="contactTitle">Contact Me</h2>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form ref={form} className="contactForm" onSubmit={sendEmail}>
        <input
          type="text"
          className="contactName"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="from_email"
        />
        <input
          type="texr"
          className="subject"
          placeholder="Your Subject"
          name="from_subject"
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="send" className="submitBtn">
          Submit
        </button>
      </form>
      <div className="contactlinks">
        <a
          href="https://www.linkedin.com/in/tina-majumder-187786214/"
          target="_blank"
        >
          <img src="./linkedin.png" alt="LinkedIn" className="contactlink" />
        </a>
        <a href="https://github.com/tinaM17" target="_blank">
          <img src="./github.png" alt="GitHub" className="contactlink" />
        </a>
        <a
          href="https://instagram.com/tinamajumder17?igshid=YTQwZjQ0NmI0OA=="
          target="_blank"
        >
          <img src="./instagram.png" alt="Instagram" className="contactlink" />
        </a>
        <a
          href="mailto:tinamajumder1999@gmail.com"
          target="_blank"
        >
          <img src="./gmail.png" alt="Gmail" className="contactlink" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
