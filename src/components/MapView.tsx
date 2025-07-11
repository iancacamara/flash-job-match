
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, X } from "lucide-react";

interface MapViewProps {
  onClose: () => void;
  jobs: Array<{
    id: number;
    title: string;
    company: string;
    location: string;
    coordinates: [number, number];
    payment: string;
    type: string;
  }>;
}

const MapView = ({ onClose, jobs }: MapViewProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-46.6333, -23.5505], // São Paulo
      zoom: 11,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add job markers
    jobs.forEach((job) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-3 bg-slate-800 text-white rounded-lg">
          <h3 class="font-semibold text-sm mb-1">${job.title}</h3>
          <p class="text-xs text-gray-300 mb-2">${job.company}</p>
          <p class="text-xs mb-2">${job.location}</p>
          <div class="flex justify-between items-center">
            <span class="text-sm font-bold text-green-400">${job.payment}</span>
            <button class="bg-gradient-to-r from-primary to-secondary text-white px-2 py-1 rounded text-xs">Ver Detalhes</button>
          </div>
        </div>
      `);

      const marker = new mapboxgl.Marker({
        color: '#00c4cc'
      })
        .setLngLat(job.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });
  };

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      initializeMap(apiKey);
      setShowApiKeyInput(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/e172e5ba-c278-4674-bb50-c1cccacbb507.png" 
              alt="Supera Flash Logo" 
              className="h-10 w-auto logo-animate"
            />
            <h2 className="text-xl font-bold text-white">Mapa de Vagas - Supera Flash</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white/80">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* API Key Input */}
        {showApiKeyInput && (
          <Card className="m-4 bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2 text-white">Configure o Mapbox</h3>
              <p className="text-sm text-white/70 mb-3">
                Insira sua chave pública do Mapbox para visualizar o mapa. 
                Obtenha em: <a href="https://mapbox.com/" target="_blank" className="text-primary underline">mapbox.com</a>
              </p>
              <div className="flex space-x-2">
                <Input
                  placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbGtxcjAwMDAuLi4"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                />
                <Button onClick={handleApiKeySubmit} className="bg-gradient-to-r from-primary to-secondary">
                  Ativar Mapa
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Map Container */}
        <div className="flex-1 relative">
          <div ref={mapContainer} className="absolute inset-0" />
          {!showApiKeyInput && (
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-white/20">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium text-white">{jobs.length} vagas disponíveis</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapView;
