
import Styles from"../Css/Home.module.css"
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    document.body.className = Styles.homeBody;
    return () => {
        document.body.className = "";
    };
}, []);

  return (
    <div className={Styles.ContainerM}>
      <div className={Styles.header}>
        <div className={Styles.profession}>
          <div className={Styles.square}></div>
          <span>PROFISSÃO</span>
        </div>
        <hr className={Styles.line1} />
        <div className={Styles.senai}>SENAI<br /> NO SEU <br />FUTURO</div>
      </div>
      <hr className={Styles.line2} />
      <div className={Styles.container7}>
      <div className={Styles.title}>
        O QUE<br />
        <span className={Styles.highlight}>EU</span>
        GANHO<br />
        <span className={Styles.Tm}>Com isso?</span>
      </div>
      <Link to="/profissao" className={Styles.descubra}>DESCUBRA</Link>
      </div>
    </div>
  );
}
export default Home
