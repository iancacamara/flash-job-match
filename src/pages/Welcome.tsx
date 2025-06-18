
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Users, MapPin, Clock, TrendingUp, Sparkles, Star } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/7b59ef82-1342-459a-8fc3-23cd8bdb09e8.png" 
                alt="Supera Flash Logo" 
                className="h-16 w-auto logo-animate"
              />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">by Supera Holdings</p>
            </div>
          </div>
          <Button variant="ghost" onClick={() => navigate('/auth')}>
            Já tenho conta
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Main Title */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-3 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold supera-gradient bg-clip-text text-transparent">
                Powered by Ianquinha IA
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              Recrutamento
              <span className="supera-gradient bg-clip-text text-transparent block mt-2">
                Inteligente
              </span>
              <span className="text-4xl md:text-5xl font-normal text-muted-foreground block mt-4">
                para promotores e freelancers
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              A Ianquinha, nossa IA, conecta o talento certo à oportunidade perfeita, 
              otimizando tempo e maximizando resultados com geolocalização inteligente.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg"
              className="supera-gradient hover:opacity-90 text-white text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold rounded-xl"
              onClick={() => navigate('/auth')}
            >
              Começar com Ianquinha
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-10 py-7 border-2 hover:bg-primary/5 font-semibold rounded-xl"
            >
              Ver Demonstração
            </Button>
          </div>

          {/* Stats com visual aprimorado */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20">
            <div className="text-center group">
              <div className="supera-gradient bg-clip-text text-transparent text-4xl md:text-5xl font-black group-hover:scale-110 transition-transform">
                10k+
              </div>
              <div className="text-sm text-muted-foreground font-medium mt-2">Promotores ativos</div>
            </div>
            <div className="text-center group">
              <div className="supera-gradient bg-clip-text text-transparent text-4xl md:text-5xl font-black group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-sm text-muted-foreground font-medium mt-2">Empresas parceiras</div>
            </div>
            <div className="text-center group">
              <div className="text-success text-4xl md:text-5xl font-black group-hover:scale-110 transition-transform">
                95%
              </div>
              <div className="text-sm text-muted-foreground font-medium mt-2">Taxa de sucesso</div>
            </div>
            <div className="text-center group">
              <div className="text-orange-500 text-4xl md:text-5xl font-black group-hover:scale-110 transition-transform">
                2h
              </div>
              <div className="text-sm text-muted-foreground font-medium mt-2">Tempo médio de match</div>
            </div>
          </div>
        </div>

        {/* Features Grid com Ianquinha */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          <Card className="border-0 shadow-2xl supera-gradient p-1 hover:shadow-3xl transition-all duration-300 group">
            <div className="bg-white rounded-lg p-8 h-full">
              <CardHeader className="text-center p-0">
                <div className="w-20 h-20 supera-gradient rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4">Ianquinha IA</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Nossa assistente virtual analisa perfis e conecta automaticamente os melhores matches com inteligência geolocalizada
                </CardDescription>
              </CardHeader>
            </div>
          </Card>

          <Card className="border-0 shadow-2xl bg-gradient-to-br from-success/10 to-success/20 hover:shadow-3xl transition-all duration-300 group">
            <CardHeader className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-success to-success/80 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold mb-4">Geolocalização Inteligente</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Vagas próximas com precisão, otimizando tempo e custos de deslocamento para máxima eficiência
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-2xl bg-gradient-to-br from-orange-500/10 to-orange-500/20 hover:shadow-3xl transition-all duration-300 group">
            <CardHeader className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold mb-4">SuperaBank Integrado</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Pagamentos instantâneos e seguros direto na plataforma, sem intermediários
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* How it Works com Ianquinha */}
        <div className="mt-32 text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <img 
              src="/lovable-uploads/6e4c944a-d970-4266-896d-2219db44d5ab.png" 
              alt="Ianquinha - Assistente IA" 
              className="h-16 w-auto animate-bounce-in"
            />
            <h2 className="text-4xl font-black supera-gradient bg-clip-text text-transparent">
              Como a Ianquinha Funciona
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="space-y-6 group">
              <div className="w-16 h-16 supera-gradient rounded-full flex items-center justify-center mx-auto text-white font-black text-2xl group-hover:scale-110 transition-transform shadow-xl">
                1
              </div>
              <h3 className="text-2xl font-bold">Cadastro Inteligente</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A Ianquinha conduz uma entrevista personalizada para entender seu perfil e criar matches precisos
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="w-16 h-16 supera-gradient rounded-full flex items-center justify-center mx-auto text-white font-black text-2xl group-hover:scale-110 transition-transform shadow-xl">
                2
              </div>
              <h3 className="text-2xl font-bold">Matches Inteligentes</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nossa IA encontra as melhores oportunidades baseadas no seu perfil e localização
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="w-16 h-16 bg-gradient-to-r from-success to-success/80 rounded-full flex items-center justify-center mx-auto text-white font-black text-2xl group-hover:scale-110 transition-transform shadow-xl">
                3
              </div>
              <h3 className="text-2xl font-bold">Trabalhe & Receba</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Aceite vagas compatíveis e receba pagamentos instantâneos pelo SuperaBank
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Star className="h-5 w-5 text-primary" />
            <p className="text-muted-foreground font-medium">
              &copy; 2024 Supera Flash by Supera Holdings. Recrutamento inteligente com IA.
            </p>
            <Star className="h-5 w-5 text-secondary" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
