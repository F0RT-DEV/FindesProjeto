// src/components/Salario.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../Css/Salario.module.css";

function Salario() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = Styles.salarioBody;
    return () => {
      document.body.className = "";
    };
  }, []);

  const [isExiting, setIsExiting] = useState(false);
  const [isExiting2, setIsExiting2] = useState(false);
  const handleOptionClick = () => {
    setIsExiting(true); 
    setIsExiting2(true); 
  
    setTimeout(() => {
      navigate('/cursos');
    }, 500); 
  };

  return (
    <div className={Styles.container2}>
      <div className={Styles.header}>
        <h1 className={`${isExiting2 ? Styles.exitAnimation2 : ""}`}>
          Qual <span>Sua<br />Faixa Salarial?</span>
        </h1>
        <p>
          MARQUE A OPÇÃO QUE MELHOR SE<br />
          ENCAIXA AO SEU <span>ATUAL EMPREGO</span>
        </p>
      </div>
      <div className={`${Styles.options} ${isExiting ? Styles.exitAnimation : ""}`}>
        {[
          "Entre 650 e 2.000",
          "Entre 2.000 e 3.500",
          "Entre 3.500 e 5.000",
          "Entre 5.000 e 7.000",
          "Entre 7.000 e 10.000",
          "Acima de 10.000",
        ].map((faixa, index) => (
          <button
            key={index}
            className={`${Styles.option} ${isExiting ? Styles.fadeOut1 : ""}`}
            onClick={handleOptionClick}
          >
            {faixa}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Salario;
