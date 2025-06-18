import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, DollarSign, TrendingUp, TrendingDown, Clock, Download, CreditCard, Bot } from "lucide-react";

const Wallet = () => {
  const navigate = useNavigate();

  const transactions = [
    {
      id: 1,
      description: "Degustação - Shopping Vila Lobos",
      amount: 120.00,
      date: "Hoje",
      status: "Concluído",
      company: "FoodBrand"
    },
    {
      id: 2,
      description: "Reposição - SuperMax Pinheiros",
      amount: 80.00,
      date: "Ontem",
      status: "Concluído",
      company: "SuperMax"
    },
    {
      id: 3,
      description: "Evento - Shopping Center Norte",
      amount: 150.00,
      date: "2 dias atrás",
      status: "Processando",
      company: "EventosPro"
    },
    {
      id: 4,
      description: "Panfletagem - Centro",
      amount: 100.00,
      date: "3 dias atrás",
      status: "Concluído",
      company: "Construtora ABC"
    },
    {
      id: 5,
      description: "Pesquisa de Mercado - Moema",
      amount: 90.00,
      date: "1 semana atrás",
      status: "Concluído",
      company: "Research Corp"
    }
  ];

  const pendingPayments = [
    {
      id: 1,
      description: "Evento - Shopping ABC",
      amount: 200.00,
      expectedDate: "Amanhã",
      company: "EventosPro"
    },
    {
      id: 2,
      description: "Reposição - SuperMax Norte",
      amount: 85.00,
      expectedDate: "15/06",
      company: "SuperMax"
    }
  ];

  const totalEarnings = transactions
    .filter(t => t.status === "Concluído")
    .reduce((sum, t) => sum + t.amount, 0);

  const pendingTotal = pendingPayments.reduce((sum, p) => sum + p.amount, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído": return "success";
      case "Processando": return "warning";
      case "Pendente": return "secondary";
      default: return "secondary";
    }
  };

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
                <h1 className="text-xl font-bold text-white">SuperaBank</h1>
                <p className="text-sm text-white/60">Gerencie seus ganhos</p>
              </div>
            </div>
            
            <Button variant="outline" className="border-white/20 text-white/80 hover:bg-white/10">
              <Download className="h-4 w-4 mr-2" />
              Relatório
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Balance Cards with futuristic design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-success/20 to-success/10 border-success/30 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-success/80 text-sm font-medium">Ganhos Totais</p>
                  <p className="text-3xl font-bold text-success">R$ {totalEarnings.toFixed(2)}</p>
                  <p className="text-success/70 text-xs">Este mês</p>
                </div>
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <DollarSign className="h-6 w-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-500/20 to-orange-400/10 border-orange-500/30 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-400/80 text-sm font-medium">Pendente</p>
                  <p className="text-3xl font-bold text-orange-400">R$ {pendingTotal.toFixed(2)}</p>
                  <p className="text-orange-400/70 text-xs">A receber</p>
                </div>
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Clock className="h-6 w-6 text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-primary/20 to-secondary/10 border-primary/30 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary/80 text-sm font-medium">Média por Job</p>
                  <p className="text-3xl font-bold text-primary">R$ {(totalEarnings / transactions.filter(t => t.status === "Concluído").length).toFixed(0)}</p>
                  <p className="text-primary/70 text-xs">Por trabalho</p>
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Transaction History with updated design */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-white">
                  <span>Histórico SuperaBank</span>
                  <Button variant="outline" size="sm" className="border-white/20 text-white/80 hover:bg-white/10">
                    Filtrar
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-white/5 transition-colors border-white/20">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.status === 'Concluído' ? 'bg-success/20' : 'bg-orange-500/20'
                        }`}>
                          {transaction.status === 'Concluído' ? 
                            <TrendingUp className="h-5 w-5 text-success" /> :
                            <Clock className="h-5 w-5 text-orange-500" />
                          }
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-medium text-white">{transaction.description}</h4>
                          <div className="flex items-center space-x-2 text-sm text-white/60">
                            <span>{transaction.company}</span>
                            <span>•</span>
                            <span>{transaction.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-semibold text-success">
                          + R$ {transaction.amount.toFixed(2)}
                        </div>
                        <Badge variant={getStatusColor(transaction.status) as any} className="text-xs">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with updated design */}
          <div className="space-y-6">
            {/* Pending Payments */}
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-lg text-white">Pagamentos Pendentes</CardTitle>
                <CardDescription className="text-white/70">Jobs concluídos aguardando pagamento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {pendingPayments.map((payment) => (
                  <div key={payment.id} className="p-3 border rounded-lg border-white/20">
                    <h4 className="font-medium text-sm text-white">{payment.description}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-white/60">{payment.expectedDate}</span>
                      <span className="font-semibold text-success">R$ {payment.amount.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-lg text-white">Forma de Pagamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 border rounded-lg border-white/20">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-sm text-white">PIX</p>
                    <p className="text-xs text-white/60">maria.silva@email.com</p>
                  </div>
                  <Badge variant="secondary">Principal</Badge>
                </div>
                
                <Button variant="outline" className="w-full justify-start text-sm border-white/20 text-white/80 hover:bg-white/10">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Adicionar Conta Bancária
                </Button>
              </CardContent>
            </Card>

            {/* Monthly Stats */}
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-lg text-white">Estatísticas do Mês</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/80">Jobs Realizados</span>
                  <span className="font-semibold text-white">4</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/80">Horas Trabalhadas</span>
                  <span className="font-semibold text-white">16h</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/80">Valor por Hora</span>
                  <span className="font-semibold text-success">R$ 31,25</span>
                </div>
                
                <div className="pt-2 border-t border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/80">Crescimento</span>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <span className="font-semibold text-success">+15%</span>
                    </div>
                  </div>
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

export default Wallet;
