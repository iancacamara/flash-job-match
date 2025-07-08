import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, Mail, Lock, User, Phone } from "lucide-react";

const IndustriaAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria feita a autenticação real
    navigate('/industria');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-orange-300 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-orange-400/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border border-purple-400/40 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/2 left-1/6 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-white/10 backdrop-blur-sm border-b border-white/20">
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
              <div className="flex items-center space-x-2">
                <Building2 className="h-6 w-6 text-orange-400" />
                <span className="text-white font-semibold">Área da Indústria</span>
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

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-md mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-white text-2xl">
                {isLogin ? "Entrar na Indústria" : "Cadastrar Indústria"}
              </CardTitle>
              <p className="text-white/70 text-sm">
                {isLogin 
                  ? "Acesse horas disponíveis em lojas" 
                  : "Crie sua conta para acessar as oportunidades"
                }
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Nome Completo</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Seu nome completo"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">Empresa</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Nome da empresa"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Telefone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      required
                    />
                  </div>
                </div>
                
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white">Confirmar Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                        required
                      />
                    </div>
                  </div>
                )}
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 text-lg font-medium"
                >
                  {isLogin ? "Entrar" : "Criar Conta"}
                </Button>
              </form>
              
              <Separator className="bg-white/20" />
              
              <div className="text-center">
                <p className="text-white/70 text-sm mb-3">
                  {isLogin ? "Ainda não tem conta?" : "Já tem uma conta?"}
                </p>
                <Button 
                  variant="outline"
                  className="border-white/30 text-white bg-white/10 w-full"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Criar conta" : "Fazer login"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IndustriaAuth;