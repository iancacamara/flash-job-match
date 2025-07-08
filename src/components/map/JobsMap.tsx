
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Navigation, Clock, DollarSign, Briefcase, X } from "lucide-react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  coordinates: [number, number];
  payment: string;
  type: string;
  distance: string;
  urgent?: boolean;
}

interface JobsMapProps {
  jobs: Job[];
  children: React.ReactNode;
}

const JobsMap = ({ jobs, children }: JobsMapProps) => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] bg-slate-900 border-white/20">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">Mapa de Oportunidades</DialogTitle>
          <DialogDescription className="text-white/60">
            Visualize as vagas próximas à sua localização
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[70vh]">
          {/* Lista de Vagas */}
          <div className="lg:col-span-1 space-y-4 overflow-y-auto">
            <h3 className="text-white font-semibold mb-4">Vagas Próximas ({jobs.length})</h3>
            
            {jobs.map((job) => (
              <Card 
                key={job.id} 
                className={`bg-black/30 border-white/30 cursor-pointer ${
                  selectedJob?.id === job.id ? 'border-primary/50 bg-primary/10' : ''
                }`}
                onClick={() => setSelectedJob(job)}
              >
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="text-white font-medium text-sm leading-tight">{job.title}</h4>
                      {job.urgent && (
                        <Badge className="text-xs bg-red-500/30 text-red-300 border-red-500/50">
                          Urgente
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-white/70 text-sm">{job.company}</p>
                    
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center space-x-1 text-white/60">
                        <MapPin className="h-3 w-3" />
                        <span>{job.location}</span>
                        <Badge className="text-xs ml-2 border-white/50 text-white bg-black/30">
                          {job.distance}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-success">
                        <DollarSign className="h-3 w-3" />
                        <span>{job.payment}</span>
                      </div>
                    </div>
                    
                    <Badge className="text-xs bg-secondary/30 text-secondary border-secondary/50">
                      {job.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Área do Mapa */}
          <div className="lg:col-span-2 relative">
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-white/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-16 w-16 text-primary mx-auto opacity-50" />
                <div>
                  <p className="text-white text-lg font-medium">Mapa Interativo</p>
                  <p className="text-white/60 text-sm">
                    Integração com mapas será implementada em breve
                  </p>
                </div>
                
                {/* Simulação de pins no mapa */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {jobs.slice(0, 6).map((job, index) => (
                    <div 
                      key={job.id}
                      className={`relative p-3 bg-black/40 rounded-lg border cursor-pointer ${
                        selectedJob?.id === job.id 
                          ? 'border-primary bg-primary/20 scale-105' 
                          : 'border-white/20'
                      }`}
                      onClick={() => setSelectedJob(job)}
                      style={{
                        transform: `translate(${index * 20 - 40}px, ${index * 10 - 20}px)`
                      }}
                    >
                      <MapPin className="h-6 w-6 text-primary mx-auto mb-1" />
                      <p className="text-white text-xs text-center font-medium">{job.company}</p>
                      <p className="text-white/60 text-xs text-center">{job.distance}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detalhes da Vaga Selecionada */}
            {selectedJob && (
              <Card className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-sm border-white/30">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">{selectedJob.title}</CardTitle>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setSelectedJob(null)}
                      className="text-white h-6 w-6"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-white/70">Empresa</p>
                      <p className="text-white font-medium">{selectedJob.company}</p>
                    </div>
                    <div>
                      <p className="text-white/70">Pagamento</p>
                      <p className="text-success font-medium">{selectedJob.payment}</p>
                    </div>
                    <div>
                      <p className="text-white/70">Localização</p>
                      <p className="text-white font-medium">{selectedJob.location}</p>
                    </div>
                    <div>
                      <p className="text-white/70">Distância</p>
                      <p className="text-white font-medium">{selectedJob.distance}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <Button variant="outline" size="sm" className="border-white/30 text-white bg-white/10">
                      <Navigation className="h-3 w-3 mr-1" />
                      Rota
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                      <Briefcase className="h-3 w-3 mr-1" />
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobsMap;
