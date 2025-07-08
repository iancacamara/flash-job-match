
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Welcome from "./pages/Welcome";
import CandidateAuth from "./pages/CandidateAuth";
import CompanyAuth from "./pages/CompanyAuth";
import RecruiterAuth from "./pages/RecruiterAuth";
import OnboardingFlow from "./pages/OnboardingFlow";
import CandidateDashboard from "./pages/CandidateDashboard";
import CompanyDashboardNew from "./pages/CompanyDashboardNew";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import UserTypeSelection from "./pages/UserTypeSelection";
import SaibaMais from "./pages/SaibaMais";
import Industria from "./pages/Industria";
import IndustriaAuth from "./pages/IndustriaAuth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export type UserType = 'freelancer' | 'company' | null;

const App = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/candidate-auth" element={<CandidateAuth />} />
            <Route path="/company-auth" element={<CompanyAuth />} />
            <Route path="/recruiter-auth" element={<RecruiterAuth />} />
            <Route path="/user-type-selection" element={<UserTypeSelection />} />
            <Route 
              path="/onboarding" 
              element={
                <OnboardingFlow 
                  setHasCompletedOnboarding={setHasCompletedOnboarding}
                />
              } 
            />
            <Route path="/dashboard" element={<CandidateDashboard />} />
            <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
            <Route path="/company-dashboard" element={<CompanyDashboardNew />} />
            <Route path="/recruiter" element={<RecruiterDashboard />} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/profile" element={<Profile userType={userType} />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/saiba-mais" element={<SaibaMais />} />
            <Route path="/industria-auth" element={<IndustriaAuth />} />
            <Route path="/industria" element={<Industria />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
