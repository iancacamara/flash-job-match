
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, DollarSign, Zap, Calendar, User, Bell, CreditCard, Filter, Map, Bot } from "lucide-react";
import MapView from "@/components/MapView";

const FreelancerDashboard = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Promotor de Degustação - Shopping Center",
      company: "FoodBrand",
      location: "Shopping Vila Lobos, SP",
      coordinates: [-46.7014, -23.5972] as [number, number],
      date: "Hoje, 14h-18h",
      payment: "R$ 120,00",
      type: "Degustação",
      distance: "2.5 km",
      urgent: true
    },
    {
      id: 2,
      title: "Reposição de Produtos - Supermercado",
      company: "SuperMax",
      location: "Pinheiros, SP",
      coordinates: [-46.6911, -23.5629] as [number, number],
      date: "Amanhã, 8h-12h", 
      payment: "R$ 80,00",
      type: "Reposição",
      distance: "1.8 km",
      urgent: false
    },
    {
      id: 3,
      title: "Panfletagem - Lançamento Imobiliário",
      company: "Construtora ABC",
      location: "Moema, SP",
      coordinates: [-46.6634, -23.6014] as [number, number],
      date: "15/06, 9h-17h",
      payment: "R$ 200,00",
      type: "Panfletagem",
      distance: "4.2 km",
      urgent: false
    }
  ];

  if (showMap) {
    return <MapView onClose={() => setShowMap(false)} jobs={jobs} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/e172e5ba-c278-4674-bb50-c1cccacbb507.png" 
                  alt="Supera Flash Logo" 
                  className="h-12 w-auto logo-animate"
                />
                <div>
                  <h1 className="text-xl font-bold text-white">
                    Supera Flash
                  </h1>
                  <p className="text-sm text-white/80">Conectando talentos</p>
                </div>
              </div>
              <div className="hidden md:block h-8 w-px bg-white/30"></div>
              <div className="hidden md:block">
                <h2 className="text-lg font-semibold text-white">Olá, Maria!</h2>
                <p className="text-sm text-white/80">3 vagas disponíveis para você</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => navigate('/wallet')} className="text-white hover:text-white hover:bg-white/20">
                <CreditCard className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => navigate('/profile')} className="text-white hover:text-white hover:bg-white/20">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-black/30 backdrop-blur-sm border-white/30 hover:bg-black/40 transition-all">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-success/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <DollarSign className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-success">R$ 850</p>
                  <p className="text-xs text-white">Este mês</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/30 backdrop-blur-sm border-white/30 hover:bg-black/40 transition-all">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-xs text-white">Jobs realizados</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/30 backdrop-blur-sm border-white/30 hover:bg-black/40 transition-all">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-secondary/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Zap className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary">4.8</p>
                  <p className="text-xs text-white">Avaliação</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/30 backdrop-blur-sm border-white/30 hover:bg-black/40 transition-all">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-orange-500/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Clock className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-500">3</p>
                  <p className="text-xs text-white">Pendentes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Vagas Disponíveis</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-black/30 hover:text-white">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowMap(true)}
              className="bg-primary/30 border-primary/50 text-primary hover:bg-primary/40"
            >
              <Map className="h-4 w-4 mr-2" />
              Ver no Mapa
            </Button>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="bg-black/30 backdrop-blur-sm border-white/30 hover:bg-black/40 transition-all duration-300 cursor-pointer hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                      {job.urgent && (
                        <Badge className="text-xs animate-pulse bg-red-500/30 text-red-300 border-red-500/50">
                          <Zap className="h-3 w-3 mr-1" />
                          Urgente
                        </Badge>
                      )}
                      <Badge className="text-xs bg-secondary/30 text-secondary border-secondary/50">
                        {job.type}
                      </Badge>
                    </div>
                    
                    <p className="text-white/80 mb-3 font-medium">{job.company}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-white/70" />
                        <span className="text-white">{job.location}</span>
                        <Badge className="text-xs ml-2 border-white/50 text-white bg-black/30">
                          {job.distance}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-white/70" />
                        <span className="text-white">{job.date}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-success" />
                        <span className="font-semibold text-success">{job.payment}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-4">
                    <Button 
                      onClick={() => navigate(`/job/${job.id}`)}
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg text-white"
                    >
                      Ver Detalhes
                    </Button>
                    <Button variant="outline" size="sm" className="border-success/50 text-success hover:bg-success/20 hover:border-success">
                      Aceitar Rápido
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sury Assistant FAB */}
        <div className="fixed bottom-6 right-6">
          <Button 
            size="lg" 
            className="rounded-full w-16 h-16 bg-gradient-to-r from-primary to-secondary shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
          >
            <Bot className="h-7 w-7 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
