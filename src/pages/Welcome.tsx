
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Zap, Users, TrendingUp } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex flex-col">
      {/* Header */}
      <header className="p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Job Flash
            </span>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate('/auth')}
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Entrar
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Conectando
                  <span className="block gradient-primary bg-clip-text text-transparent">
                    Talentos
                  </span>
                  com Rapidez
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  A plataforma inteligente que conecta empresas a freelancers e 
                  promotores de forma rápida e eficiente.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/auth')}
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-xl"
                >
                  Começar Agora
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6 rounded-xl border-2"
                >
                  Saiba Mais
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Freelancers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Empresas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">2000+</div>
                  <div className="text-sm text-muted-foreground">Jobs Realizados</div>
                </div>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative">
              <div className="relative z-10 space-y-6">
                {/* Floating Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg animate-float">
                    <Users className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold">Para Freelancers</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Encontre jobs que combinam com seu perfil
                    </p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg animate-float" style={{animationDelay: '1s'}}>
                    <TrendingUp className="h-8 w-8 text-secondary mb-3" />
                    <h3 className="font-semibold">Para Empresas</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Contrate talentos qualificados rapidamente
                    </p>
                  </div>
                </div>

                {/* Central Feature Card */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white shadow-2xl animate-pulse-subtle">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">FlashBot IA</h3>
                      <p className="text-white/80">Matching Inteligente</p>
                    </div>
                  </div>
                  <p className="text-white/90">
                    Nossa IA conecta automaticamente o profissional ideal 
                    para cada job, considerando perfil, localização e disponibilidade.
                  </p>
                </div>
              </div>

              {/* Background Elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-muted-foreground">
        <p>&copy; 2024 Job Flash. Conectando talentos com oportunidades.</p>
      </footer>
    </div>
  );
};

export default Welcome;
