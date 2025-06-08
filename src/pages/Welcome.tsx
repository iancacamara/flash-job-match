
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Users, MapPin, Clock, TrendingUp, Sparkles } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Job Flash
              </h1>
              <p className="text-sm text-muted-foreground">Conectando Talentos</p>
            </div>
          </div>
          <Button variant="ghost" onClick={() => navigate('/auth')}>
            Já tenho conta
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by IA</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Conecte empresas a 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block mt-2">
                freelancers e promotores
              </span>
              <span className="text-3xl md:text-4xl font-normal text-muted-foreground block mt-4">
                com rapidez e inteligência
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossa IA conecta o talento certo à oportunidade perfeita, 
              otimizando tempo e maximizando resultados para todos.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => navigate('/auth')}
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5"
            >
              Como Funciona
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10k+</div>
              <div className="text-sm text-muted-foreground">Freelancers ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-muted-foreground">Empresas parceiras</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">95%</div>
              <div className="text-sm text-muted-foreground">Taxa de sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">2h</div>
              <div className="text-sm text-muted-foreground">Tempo médio de match</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">IA Inteligente</CardTitle>
              <CardDescription className="text-base">
                Nossa IA analisa perfis e conecta automaticamente os melhores matches
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-secondary/5 to-secondary/10 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Localização Inteligente</CardTitle>
              <CardDescription className="text-base">
                Vagas próximas a você, otimizando tempo e custos de deslocamento
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-success/5 to-success/10 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-success to-success/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Rapidez Garantida</CardTitle>
              <CardDescription className="text-base">
                Matches em minutos, não em dias. Agilidade que o mercado precisa
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* How it Works */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-12">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold">Cadastre-se</h3>
              <p className="text-muted-foreground">
                Crie seu perfil e conte para nossa IA sobre suas habilidades e preferências
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold">Receba Matches</h3>
              <p className="text-muted-foreground">
                Nossa IA encontra as melhores oportunidades baseadas no seu perfil
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold">Trabalhe</h3>
              <p className="text-muted-foreground">
                Aceite as vagas que fazem sentido para você e comece a trabalhar
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 Job Flash. Conectando talentos com inteligência.</p>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
