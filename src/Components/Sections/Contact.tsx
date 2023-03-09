import React from "react";
import styles from "./Contact.module.css";
import logo from "../../assets/logo_building.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Contact = (props: Props) => {

  return (
    <div className={styles.container} id="contact">
      <div className={styles.leftpanel}>
        <h1>Let's Build Something Great!</h1>
        <img src={logo} alt="logo_form" />
      </div>
      <form className={styles.rightpanel}>
        <h1>Get In Touch</h1>
        <div className={styles.inputBox}>
          <input type="text" />
          <span>Name</span>
        </div>
        <div className={styles.inputBox}>
          <input type="mail" />
          <span>Email</span>
        </div>
        <div className={styles.inputBox}>
          <textarea></textarea>
          <span>Message</span>
        </div>
        <button>Submit</button>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/francisco-alcacer-1b0644209/"
            target={"_blank"}
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
          <a href="https://github.com/pachualcacer" target={"_blank"}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a href="mailto:falcacer99@gmail.com?" target={"_blank"}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;