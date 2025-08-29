import { useNavigate } from "react-router-dom";
import { Home, Twitter, Youtube, Send, Instagram, Sparkles, Rocket } from "lucide-react";

const Fim = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate("/");
	};

	return (
		<div className="page-container bg-dots">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
			<div className="absolute top-16 left-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
			<div className="absolute top-20 right-20 w-24 h-24 bg-secondary/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
			<div className="absolute bottom-20 left-20 w-28 h-28 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

			<div className="page-content">
				{/* Header */}
				<header className="w-full max-w-6xl mx-auto mb-16 animate-slide-up">
					<div className="flex items-center justify-between mb-8">
						<div className="flex items-center space-x-4">
							<div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-sm animate-pulse-glow" />
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
				<main className="text-center space-y-12">
					{/* Success Message */}
					<div className="section-header animate-scale-in">
						<div className="flex items-center justify-center mb-6">
							<Sparkles className="w-16 h-16 text-primary mr-4 animate-pulse-glow" />
							<Rocket className="w-12 h-12 text-accent animate-float" />
						</div>
            
						<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
							<span className="text-gradient-hero">Seu futuro</span>
							<br />
							<span className="text-gradient-primary">te espera</span>
							<br />
							<span className="text-gradient-secondary">no SENAI</span>
						</h1>
            
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Parabéns! Você completou sua jornada de descoberta. 
							Agora é hora de transformar seu potencial em realidade.
						</p>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
						<button
							onClick={handleBack}
							className="btn-hero group flex items-center"
						>
							<Home className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" />
							Recomeçar
						</button>
            
						<a 
							href="https://senai.br" 
							target="_blank" 
							rel="noopener noreferrer"
							className="btn-secondary group flex items-center"
						>
							<Rocket className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-1" />
							Inscrever-se no SENAI
						</a>
					</div>

					{/* Success Stats */}
					<div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
						<div className="card-feature text-center">
							<div className="text-3xl font-bold text-gradient-primary mb-2">95%</div>
							<p className="text-muted-foreground">Taxa de empregabilidade</p>
						</div>
            
						<div className="card-feature text-center">
							<div className="text-3xl font-bold text-gradient-secondary mb-2">40%</div>
							<p className="text-muted-foreground">Aumento médio salarial</p>
						</div>
            
						<div className="card-feature text-center">
							<div className="text-3xl font-bold text-gradient-accent mb-2">2M+</div>
							<p className="text-muted-foreground">Profissionais formados</p>
						</div>
					</div>

					{/* Social Links */}
					<div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
						<h3 className="text-lg font-semibold mb-6 text-gradient-secondary">Siga o SENAI nas redes sociais</h3>
						<div className="flex justify-center space-x-4">
							{[
								{ icon: Twitter, href: "#", label: "Twitter" },
								{ icon: Youtube, href: "#", label: "YouTube" },
								{ icon: Send, href: "#", label: "Telegram" },
								{ icon: Instagram, href: "#", label: "Instagram" }
							].map(({ icon: Icon, href, label }, index) => (
								<a
									key={label}
									href={href}
									className="w-12 h-12 bg-gradient-to-r from-muted to-muted/80 rounded-full flex items-center justify-center
													 hover:from-primary hover:to-primary-glow hover:text-primary-foreground
													 transform hover:scale-110 transition-all duration-300 group"
									style={{ animationDelay: `${0.9 + index * 0.1}s` }}
								>
									<Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
								</a>
							))}
						</div>
					</div>

					{/* Call to Action */}
					<div className="card-elevated max-w-2xl mx-auto p-8 animate-scale-in" style={{ animationDelay: '1s' }}>
						<h3 className="text-2xl font-bold mb-4 text-gradient-hero">Pronto para começar?</h3>
						<p className="text-muted-foreground mb-6">
							Entre em contato conosco e inicie sua transformação profissional hoje mesmo.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a 
								href="tel:0800-555-0199" 
								className="btn-secondary"
							>
								📞 0800 555 0199
							</a>
							<a 
								href="mailto:info@senai.br" 
								className="btn-secondary"
							>
								✉️ info@senai.br
							</a>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Fim;
