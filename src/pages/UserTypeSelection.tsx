import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Bot, User, Building2, Target, ArrowRight } from "lucide-react";

const UserTypeSelection = () => {
  const navigate = useNavigate();

  const handleUserTypeSelection = (userType: string) => {
    // Navegar para o onboarding com o tipo de usuário
    navigate('/onboarding', { state: { userType } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/e172e5ba-c278-4674-bb50-c1cccacbb507.png" 
              alt="GM Promo Logo" 
              className="h-16 w-auto mx-auto mb-4"
            />
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mr-4 animate-pulse">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white">Começar com Sury</h1>
            </div>
            <p className="text-white/70 text-lg mb-8">
              Nossa IA vai te ajudar a criar o perfil perfeito. Primeiro, nos conte quem você é:
            </p>
          </div>

          {/* User Type Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Candidato/Freelancer */}
            <Card 
              className="bg-white/5 backdrop-blur-xl border-white/20 cursor-pointer group"
              onClick={() => handleUserTypeSelection('freelancer')}
            >
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">Sou Promotor</CardTitle>
                <CardDescription className="text-white/70">
                  Quero encontrar oportunidades de trabalho em trade marketing
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-white/60 text-sm">
                    ✓ Vagas por demanda e fixas
                  </div>
                  <div className="flex items-center justify-center text-white/60 text-sm">
                    ✓ Matches personalizados
                  </div>
                  <div className="flex items-center justify-center text-white/60 text-sm">
                    ✓ Pagamentos rápidos
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  Continuar como Promotor
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Empresa */}
            <Card 
              className="bg-white/5 backdrop-blur-xl border-white/20 cursor-pointer group"
              onClick={() => handleUserTypeSelection('company')}
            >
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">Sou Empresa</CardTitle>
                <CardDescription className="text-white/70">
                  Preciso contratar promotores qualificados para campanhas
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-white/60 text-sm">
                    ✓ Base qualificada de promotores
                  </div>
                  <div className="flex items-center justify-center text-white/60 text-sm">
                    ✓ Processo otimizado
                  </div>
                  <div className="flex items-center justify-center text-white/60 text-sm">
                    ✓ Gestão completa
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Continuar como Empresa
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-white/60"
            >
              ← Voltar ao início
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;