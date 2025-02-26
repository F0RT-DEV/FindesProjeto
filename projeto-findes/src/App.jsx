
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Profissao from './Pages/Profissao';
import Salario from './Pages/Salario';
import Cursos from './Pages/Cursos';
import SalarioEstimado from './Pages/SalarioEstimado';
import Fim from './Pages/Fim';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profissao" element={<Profissao />} />
        <Route path="/salario" element={<Salario />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/salarioEstimado" element={<SalarioEstimado />} />
        <Route path="/fim" element={<Fim />} />
      </Routes>
    </Router>
  );
}

export default App;
