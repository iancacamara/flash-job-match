
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
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-30"></div>
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
            <span className="text-white text-sm opacity-70">by Supera Holdings</span>
          </div>
          <Button variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20">
            Já tenho conta
          </Button>
        </div>

        {/* Powered by Sury IA badge */}
        <div className="flex justify-center mt-8">
          <div className="bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 flex items-center space-x-2">
            <div className="w-4 h-4 bg-cyan-400 rounded-sm"></div>
            <span className="text-cyan-300 text-sm font-medium">Powered by Sury IA</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Left Side - Main Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">
              Recrutamento <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Inteligente
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-6">com IA e Geolocalização</p>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              Sury, nossa IA, conecta o talento certo à oportunidade<br />
              perfeita, otimizando tempo e maximizando<br />
              resultados.
            </p>

            <div className="flex space-x-4 mb-12">
              <Button 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-medium"
                onClick={() => navigate('/auth')}
              >
                Começar com Sury →
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg text-lg"
              >
                Saiba mais
              </Button>
            </div>

            {/* Role Selection Cards */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <Card 
                className="bg-blue-500/20 border border-blue-400/30 cursor-pointer hover:bg-blue-500/30 transition-all"
                onClick={() => handleRoleSelection('freelancer')}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">👤</div>
                  <h3 className="text-white font-semibold">Candidato</h3>
                </CardContent>
              </Card>

              <Card 
                className="bg-green-500/20 border border-green-400/30 cursor-pointer hover:bg-green-500/30 transition-all"
                onClick={() => handleRoleSelection('company')}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🏢</div>
                  <h3 className="text-white font-semibold">Empresa</h3>
                </CardContent>
              </Card>

              <Card 
                className="bg-purple-500/20 border border-purple-400/30 cursor-pointer hover:bg-purple-500/30 transition-all"
                onClick={() => navigate('/recruiter')}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="text-white font-semibold">Recrutador</h3>
                </CardContent>
              </Card>
            </div>

            {/* Statistics */}
            <div className="flex space-x-8">
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

          {/* Right Side - IA Card */}
          <div className="flex-shrink-0 ml-12">
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                IA Inteligente
              </div>
              <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/30 border border-purple-400/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="mb-4">
                    <div className="text-4xl mb-4">👨‍💼</div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      SUPERA<br />FLASH
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">
                      Geolocalização
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Sury IA Card */}
          <Card className="bg-purple-600/30 border border-purple-500/40 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-cyan-500 rounded-2xl mx-auto flex items-center justify-center mb-4">
                  <div className="text-white text-2xl">🤖</div>
                </div>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Sury IA</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Nossa assistente virtual analisa perfis e conecta automaticamente os melhores matches
              </p>
            </CardContent>
          </Card>

          {/* Geolocalização Card */}
          <Card className="bg-purple-600/30 border border-purple-500/40 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl mx-auto flex items-center justify-center mb-4">
                  <div className="text-white text-2xl">📍</div>
                </div>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Geolocalização</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Vagas próximas com precisão, otimizando tempo e custos de deslocamento
              </p>
            </CardContent>
          </Card>

          {/* SuperaBank Card */}
          <Card className="bg-purple-600/30 border border-purple-500/40 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl mx-auto flex items-center justify-center mb-4">
                  <div className="text-white text-2xl">🛡️</div>
                </div>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">SuperaBank</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Pagamentos instantâneos e seguros direto na plataforma
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Como Funciona Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mr-4">
              <div className="text-white text-xl">🚀</div>
            </div>
            <h2 className="text-4xl font-bold text-white">Como Funciona</h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 - Cadastro com Sury */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
            </div>
            <h3 className="text-white font-bold text-xl mb-4">Cadastro com Sury</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Nossa IA conduz uma entrevista personalizada para criar seu perfil perfeito
            </p>
          </div>

          {/* Step 2 - Matches Inteligentes */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
            </div>
            <h3 className="text-white font-bold text-xl mb-4">Matches Inteligentes</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Algoritmo encontra as melhores oportunidades baseadas no seu perfil
            </p>
          </div>

          {/* Step 3 - Trabalhe & Receba */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto flex items-center justify-center mb-4">
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
