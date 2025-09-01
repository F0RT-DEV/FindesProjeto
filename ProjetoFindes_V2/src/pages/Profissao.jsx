
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
				<div className={`section-header transition-all duration-500 ${isExiting ? 'opacity-0 transform -translate-y-8' : 'opacity-100'}`}>
					<h1 
						key={animationKey}
						className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up"
					>
						Qual{" "}
						<span className="text-gradient-primary">
							Sua<br />Profissão?
						</span>
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						MARQUE A OPÇÃO QUE MELHOR SE<br />
						ENCAIXA AO SEU <span className="text-gradient-secondary font-semibold">ATUAL EMPREGO</span>
					</p>
				</div>

				{/* Navigation Buttons */}
				<div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-8">
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

					{currentPage < jobOptions.length - 1 ? (
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

				{/* Job Options */}
				<div 
					key={animationKey} 
					className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8 ${animationDirection} ${isExiting ? 'opacity-0 transform scale-95' : 'opacity-100'} transition-all duration-500`}
				>
					{jobOptions[currentPage].map((job, index) => (
						<button
							key={index}
							className={`btn-option text-left transition-all duration-300`}
							style={{ animationDelay: `${index * 0.1}s` }}
							onClick={() => handleJobClick(job)}
						>
							<span className="relative z-10">{job}</span>
							<div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-accent/10 rounded-xl transition-all duration-300" />
						</button>
					))}
				</div>

				{/* Pagination */}
				<div className="flex space-x-2 justify-center">
					{jobOptions.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								currentPage === index 
									? 'bg-gradient-to-r from-primary to-secondary scale-125' 
									: 'bg-muted hover:bg-muted-foreground'
							}`}
							onClick={() => changePage(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Profissao;

