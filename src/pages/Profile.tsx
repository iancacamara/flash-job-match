
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Clock, Edit3, Camera, Award, Bot } from "lucide-react";
import { UserType } from "@/App";

interface ProfileProps {
  userType: UserType;
}

const Profile = ({ userType }: ProfileProps) => {
  const navigate = useNavigate();

  const freelancerProfile = {
    name: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "(11) 99999-9999",
    cpf: "123.456.789-00",
    rating: 4.8,
    completedJobs: 12,
    bio: "Promotora experiente com mais de 2 anos de experiência em eventos e degustações. Comunicativa e sempre pontual.",
    skills: ["Atendimento ao Cliente", "Degustação", "Eventos", "Panfletagem"],
    availability: ["Segunda a Sexta", "Fins de Semana"],
    location: "São Paulo, SP - Zona Oeste",
    transport: "Transporte Público"
  };

  const companyProfile = {
    name: "FoodBrand Ltda",
    email: "contato@foodbrand.com.br", 
    phone: "(11) 3333-4444",
    cnpj: "12.345.678/0001-90",
    rating: 4.9,
    activeJobs: 8,
    about: "Empresa especializada em produtos alimentícios com mais de 15 anos no mercado. Trabalhamos com as melhores marcas do segmento.",
    sectors: ["Alimentício", "Bebidas", "Produtos Orgânicos"],
    regions: ["São Paulo - Capital", "Grande São Paulo"],
    established: "2008"
  };

  const profile = userType === 'freelancer' ? freelancerProfile : companyProfile;

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
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/e172e5ba-c278-4674-bb50-c1cccacbb507.png" 
                  alt="Supera Flash Logo" 
                  className="h-10 w-auto logo-animate"
                />
                <div>
                  <h1 className="text-xl font-bold text-white">Meu Perfil</h1>
                  <p className="text-sm text-white/60">
                    {userType === 'freelancer' ? 'Freelancer' : 'Empresa'}
                  </p>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white">
              <Edit3 className="h-4 w-4 mr-2" />
              Editar Perfil
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <Button 
                      size="icon" 
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary"
                      variant="secondary"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Profile Info */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-white">{profile.name}</h2>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-medium text-white">{profile.rating}</span>
                      </div>
                      
                      {userType === 'freelancer' ? (
                        <div className="flex items-center space-x-1">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-white/80">{(profile as any).completedJobs} jobs realizados</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-white/80">{(profile as any).activeJobs} ações ativas</span>
                        </div>
                      )}
                    </div>
                    
                    {userType === 'freelancer' && (
                      <div className="flex items-center space-x-2 text-white/60 mb-4">
                        <MapPin className="h-4 w-4" />
                        <span>{(profile as any).location}</span>
                      </div>
                    )}
                    
                    <p className="text-white/70">
                      {userType === 'freelancer' ? (profile as any).bio : (profile as any).about}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
              <CardHeader>
                <CardTitle className="text-white">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/80">E-mail</Label>
                    <Input id="email" value={profile.email} readOnly className="bg-white/5 border-white/20 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/80">Telefone</Label>
                    <Input id="phone" value={profile.phone} readOnly className="bg-white/5 border-white/20 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="document" className="text-white/80">
                      {userType === 'freelancer' ? 'CPF' : 'CNPJ'}
                    </Label>
                    <Input 
                      id="document" 
                      value={userType === 'freelancer' ? (profile as any).cpf : (profile as any).cnpj} 
                      readOnly 
                      className="bg-white/5 border-white/20 text-white"
                    />
                  </div>
                  
                  {userType === 'company' && (
                    <div className="space-y-2">
                      <Label htmlFor="established" className="text-white/80">Fundada em</Label>
                      <Input id="established" value={(profile as any).established} readOnly className="bg-white/5 border-white/20 text-white" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Skills/Sectors */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
              <CardHeader>
                <CardTitle className="text-white">
                  {userType === 'freelancer' ? 'Habilidades e Experiências' : 'Setores de Atuação'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-white/80">
                    {userType === 'freelancer' ? 'Habilidades' : 'Setores'}
                  </Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {(userType === 'freelancer' ? (profile as any).skills : (profile as any).sectors).map((item: string, index: number) => (
                      <Badge key={index} variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {userType === 'freelancer' && (
                  <>
                    <div>
                      <Label className="text-sm font-medium text-white/80">Disponibilidade</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {(profile as any).availability.map((time: string, index: number) => (
                          <Badge key={index} variant="outline" className="border-white/30 text-white/70">
                            {time}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium text-white/80">Transporte</Label>
                      <p className="text-white/60 mt-1">{(profile as any).transport}</p>
                    </div>
                  </>
                )}
                
                {userType === 'company' && (
                  <div>
                    <Label className="text-sm font-medium text-white/80">Regiões de Atuação</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {(profile as any).regions.map((region: string, index: number) => (
                        <Badge key={index} variant="outline" className="border-white/30 text-white/70">
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
              <CardHeader>
                <CardTitle className="text-lg text-white">Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">
                    {userType === 'freelancer' ? 'R$ 1.250' : 'R$ 25.400'}
                  </div>
                  <div className="text-sm text-white/60">
                    {userType === 'freelancer' ? 'Ganhos este mês' : 'Investido este mês'}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-primary">
                      {userType === 'freelancer' ? '95%' : '92%'}
                    </div>
                    <div className="text-xs text-white/60">
                      Taxa de {userType === 'freelancer' ? 'conclusão' : 'sucesso'}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xl font-bold text-secondary">
                      {userType === 'freelancer' ? '4.8' : '4.9'}
                    </div>
                    <div className="text-xs text-white/60">Avaliação média</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
              <CardHeader>
                <CardTitle className="text-lg text-white">Atividade Recente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {userType === 'freelancer' ? (
                  <>
                    <div className="text-sm">
                      <p className="font-medium text-white">Job concluído</p>
                      <p className="text-white/60 text-xs">Degustação no Shopping • Há 2 dias</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-white">Nova avaliação</p>
                      <p className="text-white/60 text-xs">5 estrelas da FoodBrand • Há 3 dias</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-white">Perfil atualizado</p>
                      <p className="text-white/60 text-xs">Novas habilidades adicionadas • Há 1 semana</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-sm">
                      <p className="font-medium text-white">Vaga preenchida</p>
                      <p className="text-white/60 text-xs">Evento Shopping Norte • Há 1 dia</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-white">5 novos candidatos</p>
                      <p className="text-white/60 text-xs">Reposição SuperMax • Há 2 dias</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-white">Avaliação enviada</p>
                      <p className="text-white/60 text-xs">Promotor Maria Silva • Há 3 dias</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
              <CardHeader>
                <CardTitle className="text-lg text-white">Ações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-white/20 text-white/80 hover:bg-white/10 hover:text-white">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Editar Perfil
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/20 text-white/80 hover:bg-white/10 hover:text-white">
                  <Star className="h-4 w-4 mr-2" />
                  Ver Avaliações
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/20 text-white/80 hover:bg-white/10 hover:text-white">
                  <Clock className="h-4 w-4 mr-2" />
                  Histórico
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sury Assistant FAB */}
        <div className="fixed bottom-6 right-6">
          <Button 
            size="lg" 
            className="rounded-full w-16 h-16 bg-gradient-to-r from-primary to-secondary shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
          >
            <Bot className="h-7 w-7" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
