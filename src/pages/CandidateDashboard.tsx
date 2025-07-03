
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar, 
  Star, 
  Filter, 
  Search, 
  Bell,
  User,
  Briefcase,
  TrendingUp,
  Award,
  Heart,
  Building2
} from "lucide-react";
import JobDetailsModal from "@/components/job/JobDetailsModal";

const CandidateDashboard = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data para vagas disponíveis
  const jobs = [
    {
      id: 1,
      title: "Promotor de Vendas - Supermercado",
      company: "SuperMax Atacado",
      location: "Jundiaí, SP",
      type: "Temporário",
      salary: "R$ 120,00/dia",
      distance: "2.3 km",
      startDate: "15/01/2025",
      urgent: true,
      description: "Procuramos promotor experiente para atuação em supermercado, realizando degustação de produtos alimentícios e ações promocionais.",
      requirements: [
        "Experiência prévia como promotor",
        "Disponibilidade para fins de semana",
        "Boa comunicação e relacionamento interpessoal"
      ],
      benefits: [
        "Pagamento no mesmo dia",
        "Vale transporte",
        "Ambiente climatizado"
      ]
    },
    {
      id: 2,
      title: "Repositor - Ação Especial",
      company: "Fort Atacadista",
      location: "Campinas, SP",
      type: "Pontual",
      salary: "R$ 80,00/dia",
      distance: "5.1 km",
      startDate: "18/01/2025",
      description: "Reposição de produtos em gôndolas durante ação promocional especial do Fort Atacadista.",
      requirements: [
        "Disponibilidade para trabalhar em pé",
        "Experiência em varejo",
        "Pontualidade"
      ]
    },
    {
      id: 3,
      title: "Demonstrador - Evento Shopping",
      company: "Shopping Plaza",
      location: "São Paulo, SP",
      type: "Evento",
      salary: "R$ 150,00/dia",
      distance: "8.7 km",
      startDate: "20/01/2025",
      description: "Demonstração de produtos eletrônicos durante evento especial no shopping.",
      requirements: [
        "Experiência com eletrônicos",
        "Boa apresentação pessoal",
        "Disponibilidade para finais de semana"
      ]
    }
  ];

  const stats = [
    {
      title: "Vagas Aplicadas",
      value: "12",
      change: "+3 esta semana",
      icon: Briefcase,
      color: "text-blue-400"
    },
    {
      title: "Taxa de Aprovação",
      value: "85%",
      change: "+5% vs mês passado",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      title: "Rating Médio",
      value: "4.8",
      change: "Excelente desempenho",
      icon: Star,
      color: "text-yellow-400"
    },
    {
      title: "Total Ganho",
      value: "R$ 2.340",
      change: "Este mês",
      icon: DollarSign,
      color: "text-primary"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === "all") return matchesSearch;
    if (activeFilter === "urgent") return matchesSearch && job.urgent;
    if (activeFilter === "temporary") return matchesSearch && job.type === "Temporário";
    if (activeFilter === "event") return matchesSearch && job.type === "Evento";
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard do Candidato</h1>
            <p className="text-white/70">Encontre as melhores oportunidades em trade marketing</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="border-white/30 text-white bg-white/10">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarImage src="/lovable-uploads/ef1cf83e-4eef-4a0f-b180-9486a1301442.png" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/50">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-white/10 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList className="bg-white/10 border-white/20">
            <TabsTrigger value="jobs" className="text-white data-[state=active]:bg-primary">
              Vagas Disponíveis
            </TabsTrigger>
            <TabsTrigger value="applied" className="text-white data-[state=active]:bg-primary">
              Minhas Aplicações
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-white data-[state=active]:bg-primary">
              Meu Perfil
            </TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            {/* Filtros e Busca */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/20">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                      <Input
                        placeholder="Buscar vagas por título, empresa ou localização..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Select value={activeFilter} onValueChange={setActiveFilter}>
                      <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/20">
                        <SelectItem value="all" className="text-white">Todas as Vagas</SelectItem>
                        <SelectItem value="urgent" className="text-white">Urgentes</SelectItem>
                        <SelectItem value="temporary" className="text-white">Temporárias</SelectItem>
                        <SelectItem value="event" className="text-white">Eventos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lista de Vagas */}
            <div className="grid gap-6">
              {filteredJobs.map((job) => (
                <JobDetailsModal key={job.id} job={job}>
                  <Card className="bg-white/5 backdrop-blur-xl border-white/20 hover:border-primary/50 transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                              {job.title}
                            </h3>
                            <Badge className="bg-blue-500/30 text-blue-300 border-blue-500/50">
                              {job.type}
                            </Badge>
                            {job.urgent && (
                              <Badge className="bg-red-500/30 text-red-300 border-red-500/50">
                                Urgente
                              </Badge>
                            )}
                          </div>
                          <p className="text-white/80 mb-3">
                            <Building2 className="h-4 w-4 inline mr-2" />
                            {job.company}
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary mb-1">{job.salary}</div>
                          <div className="text-white/60 text-sm">{job.distance}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-white/70">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/70">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">Início: {job.startDate}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-green-400">
                          <Star className="h-4 w-4" />
                          <span className="text-sm">92% compatível</span>
                        </div>
                      </div>

                      <p className="text-white/70 text-sm mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                            Ver Detalhes
                          </Button>
                          <Button size="sm" variant="outline" className="border-white/30 text-white bg-white/10">
                            <Heart className="h-4 w-4 mr-1" />
                            Salvar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </JobDetailsModal>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applied">
            <Card className="bg-white/5 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Minhas Aplicações</CardTitle>
                <CardDescription className="text-white/70">
                  Acompanhe o status das suas candidaturas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/60">Em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card className="bg-white/5 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Meu Perfil</CardTitle>
                <CardDescription className="text-white/70">
                  Gerencie suas informações pessoais e profissionais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/60">Em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CandidateDashboard;
