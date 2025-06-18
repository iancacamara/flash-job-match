
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Plus, Users, Clock, CheckCircle, AlertCircle, TrendingUp, Zap, Bell, User, Bot } from "lucide-react";

const CompanyDashboard = () => {
  const navigate = useNavigate();

  const activeJobs = [
    {
      id: 1,
      title: "Promotores para Evento de Lançamento",
      candidates: 12,
      filled: 8,
      total: 10,
      status: "Em andamento",
      deadline: "Hoje, 14h",
      location: "Shopping Center Norte"
    },
    {
      id: 2,
      title: "Reposição de Produtos - Rede de Supermercados", 
      candidates: 25,
      filled: 15,
      total: 15,
      status: "Completo",
      deadline: "Amanhã, 8h",
      location: "Grande São Paulo"
    },
    {
      id: 3,
      title: "Pesquisa de Mercado - Centro da Cidade",
      candidates: 8,
      filled: 3,
      total: 5,
      status: "Recrutando",
      deadline: "15/06, 9h",
      location: "Centro, SP"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completo": return "success";
      case "Em andamento": return "secondary";
      case "Recrutando": return "default";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
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
                  <p className="text-sm text-white/60">Conectando talentos</p>
                </div>
              </div>
              <div className="hidden md:block h-8 w-px bg-white/20"></div>
              <div className="hidden md:block">
                <h2 className="text-lg font-semibold text-white">FoodBrand Ltda</h2>
                <p className="text-sm text-white/60">Gerencie suas ações promocionais</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg"
                onClick={() => navigate('/create-job')}
              >
                <Plus className="h-4 w-4 mr-2" />
                Nova Vaga
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => navigate('/profile')} className="text-white/80 hover:text-white hover:bg-white/10">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">45</p>
                  <p className="text-xs text-white/60">Candidatos ativos</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">23</p>
                  <p className="text-xs text-white/60">Vagas preenchidas</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Clock className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">3</p>
                  <p className="text-xs text-white/60">Ações pendentes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">92%</p>
                  <p className="text-xs text-white/60">Taxa de sucesso</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Active Jobs */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Ações Ativas</h2>
              <Button variant="outline" className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white">
                Ver Todas
              </Button>
            </div>
            
            <div className="space-y-4">
              {activeJobs.map((job) => (
                <Card key={job.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                          <Badge 
                            variant={getStatusColor(job.status) as any}
                            className="text-xs text-white bg-white/20"
                          >
                            {job.status}
                          </Badge>
                        </div>
                        
                        <p className="text-white/70 text-sm mb-3">{job.location}</p>
                        
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4 text-white/60" />
                            <span className="text-white/80">{job.candidates} candidatos</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4 text-white/60" />
                            <span className="text-white/80">{job.deadline}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white">
                        Gerenciar
                      </Button>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">Progresso ({job.filled}/{job.total})</span>
                        <span className="text-white/80">{Math.round((job.filled / job.total) * 100)}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
                          style={{ width: `${(job.filled / job.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-lg text-white">Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start text-white/80 hover:bg-white/10 border-white/20 hover:text-white" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Nova Vaga
                </Button>
                <Button className="w-full justify-start text-white/80 hover:bg-white/10 border-white/20 hover:text-white" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Ver Candidatos
                </Button>
                <Button className="w-full justify-start text-white/80 hover:bg-white/10 border-white/20 hover:text-white" variant="outline">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Relatórios
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-lg text-white">Atividade Recente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm text-white/80">5 novos candidatos para "Evento de Lançamento"</p>
                      <p className="text-xs text-white/60">Há 2 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm text-white/80">Vaga de "Reposição" foi totalmente preenchida</p>
                      <p className="text-xs text-white/60">Há 4 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm text-white/80">3 candidatos aguardando aprovação</p>
                      <p className="text-xs text-white/60">Há 6 horas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-lg text-white">Performance</CardTitle>
                <CardDescription className="text-white/60">Últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/80">Taxa de preenchimento</span>
                    <span className="font-semibold text-success">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/80">Tempo médio de contratação</span>
                    <span className="font-semibold text-white">2.3 dias</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/80">Satisfação dos freelancers</span>
                    <span className="font-semibold text-secondary">4.8/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sury Assistant FAB */}
        <div className="fixed bottom-6 right-6">
          <Button 
            size="lg" 
            className="rounded-full w-16 h-16 bg-gradient-to-r from-primary to-secondary shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
          >
            <Bot className="h-7 w-7 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
