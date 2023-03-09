import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navigation.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCircleInfo,
  faBriefcase,
  faTerminal,
  faEnvelope,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Navigation = (props: Props) => {
  const [menuIsShown, setMenuIsShown] = useState(false);

  const showBarHandler = () => {
    setMenuIsShown(!menuIsShown);
  };

  let menuStyle = menuIsShown
    ? `${styles.navMenu} ${styles.active}`
    : `${styles.navMenu}`;

  return (
    <nav className={styles.container}>
      <FontAwesomeIcon icon={faTerminal} className={styles.logo} />
      <div className={styles.menuIcon} onClick={showBarHandler}>
        {menuIsShown ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      <ul className={menuStyle}>
        <li>
          <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
            <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-200} duration={500}>
            <FontAwesomeIcon icon={faCircleInfo} className={styles.navIcon} />
            About
          </Link>
        </li>
        <li>
          <Link to="" spy={true} smooth={true} offset={50} duration={500}>
            <FontAwesomeIcon icon={faBriefcase} className={styles.navIcon} />
            Services
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={-170} duration={500}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.navIcon} />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
