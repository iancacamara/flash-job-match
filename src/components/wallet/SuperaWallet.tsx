
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, TrendingUp, Clock, CheckCircle, CreditCard, PiggyBank, BarChart3, Calendar } from "lucide-react";

interface SuperaWalletProps {
  children: React.ReactNode;
}

const SuperaWallet = ({ children }: SuperaWalletProps) => {
  const walletData = {
    totalBalance: 390.00,
    pendingBalance: 285.00,
    averagePerJob: 98,
    completedJobs: 47,
    completionRate: 96,
    totalEarnings: 8450
  };

  const transactions = [
    {
      id: 1,
      type: "Degustação - Shopping Vila Lobos",
      company: "FoodBrand",
      amount: 120.00,
      status: "Concluído",
      date: "Hoje"
    },
    {
      id: 2,
      type: "Reposição - SuperMax Pinheiros",
      company: "SuperMax",
      amount: 80.00,
      status: "Concluído",
      date: "Ontem"
    },
    {
      id: 3,
      type: "Evento - Shopping Center Norte",
      company: "EventsPro",
      amount: 150.00,
      status: "Processando",
      date: "2 dias atrás"
    },
    {
      id: 4,
      type: "Panfletagem - Centro",
      company: "Construtora ABC",
      amount: 100.00,
      status: "Concluído",
      date: "3 dias atrás"
    },
    {
      id: 5,
      type: "Pesquisa de Mercado - Moema",
      company: "Research Corp",
      amount: 90.00,
      status: "Concluído",
      date: "1 semana atrás"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Concluído": return "bg-green-500/30 text-green-300 border-green-500/50";
      case "Processando": return "bg-yellow-500/30 text-yellow-300 border-yellow-500/50";
      case "Pendente": return "bg-orange-500/30 text-orange-300 border-orange-500/50";
      default: return "bg-gray-500/30 text-gray-300 border-gray-500/50";
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 border-white/20">
        <DialogHeader>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-white text-xl">SuperaBank</DialogTitle>
              <DialogDescription className="text-white/60">
                Gerencie seus ganhos
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-black/30 backdrop-blur-sm">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="history" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Histórico
            </TabsTrigger>
            <TabsTrigger value="stats" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">
              Estatísticas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            {/* Cards de Saldo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-300 text-sm font-medium">Ganhos Totais</p>
                      <p className="text-3xl font-bold text-green-400">R$ {walletData.totalBalance.toFixed(2)}</p>
                      <p className="text-green-300/70 text-sm">Este mês</p>
                    </div>
                    <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-300 text-sm font-medium">Pendente</p>
                      <p className="text-3xl font-bold text-orange-400">R$ {walletData.pendingBalance.toFixed(2)}</p>
                      <p className="text-orange-300/70 text-sm">Aguardando pagamento</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-500/30 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-orange-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-300 text-sm font-medium">Média por Job</p>
                      <p className="text-3xl font-bold text-blue-400">R$ {walletData.averagePerJob}</p>
                      <p className="text-blue-300/70 text-sm">Por trabalho</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pagamentos Pendentes */}
            <Card className="bg-black/30 border-white/30">
              <CardHeader>
                <CardTitle className="text-white">Pagamentos Pendentes</CardTitle>
                <CardDescription className="text-white/60">
                  Jobs concluídos aguardando pagamento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <div>
                      <p className="text-white font-medium">Evento - Shopping ABC</p>
                      <p className="text-white/60 text-sm">Amanhã</p>
                    </div>
                    <div className="text-right">
                      <p className="text-yellow-400 font-bold">R$ 200,00</p>
                      <Badge className="bg-yellow-500/30 text-yellow-300 border-yellow-500/50 text-xs">
                        Processando
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <div>
                      <p className="text-white font-medium">Reposição - SuperMax Norte</p>
                      <p className="text-white/60 text-sm">15/06</p>
                    </div>
                    <div className="text-right">
                      <p className="text-orange-400 font-bold">R$ 85,00</p>
                      <Badge className="bg-orange-500/30 text-orange-300 border-orange-500/50 text-xs">
                        Pendente
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Forma de Pagamento */}
            <Card className="bg-black/30 border-white/30">
              <CardHeader>
                <CardTitle className="text-white">Forma de Pagamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-medium">PIX</p>
                      <p className="text-white/60 text-sm">maria.silva@email.com</p>
                    </div>
                  </div>
                  <Badge className="bg-primary/30 text-primary border-primary/50">
                    Principal
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6 mt-6">
            <Card className="bg-black/30 border-white/30">
              <CardHeader>
                <CardTitle className="text-white">Histórico SuperaBank</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{transaction.type}</p>
                          <p className="text-white/60 text-sm">{transaction.company} • {transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold">+ R$ {transaction.amount.toFixed(2)}</p>
                        <Badge className={getStatusBadge(transaction.status) + " text-xs"}>
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6 mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-black/30 border-white/30">
                <CardContent className="p-4 text-center">
                  <Briefcase className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400">{walletData.completedJobs}</div>
                  <div className="text-xs text-blue-300">Jobs Completados</div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 border-white/30">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400">{walletData.completionRate}%</div>
                  <div className="text-xs text-green-300">Taxa de Conclusão</div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 border-white/30">
                <CardContent className="p-4 text-center">
                  <PiggyBank className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-400">R$ {(walletData.totalEarnings / 1000).toFixed(1)}k</div>
                  <div className="text-xs text-purple-300">Ganhos Totais</div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 border-white/30">
                <CardContent className="p-4 text-center">
                  <Calendar className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-400">8</div>
                  <div className="text-xs text-orange-300">Jobs realizados</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

const Briefcase = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4a2 2 0 00-2-2H8a2 2 0 00-2 2v2M4 6h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
  </svg>
);

export default SuperaWallet;
