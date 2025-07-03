
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, DollarSign, Building2, Calendar, Search, Filter, User, Briefcase } from "lucide-react";

const CandidateDashboard = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedProfile, setSelectedProfile] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data para vagas freelance/por demanda
  const freelanceJobs = [
    {
      id: 1,
      title: "Promotor Mercearia Seca",
      company: "Fort Atacadista",
      location: "Jundiaí, SP",
      type: "Por Demanda",
      duration: "3 dias",
      payment: "R$ 150/dia",
      description: "Promoção de produtos de mercearia seca durante final de semana",
      requirements: ["Experiência com vendas", "Disponibilidade fim de semana"],
      startDate: "15/01/2025"
    },
    {
      id: 2,
      title: "Promotor Perecíveis",
      company: "Supermercados ABC",
      location: "São Paulo, SP",
      type: "Por Demanda",
      duration: "5 dias",
      payment: "R$ 120/dia",
      description: "Promoção de laticínios e produtos refrigerados",
      requirements: ["Conhecimento em produtos perecíveis", "Flexibilidade de horário"],
      startDate: "20/01/2025"
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
      benefits: ["Vale combustível", "Comissões", "Flexibilidade"]
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
      benefits: ["Vale transporte", "Vale refeição", "Plano de saúde", "13º salário"]
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
      benefits: ["Carro da empresa", "Plano de saúde", "Participação nos lucros"]
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
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-white/30 text-white bg-white/10">
                <User className="h-4 w-4 mr-2" />
                Meu Perfil
              </Button>
              <Button variant="outline" className="border-white/30 text-white bg-white/10">
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
              <CardTitle className="text-white">Filtrar Oportunidades</CardTitle>
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
                      </div>
                      
                      <p className="text-white/80 mb-3">{job.company}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-white/70" />
                          <span className="text-white">{job.location}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-white/70" />
                          <span className="text-white">{job.duration}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-white/70" />
                          <span className="text-white">{job.payment}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-white/70" />
                          <span className="text-white">Início: {job.startDate}</span>
                        </div>
                      </div>
                      
                      <p className="text-white/70 mb-3">{job.description}</p>
                      
                      <div className="mb-4">
                        <p className="text-white/80 text-sm font-medium mb-2">Requisitos:</p>
                        <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <Button className="bg-gradient-to-r from-primary to-secondary">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Candidatar-se
                      </Button>
                      <Button variant="outline" className="border-white/30 text-white bg-white/10">
                        Ver Detalhes
                      </Button>
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
                      
                      <p className="text-white/80 mb-3">{job.company}</p>
                      
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
                      <Button className="bg-gradient-to-r from-primary to-secondary">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Candidatar-se
                      </Button>
                      <Button variant="outline" className="border-white/30 text-white bg-white/10">
                        Ver Detalhes
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

export default CandidateDashboard;
