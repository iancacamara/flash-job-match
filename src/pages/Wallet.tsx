
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, DollarSign, TrendingUp, TrendingDown, Clock, Download, CreditCard } from "lucide-react";

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
                <h1 className="text-xl font-bold">Carteira</h1>
                <p className="text-sm text-muted-foreground">Gerencie seus ganhos</p>
              </div>
            </div>
            
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Relatório
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-success to-success/80 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-success-foreground/80 text-sm">Ganhos Totais</p>
                  <p className="text-3xl font-bold">R$ {totalEarnings.toFixed(2)}</p>
                  <p className="text-success-foreground/80 text-xs">Este mês</p>
                </div>
                <DollarSign className="h-8 w-8 text-success-foreground/80" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-orange-500 to-orange-400 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Pendente</p>
                  <p className="text-3xl font-bold">R$ {pendingTotal.toFixed(2)}</p>
                  <p className="text-white/80 text-xs">A receber</p>
                </div>
                <Clock className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Média por Job</p>
                  <p className="text-3xl font-bold">R$ {(totalEarnings / transactions.filter(t => t.status === "Concluído").length).toFixed(0)}</p>
                  <p className="text-white/80 text-xs">Por trabalho</p>
                </div>
                <TrendingUp className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Transaction History */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Histórico de Transações</span>
                  <Button variant="outline" size="sm">
                    Filtrar
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.status === 'Concluído' ? 'bg-success/10' : 'bg-orange-500/10'
                        }`}>
                          {transaction.status === 'Concluído' ? 
                            <TrendingUp className="h-5 w-5 text-success" /> :
                            <Clock className="h-5 w-5 text-orange-500" />
                          }
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-medium">{transaction.description}</h4>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pending Payments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pagamentos Pendentes</CardTitle>
                <CardDescription>Jobs concluídos aguardando pagamento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {pendingPayments.map((payment) => (
                  <div key={payment.id} className="p-3 border rounded-lg">
                    <h4 className="font-medium text-sm">{payment.description}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-muted-foreground">{payment.expectedDate}</span>
                      <span className="font-semibold text-success">R$ {payment.amount.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Forma de Pagamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">PIX</p>
                    <p className="text-xs text-muted-foreground">maria.silva@email.com</p>
                  </div>
                  <Badge variant="secondary">Principal</Badge>
                </div>
                
                <Button variant="outline" className="w-full justify-start text-sm">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Adicionar Conta Bancária
                </Button>
              </CardContent>
            </Card>

            {/* Monthly Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estatísticas do Mês</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Jobs Realizados</span>
                  <span className="font-semibold">4</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Horas Trabalhadas</span>
                  <span className="font-semibold">16h</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Valor por Hora</span>
                  <span className="font-semibold text-success">R$ 31,25</span>
                </div>
                
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Crescimento</span>
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
      </div>
    </div>
  );
};

export default Wallet;
