import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Zap, User, Building2, ArrowLeft } from "lucide-react";
import { UserType } from "@/App";

interface AuthPageProps {
  setUserType: (type: UserType) => void;
  setIsAuthenticated: (auth: boolean) => void;
}

const AuthPage = ({ setUserType, setIsAuthenticated }: AuthPageProps) => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState<UserType>(null);
  const [formData, setFormData] = useState({
    // Campos pessoais/freelancer
    name: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
    // Campos específicos da empresa
    companyName: "",
    cnpj: "",
    fantasyName: "",
    city: "",
    state: "",
    address: "",
    responsibleName: "",
    responsibleRole: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
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
    setUserType('freelancer');
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  const cities = [
    "São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", 
    "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Goiânia"
  ];

  const states = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", 
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", 
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/e172e5ba-c278-4674-bb50-c1cccacbb507.png" 
              alt="Supera Flash Logo" 
              className="h-20 w-auto mx-auto mb-4 logo-animate"
            />
            <p className="text-white/70 text-lg">
              Entre ou crie sua conta para começar
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center text-white">Bem-vindo</CardTitle>
              <CardDescription className="text-center text-white/70">
                Faça login ou crie sua conta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-sm">
                  <TabsTrigger value="login" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">Entrar</TabsTrigger>
                  <TabsTrigger value="register" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white">Criar Conta</TabsTrigger>
                </TabsList>

                {/* Login Form */}
                <TabsContent value="login" className="space-y-4 mt-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">E-mail</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="seu@email.com"
                        className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white">Senha</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••"
                        className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
                    >
                      Entrar
                    </Button>
                  </form>
                </TabsContent>

                {/* Register Form */}
                <TabsContent value="register" className="space-y-4 mt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* User Type Selection */}
                    <div className="space-y-3">
                      <Label className="text-white">Tipo de usuário</Label>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          type="button"
                          variant={selectedUserType === 'freelancer' ? 'default' : 'outline'}
                          className={`h-16 flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${
                            selectedUserType === 'freelancer' 
                              ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                              : 'border-2 border-white/20 text-white hover:border-primary hover:bg-white/10'
                          }`}
                          onClick={() => setSelectedUserType('freelancer')}
                        >
                          <User className="h-5 w-5" />
                          <span className="text-xs font-medium">Freelancer</span>
                        </Button>
                        <Button
                          type="button"
                          variant={selectedUserType === 'company' ? 'default' : 'outline'}
                          className={`h-16 flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${
                            selectedUserType === 'company' 
                              ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                              : 'border-2 border-white/20 text-white hover:border-primary hover:bg-white/10'
                          }`}
                          onClick={() => setSelectedUserType('company')}
                        >
                          <Building2 className="h-5 w-5" />
                          <span className="text-xs font-medium">Empresa</span>
                        </Button>
                      </div>
                    </div>

                    {/* Campos condicionais baseados no tipo de usuário */}
                    {selectedUserType === 'freelancer' && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-white">Nome Completo</Label>
                          <Input 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Seu nome completo"
                            className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">E-mail</Label>
                            <Input 
                              id="email" 
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="seu@email.com"
                              className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cpf" className="text-white">CPF</Label>
                            <Input 
                              id="cpf" 
                              name="cpf"
                              value={formData.cpf}
                              onChange={handleInputChange}
                              placeholder="000.000.000-00"
                              className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-white">Telefone</Label>
                          <Input 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(11) 99999-9999"
                            className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                            required
                          />
                        </div>
                      </>
                    )}

                    {selectedUserType === 'company' && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="companyName" className="text-white">Razão Social</Label>
                          <Input 
                            id="companyName" 
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Nome da empresa LTDA"
                            className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cnpj" className="text-white">CNPJ</Label>
                            <Input 
                              id="cnpj" 
                              name="cnpj"
                              value={formData.cnpj}
                              onChange={handleInputChange}
                              placeholder="00.000.000/0001-00"
                              className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="fantasyName" className="text-white">Nome Fantasia</Label>
                            <Input 
                              id="fantasyName" 
                              name="fantasyName"
                              value={formData.fantasyName}
                              onChange={handleInputChange}
                              placeholder="Nome comercial"
                              className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label className="text-white">Cidade</Label>
                            <Select onValueChange={(value) => handleSelectChange('city', value)}>
                              <SelectTrigger className="h-11 bg-white/10 border-white/20 text-white">
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-white/20">
                                {cities.map((city) => (
                                  <SelectItem key={city} value={city} className="text-white hover:bg-white/10">
                                    {city}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-white">Estado</Label>
                            <Select onValueChange={(value) => handleSelectChange('state', value)}>
                              <SelectTrigger className="h-11 bg-white/10 border-white/20 text-white">
                                <SelectValue placeholder="UF" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-white/20">
                                {states.map((state) => (
                                  <SelectItem key={state} value={state} className="text-white hover:bg-white/10">
                                    {state}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">E-mail</Label>
                            <Input 
                              id="email" 
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="empresa@email.com"
                              className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address" className="text-white">Endereço Completo</Label>
                          <Input 
                            id="address" 
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Rua, número, bairro"
                            className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="responsibleName" className="text-white">Responsável</Label>
                            <Input 
                              id="responsibleName" 
                              name="responsibleName"
                              value={formData.responsibleName}
                              onChange={handleInputChange}
                              placeholder="Nome do responsável"
                              className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="responsibleRole" className="text-white">Cargo</Label>
                            <Input 
                              id="responsibleRole" 
                              name="responsibleRole"
                              value={formData.responsibleRole}
                              onChange={handleInputChange}
                              placeholder="Gerente, Diretor, etc."
                              className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-white">Telefone da Empresa</Label>
                          <Input 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(11) 3000-0000"
                            className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                            required
                          />
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white">Senha</Label>
                      <Input 
                        id="password" 
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
              className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao início
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
