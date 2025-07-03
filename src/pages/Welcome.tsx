
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

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
              src="/lovable-uploads/2a686b03-80b6-475a-b721-cd6d7344535a.png" 
              alt="Supera Flash Logo" 
              className="h-8 w-auto"
            />
            <span className="text-white/80 text-sm">by Supera Holdings</span>
          </div>
          <Button 
            className="bg-purple-600/80 hover:bg-purple-700 text-white px-6 py-2 rounded-full border border-purple-400/30"
          >
            Já tenho conta
          </Button>
        </div>

        {/* Powered by Sury IA */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-800/40 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2">
            <div className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
            <span className="text-white font-medium">Powered by Sury IA</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Recrutamento{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-primary bg-clip-text">
                Inteligente
              </span>
            </h1>
            
            <h2 className="text-2xl text-white/90 mb-8 font-light">
              com IA e Geolocalização
            </h2>
            
            <p className="text-white/70 text-lg mb-12 leading-relaxed max-w-lg">
              Sury, nossa IA, conecta o talento certo à oportunidade perfeita, otimizando tempo e maximizando resultados.
            </p>
            
            <div className="flex gap-4">
              <Button 
                onClick={() => navigate('/auth')}
                className="bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90 text-white px-8 py-3 rounded-full text-lg font-medium"
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
          </div>

          {/* Right side - Sury IA Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/30 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-8 relative overflow-hidden">
              {/* IA Inteligente badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-primary px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">IA Inteligente</span>
                </div>
              </div>
              
              {/* Supera Flash logo and character */}
              <div className="text-center pt-8">
                <div className="text-6xl font-bold mb-4">
                  <span className="text-transparent bg-gradient-to-r from-primary to-cyan-400 bg-clip-text">
                    SUPERA
                  </span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 to-primary bg-clip-text">
                    FLASH
                  </span>
                </div>
                
                {/* Character illustration */}
                <div className="relative">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <div className="text-4xl">👨‍💼</div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✨</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Geolocalização badge */}
              <div className="absolute bottom-6 right-6">
                <div className="bg-purple-600/80 px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">Geolocalização</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
