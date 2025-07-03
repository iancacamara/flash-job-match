
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Users, Building2, Briefcase, UserCheck } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <img 
            src="/lovable-uploads/2a686b03-80b6-475a-b721-cd6d7344535a.png" 
            alt="Supera Flash Logo" 
            className="h-24 w-auto mx-auto mb-6 logo-animate"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Bem-vindo ao Supera Flash
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A plataforma completa para conectar empresas e profissionais de promoção de vendas
          </p>
        </div>

        {/* Cards de Acesso */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {/* Candidato/Freelancer */}
          <Card className="bg-black/30 backdrop-blur-sm border-white/30 hover:bg-black/40 transition-all cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-white text-xl">Candidato</CardTitle>
              <CardDescription className="text-white/70">
                Acesse como freelancer ou se inscreva em vagas fixas
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                onClick={() => navigate('/auth')}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Acessar
              </Button>
            </CardContent>
          </Card>

          {/* Empresa */}
          <Card className="bg-black/30 backdrop-blur-sm border-white/30 hover:bg-black/40 transition-all cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-white text-xl">Empresa</CardTitle>
              <CardDescription className="text-white/70">
                Cadastre sua empresa e solicite nossos serviços
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                onClick={() => navigate('/auth')}
                className="w-full bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90"
              >
                Acessar
              </Button>
            </CardContent>
          </Card>

          {/* Recrutador */}
          <Card className="bg-black/30 backdrop-blur-sm border-white/30 hover:bg-black/40 transition-all cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle className="text-white text-xl">Recrutador</CardTitle>
              <CardDescription className="text-white/70">
                Acesso para gestão do sistema e candidatos
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                onClick={() => navigate('/recruiter')}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                Acessar RH
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Informações da Plataforma */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Profissionais Qualificados</h3>
            <p className="text-white/70">
              Conecte-se com promotores experientes e qualificados para suas necessidades
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Empresas Confiáveis</h3>
            <p className="text-white/70">
              Trabalhe com empresas estabelecidas e oportunidades reais de crescimento
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Briefcase className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Gestão Completa</h3>
            <p className="text-white/70">
              Sistema completo de RH para gerenciar candidatos, vagas e processos seletivos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
