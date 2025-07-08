
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: string) => {
    navigate('/auth', { state: { selectedRole: role } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Moving geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-cyan-400/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border border-purple-400/40 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/2 left-1/6 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <div className="relative z-10">
        <div className="flex justify-between items-center p-6">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ead26371-00b8-4736-a344-5df3ac04a8bd.png" 
              alt="GM Promo Logo" 
              className="h-8 w-auto"
            />
            <span className="text-white text-sm opacity-70">GM PROMO</span>
          </div>
          <Button 
            variant="outline" 
            className="text-white border-white/30 bg-white/10"
            onClick={() => navigate('/candidate-auth')}
          >
            Já tenho conta
          </Button>
        </div>

        {/* Powered by Sury IA badge */}
        <div className="flex justify-center mt-8">
          <div className="bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 flex items-center space-x-2 animate-pulse">
            <div className="w-4 h-4 bg-cyan-400 rounded-sm animate-spin" style={{animationDuration: '3s'}}></div>
            <span className="text-cyan-300 text-sm font-medium">Powered by Sury IA</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Left Side - Main Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
              Recrutamento <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Inteligente
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>com IA e Geolocalização</p>
            <p className="text-white/70 mb-8 text-lg leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
              Sury, nossa IA, conecta o talento certo à oportunidade<br />
              perfeita, otimizando tempo e maximizando<br />
              resultados.
            </p>

            <div className="flex space-x-4 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button 
                className="bg-cyan-500 text-white px-8 py-3 rounded-lg text-lg font-medium"
                onClick={() => navigate('/user-type-selection')}
              >
                Começar com Sury →
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white bg-white/10 px-8 py-3 rounded-lg text-lg"
                onClick={() => navigate('/saiba-mais')}
              >
                Saiba mais
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white bg-white/10 px-8 py-3 rounded-lg text-lg"
                onClick={() => navigate('/industria')}
              >
                Indústria
              </Button>
            </div>

            {/* Role Selection Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <Card 
                className="bg-blue-500/20 border border-blue-400/30 cursor-pointer"
                onClick={() => navigate('/candidate-auth')}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">👤</div>
                  <h3 className="text-white font-semibold">Candidato</h3>
                </CardContent>
              </Card>

              <Card 
                className="bg-green-500/20 border border-green-400/30 cursor-pointer"
                onClick={() => navigate('/company-auth')}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🏢</div>
                  <h3 className="text-white font-semibold">Empresa</h3>
                </CardContent>
              </Card>

              <Card 
                className="bg-purple-500/20 border border-purple-400/30 cursor-pointer"
                onClick={() => navigate('/recruiter-auth')}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="text-white font-semibold">Recrutador</h3>
                </CardContent>
              </Card>

              <Card 
                className="bg-orange-500/20 border border-orange-400/30 cursor-pointer"
                onClick={() => navigate('/industria')}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🏭</div>
                  <h3 className="text-white font-semibold">Indústria</h3>
                </CardContent>
              </Card>
            </div>

            {/* Statistics */}
            <div className="flex space-x-8 animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">10k+</div>
                <div className="text-white/60 text-sm">Promotores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">500+</div>
                <div className="text-white/60 text-sm">Empresas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">95%</div>
                <div className="text-white/60 text-sm">Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">2h</div>
                <div className="text-white/60 text-sm">Match</div>
              </div>
            </div>
          </div>

          {/* Right Side - IA Card with Character */}
          <div className="flex-shrink-0 ml-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                IA Inteligente
              </div>
              <Card className="bg-gradient-to-br from-purple-500/30 to-purple-600/40 border border-purple-400/40 backdrop-blur-sm">
                <CardContent className="p-8 text-center relative">
                  <div className="mb-4">
                    <img 
                      src="/lovable-uploads/5e910b77-a729-4141-8411-facd35904177.png" 
                      alt="Supera Flash Character" 
                      className="w-32 h-auto mx-auto mb-4 animate-float"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      Geolocalização
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Como Funciona Section */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mr-4 animate-spin" style={{animationDuration: '4s'}}>
              <div className="text-white text-xl">🚀</div>
            </div>
            <h2 className="text-4xl font-bold text-white">Como Funciona</h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 - Cadastro com Sury */}
          <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
            </div>
            <h3 className="text-white font-bold text-xl mb-4">Cadastro com Sury</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Nossa IA conduz uma entrevista personalizada para criar seu perfil perfeito
            </p>
          </div>

          {/* Step 2 - Matches Inteligentes */}
          <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
            </div>
            <h3 className="text-white font-bold text-xl mb-4">Matches Inteligentes</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Algoritmo encontra as melhores oportunidades baseadas no seu perfil
            </p>
          </div>

          {/* Step 3 - Trabalhe & Receba */}
          <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
            </div>
            <h3 className="text-white font-bold text-xl mb-4">Trabalhe & Receba</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Aceite vagas e receba pagamentos instantâneos pelo SuperaBank
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
