import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wallet, 
  CreditCard, 
  TrendingUp, 
  Download, 
  Upload, 
  DollarSign, 
  Eye,
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowDownLeft
} from "lucide-react";

const WalletComponent = () => {
  const [balance] = useState(2450.80);
  const [pendingPayments] = useState(320.00);

  // Mock transaction data
  const transactions = [
    {
      id: 1,
      type: 'credit',
      description: 'Pagamento - Promotor SuperMax',
      amount: 120.00,
      date: '2025-01-08',
      time: '14:30',
      status: 'completed'
    },
    {
      id: 2,
      type: 'credit',
      description: 'Pagamento - Repositor Fort',
      amount: 80.00,
      date: '2025-01-07',
      time: '16:45',
      status: 'completed'
    },
    {
      id: 3,
      type: 'pending',
      description: 'Demonstrador Shopping Plaza',
      amount: 150.00,
      date: '2025-01-06',
      time: '18:00',
      status: 'pending'
    },
    {
      id: 4,
      type: 'credit',
      description: 'Bônus por Avaliação 5★',
      amount: 25.00,
      date: '2025-01-05',
      time: '12:15',
      status: 'completed'
    },
    {
      id: 5,
      type: 'debit',
      description: 'Taxa de Transferência',
      amount: -5.00,
      date: '2025-01-04',
      time: '10:20',
      status: 'completed'
    }
  ];

  const monthlyStats = [
    { label: 'Janeiro 2025', amount: 2450.80, change: '+15%' },
    { label: 'Dezembro 2024', amount: 2130.50, change: '+8%' },
    { label: 'Novembro 2024', amount: 1970.20, change: '+12%' }
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'credit':
        return <ArrowDownLeft className="h-4 w-4 text-green-400" />;
      case 'debit':
        return <ArrowUpRight className="h-4 w-4 text-red-400" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-400" />;
      default:
        return <DollarSign className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500/20 text-green-300 border-green-500/50">Concluído</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/50">Pendente</Badge>;
      default:
        return <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/50">Processando</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Saldo Principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl border-white/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Wallet className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Saldo Disponível</p>
                  <p className="text-3xl font-bold text-white">R$ {balance.toFixed(2).replace('.', ',')}</p>
                </div>
              </div>
              <Button size="sm" className="bg-white/10 border border-white/20 text-white">
                <Eye className="h-4 w-4 mr-2" />
                Ver Extrato
              </Button>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-secondary">
                <Download className="h-4 w-4 mr-2" />
                Sacar
              </Button>
              <Button size="sm" variant="outline" className="border-white/30 text-white bg-white/10">
                <Upload className="h-4 w-4 mr-2" />
                Histórico
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-xl border-white/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Pagamentos Pendentes</p>
                <p className="text-2xl font-bold text-white">R$ {pendingPayments.toFixed(2).replace('.', ',')}</p>
              </div>
            </div>
            <p className="text-white/60 text-sm">
              2 pagamentos sendo processados
            </p>
            <div className="mt-4">
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-xs text-white/50 mt-1">Processamento em andamento</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList className="bg-white/10 border-white/20">
          <TabsTrigger value="transactions" className="text-white data-[state=active]:bg-primary">
            Transações
          </TabsTrigger>
          <TabsTrigger value="analytics" className="text-white data-[state=active]:bg-primary">
            Análise Mensal
          </TabsTrigger>
          <TabsTrigger value="cards" className="text-white data-[state=active]:bg-primary">
            Cartões
          </TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <Card className="bg-white/5 backdrop-blur-xl border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Últimas Transações</CardTitle>
              <CardDescription className="text-white/70">
                Histórico completo de pagamentos e movimentações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/20">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-white/10 rounded-full">
                        {getTransactionIcon(transaction.type)}
                      </div>
                      <div>
                        <p className="text-white font-medium">{transaction.description}</p>
                        <div className="flex items-center space-x-2 text-sm text-white/60">
                          <Calendar className="h-3 w-3" />
                          <span>{transaction.date}</span>
                          <Clock className="h-3 w-3" />
                          <span>{transaction.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex items-center space-x-3">
                      <div>
                        <p className={`font-bold ${
                          transaction.type === 'credit' ? 'text-green-400' : 
                          transaction.type === 'debit' ? 'text-red-400' : 'text-yellow-400'
                        }`}>
                          {transaction.type === 'debit' ? '-' : '+'}R$ {Math.abs(transaction.amount).toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                      {getStatusBadge(transaction.status)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="bg-white/5 backdrop-blur-xl border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Análise Mensal</CardTitle>
              <CardDescription className="text-white/70">
                Evolução dos seus ganhos ao longo dos meses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/20">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{stat.label}</p>
                        <p className="text-white/60 text-sm">Ganhos no período</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-xl font-bold">R$ {stat.amount.toFixed(2).replace('.', ',')}</p>
                      <p className="text-green-400 text-sm">{stat.change}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards">
          <Card className="bg-white/5 backdrop-blur-xl border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Métodos de Pagamento</CardTitle>
              <CardDescription className="text-white/70">
                Gerencie suas formas de recebimento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white/10 rounded-lg">
                        <CreditCard className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">SuperaBank Virtual</p>
                        <p className="text-white/60 text-sm">•••• •••• •••• 8429</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/50">Principal</Badge>
                  </div>
                </div>
                
                <div className="p-4 bg-white/5 rounded-lg border border-white/20 border-dashed">
                  <div className="text-center">
                    <p className="text-white/60 mb-2">Adicionar novo método</p>
                    <Button variant="outline" size="sm" className="border-white/30 text-white bg-white/10">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Adicionar Cartão
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WalletComponent;