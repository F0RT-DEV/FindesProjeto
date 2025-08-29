import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Profissao = () => {
  const navigate = useNavigate();

  const jobOptions = [
    ["Estagiário / Aprendiz", "Autônomo", "Auxiliar Administrativo", "Motorista", "Auxiliar de Serviços Gerais", "Atendente"],
    ["Vendedor", "Auxiliar de Logística", "Administrador", "Analista Financeiro", "Mecânico", "Eletricista"],
    ["Gerente", "Arquiteto", "Porteiro", "Zelador", "Professor(a)", "Contador(a)"]
  ];

  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const changePage = (page) => {
    if (page >= 0 && page < jobOptions.length) {
      const horizontalAnimation = page > currentPage ? "animate-slide-in-right" : "animate-slide-in-left";

      setAnimationDirection(horizontalAnimation);
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentPage(page);
        setAnimationKey(prevKey => prevKey + 1);
      }, 100);
    }
  };

  const handleJobClick = (job) => {
    setIsExiting(true);

    setTimeout(() => {
      navigate('/salario');
    }, 400);
  };

  return (
    <div className="page-container bg-dots">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
      <div className="absolute top-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 left-20 w-36 h-36 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="page-content">
        {/* Header */}
        {/* ...continua... */}
      </div>
    </div>
  );
};

export default Profissao;
