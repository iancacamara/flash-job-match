
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, DollarSign, Building2, Calendar, Search, Filter, User, Briefcase, CreditCard, Map, LogOut, Star } from "lucide-react";
import JobsMap from "@/components/map/JobsMap";
import SuperaWallet from "@/components/wallet/SuperaWallet";
import JobDetailsModal from "@/components/job/JobDetailsModal";

const CandidateDashboard = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedProfile, setSelectedProfile] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data para vagas freelance/por demanda
  const freelanceJobs = [
    {
      id: 1,
      title: "Promotor de Degustação",
      company: "FoodBrand",
      location: "Shopping Vila Lobos - Av das Nações Unidas, 4777",
      coordinates: [-46.8838, -23.1858] as [number, number],
      type: "Por Demanda",
      duration: "4 horas de trabalho",
      payment: "R$ 120,00",
      paymentType: "Pagamento no mesmo dia",
      schedule: "Hoje, 14h-18h",
      urgent: true,
      description: "Procuramos promotor(a) para degustação de novos sabores de iogurte na praça de alimentação do Shopping Vila Lobos. Experiência em atendimento ao público é um diferencial.",
      requirements: [
        "Maior de 18 anos",
        "Experiência em atendimento ao público",
        "Disponibilidade para trabalhar em pé por 4 horas",
        "Comunicação clara e simpática"
      ],
      benefits: [
        "Pagamento no mesmo dia",
        "Vale transporte",
        "Possibilidade de trabalhos futuros",
        "Ambiente climatizado"
      ],
      startDate: "Hoje",
      distance: "2.5 km",
      compatibility: 92
    },
    {
      id: 2,
      title: "Reposição - SuperMax",
      company: "SuperMax Atacados",
      location: "Armazém",
      coordinates: [-46.6333, -23.5505] as [number, number],
      type: "Por Demanda",
      duration: "6 horas",
      payment: "R$ 80,00",
      paymentType: "Semanal",
      schedule: "Amanhã, 8h-14h",
      description: "Reposição de produtos em prateleiras e organização do estoque",
      requirements: [
        "Experiência com produtos de atacado",
        "Disponibilidade manhã",
        "Força física para carregar produtos"
      ],
      benefits: [
        "Vale transporte",
        "Vale refeição",
        "Ambiente de trabalho agradável"
      ],
      startDate: "Amanhã",
      distance: "1.8 km",
      compatibility: 78
    }
  ];

  // Mock data para vagas fixas
  const permanentJobs = [
    {
      id: 3,
      title: "Promotor PJ - Express",
      company: "GM Promo",
      location: "São Paulo, SP",
      type: "PJ",
      salary: "R$ 2.800/mês",
      description: "Vaga fixa para atendimento em múltiplas lojas da região",
      requirements: ["CNH", "Veículo próprio", "Experiência mínima 1 ano"],
      benefits: ["Vale combustível", "Comissões", "Flexibilidade"],
      compatibility: 85
    },
    {
      id: 4,
      title: "Promotor CLT - Roteirista",
      company: "GM Promo",
      location: "Rio de Janeiro, RJ",
      type: "CLT",
      salary: "R$ 2.200/mês + benefícios",
      description: "Promotor fixo com rota definida para grandes redes",
      requirements: ["Ensino médio completo", "Experiência em vendas", "Residir na zona sul"],
      benefits: ["Vale transporte", "Vale refeição", "Plano de saúde", "13º salário"],
      compatibility: 91
    },
    {
      id: 5,
      title: "Coordenador de Promotores",
      company: "GM Promo",
      location: "Belo Horizonte, MG",
      type: "CLT",
      salary: "R$ 3.500/mês + benefícios",
      description: "Coordenação de equipe de promotores em MG",
      requirements: ["Superior completo", "Experiência em liderança", "CNH categoria B"],
      benefits: ["Carro da empresa", "Plano de saúde", "Participação nos lucros"],
      compatibility: 67
    }
  ];

  const locations = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Jundiaí", "Salvador"];
  const profiles = ["Mercearia Seca", "Perecíveis", "Açougue", "Manipulados", "Coordenação"];

  const getJobTypeBadge = (type: string) => {
    switch (type) {
      case "Por Demanda": return "bg-blue-500/30 text-blue-300 border-blue-500/50";
      case "PJ": return "bg-green-500/30 text-green-300 border-green-500/50";
      case "CLT": return "bg-purple-500/30 text-purple-300 border-purple-500/50";
      default: return "bg-gray-500/30 text-gray-300 border-gray-500/50";
    }
  };

  const getCompatibilityColor = (compatibility: number) => {
    if (compatibility >= 90) return "text-green-400";
    if (compatibility >= 70) return "text-yellow-400";
    return "text-red-400";
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
                src="/lovable-uploads/e172e5ba-c278-4674-bb50-c1cccacbb507.png" 
                alt="Supera Flash Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-white">Supera Flash</h1>
                <p className="text-sm text-white/80">Área do Candidato</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <SuperaWallet>
                <Button variant="outline" className="border-white/30 text-white bg-white/10">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Supera Bank
                </Button>
              </SuperaWallet>
              
              <Button 
                variant="outline" 
                className="border-white/30 text-white bg-white/10"
                onClick={handleProfile}
              >
                <User className="h-4 w-4 mr-2" />
                Meu Perfil
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
        <Tabs defaultValue="freelance" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-black/30 backdrop-blur-sm">
            <TabsTrigger value="freelance" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Vagas por Demanda
            </TabsTrigger>
            <TabsTrigger value="permanent" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Vagas Fixas (PJ/CLT)
            </TabsTrigger>
          </TabsList>

          {/* Filtros */}
          <Card className="bg-black/30 backdrop-blur-sm border-white/30 mt-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white">Oportunidades Próximas</CardTitle>
                  <CardDescription className="text-white/60">
                    Encontre trabalhos ideais para seu perfil
                  </CardDescription>
                </div>
                <JobsMap jobs={freelanceJobs}>
                  <Button variant="outline" className="border-primary/50 text-primary bg-primary/10">
                    <Map className="h-4 w-4 mr-2" />
                    Ver no Mapa
                  </Button>
                </JobsMap>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label className="text-white">Buscar</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                    <Input
                      placeholder="Cargo ou empresa..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-white">Local</Label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-white/20">
                      <SelectItem value="all" className="text-white">Todos</SelectItem>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location} className="text-white">
                          {location}
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
                    Aplicar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vagas Por Demanda */}
          <TabsContent value="freelance" className="space-y-4 mt-6">
            <h2 className="text-2xl font-bold text-white mb-4">Oportunidades por Demanda</h2>
            
            {freelanceJobs.map((job) => (
              <Card key={job.id} className="bg-black/30 backdrop-blur-sm border-white/30">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                        <Badge className={getJobTypeBadge(job.type)}>
                          {job.type}
                        </Badge>
                        {job.urgent && (
                          <Badge className="bg-red-500/30 text-red-300 border-red-500/50">
                            Urgente
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-2">
                          <Building2 className="h-4 w-4 text-white/70" />
                          <span className="text-white/80">{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className={`font-medium ${getCompatibilityColor(job.compatibility)}`}>
                            {job.compatibility}% Match
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-white/70" />
                          <span className="text-white">{job.location}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-white/70" />
                          <span className="text-white">{job.schedule}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-white/70" />
                          <span className="text-white">{job.payment}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-white/70" />
                          <span className="text-white">{job.distance}</span>
                        </div>
                      </div>
                      
                      <p className="text-white/70 mb-3">{job.description}</p>
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <JobDetailsModal job={job}>
                        <Button className="bg-gradient-to-r from-primary to-secondary">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Ver Detalhes
                        </Button>
                      </JobDetailsModal>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Vagas Fixas */}
          <TabsContent value="permanent" className="space-y-4 mt-6">
            <h2 className="text-2xl font-bold text-white mb-4">Vagas Fixas (PJ/CLT)</h2>
            
            {permanentJobs.map((job) => (
              <Card key={job.id} className="bg-black/30 backdrop-blur-sm border-white/30">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                        <Badge className={getJobTypeBadge(job.type)}>
                          {job.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-2">
                          <Building2 className="h-4 w-4 text-white/70" />
                          <span className="text-white/80">{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className={`font-medium ${getCompatibilityColor(job.compatibility)}`}>
                            {job.compatibility}% Match
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-white/70" />
                          <span className="text-white">{job.location}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-white/70" />
                          <span className="text-white">{job.salary}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Building2 className="h-4 w-4 text-white/70" />
                          <span className="text-white">{job.type}</span>
                        </div>
                      </div>
                      
                      <p className="text-white/70 mb-3">{job.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-white/80 text-sm font-medium mb-2">Requisitos:</p>
                          <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                            {job.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <p className="text-white/80 text-sm font-medium mb-2">Benefícios:</p>
                          <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                            {job.benefits.map((benefit, index) => (
                              <li key={index}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <JobDetailsModal job={job}>
                        <Button className="bg-gradient-to-r from-primary to-secondary">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Candidatar-se
                        </Button>
                      </JobDetailsModal>
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

export default CandidateDashboard;
