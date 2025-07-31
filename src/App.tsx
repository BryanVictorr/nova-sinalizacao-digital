import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import Localizacao from "./pages/Localizacao";
import NotFound from "./pages/NotFound";
import Rodovias from "./pages/projetos/Rodovias";
import Urbano from "./pages/projetos/Urbano";
import Aeroporto from "./pages/projetos/Aeroporto";
import Municipal from "./pages/projetos/Municipal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/localizacao" element={<Localizacao />} />
          <Route path="/projetos/rodovias" element={<Rodovias />} />
          <Route path="/projetos/urbano" element={<Urbano />} />
          <Route path="/projetos/aeroporto" element={<Aeroporto />} />
          <Route path="/projetos/municipal" element={<Municipal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;