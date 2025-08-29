import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DollarSign } from "lucide-react";

const Salario = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const salaryRanges = [
    "Entre 650 e 2.000",
    "Entre 2.000 e 3.500", 
    "Entre 3.500 e 5.000",
    "Entre 5.000 e 7.000",
    "Entre 7.000 e 10.000",
    "Acima de 10.000",
  ];

  const handleOptionClick = () => {
    setIsExiting(true);

    setTimeout(() => {
      navigate('/cursos');
    }, 500);
  };

  return (
    <div className="page-container bg-grid">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5" />
      <div className="absolute top-16 left-16 w-28 h-28 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="page-content">
        {/* Header */}
        {/* ...continua... */}
      </div>
    </div>
  );
};

export default Salario;
