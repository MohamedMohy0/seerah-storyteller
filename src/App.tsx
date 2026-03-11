import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import QRFooter from "./components/QRFooter";
import Index from "./pages/Index.tsx";
import PurposePage from "./pages/PurposePage.tsx";
import TopicsPage from "./pages/TopicsPage.tsx";
import TopicPage from "./pages/TopicPage.tsx";
import QuizPage from "./pages/QuizPage.tsx";
import SourcesPage from "./pages/SourcesPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <div className="pt-14 pb-14">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/purpose" element={<PurposePage />} />
            <Route path="/topics" element={<TopicsPage />} />
            <Route path="/topic/:slug" element={<TopicPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/sources" element={<SourcesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <QRFooter />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
