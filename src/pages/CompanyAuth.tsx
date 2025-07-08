import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CompanyAuth = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    cnpj: "",
    fantasyName: "",
    city: "",
    state: "",
    address: "",
    email: "",
    phone: "",
    responsibleName: "",
    responsibleRole: "",
    password: ""
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/company-dashboard');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/company-dashboard');
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
              alt="GM Promo Logo" 
              className="h-20 w-auto mx-auto mb-4 logo-animate"
            />
            <h1 className="text-3xl font-bold text-white mb-2">Área da Empresa</h1>
            <p className="text-white/70 text-lg">
              Entre ou cadastre sua empresa para encontrar promotores
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center text-white">Bem-vindo</CardTitle>
              <CardDescription className="text-center text-white/70">
                Faça login ou crie sua conta empresarial
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
                      <Label htmlFor="email" className="text-white">E-mail Corporativo</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="empresa@email.com"
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
                      className="w-full h-11 bg-gradient-to-r from-primary to-secondary text-white"
                    >
                      Entrar
                    </Button>
                  </form>
                </TabsContent>

                {/* Register Form */}
                <TabsContent value="register" className="space-y-4 mt-6">
                  <form onSubmit={handleRegister} className="space-y-4">
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
                              <SelectItem key={city} value={city} className="text-white">
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
                              <SelectItem key={state} value={state} className="text-white">
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
                      className="w-full h-11 bg-gradient-to-r from-primary to-secondary text-white"
                    >
                      Criar Conta Empresarial
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
              className="text-white/60 bg-transparent border-none"
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

export default CompanyAuth;