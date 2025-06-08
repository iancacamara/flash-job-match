
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Zap, User, Building2 } from "lucide-react";
import { UserType } from "@/App";

interface AuthPageProps {
  setUserType: (type: UserType) => void;
  setIsAuthenticated: (auth: boolean) => void;
}

const AuthPage = ({ setUserType, setIsAuthenticated }: AuthPageProps) => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState<UserType>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedUserType) {
      setUserType(selectedUserType);
      setIsAuthenticated(true);
      navigate('/onboarding');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, validate credentials
    setUserType('freelancer'); // Default for demo
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <span className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
              Job Flash
            </span>
          </div>
          <p className="text-muted-foreground">
            Entre ou crie sua conta para começar
          </p>
        </div>

        <Card className="shadow-xl border-0 gradient-card">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Bem-vindo</CardTitle>
            <CardDescription className="text-center">
              Faça login ou crie sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Entrar</TabsTrigger>
                <TabsTrigger value="register">Criar Conta</TabsTrigger>
              </TabsList>

              {/* Login Form */}
              <TabsContent value="login" className="space-y-4 mt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••"
                      className="h-11"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-primary hover:bg-primary/90"
                  >
                    Entrar
                  </Button>
                </form>
              </TabsContent>

              {/* Register Form */}
              <TabsContent value="register" className="space-y-4 mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="h-11"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="h-11"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF</Label>
                      <Input 
                        id="cpf" 
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleInputChange}
                        placeholder="000.000.000-00"
                        className="h-11"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="h-11"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input 
                      id="password" 
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className="h-11"
                      required
                    />
                  </div>

                  {/* User Type Selection */}
                  <div className="space-y-3">
                    <Label>Tipo de usuário</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant={selectedUserType === 'freelancer' ? 'default' : 'outline'}
                        className={`h-16 flex flex-col items-center justify-center space-y-1 ${
                          selectedUserType === 'freelancer' 
                            ? 'bg-primary text-white' 
                            : 'border-2 hover:border-primary'
                        }`}
                        onClick={() => setSelectedUserType('freelancer')}
                      >
                        <User className="h-5 w-5" />
                        <span className="text-xs font-medium">Freelancer</span>
                      </Button>
                      <Button
                        type="button"
                        variant={selectedUserType === 'company' ? 'default' : 'outline'}
                        className={`h-16 flex flex-col items-center justify-center space-y-1 ${
                          selectedUserType === 'company' 
                            ? 'bg-primary text-white' 
                            : 'border-2 hover:border-primary'
                        }`}
                        onClick={() => setSelectedUserType('company')}
                      >
                        <Building2 className="h-5 w-5" />
                        <span className="text-xs font-medium">Empresa</span>
                      </Button>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-primary hover:bg-primary/90"
                    disabled={!selectedUserType}
                  >
                    Criar Conta
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-primary"
          >
            ← Voltar ao início
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
