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
import { Users, MapPin, Phone, Mail, Search, Filter, Plus, Calendar, Clock, Star, LogOut, User, CheckCircle, XCircle, Eye } from "lucide-react";
import NewRequestForm from "@/components/forms/NewRequestForm";
import PromoterProfile from "@/components/profile/PromoterProfile";

const RecruiterDashboard = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedProfile, setSelectedProfile] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data para candidatos em processo
  const candidates = [
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
      status: "Entrevista",
      appliedDate: "10/01/2025",
      jobTitle: "Promotor Fort Jundiaí",
      nearbyClinic: "Clínica São José - 1.2km",
      documents: {
        rg: true,
        cpf: true,
        comprovante: true,
        curriculum: true
      }
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
      status: "Exame Médico",
      appliedDate: "12/01/2025",
      jobTitle: "Promotor Supermercados ABC",
      nearbyClinic: "Hospital das Clínicas - 2.5km",
      documents: {
        rg: true,
        cpf: true,
        comprovante: false,
        curriculum: true
      }
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
      status: "Documentação",
      appliedDate: "15/01/2025",
      jobTitle: "Promotor Extra",
      nearbyClinic: "Clínica da Família - 0.8km",
      documents: {
        rg: true,
        cpf: true,
        comprovante: true,
        curriculum: false
      }
    }
  ];

  // Mock data para vagas abertas
  const openJobs = [
    {
      id: 1,
      title: "Promotor Mercearia Seca",
      company: "Fort Atacadista",
      location: "Jundiaí, SP",
      quantity: 30,
      filled: 12,
      deadline: "20/01/2025",
      status: "Ativa",
      createdAt: "10/01/2025",
      requirements: ["Experiência em vendas", "Disponibilidade fim de semana"]
    },
    {
      id: 2,
      title: "Promotor Perecíveis",
      company: "Supermercados ABC",
      location: "São Paulo, SP",
      quantity: 15,
      filled: 8,
      deadline: "25/01/2025",
      status: "Ativa",
      createdAt: "12/01/2025",
      requirements: ["Conhecimento em produtos perecíveis", "Flexibilidade de horário"]
    },
    {
      id: 3,
      title: "Promotor Açougue",
      company: "Extra",
      location: "Rio de Janeiro, RJ",
      quantity: 20,
      filled: 5,
      deadline: "30/01/2025",
      status: "Ativa",
      createdAt: "15/01/2025",
      requirements: ["Experiência em açougue", "Disponibilidade para treinamento"]
    }
  ];

  const states = ["SP", "RJ", "MG", "RS", "PR", "SC", "BA", "GO"];
  const cities = ["São Paulo", "Jundiaí", "Rio de Janeiro", "Belo Horizonte", "Campinas"];
  const profiles = ["Mercearia Seca", "Perecíveis", "Açougue", "Manipulados", "Geral"];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Aprovado": return "bg-green-500/30 text-green-300 border-green-500/50";
      case "Reprovado": return "bg-red-500/30 text-red-300 border-red-500/50";
      case "Entrevista": return "bg-blue-500/30 text-blue-300 border-blue-500/50";
      case "Documentação": return "bg-yellow-500/30 text-yellow-300 border-yellow-500/50";
      case "Exame Médico": return "bg-purple-500/30 text-purple-300 border-purple-500/50";
      default: return "bg-gray-500/30 text-gray-300 border-gray-500/50";
    }
  };

  const filteredCandidates = candidates.filter(candidate => {
    const matchesState = selectedState === "all" || candidate.state === selectedState;
    const matchesCity = selectedCity === "all" || candidate.city === selectedCity;
    const matchesProfile = selectedProfile === "all" || candidate.profile === selectedProfile;
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesState && matchesCity && matchesProfile && matchesSearch;
  });

  const handleNewRequest = (data: any) => {
    console.log("Nova vaga criada:", data);
    // Implementar lógica para criar nova vaga
  };

  const handleApprove = (candidateId: number) => {
    console.log("Aprovar candidato:", candidateId);
    // Implementar lógica de aprovação
  };

  const handleReject = (candidateId: number) => {
    console.log("Reprovar candidato:", candidateId);
    // Implementar lógica de reprovação
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
                <p className="text-sm text-white/80">Área do Recrutador</p>
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
        <Tabs defaultValue="candidates" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-black/30 backdrop-blur-sm">
            <TabsTrigger value="candidates" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Gestão de Candidatos
            </TabsTrigger>
            <TabsTrigger value="jobs" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Vagas Abertas
            </TabsTrigger>
          </TabsList>

          {/* Gestão de Candidatos */}
          <TabsContent value="candidates" className="space-y-6 mt-6">
            {/* Filtros */}
            <Card className="bg-black/30 backdrop-blur-sm border-white/30">
              <CardHeader>
                <CardTitle className="text-white">Filtrar Candidatos</CardTitle>
                <CardDescription className="text-white/60">
                  Gerencie os candidatos em processo de seleção
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

            {/* Lista de Candidatos */}
            <Card className="bg-black/30 backdrop-blur-sm border-white/30">
              <CardHeader>
                <CardTitle className="text-white">
                  Candidatos em Processo ({filteredCandidates.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/20">
                      <TableHead className="text-white">Candidato</TableHead>
                      <TableHead className="text-white">Vaga</TableHead>
                      <TableHead className="text-white">Localização</TableHead>
                      <TableHead className="text-white">Status</TableHead>
                      <TableHead className="text-white">Clínica Próxima</TableHead>
                      <TableHead className="text-white">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCandidates.map((candidate) => (
                      <TableRow key={candidate.id} className="border-white/20">
                        <TableCell>
                          <div className="space-y-1">
                            <p className="font-medium text-white">{candidate.name}</p>
                            <div className="flex items-center space-x-4 text-sm text-white/70">
                              <span className="flex items-center">
                                <Mail className="h-3 w-3 mr-1" />
                                {candidate.email}
                              </span>
                              <span className="flex items-center">
                                <Phone className="h-3 w-3 mr-1" />
                                {candidate.phone}
                              </span>
                            </div>
                            <div className="flex items-center text-sm text-white/60">
                              <Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />
                              {candidate.rating} • {candidate.experience}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <p className="text-white font-medium">{candidate.jobTitle}</p>
                            <Badge className="bg-primary/30 text-primary border-primary/50">
                              {candidate.profile}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-white">
                            <MapPin className="h-4 w-4 mr-1" />
                            {candidate.city}, {candidate.state}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusBadge(candidate.status)}>
                            {candidate.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <p className="text-white text-sm">{candidate.nearbyClinic}</p>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <PromoterProfile promoter={candidate}>
                              <Button size="sm" variant="outline" className="border-white/30 text-white bg-white/10">
                                <Eye className="h-3 w-3 mr-1" />
                                Ver
                              </Button>
                            </PromoterProfile>
                            <Button 
                              size="sm" 
                              className="bg-green-500/30 text-green-300 border-green-500/50 hover:bg-green-500/50"
                              onClick={() => handleApprove(candidate.id)}
                            >
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Aprovar
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="border-red-500/50 text-red-300 bg-red-500/10 hover:bg-red-500/20"
                              onClick={() => handleReject(candidate.id)}
                            >
                              <XCircle className="h-3 w-3 mr-1" />
                              Reprovar
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vagas Abertas */}
          <TabsContent value="jobs" className="space-y-6 mt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Vagas Abertas</h2>
              <NewRequestForm onSubmit={handleNewRequest} />
            </div>

            {openJobs.map((job) => (
              <Card key={job.id} className="bg-black/30 backdrop-blur-sm border-white/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">{job.title}</CardTitle>
                      <CardDescription className="text-white/60">
                        {job.company} • {job.location} • Criada em {job.createdAt}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-lg font-bold">{job.filled}/{job.quantity} Preenchidas</p>
                      <p className="text-white/60 text-sm">Prazo: {job.deadline}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-white/70" />
                        <span className="text-white text-sm">
                          {Math.ceil((new Date(job.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} dias restantes
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-white/70" />
                        <span className="text-white text-sm">
                          Progresso: {Math.round((job.filled / job.quantity) * 100)}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" className="border-white/30 text-white bg-white/10">
                        Ver Candidatos
                      </Button>
                      <Button className="bg-gradient-to-r from-primary to-secondary">
                        Gerenciar Vaga
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

export default RecruiterDashboard;
