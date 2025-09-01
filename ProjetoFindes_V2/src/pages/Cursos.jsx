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
      const [isAnimating, setIsAnimating] = useState(false);
      const [animationKey, setAnimationKey] = useState(0);
      const [animationDirection, setAnimationDirection] = useState("");
      const [isExiting, setIsExiting] = useState(false);
      const [currentPage, setCurrentPage] = useState(0);
      const navigate = useNavigate();

      const changePage = (page) => {
        if (page >= 0 && page < cursosOption.length) {
          const horizontalAnimation = page > currentPage ? "animate-slide-in-right" : "animate-slide-in-left";

          setAnimationDirection(horizontalAnimation);
          setIsAnimating(true);

          setTimeout(() => {
            setCurrentPage(page);
            setAnimationKey(prevKey => prevKey + 1);
          }, 100);
        }
      };

      const selectOption = (option) => {
        setIsExiting(true);

        setTimeout(() => {
          localStorage.setItem('selectedCourse', option);
          localStorage.setItem('salaryRange', salaryRanges[option]);
          navigate('/salarioEstimado');
        }, 400);
      };

      return (
        <div className="page-container bg-dots">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-12 right-12 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-20 left-12 w-32 h-32 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.8s' }} />

          <div className="page-content">
            {/* Header */}
            <div className={`section-header transition-all duration-500 ${isExiting ? 'opacity-0 transform -translate-y-8' : 'opacity-100'}`}>
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="w-12 h-12 text-accent mr-4 animate-pulse-glow" />
                <h1 
                  key={animationKey}
                  className="text-4xl md:text-6xl font-bold animate-slide-up"
                >
                  Quais{" "}
                  <span className="text-gradient-accent">
                    Cursos<br />Você Gostaria?
                  </span>
                </h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                MARQUE A OPÇÃO QUE MELHOR SE<br />
                ENCAIXA AOS <span className="text-gradient-primary font-semibold">CURSOS QUE VOCÊ<br />GOSTARIA DE FAZER NO SENAI</span>
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center w-full max-w-5xl mx-auto mb-8">
              {currentPage > 0 ? (
                <button 
                  onClick={() => changePage(currentPage - 1)}
                  className="btn-nav group"
                >
                  <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
                </button>
              ) : (
                <div className="w-12" />
              )}

              {currentPage < cursosOption.length - 1 ? (
                <button 
                  onClick={() => changePage(currentPage + 1)}
                  className="btn-nav group"
                >
                  <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </button>
              ) : (
                <div className="w-12" />
              )}
            </div>

            {/* Course Options */}
            <div 
              key={animationKey} 
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8 ${animationDirection} ${isExiting ? 'opacity-0 transform scale-95' : 'opacity-100'} transition-all duration-500`}
            >
              {cursosOption[currentPage].map((curso, index) => (
                <button
                  key={index}
                  className="btn-option group relative overflow-hidden text-left animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => selectOption(curso)}
                >
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg mb-2">{curso}</h3>
                    <p className="text-sm text-muted-foreground">
                      Salário: {salaryRanges[curso]}
                    </p>
                  </div>
              
                  {/* Course Icon */}
                  <BookOpen className="absolute top-4 right-4 w-6 h-6 text-accent opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
              
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-secondary/10 transition-all duration-500" />
              
                  {/* Bottom Border Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-border">
                    <div className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-700 group-hover:w-full w-0" />
                  </div>
                </button>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex space-x-2 justify-center mb-8">
              {cursosOption.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index 
                      ? 'bg-gradient-to-r from-primary to-accent scale-125' 
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                  onClick={() => changePage(index)}
                />
              ))}
            </div>

            {/* Info Card */}
            <div className="card-elevated max-w-md mx-auto p-6 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
              <h3 className="text-lg font-semibold mb-2 text-gradient-accent">🎯 Escolha Inteligente</h3>
              <p className="text-muted-foreground text-sm">
                Cada curso é cuidadosamente planejado para maximizar suas oportunidades profissionais
              </p>
            </div>
          </div>
        </div>
      );
    };

    export default Cursos;
