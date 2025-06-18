
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Bot, CheckCircle, ArrowRight, Sparkles, MapPin, Clock, Car, Briefcase, Zap } from "lucide-react";
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

  const freelancerQuestions = [
    {
      question: "Olá! 👋 Eu sou a Sury, sua IA pessoal do Supera Flash! Vou te ajudar a criar um perfil incrível. Para começar, você já trabalhou como promotor antes?",
      options: ["Sim, tenho experiência", "Não, seria minha primeira vez", "Já fiz trabalhos similares"],
      icon: Bot,
      color: "from-primary to-blue-500"
    },
    {
      question: "Perfeito! 🎯 Agora me conta, em quais áreas você tem interesse ou experiência? (Pode escolher várias!)",
      options: ["Panfletagem", "Reposição de produtos", "Eventos e degustação", "Pesquisa de mercado", "Demonstração de produtos"],
      icon: Briefcase,
      color: "from-secondary to-purple-500"
    },
    {
      question: "Ótimo! ⏰ Qual sua disponibilidade de horários? Isso me ajuda a encontrar as vagas perfeitas para você!",
      options: ["Manhã (8h às 12h)", "Tarde (12h às 18h)", "Noite (18h às 22h)", "Fins de semana", "Horário flexível"],
      icon: Clock,
      color: "from-green-500 to-emerald-500"
    },
    {
      question: "Quase pronto! 🚗 Para finalizar, me conta sobre transporte. Isso afeta quais vagas posso sugerir:",
      options: ["Sim, tenho carro", "Sim, tenho moto", "Uso transporte público", "Prefiro trabalhar próximo de casa"],
      icon: Car,
      color: "from-orange-500 to-yellow-500"
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
        setTimeout(() => {
          setHasCompletedOnboarding(true);
          navigate('/dashboard');
        }, 1500);
      }
    }, 1500);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

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
              <span className="font-medium">Configuração Inteligente com Sury</span>
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
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl animate-pulse"></div>
                  
                  {/* Sury Character */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-full p-4 backdrop-blur-sm border border-white/30">
                    <img 
                      src="/lovable-uploads/ef1cf83e-4eef-4a0f-b180-9486a1301442.png" 
                      alt="Sury IA" 
                      className="w-full h-full object-contain animate-bounce-in"
                    />
                  </div>
                  
                  {/* Status indicator */}
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${currentQuestion.color} rounded-full flex items-center justify-center animate-pulse`}>
                    <currentQuestion.icon className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              
              <div>
                <CardTitle className="text-2xl text-white mb-2">
                  Sury IA
                </CardTitle>
                <CardDescription className="text-white/70 text-lg">
                  Sua assistente inteligente para criar o perfil perfeito
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
                        <span className="text-sm text-white/60 ml-3">Sury está pensando...</span>
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
              Pular configuração →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
