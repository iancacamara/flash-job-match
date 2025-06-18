import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate, useParams } from "react-router-dom";
import { MapPin, Clock, DollarSign, Users, Building2, ArrowLeft, CheckCircle, Calendar, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();

  // Mock job data - in real app would fetch by ID
  const job = {
    id: 1,
    title: "Promotor de Degustação - Shopping Center",
    company: "FoodBrand",
    location: "Shopping Vila Lobos - Av. das Nações Unidas, 4777",
    date: "Hoje, 14h-18h",
    payment: "R$ 120,00",
    type: "Degustação",
    distance: "2.5 km",
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
    companyInfo: {
      name: "FoodBrand",
      rating: 4.8,
      completedJobs: 156,
      about: "Empresa especializada em produtos alimentícios com mais de 15 anos no mercado. Trabalhamos com as melhores marcas do segmento."
    }
  };

  const handleAcceptJob = () => {
    toast({
      title: "Vaga aceita com sucesso!",
      description: "Você receberá mais detalhes por WhatsApp em alguns minutos.",
    });
    navigate('/dashboard');
  };

  const handleRejectJob = () => {
    toast({
      title: "Vaga recusada",
      description: "Obrigado pelo feedback. Vamos encontrar outras oportunidades para você.",
      variant: "destructive"
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
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
              <h1 className="text-xl font-bold text-white">Detalhes da Vaga</h1>
              <p className="text-sm text-white/60">#{job.id}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h1 className="text-2xl font-bold text-white">{job.title}</h1>
                        {job.urgent && (
                          <Badge variant="destructive">Urgente</Badge>
                        )}
                        <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">{job.type}</Badge>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-white/70 mb-4">
                        <Building2 className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-3xl font-bold text-success">{job.payment}</div>
                      <div className="text-sm text-white/60">4 horas de trabalho</div>
                    </div>
                  </div>

                  <Separator className="bg-white/20" />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-white/60" />
                      <div>
                        <div className="font-medium text-white">{job.location}</div>
                        <div className="text-sm text-white/70">{job.distance} de distância</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-white/60" />
                      <div>
                        <div className="font-medium text-white">{job.date}</div>
                        <div className="text-sm text-white/70">4 horas</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 text-success" />
                      <div>
                        <div className="font-medium text-success">{job.payment}</div>
                        <div className="text-sm text-white/70">Pagamento no dia</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Descrição da Vaga</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/70 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-white">Requisitos</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-white">Benefícios</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Sobre a Empresa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{job.companyInfo.name}</h4>
                        <div className="flex items-center space-x-2 text-sm text-white/70">
                          <span>⭐ {job.companyInfo.rating}</span>
                          <span>•</span>
                          <span>{job.companyInfo.completedJobs} jobs realizados</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="border-white/20 text-white/80 hover:bg-white/10">
                      Ver Perfil
                    </Button>
                  </div>
                  
                  <p className="text-white/70">
                    {job.companyInfo.about}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardContent className="p-6 space-y-4">
                <Button 
                  onClick={handleAcceptJob}
                  className="w-full bg-success hover:bg-success/90 text-lg py-6 text-white"
                  size="lg"
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Aceitar Vaga
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={handleRejectJob}
                  className="w-full border-destructive text-destructive hover:bg-destructive hover:text-white border"
                  size="lg"
                >
                  Não Tenho Interesse
                </Button>
                
                <Separator className="bg-white/20" />
                
                <Button variant="ghost" className="w-full text-white/80 hover:bg-white/10">
                  <Calendar className="h-4 w-4 mr-2" />
                  Adicionar ao Calendário
                </Button>
              </CardContent>
            </Card>

            {/* Match Score */}
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-lg text-white">Compatibilidade</CardTitle>
                <CardDescription className="text-white/70">Com base no seu perfil</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-success">92% Match</span>
                    <span className="text-sm text-white/70">Muito Alto</span>
                  </div>
                  
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div className="bg-success h-3 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white">Localização</span>
                      <span className="font-medium text-success">✓ Próximo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Experiência</span>
                      <span className="font-medium text-success">✓ Compatível</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Disponibilidade</span>
                      <span className="font-medium text-success">✓ Disponível</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-lg text-white">Vagas Similares</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg hover:bg-white/10 cursor-pointer transition-colors border-white/30">
                  <h4 className="font-medium text-sm text-white">Reposição - SuperMax</h4>
                  <p className="text-xs text-white/70">Amanhã • R$ 80,00</p>
                </div>
                <div className="p-3 border rounded-lg hover:bg-white/10 cursor-pointer transition-colors border-white/30">
                  <h4 className="font-medium text-sm text-white">Evento - Shopping ABC</h4>
                  <p className="text-xs text-white/70">15/06 • R$ 150,00</p>
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
            <Bot className="h-7 w-7" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
