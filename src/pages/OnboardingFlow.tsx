
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Bot, CheckCircle, ArrowRight, Sparkles, MapPin, Clock, Car, Briefcase, Zap, User, Phone, Mail, Calendar } from "lucide-react";
import { UserType } from "@/App";

interface OnboardingFlowProps {
  userType: UserType;
  setHasCompletedOnboarding: (completed: boolean) => void;
}

const OnboardingFlow = ({ userType, setHasCompletedOnboarding }: OnboardingFlowProps) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [showCadastro, setShowCadastro] = useState(false);
  const [cadastroData, setCadastroData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    cpf: "",
    endereco: "",
    cidade: "",
    estado: "",
    experiencia: "",
    disponibilidade: ""
  });

  const freelancerQuestions = [
    {
      question: "Olá! 👋 Eu sou a Sury, sua IA pessoal do Supera Flash! Vou te ajudar a criar um perfil incrível para trade marketing. Para começar, você já trabalhou como promotor antes?",
      options: ["Sim, tenho experiência", "Não, seria minha primeira vez", "Já fiz trabalhos similares"],
      icon: Bot,
      color: "from-primary to-blue-500"
    },
    {
      question: "Perfeito! 🎯 Em quais áreas do trade marketing você tem interesse ou experiência? (Escolha a principal)",
      options: ["Merchandising em PDV", "Degustação e demonstração", "Reposição de produtos", "Pesquisa de mercado", "Ações promocionais"],
      icon: Briefcase,
      color: "from-secondary to-purple-500"
    },
    {
      question: "Ótimo! ⏰ Qual sua disponibilidade de horários? Isso é crucial para o trade marketing:",
      options: ["Manhã (6h às 14h)", "Tarde (14h às 22h)", "Horário comercial", "Fins de semana", "Flexível - qualquer horário"],
      icon: Clock,
      color: "from-green-500 to-emerald-500"
    },
    {
      question: "🚗 Para trabalhar com trade marketing, preciso saber sobre transporte. Como você se locomove?",
      options: ["Tenho carro próprio", "Tenho moto", "Uso transporte público", "Prefiro trabalhar próximo de casa", "Tenho CNH mas não tenho veículo"],
      icon: Car,
      color: "from-orange-500 to-yellow-500"
    },
    {
      question: "📚 Que tipo de produtos você se sente mais confortável para promover?",
      options: ["Alimentos e bebidas", "Produtos de limpeza", "Cosméticos e higiene", "Eletrônicos", "Qualquer categoria"],
      icon: Briefcase,
      color: "from-pink-500 to-rose-500"
    },
    {
      question: "🏪 Em que tipo de estabelecimento você prefere trabalhar?",
      options: ["Supermercados", "Atacados", "Farmácias", "Lojas de departamento", "Qualquer tipo"],
      icon: MapPin,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const companyQuestions = [
    {
      question: "Bem-vindo ao Supera Flash! 🚀 Sou a Sury e vou te ajudar a configurar sua empresa. Que tipo de serviços vocês mais contratam?",
      options: ["Promotores para eventos", "Reposição em PDV", "Pesquisa de mercado", "Ações promocionais", "Demonstração de produtos"],
      icon: Briefcase,
      color: "from-primary to-blue-500"
    },
    {
      question: "Perfeito! 👥 Quantos profissionais vocês costumam contratar por ação?",
      options: ["1-5 pessoas", "6-15 pessoas", "16-30 pessoas", "Mais de 30 pessoas"],
      icon: Bot,
      color: "from-secondary to-purple-500"
    },
    {
      question: "📍 Em quais regiões vocês mais atuam? Isso me ajuda a conectar com os melhores profissionais:",
      options: ["São Paulo - Capital", "Grande São Paulo", "Interior de SP", "Rio de Janeiro", "Outras capitais"],
      icon: MapPin,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const questions = userType === 'freelancer' ? freelancerQuestions : companyQuestions;

  const handleAnswer = (answer: string) => {
    setShowTyping(true);
    
    setTimeout(() => {
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);
      setShowTyping(false);

      if (currentStep < questions.length - 1) {
        setTimeout(() => {
          setCurrentStep(currentStep + 1);
        }, 500);
      } else {
        // Se for freelancer, mostrar formulário de cadastro
        if (userType === 'freelancer') {
          setTimeout(() => {
            setShowCadastro(true);
          }, 1000);
        } else {
          setTimeout(() => {
            setHasCompletedOnboarding(true);
            navigate('/dashboard');
          }, 1500);
        }
      }
    }, 1500);
  };

  const handleCadastroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você salvaria os dados do cadastro
    console.log("Dados do cadastro:", cadastroData);
    setHasCompletedOnboarding(true);
    navigate('/dashboard');
  };

  const handleCadastroChange = (field: string, value: string) => {
    setCadastroData(prev => ({ ...prev, [field]: value }));
  };

  const progress = showCadastro ? 100 : ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  // Se mostrar cadastro, renderizar formulário
  if (showCadastro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-4xl">
            {/* Header */}
            <div className="text-center mb-8">
              <img 
                src="/lovable-uploads/e172e5ba-c278-4674-bb50-c1cccacbb507.png" 
                alt="Supera Flash Logo" 
                className="h-16 w-auto mx-auto mb-4"
              />
              <div className="flex justify-between text-sm text-white/60 mb-4">
                <span className="font-medium">Finalizando seu Perfil</span>
                <span className="font-mono">Cadastro Completo</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-700 shadow-lg w-full"></div>
              </div>
            </div>

            <Card className="bg-white/5 backdrop-blur-xl border-white/20 shadow-2xl">
              <CardHeader className="text-center space-y-6">
                <div className="relative flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-full p-4 backdrop-blur-sm border border-white/30">
                      <img 
                        src="/lovable-uploads/ef1cf83e-4eef-4a0f-b180-9486a1301442.png" 
                        alt="Sury IA" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <CardTitle className="text-2xl text-white mb-2">Finalize seu Cadastro</CardTitle>
                  <CardDescription className="text-white/70 text-lg">
                    Agora preciso de alguns dados para criar seu perfil completo
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={handleCadastroSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white">Nome Completo</Label>
                        <Input
                          value={cadastroData.nomeCompleto}
                          onChange={(e) => handleCadastroChange('nomeCompleto', e.target.value)}
                          placeholder="Seu nome completo"
                          className="bg-white/10 border-white/20 text-white"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white">E-mail</Label>
                        <Input
                          type="email"
                          value={cadastroData.email}
                          onChange={(e) => handleCadastroChange('email', e.target.value)}
                          placeholder="seu@email.com"
                          className="bg-white/10 border-white/20 text-white"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white">Telefone</Label>
                        <Input
                          value={cadastroData.telefone}
                          onChange={(e) => handleCadastroChange('telefone', e.target.value)}
                          placeholder="(11) 99999-9999"
                          className="bg-white/10 border-white/20 text-white"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white">Data de Nascimento</Label>
                        <Input
                          type="date"
                          value={cadastroData.dataNascimento}
                          onChange={(e) => handleCadastroChange('dataNascimento', e.target.value)}
                          className="bg-white/10 border-white/20 text-white"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white">CPF</Label>
                        <Input
                          value={cadastroData.cpf}
                          onChange={(e) => handleCadastroChange('cpf', e.target.value)}
                          placeholder="000.000.000-00"
                          className="bg-white/10 border-white/20 text-white"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white">Endereço</Label>
                        <Input
                          value={cadastroData.endereco}
                          onChange={(e) => handleCadastroChange('endereco', e.target.value)}
                          placeholder="Rua, número, bairro"
                          className="bg-white/10 border-white/20 text-white"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-white">Cidade</Label>
                          <Input
                            value={cadastroData.cidade}
                            onChange={(e) => handleCadastroChange('cidade', e.target.value)}
                            placeholder="Sua cidade"
                            className="bg-white/10 border-white/20 text-white"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label className="text-white">Estado</Label>
                          <Select value={cadastroData.estado} onValueChange={(value) => handleCadastroChange('estado', value)}>
                            <SelectTrigger className="bg-white/10 border-white/20 text-white">
                              <SelectValue placeholder="UF" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-800 border-white/20">
                              <SelectItem value="SP" className="text-white">SP</SelectItem>
                              <SelectItem value="RJ" className="text-white">RJ</SelectItem>
                              <SelectItem value="MG" className="text-white">MG</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-white">Experiência Profissional</Label>
                        <Select value={cadastroData.experiencia} onValueChange={(value) => handleCadastroChange('experiencia', value)}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Nível de experiência" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-white/20">
                            <SelectItem value="iniciante" className="text-white">Iniciante</SelectItem>
                            <SelectItem value="intermediario" className="text-white">Intermediário</SelectItem>
                            <SelectItem value="experiente" className="text-white">Experiente</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Resumo das Respostas */}
                  <div className="border-t border-white/20 pt-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Sparkles className="h-5 w-5 text-secondary" />
                      <h4 className="font-semibold text-white">Suas respostas da entrevista:</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {answers.map((answer, index) => (
                        <div key={index} className="flex items-center space-x-3 text-sm bg-success/20 rounded-xl p-3 border border-success/30 backdrop-blur-sm">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                          <span className="text-white font-medium">{answer}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 pt-6">
                    <Button type="button" variant="outline" className="border-white/30 text-white bg-white/10">
                      Voltar
                    </Button>
                    <Button type="submit" className="bg-gradient-to-r from-primary to-secondary">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Finalizar Cadastro
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/e172e5ba-c278-4674-bb50-c1cccacbb507.png" 
              alt="Supera Flash Logo" 
              className="h-16 w-auto mx-auto mb-4 logo-animate"
            />
            <div className="flex justify-between text-sm text-white/60 mb-4">
              <span className="font-medium">Entrevista Inteligente com Sury</span>
              <span className="font-mono">{currentStep + 1} de {questions.length}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 backdrop-blur-sm">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-700 shadow-lg"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <Card className="bg-white/5 backdrop-blur-xl border-white/20 shadow-2xl">
            {/* Sury Header */}
            <CardHeader className="text-center space-y-6 relative">
              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-full p-4 backdrop-blur-sm border border-white/30">
                    <img 
                      src="/lovable-uploads/ef1cf83e-4eef-4a0f-b180-9486a1301442.png" 
                      alt="Sury IA" 
                      className="w-full h-full object-contain animate-bounce-in"
                    />
                  </div>
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${currentQuestion.color} rounded-full flex items-center justify-center animate-pulse`}>
                    <currentQuestion.icon className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              
              <div>
                <CardTitle className="text-2xl text-white mb-2">Sury IA</CardTitle>
                <CardDescription className="text-white/70 text-lg">
                  Sua assistente para entrevista de trade marketing
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-8 p-8">
              {/* Question */}
              <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed text-white">
                      {currentQuestion.question}
                    </p>
                    {showTyping && (
                      <div className="flex items-center space-x-1 mt-4">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <span className="text-sm text-white/60 ml-3">Sury está analisando...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Answer Options */}
              {!showTyping && (
                <div className="space-y-4">
                  {currentQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto p-6 border-2 border-white/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg group bg-white/5 backdrop-blur-sm text-white hover:text-white"
                      onClick={() => handleAnswer(option)}
                    >
                      <div className="flex items-center space-x-4 w-full">
                        <div className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/20 transition-all">
                          <div className="w-4 h-4 rounded-full bg-primary/30 group-hover:bg-primary/70 transition-all"></div>
                        </div>
                        <span className="flex-1 text-base font-medium">{option}</span>
                        <ArrowRight className="h-5 w-5 text-white/60 group-hover:text-primary transition-all group-hover:translate-x-1" />
                      </div>
                    </Button>
                  ))}
                </div>
              )}

              {/* Previous Answers */}
              {answers.length > 0 && !showTyping && (
                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="h-5 w-5 text-secondary" />
                    <h4 className="font-semibold text-white">Suas respostas:</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {answers.map((answer, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm bg-success/20 rounded-xl p-3 border border-success/30 backdrop-blur-sm">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-white font-medium">{answer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Skip Option */}
          <div className="text-center mt-6">
            <Button 
              variant="ghost" 
              onClick={() => {
                setHasCompletedOnboarding(true);
                navigate('/dashboard');
              }}
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              Pular entrevista →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
