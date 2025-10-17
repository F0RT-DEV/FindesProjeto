import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, TrendingUp, Trophy, Star } from "lucide-react";

const SalarioEstimado = () => {
  const navigate = useNavigate();
  const [salaryRange, setSalaryRange] = useState("Entre 0.000 e 0.000");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const storedSalaryRange = localStorage.getItem('salaryRange');
    const storedCourse = localStorage.getItem('selectedCourse');
    if (storedSalaryRange) {
      setSalaryRange(storedSalaryRange);
    }
    if (storedCourse) {
      setSelectedCourse(storedCourse);
    }
  }, []);

  const handleBack = () => {
    navigate("/cursos");
  };

  const handleNext = () => {
    setIsExiting(true);

    setTimeout(() => {
      navigate('/fim');
    }, 500);
  };

  return (
    <div className="page-container bg-grid">
      
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-secondary/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="page-content">
        
        <div className={`section-header transition-all duration-500 ${isExiting ? 'opacity-0 transform -translate-y-8' : 'opacity-100'}`}>
          <div className="flex items-center justify-center mb-6">
            <Trophy className="w-12 h-12 text-primary mr-4 animate-pulse-glow" />
            <h1 className="text-4xl md:text-6xl font-bold animate-slide-up">
              Com{" "}
              <span className="text-gradient-primary">
                Esses Cursos,<br />Você Pode Ganhar
              </span>
            </h1>
          </div>
        </div>

        
        {selectedCourse && (
          <div className="card-elevated max-w-md mx-auto p-6 mb-8 animate-scale-in">
            <div className="text-center">
              <Star className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gradient-accent mb-2">Curso Selecionado</h3>
              <p className="text-muted-foreground">{selectedCourse}</p>
            </div>
          </div>
        )}

        
        <div className={`max-w-2xl mx-auto mb-12 transition-all duration-500 ${isExiting ? 'opacity-0 transform scale-95' : 'opacity-100'}`}>
          <div className="card-elevated p-8 text-center relative overflow-hidden group">
            
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
              <h2 className="text-2xl font-semibold text-gradient-secondary mb-4">Potencial de Renda</h2>
              <div className="text-4xl md:text-5xl font-bold text-gradient-hero mb-4">
                R$ {salaryRange.replace('Entre ', '').replace(' e ', ' - ')}
              </div>
              <p className="text-muted-foreground">por mês após concluir o curso</p>
            </div>

            
            <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-accent/10 rounded-full blur-lg" />
          </div>
        </div>

        
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="card-feature text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Crescimento Garantido</h3>
            <p className="text-sm text-muted-foreground">Aumento médio de 40% na renda</p>
          </div>

          <div className="card-feature text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary-glow rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Qualificação</h3>
            <p className="text-sm text-muted-foreground">Certificação reconhecida</p>
          </div>

          <div className="card-feature text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Oportunidades</h3>
            <p className="text-sm text-muted-foreground">Mais portas abertas</p>
          </div>
        </div>

        
        <div className={`flex justify-center gap-6 transition-all duration-500 ${isExiting ? 'opacity-0 transform scale-95' : 'opacity-100'}`}>
          <button 
            onClick={handleBack}
            className="btn-secondary group flex items-center"
          >
            <ChevronLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            VOLTAR
          </button>
          
          <button 
            onClick={handleNext}
            className="btn-hero group flex items-center"
          >
            FINALIZAR
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalarioEstimado;