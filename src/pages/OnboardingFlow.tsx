
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Bot, CheckCircle, ArrowRight, Sparkles, MapPin, Clock, Car, Briefcase } from "lucide-react";
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
      question: "Olá! 👋 Eu sou o FlashBot, sua IA pessoal do Job Flash! Vou te ajudar a criar um perfil incrível. Para começar, você já trabalhou como promotor antes?",
      options: ["Sim, tenho experiência", "Não, seria minha primeira vez", "Já fiz trabalhos similares"],
      icon: Bot,
      color: "from-blue-500 to-purple-500"
    },
    {
      question: "Perfeito! 🎯 Agora me conta, em quais áreas você tem interesse ou experiência? (Pode escolher várias!)",
      options: ["Panfletagem", "Reposição de produtos", "Eventos e degustação", "Pesquisa de mercado", "Demonstração de produtos"],
      icon: Briefcase,
      color: "from-green-500 to-blue-500"
    },
    {
      question: "Ótimo! ⏰ Qual sua disponibilidade de horários? Isso me ajuda a encontrar as vagas perfeitas para você!",
      options: ["Manhã (8h às 12h)", "Tarde (12h às 18h)", "Noite (18h às 22h)", "Fins de semana", "Horário flexível"],
      icon: Clock,
      color: "from-orange-500 to-red-500"
    },
    {
      question: "Quase pronto! 🚗 Para finalizar, me conta sobre transporte. Isso afeta quais vagas posso sugerir:",
      options: ["Sim, tenho carro", "Sim, tenho moto", "Uso transporte público", "Prefiro trabalhar próximo de casa"],
      icon: Car,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const companyQuestions = [
    {
      question: "Bem-vindo ao Job Flash! 🚀 Sou o FlashBot e vou te ajudar a configurar sua empresa. Que tipo de serviços vocês mais contratam?",
      options: ["Promotores para eventos", "Reposição em PDV", "Pesquisa de mercado", "Ações promocionais", "Demonstração de produtos"],
      icon: Briefcase,
      color: "from-blue-500 to-purple-500"
    },
    {
      question: "Perfeito! 👥 Quantos profissionais vocês costumam contratar por ação?",
      options: ["1-5 pessoas", "6-15 pessoas", "16-30 pessoas", "Mais de 30 pessoas"],
      icon: Bot,
      color: "from-green-500 to-blue-500"
    },
    {
      question: "📍 Em quais regiões vocês mais atuam? Isso me ajuda a conectar com os melhores profissionais:",
      options: ["São Paulo - Capital", "Grande São Paulo", "Interior de SP", "Rio de Janeiro", "Outras capitais"],
      icon: MapPin,
      color: "from-orange-500 to-red-500"
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
        // Onboarding completed with success animation
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
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span className="font-medium">Configuração Inteligente com FlashBot</span>
            <span className="font-mono">{currentStep + 1} de {questions.length}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-700 shadow-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <Card className="shadow-2xl border-0 gradient-card animate-fade-in overflow-hidden">
          {/* Animated Header */}
          <CardHeader className="text-center space-y-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
            <div className="relative flex justify-center">
              <div className={`w-20 h-20 bg-gradient-to-r ${currentQuestion.color} rounded-full flex items-center justify-center animate-pulse shadow-lg`}>
                <currentQuestion.icon className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="relative">
              <CardTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FlashBot IA
              </CardTitle>
              <CardDescription className="text-lg">
                Sua assistente inteligente para criar o perfil perfeito
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-8 p-8">
            {/* Question with typing animation */}
            <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl p-6 border border-primary/10">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-lg leading-relaxed">
                    {currentQuestion.question}
                  </p>
                  {showTyping && (
                    <div className="flex items-center space-x-1 mt-3">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <span className="text-sm text-muted-foreground ml-2">FlashBot está pensando...</span>
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
                    className="w-full justify-start text-left h-auto p-5 border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:shadow-lg group"
                    onClick={() => handleAnswer(option)}
                  >
                    <div className="flex items-center space-x-4 w-full">
                      <div className="w-8 h-8 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                        <div className="w-4 h-4 rounded-full bg-primary/30 group-hover:bg-primary/60 transition-all"></div>
                      </div>
                      <span className="flex-1 text-base">{option}</span>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all" />
                    </div>
                  </Button>
                ))}
              </div>
            )}

            {/* Previous Answers Summary */}
            {answers.length > 0 && !showTyping && (
              <div className="border-t pt-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="h-5 w-5 text-secondary" />
                  <h4 className="font-semibold text-secondary">Suas respostas anteriores:</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {answers.map((answer, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm bg-success/10 rounded-lg p-3 border border-success/20">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-success-foreground">{answer}</span>
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
            className="text-muted-foreground hover:text-primary"
          >
            Pular configuração →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
