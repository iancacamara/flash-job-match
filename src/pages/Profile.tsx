
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Mail, Phone, MapPin, Star, Edit, Settings, LogOut, Camera, Bot } from "lucide-react";
import { UserType } from "@/App";

interface ProfileProps {
  userType: UserType;
}

const Profile = ({ userType }: ProfileProps) => {
  const navigate = useNavigate();

  const freelancerStats = [
    { label: "Jobs Completados", value: "47", color: "text-success" },
    { label: "Avaliação Média", value: "4.8", color: "text-secondary" },
    { label: "Taxa de Conclusão", value: "96%", color: "text-primary" },
    { label: "Ganhos Totais", value: "R$ 8.450", color: "text-success" }
  ];

  const companyStats = [
    { label: "Vagas Publicadas", value: "23", color: "text-primary" },
    { label: "Freelancers Contratados", value: "156", color: "text-secondary" },
    { label: "Taxa de Sucesso", value: "94%", color: "text-success" },
    { label: "Avaliação da Empresa", value: "4.7", color: "text-secondary" }
  ];

  const skills = ["Promoção", "Vendas", "Atendimento", "Degustação", "Eventos"];
  const recentJobs = [
    { title: "Evento Shopping Vila Lobos", date: "15/05/2024", rating: 5 },
    { title: "Reposição SuperMax", date: "12/05/2024", rating: 4.8 },
    { title: "Pesquisa Mercado Centro", date: "08/05/2024", rating: 4.9 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate('/dashboard')}
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <img 
                src="/lovable-uploads/e172e5ba-c278-4674-bb50-c1cccacbb507.png" 
                alt="Supera Flash Logo" 
                className="h-10 w-auto logo-animate"
              />
              <div>
                <h1 className="text-xl font-bold text-white">Meu Perfil</h1>
                <p className="text-sm text-white/60">Gerencie suas informações</p>
              </div>
            </div>
            
            <Button variant="outline" className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white">
              <Edit className="h-4 w-4 mr-2" />
              Editar
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Profile Header */}
        <Card className="bg-white/10 backdrop-blur-xl border-white/20 mb-8">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
                <Button size="icon" className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-white/30">
                  <Camera className="h-4 w-4 text-white" />
                </Button>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-2xl font-bold text-white">Maria Silva Santos</h2>
                  <Badge className="bg-success/20 text-success border-success/30">Verificado</Badge>
                </div>
                
                <div className="flex items-center space-x-4 text-white/70 mb-4">
                  <div className="flex items-center space-x-1">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">maria.silva@email.com</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">São Paulo, SP</span>
                  </div>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed">
                  {userType === 'freelancer' 
                    ? "Promotora experiente com mais de 3 anos no mercado. Especializada em eventos corporativos, degustações e ações promocionais em shopping centers."
                    : "Empresa líder em marketing promocional e eventos corporativos. Conectamos marcas aos consumidores através de experiências memoráveis."
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stats */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Estatísticas</CardTitle>
                <CardDescription className="text-white/60">Seus números no Supera Flash</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {(userType === 'freelancer' ? freelancerStats : companyStats).map((stat, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-sm text-white/60 mb-1">{stat.label}</p>
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {userType === 'freelancer' && (
              <>
                {/* Skills */}
                <Card className="bg-white/10 backdrop-blur-xl border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Habilidades</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Jobs */}
                <Card className="bg-white/10 backdrop-blur-xl border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Trabalhos Recentes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentJobs.map((job, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                        <div>
                          <h4 className="font-medium text-white">{job.title}</h4>
                          <p className="text-sm text-white/60">{job.date}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium text-white">{job.rating}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Settings */}
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Configurações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-white/20 text-white/80 hover:bg-white/10 hover:text-white">
                  <Settings className="h-4 w-4 mr-2" />
                  Configurações da Conta
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/20 text-white/80 hover:bg-white/10 hover:text-white">
                  <User className="h-4 w-4 mr-2" />
                  Dados Pessoais
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/20 text-white/80 hover:bg-white/10 hover:text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Notificações
                </Button>
              </CardContent>
            </Card>

            {/* Activity Summary */}
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Resumo da Atividade</CardTitle>
                <CardDescription className="text-white/60">Últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/80">
                    {userType === 'freelancer' ? 'Jobs realizados' : 'Vagas publicadas'}
                  </span>
                  <span className="font-semibold text-white">
                    {userType === 'freelancer' ? '8' : '12'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/80">Horas ativas</span>
                  <span className="font-semibold text-white">
                    {userType === 'freelancer' ? '32h' : '156h'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/80">Avaliação média</span>
                  <span className="font-semibold text-secondary">4.8/5</span>
                </div>
              </CardContent>
            </Card>

            {/* Logout */}
            <Button 
              variant="outline" 
              className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50"
              onClick={() => navigate('/')}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair da Conta
            </Button>
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

export default Profile;
