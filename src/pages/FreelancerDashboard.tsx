
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, DollarSign, Zap, Calendar, User, Bell, CreditCard, Filter, Map } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Job Flash
                  </h1>
                  <p className="text-sm text-muted-foreground">Conectando talentos</p>
                </div>
              </div>
              <div className="hidden md:block h-8 w-px bg-border"></div>
              <div className="hidden md:block">
                <h2 className="text-lg font-semibold">Olá, Maria!</h2>
                <p className="text-sm text-muted-foreground">3 vagas disponíveis para você</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => navigate('/wallet')}>
                <CreditCard className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => navigate('/profile')}>
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-success">R$ 850</p>
                  <p className="text-xs text-muted-foreground">Este mês</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-xs text-muted-foreground">Jobs realizados</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.8</p>
                  <p className="text-xs text-muted-foreground">Avaliação</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-xs text-muted-foreground">Pendentes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Vagas Disponíveis</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowMap(true)}
              className="bg-primary/5 border-primary/20 hover:bg-primary/10"
            >
              <Map className="h-4 w-4 mr-2" />
              Ver no Mapa
            </Button>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      {job.urgent && (
                        <Badge variant="destructive" className="text-xs animate-pulse">
                          <Zap className="h-3 w-3 mr-1" />
                          Urgente
                        </Badge>
                      )}
                      <Badge variant="secondary" className="text-xs">
                        {job.type}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-3 font-medium">{job.company}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{job.location}</span>
                        <Badge variant="outline" className="text-xs ml-2">
                          {job.distance}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{job.date}</span>
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
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg"
                    >
                      Ver Detalhes
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-success/10 hover:border-success hover:text-success">
                      Aceitar Rápido
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="fixed bottom-6 right-6">
          <Button 
            size="lg" 
            className="rounded-full w-16 h-16 bg-gradient-to-r from-primary to-secondary shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
          >
            <Calendar className="h-7 w-7" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
