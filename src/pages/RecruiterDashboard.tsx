
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
import { Users, MapPin, Clock, Phone, Mail, Filter, Search, Calendar, Building2, Stethoscope, Plus, Eye, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const RecruiterDashboard = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedProfile, setSelectedProfile] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data para candidatos
  const candidates = [
    {
      id: 1,
      name: "Maria Silva",
      email: "maria@email.com",
      phone: "(11) 99999-0001",
      city: "São Paulo",
      profile: "Mercearia Seca",
      availability: "Manhã/Tarde",
      status: "Aprovado",
      rating: 4.8,
      experienceYears: 3,
      lastInterview: "15/05/2024",
      nearbyClinic: "Clínica São Paulo - 800m"
    },
    {
      id: 2,
      name: "João Santos",
      email: "joao@email.com",
      phone: "(11) 99999-0002",
      city: "São Paulo",
      profile: "Perecíveis",
      availability: "Integral",
      status: "Pendente",
      rating: 4.5,
      experienceYears: 2,
      lastInterview: "10/05/2024",
      nearbyClinic: "Clínica Saúde Total - 1.2km"
    },
    {
      id: 3,
      name: "Ana Costa",
      email: "ana@email.com",
      phone: "(11) 99999-0003",
      city: "Rio de Janeiro",
      profile: "Açougue",
      availability: "Tarde/Noite",
      status: "Aprovado",
      rating: 4.9,
      experienceYears: 5,
      lastInterview: "12/05/2024",
      nearbyClinic: "Clínica Rio Saúde - 600m"
    }
  ];

  // Mock data para vagas fixas
  const permanentJobs = [
    {
      id: 1,
      title: "Promotor de Vendas - CLT",
      company: "Supera Flash",
      type: "CLT",
      salary: "R$ 2.500,00",
      location: "São Paulo, SP",
      applications: 25,
      status: "Ativa"
    },
    {
      id: 2,
      title: "Coordenador de Equipe - PJ",
      company: "Supera Flash",
      type: "PJ",
      salary: "R$ 4.000,00",
      location: "Rio de Janeiro, RJ",
      applications: 15,
      status: "Ativa"
    }
  ];

  const cities = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Brasília"];
  const profiles = ["Mercearia Seca", "Perecíveis", "Açougue", "Manipulados", "Geral"];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Aprovado": return "bg-green-500/30 text-green-300 border-green-500/50";
      case "Pendente": return "bg-yellow-500/30 text-yellow-300 border-yellow-500/50";
      case "Rejeitado": return "bg-red-500/30 text-red-300 border-red-500/50";
      default: return "bg-gray-500/30 text-gray-300 border-gray-500/50";
    }
  };

  const filteredCandidates = candidates.filter(candidate => {
    const matchesCity = selectedCity === "all" || candidate.city === selectedCity;
    const matchesProfile = selectedProfile === "all" || candidate.profile === selectedProfile;
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCity && matchesProfile && matchesSearch;
  });

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
                    Supera Flash - RH
                  </h1>
                  <p className="text-sm text-white/80">Gestão de Candidatos</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                onClick={() => navigate('/create-job')}
              >
                <Plus className="h-4 w-4 mr-2" />
                Nova Vaga
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="candidates" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-black/30 backdrop-blur-sm">
            <TabsTrigger value="candidates" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Candidatos Intermitentes
            </TabsTrigger>
            <TabsTrigger value="permanent" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Vagas Fixas (CLT/PJ)
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Candidatos Intermitentes */}
          <TabsContent value="candidates" className="space-y-6 mt-6">
            {/* Filtros */}
            <Card className="bg-black/30 backdrop-blur-sm border-white/30">
              <CardHeader>
                <CardTitle className="text-white">Filtros de Candidatos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtrar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabela de Candidatos */}
            <Card className="bg-black/30 backdrop-blur-sm border-white/30">
              <CardHeader>
                <CardTitle className="text-white">Candidatos Disponíveis ({filteredCandidates.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/20">
                      <TableHead className="text-white">Candidato</TableHead>
                      <TableHead className="text-white">Perfil</TableHead>
                      <TableHead className="text-white">Disponibilidade</TableHead>
                      <TableHead className="text-white">Status</TableHead>
                      <TableHead className="text-white">Clínica Próxima</TableHead>
                      <TableHead className="text-white">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCandidates.map((candidate) => (
                      <TableRow key={candidate.id} className="border-white/20 hover:bg-white/5">
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
                            <div className="flex items-center text-sm text-white/70">
                              <MapPin className="h-3 w-3 mr-1" />
                              {candidate.city}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-primary/30 text-primary border-primary/50">
                            {candidate.profile}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-white">
                            <Clock className="h-4 w-4 mr-1" />
                            {candidate.availability}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusBadge(candidate.status)}>
                            {candidate.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-sm text-white">
                            <Stethoscope className="h-4 w-4 mr-1 text-green-400" />
                            <span>{candidate.nearbyClinic}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                              <Eye className="h-3 w-3 mr-1" />
                              Ver
                            </Button>
                            {candidate.status === "Pendente" && (
                              <>
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Aprovar
                                </Button>
                                <Button size="sm" variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/20">
                                  <XCircle className="h-3 w-3 mr-1" />
                                  Rejeitar
                                </Button>
                              </>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vagas Fixas */}
          <TabsContent value="permanent" className="space-y-6 mt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Vagas Internas</h2>
              <Button className="bg-gradient-to-r from-primary to-secondary">
                <Plus className="h-4 w-4 mr-2" />
                Nova Vaga Fixa
              </Button>
            </div>

            <div className="grid gap-4">
              {permanentJobs.map((job) => (
                <Card key={job.id} className="bg-black/30 backdrop-blur-sm border-white/30">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                          <Badge className="bg-secondary/30 text-secondary border-secondary/50">
                            {job.type}
                          </Badge>
                        </div>
                        
                        <p className="text-white/80 mb-3">{job.company}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-white/70" />
                            <span className="text-white">{job.location}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Building2 className="h-4 w-4 text-white/70" />
                            <span className="text-white">{job.salary}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-white/70" />
                            <span className="text-white">{job.applications} candidatos</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2 ml-4">
                        <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                          Gerenciar
                        </Button>
                        <Badge className="bg-success/30 text-success border-success/50 justify-center">
                          {job.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6 mt-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-black/30 backdrop-blur-sm border-white/30">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">156</p>
                      <p className="text-xs text-white">Total Candidatos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 backdrop-blur-sm border-white/30">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-success/30 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">89</p>
                      <p className="text-xs text-white">Aprovados</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 backdrop-blur-sm border-white/30">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-orange-500/30 rounded-lg flex items-center justify-center">
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">23</p>
                      <p className="text-xs text-white">Pendentes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 backdrop-blur-sm border-white/30">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-secondary/30 rounded-lg flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">12</p>
                      <p className="text-xs text-white">Este mês</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
