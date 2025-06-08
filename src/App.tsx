
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Welcome from "./pages/Welcome";
import AuthPage from "./pages/AuthPage";
import OnboardingFlow from "./pages/OnboardingFlow";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
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
            <Route 
              path="/auth" 
              element={
                <AuthPage 
                  setUserType={setUserType} 
                  setIsAuthenticated={setIsAuthenticated}
                />
              } 
            />
            <Route 
              path="/onboarding" 
              element={
                <OnboardingFlow 
                  userType={userType}
                  setHasCompletedOnboarding={setHasCompletedOnboarding}
                />
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                userType === 'freelancer' ? 
                <FreelancerDashboard /> : 
                <CompanyDashboard />
              } 
            />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/profile" element={<Profile userType={userType} />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
