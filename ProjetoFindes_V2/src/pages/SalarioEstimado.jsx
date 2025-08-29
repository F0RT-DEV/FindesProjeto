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
      {/* Background Effects */}
      {/* ...continua... */}
    </div>
  );
};

export default SalarioEstimado;
