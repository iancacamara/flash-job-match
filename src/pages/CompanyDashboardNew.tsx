
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Users, MapPin, Phone, Mail, Search, Filter, Plus, Calendar, Clock, Star, LogOut, User, Building2, TrendingUp, AlertCircle } from "lucide-react";
import NewRequestForm from "@/components/forms/NewRequestForm";
import PromoterProfile from "@/components/profile/PromoterProfile";

const CompanyDashboardNew = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedProfile, setSelectedProfile] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStore, setSelectedStore] = useState("all");

  // Lojas Fort Atacadista
  const fortStores = [
    { id: 1, name: "Fort Jundiaí", city: "Jundiaí", state: "SP", address: "Av. Marginal Direita, 1200" },
    { id: 2, name: "Fort São Paulo Centro", city: "São Paulo", state: "SP", address: "Rua Augusta, 1500" },
    { id: 3, name: "Fort Campinas", city: "Campinas", state: "SP", address: "Av. John Boyd Dunlop, 2800" },
    { id: 4, name: "Fort Santos", city: "Santos", state: "SP", address: "Rua do Comércio, 150" }
  ];

  // Base de promotores específica por região
  const promotersByRegion = {
    "Jundiaí": [
      {
        id: 1,
        name: "João Silva",
        email: "joao@email.com",
        phone: "(11) 99999-0001",
        state: "SP",
        city: "Jundiaí",
        profile: "Mercearia Seca",
        rating: 4.8,
        experience: "3 anos",
        availability: "Disponível",
        lastWork: "12/12/2024",
        totalJobs: 45,
        status: "Ativo",
        distance: "2.5 km da loja",
        specialties: ["Produtos em geral", "Atendimento ao cliente", "Organização de gôndolas"],
        schedule: "Segunda a Sábado",
        transport: "Veículo próprio"
      },
      {
        id: 2,
        name: "Maria Fernanda",
        email: "maria.f@email.com",
        phone: "(11) 99999-0002",
        state: "SP",
        city: "Jundiaí",
        profile: "Perecíveis",
        rating: 4.9,
        experience: "4 anos",
        availability: "Disponível",
        lastWork: "15/12/2024",
        totalJobs: 62,
        status: "Ativo",
        distance: "1.8 km da loja",
        specialties: ["Produtos refrigerados", "Controle de temperatura", "Degustação"],
        schedule: "Flexível",
        transport: "Transporte público"
      }
    ],
    "São Paulo": [
      {
        id: 3,
        name: "Carlos Oliveira",
        email: "carlos@email.com",
        phone: "(11) 99999-0003",
        state: "SP",
        city: "São Paulo",
        profile: "Açougue",
        rating: 4.7,
        experience: "5 anos",
        availability: "Disponível",
        lastWork: "10/12/2024",
        totalJobs: 78,
        status: "Ativo",
        distance: "3.2 km da loja",
        specialties: ["Cortes de carne", "Atendimento especializado", "Higiene e segurança"],
        schedule: "Segunda a Sexta",
        transport: "Moto própria"
      }
    ]
  };

  // Solicitações ativas com modelo Fort
  const activeRequests = [
    {
      id: 1,
      store: "Fort Jundiaí",
      storeId: 1,
      city: "Jundiaí",
      profile: "Mercearia Seca",
      quantity: 30,
      deadline: "20/01/2025",
      priority: "Alta",
      budget: "R$ 4.500/mês",
      status: {
        total: 30,
        exameMedico: 8,
        selecao: 12,
        documentacao: 7,
        contratados: 3,
        pendentes: 0
      },
      createdAt: "10/01/2025",
      requestedBy: "Gerente Regional",
      description: "Necessidade urgente de promotores para seção de mercearia seca devido ao aumento das vendas no período."
    },
    {
      id: 2,
      store: "Fort São Paulo Centro",
      storeId: 2,
      city: "São Paulo",
      profile: "Perecíveis",
      quantity: 15,
      deadline: "25/01/2025",
      priority: "Média",
      budget: "R$ 3.200/mês",
      status: {
        total: 15,
        exameMedico: 3,
        selecao: 6,
        documentacao: 4,
        contratados: 2,
        pendentes: 0
      },
      createdAt: "12/01/2025",
      requestedBy: "Supervisor de Loja",
      description: "Reforço para seção de perecíveis durante promoção de laticínios."
    }
  ];

  const states = ["SP", "RJ", "MG", "RS", "PR", "SC", "BA", "GO"];
  const cities = ["Jundiaí", "São Paulo", "Campinas", "Santos", "Rio de Janeiro"];
  const profiles = ["Mercearia Seca", "Perecíveis", "Açougue", "Manipulados", "Coordenação"];

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case "Disponível": return "bg-green-500/30 text-green-300 border-green-500/50";
      case "Ocupado": return "bg-red-500/30 text-red-300 border-red-500/50";
      case "Indisponível": return "bg-gray-500/30 text-gray-300 border-gray-500/50";
      default: return "bg-gray-500/30 text-gray-300 border-gray-500/50";
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "Alta": return "bg-red-500/30 text-red-300 border-red-500/50";
      case "Média": return "bg-yellow-500/30 text-yellow-300 border-yellow-500/50";
      case "Baixa": return "bg-green-500/30 text-green-300 border-green-500/50";
      default: return "bg-gray-500/30 text-gray-300 border-gray-500/50";
    }
  };

  const getPromotersForSelectedCity = () => {
    if (selectedCity === "all") {
      return Object.values(promotersByRegion).flat();
    }
    return promotersByRegion[selectedCity] || [];
  };

  const filteredPromoters = getPromotersForSelectedCity().filter(promoter => {
    const matchesState = selectedState === "all" || promoter.state === selectedState;
    const matchesProfile = selectedProfile === "all" || promoter.profile === selectedProfile;
    const matchesSearch = promoter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         promoter.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesState && matchesProfile && matchesSearch;
  });

  const handleNewRequest = (data: any) => {
    console.log("Nova solicitação Fort:", data);
  };

  const handleContractPromoter = (promoterId: number) => {
    console.log("Contratar promotor para Fort:", promoterId);
  };

  const handleLogout = () => {
    navigate('/auth');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const calculateProgress = (status: any) => {
    const completed = status.contratados;
    const total = status.total;
    return Math.round((completed / total) * 100);
  };

  const getDaysRemaining = (deadline: string) => {
    const deadlineDate = new Date(deadline.split('/').reverse().join('-'));
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
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
                <h1 className="text-xl font-bold text-white">Fort Atacadista</h1>
                <p className="text-sm text-white/80">Gestão de Promotores</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <NewRequestForm onSubmit={handleNewRequest} />
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
        {/* Dashboard Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-black/30 backdrop-blur-sm border-white/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Total de Lojas</p>
                  <p className="text-2xl font-bold text-white">{fortStores.length}</p>
                </div>
                <Building2 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/30 backdrop-blur-sm border-white/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Promotores Ativos</p>
                  <p className="text-2xl font-bold text-white">{Object.values(promotersByRegion).flat().length}</p>
                </div>
                <Users className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/30 backdrop-blur-sm border-white/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Solicitações Ativas</p>
                  <p className="text-2xl font-bold text-white">{activeRequests.length}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/30 backdrop-blur-sm border-white/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Urgentes</p>
                  <p className="text-2xl font-bold text-white">
                    {activeRequests.filter(req => req.priority === "Alta").length}
                  </p>
                </div>
                <AlertCircle className="h-8 w-8 text-red-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="promoters" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-black/30 backdrop-blur-sm">
            <TabsTrigger value="promoters" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Base de Promotores Fort
            </TabsTrigger>
            <TabsTrigger value="requests" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Solicitações por Loja
            </TabsTrigger>
          </TabsList>

          {/* Base de Promotores Fort */}
          <TabsContent value="promoters" className="space-y-6 mt-6">
            {/* Filtros */}
            <Card className="bg-black/30 backdrop-blur-sm border-white/30">
              <CardHeader>
                <CardTitle className="text-white">Buscar Promotores por Região</CardTitle>
                <CardDescription className="text-white/60">
                  Encontre promotores disponíveis por loja e perfil especializado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white">Loja Fort</Label>
                    <Select value={selectedStore} onValueChange={setSelectedStore}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/20">
                        <SelectItem value="all" className="text-white">Todas as Lojas</SelectItem>
                        {fortStores.map((store) => (
                          <SelectItem key={store.id} value={store.id.toString()} className="text-white">
                            {store.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-white">Cidade</Label>
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/20">
                        <SelectItem value="all" className="text-white">Todas</SelectItem>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city} className="text-white">
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Perfil</Label>
                    <Select value={selectedProfile} onValueChange={setSelectedProfile}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/20">
                        <SelectItem value="all" className="text-white">Todos</SelectItem>
                        {profiles.map((profile) => (
                          <SelectItem key={profile} value={profile} className="text-white">
                            {profile}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Buscar</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                      <Input
                        placeholder="Nome..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>

                  <div className="flex items-end">
                    <Button variant="outline" className="border-white/30 text-white bg-white/10">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtrar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Promotores Disponíveis */}
            <Card className="bg-black/30 backdrop-blur-sm border-white/30">
              <CardHeader>
                <CardTitle className="text-white">
                  Promotores Disponíveis ({filteredPromoters.length})
                </CardTitle>
                <CardDescription className="text-white/60">
                  {selectedCity !== "all" ? `Região: ${selectedCity}` : "Todas as regiões"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredPromoters.map((promoter) => (
                    <Card key={promoter.id} className="bg-white/5 border-white/20">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-white mb-1">{promoter.name}</h3>
                            <p className="text-sm text-white/60">{promoter.profile}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400" />
                            <span className="text-white text-sm">{promoter.rating}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2 text-sm">
                            <MapPin className="h-3 w-3 text-white/60" />
                            <span className="text-white/70">{promoter.distance}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="h-3 w-3 text-white/60" />
                            <span className="text-white/70">{promoter.schedule}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Users className="h-3 w-3 text-white/60" />
                            <span className="text-white/70">{promoter.totalJobs} trabalhos</span>
                          </div>
                        </div>
                        
                        <Badge className={getAvailabilityBadge(promoter.availability)} >
                          {promoter.availability}
                        </Badge>
                        
                        <div className="flex items-center space-x-2 mt-4">
                          <Button 
                            size="sm" 
                            className="bg-gradient-to-r from-primary to-secondary flex-1"
                            onClick={() => handleContractPromoter(promoter.id)}
                          >
                            Contratar
                          </Button>
                          <PromoterProfile promoter={promoter}>
                            <Button size="sm" variant="outline" className="border-white/30 text-white bg-white/10">
                              Ver Perfil
                            </Button>
                          </PromoterProfile>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Solicitações por Loja */}
          <TabsContent value="requests" className="space-y-6 mt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Solicitações por Loja Fort</h2>
              <NewRequestForm onSubmit={handleNewRequest} />
            </div>

            {activeRequests.map((request) => (
              <Card key={request.id} className="bg-black/30 backdrop-blur-sm border-white/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <CardTitle className="text-white">{request.store}</CardTitle>
                        <Badge className={getPriorityBadge(request.priority)}>
                          Prioridade {request.priority}
                        </Badge>
                      </div>
                      <CardDescription className="text-white/60">
                        {request.profile} • {request.city} • Solicitado por {request.requestedBy}
                      </CardDescription>
                      <p className="text-white/70 text-sm mt-2">{request.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-lg font-bold">{request.quantity} Promotores</p>
                      <p className="text-white/60 text-sm">Prazo: {request.deadline}</p>
                      <p className="text-primary text-sm font-medium">{request.budget}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <Card className="bg-blue-500/10 border-blue-500/30">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">
                          {request.status.exameMedico}
                        </div>
                        <div className="text-sm text-blue-300">Exame Médico</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-yellow-500/10 border-yellow-500/30">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-400">
                          {request.status.selecao}
                        </div>
                        <div className="text-sm text-yellow-300">Em Seleção</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-orange-500/10 border-orange-500/30">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-orange-400">
                          {request.status.documentacao}
                        </div>
                        <div className="text-sm text-orange-300">Documentação</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-green-500/10 border-green-500/30">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">
                          {request.status.contratados}
                        </div>
                        <div className="text-sm text-green-300">Contratados</div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-white/70" />
                        <span className="text-white text-sm">
                          {getDaysRemaining(request.deadline)} dias restantes
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-white/70" />
                        <span className="text-white text-sm">
                          Progresso: {calculateProgress(request.status)}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" className="border-white/30 text-white bg-white/10">
                        Ver Detalhes
                      </Button>
                      <Button className="bg-gradient-to-r from-primary to-secondary">
                        Gerenciar Processo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyDashboardNew;
