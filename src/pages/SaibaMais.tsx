import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Brain, MapPin, Zap, Users, TrendingUp, Shield } from "lucide-react";

const SaibaMais = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 relative overflow-hidden">
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            className="text-white border-white/30 bg-white/10"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ead26371-00b8-4736-a344-5df3ac04a8bd.png" 
              alt="GM Promo Logo" 
              className="h-8 w-auto"
            />
            <span className="text-white text-sm opacity-70">GM PROMO</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Sobre o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">GM Promo</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Revolucionando o recrutamento no trade marketing com inteligência artificial e tecnologia de ponta
            </p>
          </div>

          {/* Mission Section */}
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 mb-12">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Nossa Missão</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Conectar empresas aos melhores promotores de trade marketing através de inteligência artificial, 
                  proporcionando matches precisos, processos otimizados e resultados excepcionais. 
                  Nosso objetivo é transformar a forma como o recrutamento acontece no setor, 
                  tornando-o mais eficiente, justo e transparente.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-cyan-500/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Inteligência Artificial</h3>
                <p className="text-white/70 text-sm">
                  Sury, nossa IA, realiza entrevistas personalizadas e cria matches precisos baseados em competências e perfil comportamental.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Geolocalização</h3>
                <p className="text-white/70 text-sm">
                  Sistema avançado de localização que conecta promotores às oportunidades mais próximas, otimizando logística e custos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Processos Ágeis</h3>
                <p className="text-white/70 text-sm">
                  Automatização completa do processo de recrutamento, desde a triagem até a contratação, reduzindo tempo em até 80%.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-yellow-500/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Base Qualificada</h3>
                <p className="text-white/70 text-sm">
                  Mais de 10.000 promotores cadastrados e qualificados, prontos para atender demandas em todo o território nacional.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Resultados Comprovados</h3>
                <p className="text-white/70 text-sm">
                  95% de taxa de sucesso nos matches, com promotores que superam expectativas e geram resultados excepcionais.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-500/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Segurança Total</h3>
                <p className="text-white/70 text-sm">
                  Verificação completa de documentos, antecedentes e qualificações, garantindo a qualidade dos profissionais.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Pronto para Começar?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Junte-se a centenas de empresas que já descobriram o futuro do recrutamento
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                className="bg-cyan-500 text-white px-8 py-3 text-lg"
                onClick={() => navigate('/company-auth')}
              >
                Sou Empresa
              </Button>
              <Button 
                className="bg-purple-500 text-white px-8 py-3 text-lg"
                onClick={() => navigate('/candidate-auth')}
              >
                Sou Promotor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaibaMais;