
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Building2, MapPin, Users, Calendar, DollarSign, Plus } from "lucide-react";

interface NewRequestFormProps {
  onSubmit: (data: any) => void;
}

const NewRequestForm = ({ onSubmit }: NewRequestFormProps) => {
  const [formData, setFormData] = useState({
    storeName: "",
    city: "",
    state: "",
    profile: "",
    quantity: "",
    deadline: "",
    salary: "",
    workHours: "",
    requirements: "",
    description: "",
    benefits: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-primary to-secondary">
          <Plus className="h-4 w-4 mr-2" />
          Nova Solicitação
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-white/20">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">Nova Solicitação de Promotores</DialogTitle>
          <DialogDescription className="text-white/60">
            Preencha os dados para solicitar promotores para sua loja
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Informações da Loja */}
            <Card className="bg-black/30 border-white/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Building2 className="h-5 w-5 mr-2" />
                  Informações da Loja
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white">Nome da Loja</Label>
                  <Input
                    value={formData.storeName}
                    onChange={(e) => handleInputChange('storeName', e.target.value)}
                    placeholder="Ex: Fort Jundiaí"
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white">Estado</Label>
                    <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Estado" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/20">
                        <SelectItem value="SP" className="text-white">São Paulo</SelectItem>
                        <SelectItem value="RJ" className="text-white">Rio de Janeiro</SelectItem>
                        <SelectItem value="MG" className="text-white">Minas Gerais</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-white">Cidade</Label>
                    <Input
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="Ex: Jundiaí"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detalhes da Vaga */}
            <Card className="bg-black/30 border-white/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Detalhes da Solicitação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white">Perfil do Promotor</Label>
                  <Select value={formData.profile} onValueChange={(value) => handleInputChange('profile', value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Selecione o perfil" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-white/20">
                      <SelectItem value="Mercearia Seca" className="text-white">Mercearia Seca</SelectItem>
                      <SelectItem value="Perecíveis" className="text-white">Perecíveis</SelectItem>
                      <SelectItem value="Açougue" className="text-white">Açougue</SelectItem>
                      <SelectItem value="Manipulados" className="text-white">Manipulados</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white">Quantidade</Label>
                    <Input
                      type="number"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange('quantity', e.target.value)}
                      placeholder="Ex: 30"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white">Prazo</Label>
                    <Input
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => handleInputChange('deadline', e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <Label className="text-white">Salário/Diária</Label>
                  <Input
                    value={formData.salary}
                    onChange={(e) => handleInputChange('salary', e.target.value)}
                    placeholder="Ex: R$ 150/dia"
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Descrição e Requisitos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-white">Descrição das Atividades</Label>
              <Textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Descreva as atividades que o promotor irá realizar..."
                className="bg-white/10 border-white/20 text-white min-h-[120px]"
              />
            </div>
            
            <div>
              <Label className="text-white">Requisitos</Label>
              <Textarea
                value={formData.requirements}
                onChange={(e) => handleInputChange('requirements', e.target.value)}
                placeholder="Liste os requisitos necessários para a vaga..."
                className="bg-white/10 border-white/20 text-white min-h-[120px]"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" className="border-white/30 text-white bg-white/10">
              Cancelar
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-primary to-secondary">
              Criar Solicitação
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewRequestForm;
