
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Clock, DollarSign, Calendar, CheckCircle, Star, Building2, Users, Briefcase } from "lucide-react";

interface JobDetailsModalProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    salary?: string;
    payment?: string;
    distance: string;
    startDate: string;
    description: string;
    requirements?: string[];
    benefits?: string[];
    urgent?: boolean;
    duration?: string;
    schedule?: string;
    paymentType?: string;
  };
  children: React.ReactNode;
}

const JobDetailsModal = ({ job, children }: JobDetailsModalProps) => {
  const [isApplied, setIsApplied] = useState(false);

  const handleApply = () => {
    setIsApplied(true);
    console.log('Applied to job:', job.id);
  };

  const getCompatibilityColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-400";
    if (percentage >= 70) return "text-yellow-400";
    return "text-red-400";
  };

  const compatibility = 92;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-white/20">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">Detalhes da Vaga</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Card className="bg-black/30 backdrop-blur-sm border-white/30">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <CardTitle className="text-white text-xl">{job.title}</CardTitle>
                    <Badge className="bg-blue-500/30 text-blue-300 border-blue-500/50">
                      {job.type}
                    </Badge>
                    {job.urgent && (
                      <Badge className="bg-red-500/30 text-red-300 border-red-500/50">
                        Urgente
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-white/80 text-lg">
                    <Building2 className="h-4 w-4 inline mr-2" />
                    {job.company}
                  </CardDescription>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {job.payment || job.salary}
                  </div>
                  <div className="text-white/60 text-sm">
                    {job.duration && `${job.duration} • `}
                    {job.distance}
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-black/30 backdrop-blur-sm border-white/30">
                <CardHeader>
                  <CardTitle className="text-white">Informações do Trabalho</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-white/70" />
                      <div>
                        <p className="text-white/60 text-sm">Localização</p>
                        <p className="text-white">{job.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-white/70" />
                      <div>
                        <p className="text-white/60 text-sm">Horário</p>
                        <p className="text-white">{job.schedule || "14h-18h"}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-white/70" />
                      <div>
                        <p className="text-white/60 text-sm">Início</p>
                        <p className="text-white">{job.startDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-white/70" />
                      <div>
                        <p className="text-white/60 text-sm">Pagamento</p>
                        <p className="text-white">{job.paymentType || "No mesmo dia"}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 backdrop-blur-sm border-white/30">
                <CardHeader>
                  <CardTitle className="text-white">Descrição da Vaga</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 leading-relaxed mb-4">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Requisitos</h4>
                      <ul className="space-y-2">
                        {(job.requirements || ["Experiência em vendas", "Disponibilidade de horário"]).map((req: string, index: number) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-white/70 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">Benefícios</h4>
                      <ul className="space-y-2">
                        {(job.benefits || ["Pagamento no mesmo dia", "Vale transporte", "Ambiente climatizado"]).map((benefit: string, index: number) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-white/70 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-black/30 backdrop-blur-sm border-white/30">
                <CardHeader>
                  <CardTitle className="text-white">Compatibilidade</CardTitle>
                  <CardDescription className="text-white/60">
                    Com base no seu perfil
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${getCompatibilityColor(compatibility)} mb-2`}>
                      {compatibility}% Match
                    </div>
                    <p className="text-white/60 text-sm mb-4">Muito Alto</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">Localização</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-green-400" />
                          <span className="text-green-400 text-sm">Próximo</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">Experiência</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-green-400" />
                          <span className="text-green-400 text-sm">Compatível</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">Disponibilidade</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="text-yellow-400 text-sm">Disponível</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 backdrop-blur-sm border-white/30">
                <CardContent className="p-4 space-y-3">
                  {!isApplied ? (
                    <Button 
                      onClick={handleApply}
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white"
                      size="lg"
                    >
                      <Briefcase className="h-4 w-4 mr-2" />
                      Aceitar Vaga
                    </Button>
                  ) : (
                    <Button 
                      disabled
                      className="w-full bg-green-600 text-white"
                      size="lg"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Candidatura Enviada
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-white/30 text-white bg-white/10"
                  >
                    Não Tenho Interesse
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/50 text-primary bg-primary/10"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Adicionar ao Calendário
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsModal;
