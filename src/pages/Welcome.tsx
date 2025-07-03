
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: string) => {
    navigate('/auth', { state: { selectedRole: role } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 relative overflow-hidden">
      {/* Background dots/decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 left-40 w-1 h-1 bg-purple-300 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-32 w-1 h-1 bg-purple-300 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-8 py-8 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/ead26371-00b8-4736-a344-5df3ac04a8bd.png" 
              alt="GM Promo Logo" 
              className="h-24 w-auto"
            />
            <span className="text-white/80 text-sm">by GM Promo</span>
          </div>
          <Button 
            className="bg-purple-600/80 hover:bg-purple-700 text-white px-6 py-2 rounded-full border border-purple-400/30"
          >
            Já tenho conta
          </Button>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Recrutamento{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-primary bg-clip-text">
              Inteligente
            </span>
          </h1>
          
          <h2 className="text-2xl text-white/90 mb-8 font-light">
            com IA e Geolocalização
          </h2>
          
          <p className="text-white/70 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            Sury, nossa IA, conecta o talento certo à oportunidade perfeita, otimizando tempo e maximizando resultados.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Candidato Card */}
          <Card 
            className="bg-gradient-to-br from-purple-600/20 to-purple-800/30 backdrop-blur-sm border border-purple-400/30 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleRoleSelection('freelancer')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Candidato</h3>
              <p className="text-white/70 text-sm">
                Encontre oportunidades perfeitas para seu perfil
              </p>
            </CardContent>
          </Card>

          {/* Empresa Card */}
          <Card 
            className="bg-gradient-to-br from-purple-600/20 to-purple-800/30 backdrop-blur-sm border border-purple-400/30 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleRoleSelection('company')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Empresa</h3>
              <p className="text-white/70 text-sm">
                Encontre os melhores talentos para sua equipe
              </p>
            </CardContent>
          </Card>

          {/* Recrutador Card */}
          <Card 
            className="bg-gradient-to-br from-purple-600/20 to-purple-800/30 backdrop-blur-sm border border-purple-400/30 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => navigate('/recruiter')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Recrutador</h3>
              <p className="text-white/70 text-sm">
                Gerencie processos seletivos com eficiência
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/auth')}
            className="bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90 text-white px-8 py-3 rounded-full text-lg font-medium mr-4"
          >
            Começar com Sury →
          </Button>
          <Button 
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg"
          >
            Saiba mais
          </Button>
        </div>

        {/* Powered by Sury IA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-800/40 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2">
            <div className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
            <span className="text-white font-medium">Powered by Sury IA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
