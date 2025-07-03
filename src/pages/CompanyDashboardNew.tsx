
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
import { Users, MapPin, Phone, Mail, Search, Filter, Plus, Calendar, Clock, Star, LogOut, User } from "lucide-react";
import NewRequestForm from "@/components/forms/NewRequestForm";
import PromoterProfile from "@/components/profile/PromoterProfile";

const CompanyDashboardNew = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedProfile, setSelectedProfile] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data para base de promotores
  const promoters = [
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
      status: "Ativo"
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria@email.com",
      phone: "(11) 99999-0002",
      state: "SP",
      city: "São Paulo",
      profile: "Perecíveis",
      rating: 4.9,
      experience: "5 anos",
      availability: "Ocupado",
      lastWork: "15/12/2024",
      totalJobs: 78,
      status: "Ativo"
    },
    {
      id: 3,
      name: "Carlos Oliveira",
      email: "carlos@email.com",
      phone: "(21) 99999-0003",
      state: "RJ",  
      city: "Rio de Janeiro",
      profile: "Açougue",
      rating: 4.7,
      experience: "2 anos",
      availability: "Disponível",
      lastWork: "10/12/2024",
      totalJobs: 32,
      status: "Ativo"
    }
  ];

  const activeRequests = [
    {
      id: 1,
      store: "Fort Jundiaí",
      city: "Jundiaí",
      profile: "Mercearia Seca",
      quantity: 30,
      deadline: "20/01/2025",
      status: {
        total: 30,
        exameMedico: 10,
        selecao: 10,
        documentacao: 10,
        contratados: 0
      },
      createdAt: "10/01/2025"
    },
    {
      id: 2,
      store: "Fort São Paulo Centro",
      city: "São Paulo",
      profile: "Perecíveis",
      quantity: 15,
      deadline: "25/01/2025",
      status: {
        total: 15,
        exameMedico: 5,
        selecao: 5,
        documentacao: 3,
        contratados: 2
      },
      createdAt: "12/01/2025"
    }
  ];

  const states = ["SP", "RJ", "MG", "RS", "PR", "SC", "BA", "GO"];
  const cities = ["São Paulo", "Jundiaí", "Rio de Janeiro", "Belo Horizonte", "Campinas"];
  const profiles = ["Mercearia Seca", "Perecíveis", "Açougue", "Manipulados", "Geral"];

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case "Disponível": return "bg-green-500/30 text-green-300 border-green-500/50";
      case "Ocupado": return "bg-red-500/30 text-red-300 border-red-500/50";
      case "Indisponível": return "bg-gray-500/30 text-gray-300 border-gray-500/50";
      default: return "bg-gray-500/30 text-gray-300 border-gray-500/50";
    }
  };

  const filteredPromoters = promoters.filter(promoter => {
    const matchesState = selectedState === "all" || promoter.state === selectedState;
    const matchesCity = selectedCity === "all" || promoter.city === selectedCity;
    const matchesProfile = selectedProfile === "all" || promoter.profile === selectedProfile;
    const matchesSearch = promoter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         promoter.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesState && matchesCity && matchesProfile && matchesSearch;
  });

  const handleNewRequest = (data: any) => {
    console.log("Nova solicitação:", data);
    // Aqui você implementaria a lógica para criar uma nova solicitação
  };

  const handleContractPromoter = (promoterId: number) => {
    console.log("Contratar promotor:", promoterId);
    // Aqui você implementaria a lógica para contratar um promotor
  };

  const handleLogout = () => {
    navigate('/auth');
  };

  const handleProfile = () => {
    navigate('/profile');
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
                <p className="text-sm text-white/80">Área da Empresa</p>
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
        <Tabs defaultValue="promoters" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-black/30 backdrop-blur-sm">
            <TabsTrigger value="promoters" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Base de Promotores
            </TabsTrigger>
            <TabsTrigger value="requests" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Solicitações Ativas
            </TabsTrigger>
          </TabsList>

          {/* Base de Promotores */}
          <TabsContent value="promoters" className="space-y-6 mt-6">
            {/* Filtros */}
            <Card className="bg-black/30 backdrop-blur-sm border-white/30">
              <CardHeader>
                <CardTitle className="text-white">Buscar Promotores</CardTitle>
                <CardDescription className="text-white/60">
                  Encontre promotores por localização e perfil para suas demandas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white">Buscar</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                      <Input
                        placeholder="Nome ou email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-white">Estado</Label>
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/20">
                        <SelectItem value="all" className="text-white">Todos</SelectItem>
                        {states.map((state) => (
                          <SelectItem key={state} value={state} className="text-white">
                            {state}
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

                  <div className="flex items-end">
                    <Button variant="outline" className="border-white/30 text-white bg-white/10">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtrar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resultado da Busca */}
            <Card className="bg-black/30 backdrop-blur-sm border-white/30">
              <CardHeader>
                <CardTitle className="text-white">
                  Promotores Encontrados ({filteredPromoters.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/20">
                      <TableHead className="text-white">Promotor</TableHead>
                      <TableHead className="text-white">Localização</TableHead>
                      <TableHead className="text-white">Perfil</TableHead>
                      <TableHead className="text-white">Avaliação</TableHead>
                      <TableHead className="text-white">Status</TableHead>
                      <TableHead className="text-white">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPromoters.map((promoter) => (
                      <TableRow key={promoter.id} className="border-white/20">
                        <TableCell>
                          <div className="space-y-1">
                            <p className="font-medium text-white">{promoter.name}</p>
                            <div className="flex items-center space-x-4 text-sm text-white/70">
                              <span className="flex items-center">
                                <Mail className="h-3 w-3 mr-1" />
                                {promoter.email}
                              </span>
                              <span className="flex items-center">
                                <Phone className="h-3 w-3 mr-1" />
                                {promoter.phone}
                              </span>
                            </div>
                            <div className="text-sm text-white/60">
                              {promoter.totalJobs} trabalhos • Exp: {promoter.experience}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-white">
                            <MapPin className="h-4 w-4 mr-1" />
                            {promoter.city}, {promoter.state}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-primary/30 text-primary border-primary/50">
                            {promoter.profile}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-white">
                            <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                            {promoter.rating}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getAvailabilityBadge(promoter.availability)}>
                            {promoter.availability}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button 
                              size="sm" 
                              className="bg-gradient-to-r from-primary to-secondary"
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
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Solicitações Ativas - Modelo Fort Atacadista */}
          <TabsContent value="requests" className="space-y-6 mt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Solicitações Ativas</h2>
              <NewRequestForm onSubmit={handleNewRequest} />
            </div>

            {activeRequests.map((request) => (
              <Card key={request.id} className="bg-black/30 backdrop-blur-sm border-white/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">{request.store}</CardTitle>
                      <CardDescription className="text-white/60">
                        {request.profile} • {request.city} • Solicitado em {request.createdAt}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-lg font-bold">{request.quantity} Promotores</p>
                      <p className="text-white/60 text-sm">Prazo: {request.deadline}</p>
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
                          {Math.ceil((new Date(request.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} dias restantes
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-white/70" />
                        <span className="text-white text-sm">
                          Progresso: {Math.round((request.status.contratados / request.quantity) * 100)}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" className="border-white/30 text-white bg-white/10">
                        Ver Detalhes
                      </Button>
                      <Button className="bg-gradient-to-r from-primary to-secondary">
                        Gerenciar
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
