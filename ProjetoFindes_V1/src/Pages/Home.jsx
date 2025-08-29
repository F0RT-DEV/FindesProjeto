
import Styles from"../Css/Home.module.css"
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  useEffect(() => {
    document.body.className = Styles.homeBody;
    return () => {
        document.body.className = "";
    };
}, []);

const [isAnimating, setIsAnimating] = useState(false);
const navigate = useNavigate();

const handleLinkClick = (e) => {
  e.preventDefault();
  setIsAnimating(true);
  setTimeout(() => {
    navigate("/profissao");
  },900);
};

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
      <div className={`${Styles.container7} ${isAnimating ? Styles.animate : ''}`}>
      <div className={Styles.title}>
        O QUE<br />
        <span className={Styles.highlight}>EU</span>
        GANHO<br />
        <span className={Styles.Tm}>Com isso?</span>
      </div>
      <Link to="/profissao" onClick={handleLinkClick} className={Styles.descubra}>DESCUBRA</Link>
      </div>
    </div>
  );
}
export default Home
