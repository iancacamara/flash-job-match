import { MapPin, Home, ShoppingCart, Car, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const IllustrationMap = () => {
  return (
    <Card className="bg-black/30 backdrop-blur-sm border-white/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Localização da Vaga</h3>
        
        {/* Map Container */}
        <div className="relative bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-lg p-8 h-64 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 grid-rows-6 h-full gap-1">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="bg-white/10 rounded-sm"></div>
              ))}
            </div>
          </div>
          
          {/* Roads */}
          <div className="absolute top-1/2 left-0 right-0 h-3 bg-gray-600/50 transform -translate-y-1/2"></div>
          <div className="absolute top-0 bottom-0 left-1/3 w-3 bg-gray-600/50"></div>
          <div className="absolute top-0 bottom-0 right-1/4 w-3 bg-gray-600/50"></div>
          
          {/* Home Location */}
          <div className="absolute top-4 left-8 flex flex-col items-center">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-1">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs text-white font-medium">Sua Casa</span>
          </div>
          
          {/* Job Location */}
          <div className="absolute top-16 right-16 flex flex-col items-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-1 animate-pulse">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <span className="text-xs text-white font-medium">Shopping Center</span>
            <Badge className="mt-1 bg-red-500/30 text-red-300 border-red-500/50 text-xs">
              Vaga Aqui
            </Badge>
          </div>
          
          {/* Market */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-1">
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs text-white font-medium">Supermercado</span>
          </div>
          
          {/* Distance Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" 
               refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#00c4cc" />
              </marker>
            </defs>
            <line x1="80" y1="50" x2="220" y2="100" 
                  stroke="#00c4cc" strokeWidth="2" strokeDasharray="5,5"
                  markerEnd="url(#arrowhead)" />
          </svg>
          
          {/* Distance Info */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2">
            <div className="bg-primary/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/30">
              <div className="flex items-center space-x-2 text-sm">
                <Car className="h-4 w-4 text-primary" />
                <span className="text-white">2.5 km</span>
                <Clock className="h-4 w-4 text-primary ml-2" />
                <span className="text-white">8 min</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Location Details */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/70">Endereço:</span>
            <span className="text-white">Shopping Vila Lobos - Av. das Nações Unidas, 4777</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/70">Tempo de viagem:</span>
            <span className="text-success">8 minutos de carro</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/70">Transporte público:</span>
            <span className="text-white">Estação Vila Madalena - Linha 2 Verde</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IllustrationMap;