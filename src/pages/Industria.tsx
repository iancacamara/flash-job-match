import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, Calendar, Building2, Search, Filter, ArrowLeft, Users } from "lucide-react";

interface LojaDisponivel {
  id: string;
  nome: string;
  endereco: string;
  cidade: string;
  estado: string;
  cnpj: string;
  horasDisponiveis: number;
  datas: string[];
  preco: number;
  categoria: string;
  promotores: number;
}

const Industria = () => {
  const navigate = useNavigate();
  const [filtroEstado, setFiltroEstado] = useState("");
  const [filtroCidade, setFiltroCidade] = useState("");
  const [busca, setBusca] = useState("");
  const [buscaCNPJ, setBuscaCNPJ] = useState("");
  const [selectedLoja, setSelectedLoja] = useState<LojaDisponivel | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHours, setSelectedHours] = useState("");
  const [quantidadeSKUs, setQuantidadeSKUs] = useState("");

  // Função para calcular preço dinâmico baseado na urgência
  const calcularPreco = (dataAtendimento: string) => {
    const hoje = new Date();
    const dataAtendimentoObj = new Date(dataAtendimento);
    const diferencaDias = Math.ceil((dataAtendimentoObj.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
    
    const precoBase = 35.16; // Preço padrão
    
    if (diferencaDias <= 1) {
      return precoBase * 1.8; // Urgente (amanhã) - 80% a mais
    } else if (diferencaDias === 2) {
      return precoBase * 1.4; // Depois de amanhã - 40% a mais
    } else if (diferencaDias === 3) {
      return precoBase * 1.2; // 3 dias - 20% a mais
    } else {
      return precoBase; // Preço padrão para 4+ dias
    }
  };

  const lojasDisponiveis: LojaDisponivel[] = [
    {
      id: "1",
      nome: "Atacadão Vila Maria",
      endereco: "Av. Vila Maria, 1234",
      cidade: "São Paulo",
      estado: "SP",
      cnpj: "11.222.333/0001-44",
      horasDisponiveis: 8,
      datas: ["2024-07-09", "2024-07-10", "2024-07-11"],
      preco: 25,
      categoria: "Atacado",
      promotores: 3
    },
    {
      id: "2",
      nome: "Extra Paulista",
      endereco: "Av. Paulista, 567",
      cidade: "São Paulo",
      estado: "SP",
      cnpj: "22.333.444/0001-55",
      horasDisponiveis: 6,
      datas: ["2024-07-09", "2024-07-12"],
      preco: 30,
      categoria: "Supermercado",
      promotores: 2
    },
    {
      id: "3",
      nome: "Carrefour Barra",
      endereco: "Shopping Barra, Rio de Janeiro",
      cidade: "Rio de Janeiro",
      estado: "RJ",
      cnpj: "33.444.555/0001-66",
      horasDisponiveis: 10,
      datas: ["2024-07-10", "2024-07-11", "2024-07-13"],
      preco: 28,
      categoria: "Supermercado",
      promotores: 4
    },
    {
      id: "4",
      nome: "Pão de Açúcar Ipanema",
      endereco: "Rua Vieira Souto, 123",
      cidade: "Rio de Janeiro",
      estado: "RJ",
      cnpj: "44.555.666/0001-77",
      horasDisponiveis: 4,
      datas: ["2024-07-09"],
      preco: 35,
      categoria: "Supermercado",
      promotores: 1
    }
  ];

  const lojasFiltradas = lojasDisponiveis.filter(loja => {
    const matchBusca = loja.nome.toLowerCase().includes(busca.toLowerCase()) ||
                      loja.cidade.toLowerCase().includes(busca.toLowerCase());
    const matchCNPJ = buscaCNPJ === "" || loja.cnpj.includes(buscaCNPJ);
    const matchEstado = filtroEstado === "" || filtroEstado === "todos" || loja.estado === filtroEstado;
    const matchCidade = filtroCidade === "" || filtroCidade === "todas" || loja.cidade === filtroCidade;
    
    return matchBusca && matchCNPJ && matchEstado && matchCidade;
  });

  const estados = [...new Set(lojasDisponiveis.map(loja => loja.estado))];
  const cidades = [...new Set(lojasDisponiveis.map(loja => loja.cidade))];

  const handleSolicitarAtendimento = (loja: LojaDisponivel) => {
    setSelectedLoja(loja);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-white">Indústria</h1>
                <p className="text-white/70">Horas disponíveis em lojas por todo o Brasil</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/ead26371-00b8-4736-a344-5df3ac04a8bd.png" 
                alt="GM Promo Logo" 
                className="h-8 w-auto"
              />
              <span className="text-white text-sm opacity-70">GM PROMO</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Filtros */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  <Input
                    placeholder="Nome da loja ou cidade"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">CNPJ</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  <Input
                    placeholder="CNPJ da loja"
                    value={buscaCNPJ}
                    onChange={(e) => setBuscaCNPJ(e.target.value)}
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Estado</label>
                <Select value={filtroEstado} onValueChange={setFiltroEstado}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Todos os estados" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os estados</SelectItem>
                    {estados.map(estado => (
                      <SelectItem key={estado} value={estado}>{estado}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Cidade</label>
                <Select value={filtroCidade} onValueChange={setFiltroCidade}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Todas as cidades" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas as cidades</SelectItem>
                    {cidades.map(cidade => (
                      <SelectItem key={cidade} value={cidade}>{cidade}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Ações</label>
                <Button 
                  variant="outline" 
                  className="w-full border-white/30 text-white bg-white/10"
                  onClick={() => {
                    setBusca("");
                    setBuscaCNPJ("");
                    setFiltroEstado("");
                    setFiltroCidade("");
                  }}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Limpar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Lojas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lojasFiltradas.map((loja) => (
            <Card key={loja.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-lg">{loja.nome}</CardTitle>
                    <div className="flex items-center text-white/70 text-sm mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {loja.cidade}, {loja.estado}
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                    {loja.categoria}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-white/80 text-sm">
                  {loja.endereco}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white">
                    <Clock className="h-4 w-4 mr-2 text-cyan-400" />
                    <span className="font-semibold">{loja.horasDisponiveis}h disponíveis</span>
                  </div>
                  <div className="text-white font-bold">
                    A partir de R$ 35,16/h
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70 text-sm">
                    <Users className="h-4 w-4 mr-2 text-orange-400" />
                    <span>{loja.promotores} promotor{loja.promotores > 1 ? 'es' : ''} disponível{loja.promotores > 1 ? 'is' : ''}</span>
                  </div>
                  <div className="text-white/80 text-sm">
                    CNPJ: {loja.cnpj}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-white/70 text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    Datas disponíveis:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {loja.datas.map((data) => (
                      <Badge key={data} variant="outline" className="border-white/30 text-white text-xs">
                        {new Date(data).toLocaleDateString('pt-BR')}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                  onClick={() => handleSolicitarAtendimento(loja)}
                >
                  Solicitar Atendimento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {lojasFiltradas.length === 0 && (
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <Building2 className="h-12 w-12 text-white/50 mx-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">Nenhuma loja encontrada</h3>
              <p className="text-white/70">Tente ajustar os filtros para encontrar lojas disponíveis.</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Modal de Solicitação */}
      <Dialog open={!!selectedLoja} onOpenChange={() => setSelectedLoja(null)}>
        <DialogContent className="bg-gradient-to-br from-purple-900 to-purple-800 border-white/20 text-white">
          <DialogHeader>
            <DialogTitle>Solicitar Atendimento</DialogTitle>
          </DialogHeader>
          
          {selectedLoja && (
            <div className="space-y-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{selectedLoja.nome}</h3>
                <p className="text-sm text-white/70">{selectedLoja.endereco}</p>
                <p className="text-sm text-white/70">{selectedLoja.cidade}, {selectedLoja.estado}</p>
                <p className="text-sm text-white/70">CNPJ: {selectedLoja.cnpj}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-cyan-400">{selectedLoja.horasDisponiveis}h disponíveis</span>
                  <span className="text-orange-400">{selectedLoja.promotores} promotor{selectedLoja.promotores > 1 ? 'es' : ''}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Marca/Empresa</label>
                  <Input placeholder="Ex: Red Bull" className="bg-white/20 border-white/30" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Data Desejada</label>
                  <Select value={selectedDate} onValueChange={setSelectedDate}>
                    <SelectTrigger className="bg-white/20 border-white/30">
                      <SelectValue placeholder="Selecione uma data" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedLoja.datas.map((data) => (
                        <SelectItem key={data} value={data}>
                          {new Date(data).toLocaleDateString('pt-BR')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedDate && (
                    <div className="mt-2 p-2 bg-white/5 rounded text-xs">
                      <span className="text-yellow-400">Preço por hora: R$ {calcularPreco(selectedDate).toFixed(2)}</span>
                      {calcularPreco(selectedDate) > 35.16 && (
                        <span className="text-orange-400 ml-2">(Urgente)</span>
                      )}
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Horas Necessárias</label>
                  <Select value={selectedHours} onValueChange={setSelectedHours}>
                    <SelectTrigger className="bg-white/20 border-white/30">
                      <SelectValue placeholder="Quantas horas?" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({length: selectedLoja.horasDisponiveis}, (_, i) => i + 1).map((hours) => (
                        <SelectItem key={hours} value={hours.toString()}>
                          {hours} hora{hours > 1 ? 's' : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Quantidade de SKUs</label>
                  <Input 
                    type="number" 
                    placeholder="Ex: 5" 
                    value={quantidadeSKUs}
                    onChange={(e) => setQuantidadeSKUs(e.target.value)}
                    className="bg-white/20 border-white/30" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Lista de SKUs por Bandeira/Logo</label>
                  <Textarea 
                    placeholder="Cole aqui a lista de SKUs organizados por bandeira ou logo..."
                    className="bg-white/20 border-white/30 resize-none"
                    rows={4}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Descrição do Atendimento</label>
                  <Textarea 
                    placeholder="Descreva o tipo de atendimento necessário..."
                    className="bg-white/20 border-white/30 resize-none"
                    rows={3}
                  />
                </div>

                {/* Orçamento Automático */}
                {selectedDate && selectedHours && (
                  <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                    <h4 className="text-green-400 font-semibold mb-2">Orçamento</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Horas: {selectedHours}h</span>
                        <span>R$ {calcularPreco(selectedDate).toFixed(2)}/hora</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Promotores: {selectedLoja.promotores}</span>
                        <span>-</span>
                      </div>
                      {quantidadeSKUs && (
                        <div className="flex justify-between">
                          <span>SKUs: {quantidadeSKUs}</span>
                          <span>-</span>
                        </div>
                      )}
                      <hr className="border-green-500/20" />
                      <div className="flex justify-between font-bold text-green-400">
                        <span>Total:</span>
                        <span>R$ {(calcularPreco(selectedDate) * parseInt(selectedHours)).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  className="flex-1 border-white/30 text-white bg-white/10"
                  onClick={() => setSelectedLoja(null)}
                >
                  Cancelar
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500"
                  onClick={() => {
                    setSelectedLoja(null);
                    setSelectedDate("");
                    setSelectedHours("");
                    setQuantidadeSKUs("");
                    // Aqui seria enviada a solicitação
                  }}
                >
                  Enviar Solicitação
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Industria;