
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Bot, CheckCircle, ArrowRight } from "lucide-react";
import { UserType } from "@/App";

interface OnboardingFlowProps {
  userType: UserType;
  setHasCompletedOnboarding: (completed: boolean) => void;
}

const OnboardingFlow = ({ userType, setHasCompletedOnboarding }: OnboardingFlowProps) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const freelancerQuestions = [
    {
      question: "Olá! Sou o FlashBot 🤖 Vou te ajudar a criar seu perfil. Você já trabalhou como promotor antes?",
      options: ["Sim, tenho experiência", "Não, seria minha primeira vez", "Já fiz trabalhos similares"]
    },
    {
      question: "Perfeito! Em quais áreas você tem interesse? (Pode escolher mais de uma)",
      options: ["Panfletagem", "Reposição de produtos", "Eventos e degustação", "Pesquisa de mercado", "Demonstração de produtos"]
    },
    {
      question: "Ótimo! Qual sua disponibilidade de horários?",
      options: ["Manhã (8h às 12h)", "Tarde (12h às 18h)", "Noite (18h às 22h)", "Fins de semana", "Horário flexível"]
    },
    {
      question: "E quanto ao transporte, você possui veículo próprio?",
      options: ["Sim, tenho carro", "Sim, tenho moto", "Uso transporte público", "Prefiro trabalhar próximo de casa"]
    }
  ];

  const companyQuestions = [
    {
      question: "Bem-vindo! Sou o FlashBot 🤖 Vou te ajudar a configurar sua empresa. Que tipo de serviços vocês mais contratam?",
      options: ["Promotores para eventos", "Reposição em PDV", "Pesquisa de mercado", "Ações promocionais", "Demonstração de produtos"]
    },
    {
      question: "Quantos profissionais vocês costumam contratar por ação?",
      options: ["1-5 pessoas", "6-15 pessoas", "16-30 pessoas", "Mais de 30 pessoas"]
    },
    {
      question: "Em quais regiões vocês mais atuam?",
      options: ["São Paulo - Capital", "Grande São Paulo", "Interior de SP", "Rio de Janeiro", "Outras capitais"]
    }
  ];

  const questions = userType === 'freelancer' ? freelancerQuestions : companyQuestions;

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Onboarding completed
      setHasCompletedOnboarding(true);
      navigate('/dashboard');
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Configuração do Perfil</span>
            <span>{currentStep + 1} de {questions.length}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <Card className="shadow-xl border-0 gradient-card animate-fade-in">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-pulse-subtle">
                <Bot className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <CardTitle className="text-xl">FlashBot IA</CardTitle>
              <CardDescription>
                Vamos configurar seu perfil para encontrar as melhores oportunidades
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Question */}
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="text-lg leading-relaxed">
                {questions[currentStep].question}
              </p>
            </div>

            {/* Answer Options */}
            <div className="space-y-3">
              {questions[currentStep].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-4 border-2 hover:border-primary hover:bg-primary/5 transition-all"
                  onClick={() => handleAnswer(option)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary/30"></div>
                    </div>
                    <span className="flex-1">{option}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </Button>
              ))}
            </div>

            {/* Previous Answers Summary */}
            {answers.length > 0 && (
              <div className="border-t pt-6">
                <h4 className="font-medium text-sm text-muted-foreground mb-3">
                  Suas respostas anteriores:
                </h4>
                <div className="space-y-2">
                  {answers.map((answer, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-muted-foreground">{answer}</span>
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
