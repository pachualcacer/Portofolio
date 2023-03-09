import React from "react";
import Navigation from "./Navigation";
import styles from "./Header.module.css";
import backgroundImage from "../../assets/main-image.jpeg";

type Props = {};

const Header = (props: Props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
      </header>
      <div className={styles.mainImage}>
        <img src={backgroundImage} alt="background" />
      </div>
    </React.Fragment>
  );
};

export default Header;
