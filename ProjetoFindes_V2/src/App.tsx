import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profissao from "./pages/Profissao";
import Salario from "./pages/Salario";
import Cursos from "./pages/Cursos";
import SalarioEstimado from "./pages/SalarioEstimado";
import Fim from "./pages/Fim";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profissao" element={<Profissao />} />
          <Route path="/salario" element={<Salario />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/salarioEstimado" element={<SalarioEstimado />} />
          <Route path="/fim" element={<Fim />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
