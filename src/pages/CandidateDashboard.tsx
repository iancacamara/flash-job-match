
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Clock, DollarSign, User, Settings, LogOut, Calendar, ChevronRight, Wallet, Building2, Users } from "lucide-react";
import JobDetailsModal from "@/components/job/JobDetailsModal";
import MapComponent from "@/components/MapComponent";
import WalletComponent from "@/components/WalletComponent";
import IllustrationMap from "@/components/IllustrationMap";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CandidateDashboard = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);

  // Mock data para as vagas disponíveis (Por Demanda + Fixas)
  const availableJobs = [
    {
      id: 1,
      title: "Promotor de Vendas - Mercearia Seca",
      company: "Fort Atacadista",
      location: "Jundiaí, SP",
      type: "Por Demanda",
      salary: "R$ 150/dia",
      period: "3 dias",
      startDate: "20/01/2025",
      description: "Promoção de produtos de mercearia seca no Fort Atacadista",
      requirements: ["Experiência em vendas", "Disponibilidade fim de semana"],
      compatibility: 95,
      distance: "2.3 km",
      rating: 4.8,
      reviews: 127
    },
    {
      id: 2,
      title: "Promotor Perecíveis - CLT",
      company: "Supermercados ABC",
      location: "São Paulo, SP",
      type: "Fixo CLT",
      salary: "R$ 2.800/mês",
      period: "Contrato CLT",
      startDate: "Imediato",
      description: "Promotor fixo para seção de perecíveis",
      requirements: ["Conhecimento em produtos perecíveis", "Experiência CLT"],
      compatibility: 87,
      distance: "1.8 km",
      rating: 4.5,
      reviews: 89
    },
    {
      id: 3,
      title: "Promotor Express PJ",
      company: "Extra",
      location: "Rio de Janeiro, RJ",
      type: "PJ Express",
      salary: "R$ 180/dia",
      period: "1 dia",
      startDate: "25/01/2025",
      description: "Ação promocional de produtos express",
      requirements: ["Agilidade", "Disponibilidade imediata"],
      compatibility: 78,
      distance: "5.1 km",
      rating: 4.2,
      reviews: 45
    },
    {
      id: 4,
      title: "Promotor Roteirista",
      company: "Atacadão",
      location: "Campinas, SP",
      type: "Roteirista",
      salary: "R$ 200/dia",
      period: "5 dias",
      startDate: "22/01/2025",
      description: "Roteiro promocional em múltiplas lojas",
      requirements: ["CNH", "Veículo próprio", "Experiência em roteiros"],
      compatibility: 92,
      distance: "12.5 km",
      rating: 4.7,
      reviews: 234
    },
    {
      id: 5,
      title: "Promotor Fixo - Frigoríficos",
      company: "Carrefour",
      location: "São Paulo, SP",
      type: "Fixo CLT",
      salary: "R$ 3.200/mês",
      period: "Contrato CLT",
      startDate: "01/02/2025",
      description: "Vaga fixa para promoção de produtos frigoríficos",
      requirements: ["Experiência em frigoríficos", "Disponibilidade integral"],
      compatibility: 89,
      distance: "3.7 km",
      rating: 4.6,
      reviews: 156
    },
    {
      id: 6,
      title: "Freelancer Manipulados",
      company: "Pão de Açúcar",
      location: "Rio de Janeiro, RJ",
      type: "Freelance",
      salary: "R$ 120/dia",
      period: "2 dias",
      startDate: "28/01/2025",
      description: "Promoção freelance de produtos manipulados",
      requirements: ["Conhecimento em manipulados", "Flexibilidade"],
      compatibility: 83,
      distance: "4.2 km",
      rating: 4.3,
      reviews: 73
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Por Demanda": return "bg-blue-500/20 text-blue-300 border-blue-500/50";
      case "Fixo CLT": return "bg-green-500/20 text-green-300 border-green-500/50";
      case "PJ Express": return "bg-purple-500/20 text-purple-300 border-purple-500/50";
      case "Roteirista": return "bg-orange-500/20 text-orange-300 border-orange-500/50";
      case "Freelance": return "bg-cyan-500/20 text-cyan-300 border-cyan-500/50";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/50";
    }
  };

  const getCompatibilityColor = (compatibility: number) => {
    if (compatibility >= 90) return "text-green-400";
    if (compatibility >= 80) return "text-yellow-400";
    return "text-orange-400";
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleProfile = () => {
    navigate('/profile', { state: { userType: 'freelancer' } });
  };

  const handleWallet = () => {
    navigate('/wallet');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/ead26371-00b8-4736-a344-5df3ac04a8bd.png" 
                alt="GM Promo Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-white">GM Promo</h1>
                <p className="text-sm text-white/80">Área do Candidato</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                className="border-white/30 text-white bg-white/10"
                onClick={handleWallet}
              >
                <Wallet className="h-4 w-4 mr-2" />
                Carteira
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white bg-white/10"
                onClick={handleProfile}
              >
                <User className="h-4 w-4 mr-2" />
                Perfil
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white bg-white/10"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-black/30 backdrop-blur-sm border-white/30">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Building2 className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Vagas Disponíveis</p>
                  <p className="text-white text-2xl font-bold">{availableJobs.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/30 backdrop-blur-sm border-white/30">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Candidaturas</p>
                  <p className="text-white text-2xl font-bold">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/30 backdrop-blur-sm border-white/30">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Star className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Avaliação</p>
                  <p className="text-white text-2xl font-bold">4.8</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/30 backdrop-blur-sm border-white/30">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-yellow-500/20 rounded-lg">
                  <DollarSign className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Ganhos Mês</p>
                  <p className="text-white text-2xl font-bold">R$ 2.450</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList className="bg-black/30 backdrop-blur-sm">
            <TabsTrigger value="jobs" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Oportunidades
            </TabsTrigger>
            <TabsTrigger value="map" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Mapa
            </TabsTrigger>
            <TabsTrigger value="wallet" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Carteira
            </TabsTrigger>
          </TabsList>

          {/* Oportunidades de Trabalho */}
          <TabsContent value="jobs">
            <Card className="bg-black/30 backdrop-blur-sm border-white/30">
              <CardHeader>
                <CardTitle className="text-white">Oportunidades Disponíveis</CardTitle>
                <CardDescription className="text-white/60">
                  Vagas por demanda e fixas compatíveis com seu perfil
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableJobs.map((job) => (
                    <div 
                      key={job.id} 
                      className="bg-white/5 border border-white/20 rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-white font-semibold text-lg">{job.title}</h3>
                            <Badge className={getTypeColor(job.type)}>
                              {job.type}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-white/70 text-sm mb-3">
                            <span className="flex items-center">
                              <Building2 className="h-4 w-4 mr-1" />
                              {job.company}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location} • {job.distance}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {job.startDate}
                            </span>
                          </div>

                          <div className="flex items-center space-x-6 mb-3">
                            <div className="flex items-center space-x-2">
                              <DollarSign className="h-4 w-4 text-green-400" />
                              <span className="text-white font-medium">{job.salary}</span>
                              <span className="text-white/60">• {job.period}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-white">{job.rating}</span>
                              <span className="text-white/60">({job.reviews} avaliações)</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-white/60">Compatibilidade:</span>
                              <span className={`font-bold ${getCompatibilityColor(job.compatibility)}`}>
                                {job.compatibility}%
                              </span>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <JobDetailsModal job={job}>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="border-white/30 text-white bg-white/10"
                                >
                                  Ver Detalhes
                                </Button>
                              </JobDetailsModal>
                              <Button 
                                size="sm"
                                className="bg-gradient-to-r from-primary to-secondary text-white"
                              >
                                Candidatar-se
                                <ChevronRight className="h-4 w-4 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mapa */}
          <TabsContent value="map">
            <div className="space-y-6">
              <IllustrationMap />
              <MapComponent jobs={availableJobs} />
            </div>
          </TabsContent>

          {/* Carteira */}
          <TabsContent value="wallet">
            <WalletComponent />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CandidateDashboard;
