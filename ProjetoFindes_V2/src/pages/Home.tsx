import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Users, TrendingUp, Award } from "lucide-react";

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate("/profissao");
    }, 900);
  };

  return (
    <div className="page-container bg-grid">
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="page-content">
        
        <header className="w-full max-w-6xl mx-auto mb-16 animate-slide-up">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-sm" />
              <span className="text-xl font-semibold text-gradient-primary">PROFISSÃO</span>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-gradient-secondary">SENAI</h2>
              <p className="text-lg text-muted-foreground">NO SEU FUTURO</p>
            </div>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </header>

        
        <main className={`text-center space-y-12 transition-all duration-1000 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          
          <div className="section-header animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              O QUE{" "}
              <span className="text-gradient-hero block md:inline">EU</span>{" "}
              GANHO
              <br />
              <span className="text-gradient-accent text-3xl md:text-5xl">Com isso?</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Descubra como os cursos do SENAI podem transformar sua carreira e aumentar sua renda
            </p>
          </div>

          
          <div className="animate-scale-in flex justify-center" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={handleExploreClick}
              className="btn-hero group relative text-2xl px-12 py-6 flex items-center justify-center gap-3"
            >
              <span>DESCUBRA</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </button>
          </div>

          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="card-feature group">
              <Users className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">Orientação Personalizada</h3>
              <p className="text-muted-foreground text-sm">Receba recomendações baseadas no seu perfil profissional</p>
            </div>
            
            <div className="card-feature group">
              <TrendingUp className="w-8 h-8 text-secondary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">Aumento de Renda</h3>
              <p className="text-muted-foreground text-sm">Veja quanto você pode ganhar após os cursos</p>
            </div>
            
            <div className="card-feature group">
              <Award className="w-8 h-8 text-accent mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">Certificação SENAI</h3>
              <p className="text-muted-foreground text-sm">Qualificação reconhecida pelo mercado</p>
            </div>
          </div>
        </main>

        
        <div className="w-full max-w-6xl mx-auto mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Home;