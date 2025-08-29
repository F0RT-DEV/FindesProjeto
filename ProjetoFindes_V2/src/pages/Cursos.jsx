import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

const cursosOption = [
  [
    "Mecânica",
    "Eletrotécnica", 
    "Automação Industrial",
    "Mecânica Automotiva",
    "Desenvolvimento Web",
    "Análise e Desenvolvimento de Sistemas"
  ],
  [
    "Redes de Computadores",
    "Segurança da Informação",
    "Banco de Dados",
    "Inteligência Artificial",
    "Design Gráfico",
    "Marketing Digital"
  ],
  [
    "Eletromecânica",
    "Construção Civil",
    "Mecatrônica",
    "Logística",
    "Qualidade e Produtividade",
    "Segurança do Trabalho"
  ],
];

const salaryRanges = {
  "Mecânica": "Entre 5.000 e 6.000",
  "Eletrotécnica": "Entre 4.500 e 5.500",
  "Automação Industrial": "Entre 6.000 e 7.000",
  "Mecânica Automotiva": "Entre 4.000 e 5.000",
  "Desenvolvimento Web": "Entre 5.500 e 7.000",
  "Análise e Desenvolvimento de Sistemas": "Entre 6.000 e 8.000",
  "Redes de Computadores": "Entre 4.000 e 5.000",
  "Segurança da Informação": "Entre 6.000 e 8.000",
  "Banco de Dados": "Entre 5.000 e 7.000",
  "Inteligência Artificial": "Entre 8.000 e 10.000",
  "Design Gráfico": "Entre 3.000 e 4.500",
  "Marketing Digital": "Entre 4.000 e 5.500",
  "Eletromecânica": "Entre 4.500 e 5.500",
  "Construção Civil": "Entre 3.500 e 4.500",
  "Mecatrônica": "Entre 5.000 e 6.500",
  "Logística": "Entre 3.500 e 4.500",
  "Qualidade e Produtividade": "Entre 4.000 e 5.000",
  "Segurança do Trabalho": "Entre 4.000 e 5.500"
};

const Cursos = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // ...continua...

  return (
    <div className="page-container bg-grid">
      {/* Background Effects */}
      {/* ...continua... */}
    </div>
  );
};

export default Cursos;
