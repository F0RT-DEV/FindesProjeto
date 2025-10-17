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
      
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5" />
      <div className="absolute top-16 left-16 w-28 h-28 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="page-content">
        
        <div className={`section-header transition-all duration-500 ${isExiting ? 'opacity-0 transform -translate-y-8' : 'opacity-100'}`}>
          <div className="flex items-center justify-center mb-6">
            <DollarSign className="w-12 h-12 text-primary mr-4 animate-pulse-glow" />
            <h1 className="text-4xl md:text-6xl font-bold animate-slide-up">
              Qual{" "}
              <span className="text-gradient-primary">
                Sua<br />Faixa Salarial?
              </span>
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MARQUE A OPÇÃO QUE MELHOR SE<br />
            ENCAIXA AO SEU <span className="text-gradient-secondary font-semibold">ATUAL EMPREGO</span>
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto transition-all duration-500 ${isExiting ? 'opacity-0 transform scale-95' : 'opacity-100'}`}>
          {salaryRanges.map((faixa, index) => (
            <button
              key={index}
              className="btn-option group relative overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={handleOptionClick}
            >
              <div className="flex items-center justify-between">
                <span className="relative z-10 text-lg font-medium">{faixa}</span>
                <DollarSign className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 group-hover:from-primary/10 group-hover:via-primary/15 group-hover:to-accent/10 transition-all duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-border">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-700 group-hover:w-full w-0"
                />
              </div>
            </button>
          ))}
        </div>

        <div className="card-elevated max-w-md mx-auto mt-12 p-6 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-lg font-semibold mb-2 text-gradient-secondary">💡 Dica</h3>
          <p className="text-muted-foreground text-sm">
            Sua faixa salarial atual nos ajuda a calcular o potencial de crescimento com os cursos do SENAI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Salario;