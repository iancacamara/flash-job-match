
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, MapPin, Users, Calendar, DollarSign, Plus, FileText, Clock, Target } from "lucide-react";

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
    benefits: "",
    // Dados do relatório
    projectName: "",
    objective: "",
    targetAudience: "",
    duration: "",
    budget: "",
    expectedResults: "",
    kpis: "",
    additionalNotes: ""
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
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-slate-900 border-white/20">
        <DialogHeader>
          <DialogTitle className="text-white text-xl flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Nova Solicitação de Promotores - Modelo Fort Atacadista
          </DialogTitle>
          <DialogDescription className="text-white/60">
            Preencha o relatório completo para abertura da vaga
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-black/30 backdrop-blur-sm">
              <TabsTrigger value="basic" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
                Dados Básicos
              </TabsTrigger>
              <TabsTrigger value="details" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
                Detalhes da Vaga
              </TabsTrigger>
              <TabsTrigger value="report" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
                Relatório do Projeto
              </TabsTrigger>
            </TabsList>

            {/* Dados Básicos */}
            <TabsContent value="basic" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <Card className="bg-black/30 border-white/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Necessidade de Promotores
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
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Detalhes da Vaga */}
            <TabsContent value="details" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-black/30 border-white/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Remuneração e Horários
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-white">Salário/Diária</Label>
                      <Input
                        value={formData.salary}
                        onChange={(e) => handleInputChange('salary', e.target.value)}
                        placeholder="Ex: R$ 150/dia"
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-white">Horário de Trabalho</Label>
                      <Input
                        value={formData.workHours}
                        onChange={(e) => handleInputChange('workHours', e.target.value)}
                        placeholder="Ex: 8h às 17h"
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-white">Benefícios</Label>
                      <Textarea
                        value={formData.benefits}
                        onChange={(e) => handleInputChange('benefits', e.target.value)}
                        placeholder="Vale transporte, vale refeição..."
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border-white/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Requisitos e Atividades
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-white">Descrição das Atividades</Label>
                      <Textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Descreva as atividades que o promotor irá realizar..."
                        className="bg-white/10 border-white/20 text-white min-h-[80px]"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-white">Requisitos</Label>
                      <Textarea
                        value={formData.requirements}
                        onChange={(e) => handleInputChange('requirements', e.target.value)}
                        placeholder="Liste os requisitos necessários para a vaga..."
                        className="bg-white/10 border-white/20 text-white min-h-[80px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Relatório do Projeto */}
            <TabsContent value="report" className="space-y-6 mt-6">
              <Card className="bg-black/30 border-white/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Relatório Executivo do Projeto
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Informações detalhadas para aprovação e acompanhamento
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white">Nome do Projeto</Label>
                        <Input
                          value={formData.projectName}
                          onChange={(e) => handleInputChange('projectName', e.target.value)}
                          placeholder="Ex: Ação Promocional Fort Jundiaí"
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white">Duração do Projeto</Label>
                        <Input
                          value={formData.duration}
                          onChange={(e) => handleInputChange('duration', e.target.value)}
                          placeholder="Ex: 30 dias"
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white">Orçamento Estimado</Label>
                        <Input
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          placeholder="Ex: R$ 150.000,00"
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white">Público-Alvo</Label>
                        <Input
                          value={formData.targetAudience}
                          onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                          placeholder="Ex: Clientes do segmento atacado"
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white">Objetivos do Projeto</Label>
                        <Textarea
                          value={formData.objective}
                          onChange={(e) => handleInputChange('objective', e.target.value)}
                          placeholder="Descreva os objetivos principais..."
                          className="bg-white/10 border-white/20 text-white min-h-[80px]"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-white">Resultados Esperados</Label>
                      <Textarea
                        value={formData.expectedResults}
                        onChange={(e) => handleInputChange('expectedResults', e.target.value)}
                        placeholder="Metas de vendas, conversão, etc..."
                        className="bg-white/10 border-white/20 text-white min-h-[100px]"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-white">KPIs de Acompanhamento</Label>
                      <Textarea
                        value={formData.kpis}
                        onChange={(e) => handleInputChange('kpis', e.target.value)}
                        placeholder="Indicadores que serão monitorados..."
                        className="bg-white/10 border-white/20 text-white min-h-[100px]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-white">Observações Adicionais</Label>
                    <Textarea
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                      placeholder="Informações extras importantes para o projeto..."
                      className="bg-white/10 border-white/20 text-white min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end space-x-4 pt-6 border-t border-white/20">
            <Button type="button" variant="outline" className="border-white/30 text-white bg-white/10">
              Salvar Rascunho
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-primary to-secondary">
              <FileText className="h-4 w-4 mr-2" />
              Criar Solicitação
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewRequestForm;
