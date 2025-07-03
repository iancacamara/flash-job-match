
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, MapPin, Phone, Mail, Star, Calendar, Briefcase, Award, Clock, CheckCircle } from "lucide-react";

interface PromoterProfileProps {
  promoter: {
    id: number;
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    profile: string;
    rating: number;
    experience: string;
    availability: string;
    totalJobs: number;
    status: string;
    lastWork?: string;
  };
  children: React.ReactNode;
}

const PromoterProfile = ({ promoter, children }: PromoterProfileProps) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-white/20">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">Perfil do Promotor</DialogTitle>
          <DialogDescription className="text-white/60">
            Informações detalhadas do promotor
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header do Perfil */}
          <Card className="bg-black/30 border-white/30">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-white text-lg">
                    {getInitials(promoter.name)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-2xl font-bold text-white">{promoter.name}</h2>
                    <Badge className="bg-success/30 text-success border-success/50">
                      {promoter.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-white">
                      <Mail className="h-4 w-4 text-white/70" />
                      <span>{promoter.email}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-white">
                      <Phone className="h-4 w-4 text-white/70" />
                      <span>{promoter.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-white">
                      <MapPin className="h-4 w-4 text-white/70" />
                      <span>{promoter.city}, {promoter.state}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-white">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{promoter.rating} estrelas</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardContent className="p-4 text-center">
                <Briefcase className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-400">{promoter.totalJobs}</div>
                <div className="text-xs text-blue-300">Jobs Realizados</div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-500/10 border-green-500/30">
              <CardContent className="p-4 text-center">
                <Star className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-400">{promoter.rating}</div>
                <div className="text-xs text-green-300">Avaliação</div>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-500/10 border-purple-500/30">
              <CardContent className="p-4 text-center">
                <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-400">{promoter.experience}</div>
                <div className="text-xs text-purple-300">Experiência</div>
              </CardContent>
            </Card>
            
            <Card className="bg-orange-500/10 border-orange-500/30">
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-400">{promoter.availability}</div>
                <div className="text-xs text-orange-300">Status</div>
              </CardContent>
            </Card>
          </div>

          {/* Perfil Profissional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-black/30 border-white/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Perfil Profissional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white/80 text-sm">Especialização</Label>
                  <Badge className="bg-primary/30 text-primary border-primary/50 ml-2">
                    {promoter.profile}
                  </Badge>
                </div>
                
                <div>
                  <Label className="text-white/80 text-sm">Último Trabalho</Label>
                  <p className="text-white">{promoter.lastWork || "Não informado"}</p>
                </div>
                
                <div>
                  <Label className="text-white/80 text-sm">Disponibilidade</Label>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-white">{promoter.availability}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/30 border-white/30">
              <CardHeader>
                <CardTitle className="text-white">Histórico Recente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-medium">Fort Atacadista</p>
                      <p className="text-white/60 text-sm">Promotor Mercearia Seca</p>
                    </div>
                    <Badge className="bg-success/30 text-success border-success/50 text-xs">
                      Concluído
                    </Badge>
                  </div>
                  <p className="text-white/50 text-xs mt-2">15/12/2024 - 3 dias</p>
                </div>
                
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-medium">SuperMax</p>
                      <p className="text-white/60 text-sm">Reposição de Produtos</p>
                    </div>
                    <Badge className="bg-success/30 text-success border-success/50 text-xs">
                      Concluído
                    </Badge>
                  </div>
                  <p className="text-white/50 text-xs mt-2">10/12/2024 - 2 dias</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ações */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline" className="border-white/30 text-white bg-white/10">
              Enviar Mensagem
            </Button>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              Contratar Promotor
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Label = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <label className={className}>{children}</label>
);

export default PromoterProfile;
