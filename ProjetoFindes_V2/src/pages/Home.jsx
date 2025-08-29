import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Users, TrendingUp, Award } from "lucide-react";

const Index = () => {
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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="page-content">
        {/* Header */}
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

        {/* Main Content */}
        <main className={`text-center space-y-12 transition-all duration-1000 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {/* Hero Section */}
          <div className="section-header animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              O QUE{" "}
              <span className="text-gradient-hero block md:inline">EU</span>{" "}
              GANHO
              <br />
              <span className="text-gradient-accent text-3xl md:text-5xl">Com isso?</span>
            </h1>
            {/* ...continua... */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
