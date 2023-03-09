import React from "react";
import styles from "./Home.module.css";
import me from "../../assets/perfil.jpg";
import backgroundImage from "../../assets/main-image.jpeg";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={styles.container} id="home">
      <img src={backgroundImage} alt="background" />
      <section className={styles.card}>
        <img src={me} alt="picture of me" />
        <div className={styles.summary}>
        <h1>Hello 👋🏻, I am Francisco Alcácer</h1>
        <h2>FullStack Developer</h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
