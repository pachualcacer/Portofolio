import React from "react";
import styles from "./About.module.css";
import css from "../../assets/logos/css-3.png";
import html from "../../assets/logos/html-5.png";
import typescript from "../../assets/logos/typescript.png";
import python from "../../assets/logos/python.png";
import haskell from "../../assets/logos/haskell.png";
import c from "../../assets/logos/C.png";
import nodejs from "../../assets/logos/nodejs.png";
import r from "../../assets/logos/R.png";
import unr from "../../assets/logos/UNR.png";
import fceia from "../../assets/logos/fceia.jpeg";
import johndeere from "../../assets/logos/johndeere.png";
import notion from "../../assets/logos/notion.png";
import git from "../../assets/logos/git.png";
import Showcase from "../Layout/Showcase";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const About = (props: Props) => {
  const skills = [
    html,
    css,
    typescript,
    nodejs,
    git,
    python,
    c,
    r,
    haskell,
    notion,
  ];
  const experience = [unr, fceia, johndeere];

  return (
    <div className={styles.container} id="about">
      <div className={styles.about}>
        <h1>About me</h1>
        <p>
          Soy un Estudiante de Computación interesado en profundizar
          conocimientos prácticos relacionados con mi área de estudio. Busco
          expandir mis horizontes personales participando en actividades que
          aumenten mis habilidades interpersonales, académicas y laborales.
        </p>
        <p>
          Actualmente cursando el ultimo año de la carrera Licenciatura en
          Ciencias de la Computación en la Facultad de Ciencias Exactas,
          Ingeniería y Agrimensura UNR.
        </p>
        <p>
          Participante en el programa de pasantias hecho por la empresa
          multinacional John Deere trabajando casi dos años en el sector de
          analisis financiero con el rol de optimizar y mejorar las tareas del
          area.
        </p>
        <div className={styles.images}>
        <Showcase images={experience} />
        </div>
      <a href="CV.pdf" download="CV.pdf">
        <button className={styles.about}>
        <FontAwesomeIcon icon={faDownload} size="lg" /> Download CV
        </button>
      </a>
      </div>
      <div className={styles.skills}>
        <h1>Skills</h1>
        <div className={styles.logos}>
          <Showcase images={skills} />
        </div>
      </div>
    </div>
  );
};

export default About;
