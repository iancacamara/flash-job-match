
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Clock, Edit3, Camera, Award } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold">Meu Perfil</h1>
                <p className="text-sm text-muted-foreground">
                  {userType === 'freelancer' ? 'Freelancer' : 'Empresa'}
                </p>
              </div>
            </div>
            
            <Button variant="outline">
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
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <Button 
                      size="icon" 
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full"
                      variant="secondary"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Profile Info */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{profile.rating}</span>
                      </div>
                      
                      {userType === 'freelancer' ? (
                        <div className="flex items-center space-x-1">
                          <Award className="h-4 w-4 text-primary" />
                          <span>{(profile as any).completedJobs} jobs realizados</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{(profile as any).activeJobs} ações ativas</span>
                        </div>
                      )}
                    </div>
                    
                    {userType === 'freelancer' && (
                      <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4" />
                        <span>{(profile as any).location}</span>
                      </div>
                    )}
                    
                    <p className="text-muted-foreground">
                      {userType === 'freelancer' ? (profile as any).bio : (profile as any).about}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" value={profile.email} readOnly />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" value={profile.phone} readOnly />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="document">
                      {userType === 'freelancer' ? 'CPF' : 'CNPJ'}
                    </Label>
                    <Input 
                      id="document" 
                      value={userType === 'freelancer' ? (profile as any).cpf : (profile as any).cnpj} 
                      readOnly 
                    />
                  </div>
                  
                  {userType === 'company' && (
                    <div className="space-y-2">
                      <Label htmlFor="established">Fundada em</Label>
                      <Input id="established" value={(profile as any).established} readOnly />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Skills/Sectors */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {userType === 'freelancer' ? 'Habilidades e Experiências' : 'Setores de Atuação'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">
                    {userType === 'freelancer' ? 'Habilidades' : 'Setores'}
                  </Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {(userType === 'freelancer' ? (profile as any).skills : (profile as any).sectors).map((item: string, index: number) => (
                      <Badge key={index} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {userType === 'freelancer' && (
                  <>
                    <div>
                      <Label className="text-sm font-medium">Disponibilidade</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {(profile as any).availability.map((time: string, index: number) => (
                          <Badge key={index} variant="outline">
                            {time}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium">Transporte</Label>
                      <p className="text-muted-foreground mt-1">{(profile as any).transport}</p>
                    </div>
                  </>
                )}
                
                {userType === 'company' && (
                  <div>
                    <Label className="text-sm font-medium">Regiões de Atuação</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {(profile as any).regions.map((region: string, index: number) => (
                        <Badge key={index} variant="outline">
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
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">
                    {userType === 'freelancer' ? 'R$ 1.250' : 'R$ 25.400'}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {userType === 'freelancer' ? 'Ganhos este mês' : 'Investido este mês'}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-primary">
                      {userType === 'freelancer' ? '95%' : '92%'}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Taxa de {userType === 'freelancer' ? 'conclusão' : 'sucesso'}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xl font-bold text-secondary">
                      {userType === 'freelancer' ? '4.8' : '4.9'}
                    </div>
                    <div className="text-xs text-muted-foreground">Avaliação média</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Atividade Recente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {userType === 'freelancer' ? (
                  <>
                    <div className="text-sm">
                      <p className="font-medium">Job concluído</p>
                      <p className="text-muted-foreground text-xs">Degustação no Shopping • Há 2 dias</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Nova avaliação</p>
                      <p className="text-muted-foreground text-xs">5 estrelas da FoodBrand • Há 3 dias</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Perfil atualizado</p>
                      <p className="text-muted-foreground text-xs">Novas habilidades adicionadas • Há 1 semana</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-sm">
                      <p className="font-medium">Vaga preenchida</p>
                      <p className="text-muted-foreground text-xs">Evento Shopping Norte • Há 1 dia</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">5 novos candidatos</p>
                      <p className="text-muted-foreground text-xs">Reposição SuperMax • Há 2 dias</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Avaliação enviada</p>
                      <p className="text-muted-foreground text-xs">Promotor Maria Silva • Há 3 dias</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Editar Perfil
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="h-4 w-4 mr-2" />
                  Ver Avaliações
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Histórico
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
