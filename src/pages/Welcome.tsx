
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: string) => {
    navigate('/auth', { state: { selectedRole: role } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-8 py-16">
        {/* Header com Logo Centralizada */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/ead26371-00b8-4736-a344-5df3ac04a8bd.png" 
              alt="GM Promo Logo" 
              className="h-32 w-auto"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Bem-vindo ao GM Promo
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Escolha seu perfil para começar
          </p>
        </div>

        {/* Cards de Seleção de Papel */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Candidato Card */}
          <Card 
            className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-2 hover:border-blue-300"
            onClick={() => handleRoleSelection('freelancer')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-3xl text-white">👤</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Candidato</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Encontre oportunidades perfeitas para seu perfil profissional
              </p>
            </CardContent>
          </Card>

          {/* Empresa Card */}
          <Card 
            className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-2 hover:border-green-300"
            onClick={() => handleRoleSelection('company')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-3xl text-white">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Empresa</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Encontre os melhores talentos para sua equipe
              </p>
            </CardContent>
          </Card>

          {/* Recrutador Card */}
          <Card 
            className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-2 hover:border-purple-300"
            onClick={() => navigate('/recruiter')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Recrutador</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Gerencie processos seletivos com eficiência
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/auth')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium mr-4"
          >
            Começar Agora
          </Button>
          <Button 
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg text-lg"
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
