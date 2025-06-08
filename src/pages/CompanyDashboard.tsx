
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Plus, Users, Clock, CheckCircle, AlertCircle, TrendingUp, Zap, Bell, User } from "lucide-react";

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
      case "Em andamento": return "warning";
      case "Recrutando": return "primary";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">FoodBrand Ltda</h1>
                <p className="text-sm text-muted-foreground">Gerencie suas ações promocionais</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate('/create-job')}
              >
                <Plus className="h-4 w-4 mr-2" />
                Nova Vaga
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
        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold">45</p>
                  <p className="text-xs text-muted-foreground">Candidatos ativos</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <div>
                  <p className="text-2xl font-bold">23</p>
                  <p className="text-xs text-muted-foreground">Vagas preenchidas</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-xs text-muted-foreground">Ações pendentes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-2xl font-bold">92%</p>
                  <p className="text-xs text-muted-foreground">Taxa de sucesso</p>
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
              <h2 className="text-2xl font-bold">Ações Ativas</h2>
              <Button variant="outline">
                Ver Todas
              </Button>
            </div>
            
            <div className="space-y-4">
              {activeJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold">{job.title}</h3>
                          <Badge 
                            variant={getStatusColor(job.status) as any}
                            className="text-xs"
                          >
                            {job.status}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-3">{job.location}</p>
                        
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{job.candidates} candidatos</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{job.deadline}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        Gerenciar
                      </Button>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progresso ({job.filled}/{job.total})</span>
                        <span>{Math.round((job.filled / job.total) * 100)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all"
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
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Nova Vaga
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Ver Candidatos
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Relatórios
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Atividade Recente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm">5 novos candidatos para "Evento de Lançamento"</p>
                      <p className="text-xs text-muted-foreground">Há 2 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm">Vaga de "Reposição" foi totalmente preenchida</p>
                      <p className="text-xs text-muted-foreground">Há 4 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm">3 candidatos aguardando aprovação</p>
                      <p className="text-xs text-muted-foreground">Há 6 horas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance</CardTitle>
                <CardDescription>Últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Taxa de preenchimento</span>
                    <span className="font-semibold text-success">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Tempo médio de contratação</span>
                    <span className="font-semibold">2.3 dias</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Satisfação dos freelancers</span>
                    <span className="font-semibold text-secondary">4.8/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
