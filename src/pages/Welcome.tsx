
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Users, MapPin, Clock, TrendingUp, Sparkles, Star, Bot, Rocket, Globe, Shield } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Minimal Header */}
        <header className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/e172e5ba-c278-4674-bb50-c1cccacbb507.png" 
                alt="Supera Flash Logo" 
                className="h-12 w-auto logo-animate"
              />
              <div className="text-white/60 text-sm">by Supera Holdings</div>
            </div>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/auth')}
              className="text-white/80 hover:text-white hover:bg-white/10 border border-white/20"
            >
              Já tenho conta
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full px-6 py-3 border border-primary/30 backdrop-blur-sm">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-white">
                    Powered by Sury IA
                  </span>
                </div>
                
                {/* Main Title */}
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
                    Recrutamento
                    <span className="block bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent">
                      Inteligente
                    </span>
                    <span className="text-3xl md:text-4xl font-normal text-white/80 block mt-4">
                      com IA e Geolocalização
                    </span>
                  </h1>
                  
                  <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                    Sury, nossa IA, conecta o talento certo à oportunidade perfeita, 
                    otimizando tempo e maximizando resultados.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-lg px-10 py-7 shadow-2xl hover:shadow-primary/25 transition-all duration-300 font-bold rounded-xl group"
                    onClick={() => navigate('/auth')}
                  >
                    Começar com Sury
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="text-lg px-10 py-7 border-2 border-white/20 text-white hover:bg-white/10 font-semibold rounded-xl backdrop-blur-sm"
                  >
                    Ver Demo
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
                  <div className="text-center group">
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                      10k+
                    </div>
                    <div className="text-sm text-white/60 font-medium">Promotores</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                      500+
                    </div>
                    <div className="text-sm text-white/60 font-medium">Empresas</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl md:text-4xl font-black text-green-400 group-hover:scale-110 transition-transform">
                      95%
                    </div>
                    <div className="text-sm text-white/60 font-medium">Sucesso</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl md:text-4xl font-black text-orange-400 group-hover:scale-110 transition-transform">
                      2h
                    </div>
                    <div className="text-sm text-white/60 font-medium">Match</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Sury Character */}
              <div className="relative">
                <div className="relative mx-auto w-fit">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse"></div>
                  
                  {/* Sury Character */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                    <img 
                      src="/lovable-uploads/ef1cf83e-4eef-4a0f-b180-9486a1301442.png" 
                      alt="Sury - Assistente IA" 
                      className="w-80 h-auto animate-bounce-in"
                    />
                  </div>
                  
                  {/* Floating Info Cards */}
                  <div className="absolute -top-4 -left-4 bg-primary/90 text-white px-4 py-2 rounded-xl text-sm font-semibold animate-float">
                    IA Inteligente
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-secondary/90 text-white px-4 py-2 rounded-xl text-sm font-semibold animate-float" style={{ animationDelay: '2s' }}>
                    Geolocalização
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-32">
              {/* Feature 1 */}
              <Card className="bg-black/30 border-white/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 group">
                <CardHeader className="text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-4">Sury IA</CardTitle>
                  <CardDescription className="text-white/70 text-base leading-relaxed">
                    Nossa assistente virtual analisa perfis e conecta automaticamente os melhores matches
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 2 */}
              <Card className="bg-black/30 border-white/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 group">
                <CardHeader className="text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-4">Geolocalização</CardTitle>
                  <CardDescription className="text-white/70 text-base leading-relaxed">
                    Vagas próximas com precisão, otimizando tempo e custos de deslocamento
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 3 */}
              <Card className="bg-black/30 border-white/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 group">
                <CardHeader className="text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-4">SuperaBank</CardTitle>
                  <CardDescription className="text-white/70 text-base leading-relaxed">
                    Pagamentos instantâneos e seguros direto na plataforma
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* How it Works */}
            <div className="mt-32 text-center">
              <div className="flex items-center justify-center space-x-4 mb-12">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-pulse">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-black text-white">
                  Como Funciona
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12 mt-16">
                {[
                  { step: "1", title: "Cadastro com Sury", desc: "Nossa IA conduz uma entrevista personalizada para criar seu perfil perfeito" },
                  { step: "2", title: "Matches Inteligentes", desc: "Algoritmo encontra as melhores oportunidades baseadas no seu perfil" },
                  { step: "3", title: "Trabalhe & Receba", desc: "Aceite vagas e receba pagamentos instantâneos pelo SuperaBank" }
                ].map((item, index) => (
                  <div key={index} className="space-y-6 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto text-white font-black text-2xl group-hover:scale-110 transition-transform shadow-2xl">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/70 text-lg leading-relaxed max-w-sm mx-auto">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 border-t border-white/10">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-5 w-5 text-primary" />
              <p className="text-white/60 font-medium">
                &copy; 2024 Supera Flash by Supera Holdings. Recrutamento inteligente com IA.
              </p>
              <Star className="h-5 w-5 text-secondary" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Welcome;
