import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Search, Locate } from "lucide-react";

interface MapComponentProps {
  jobs: Array<{
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    distance: string;
  }>;
}

const MapComponent = ({ jobs }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  // Mock coordinates for job locations
  const jobCoordinates = [
    { id: 1, lng: -46.8906, lat: -23.1864, title: "Promotor - SuperMax", location: "Jundiaí, SP" },
    { id: 2, lng: -47.0608, lat: -22.9056, title: "Repositor - Fort", location: "Campinas, SP" },
    { id: 3, lng: -46.6333, lat: -23.5505, title: "Demonstrador - Plaza", location: "São Paulo, SP" },
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !apiKey.trim()) return;

    try {
      mapboxgl.accessToken = apiKey.trim();
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-46.8906, -23.1864], // Jundiaí center
        zoom: 10,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add markers for job locations
      jobCoordinates.forEach((job) => {
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div class="text-black p-2">
            <h3 class="font-bold">${job.title}</h3>
            <p class="text-sm">${job.location}</p>
          </div>`
        );

        new mapboxgl.Marker({ color: '#00c4cc' })
          .setLngLat([job.lng, job.lat])
          .setPopup(popup)
          .addTo(map.current!);
      });

      setIsMapInitialized(true);
    } catch (error) {
      console.error('Erro ao inicializar o mapa:', error);
    }
  };

  const handleLocateUser = () => {
    if (navigator.geolocation && map.current) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          map.current?.flyTo({
            center: [longitude, latitude],
            zoom: 12,
            duration: 2000
          });

          // Add user location marker
          new mapboxgl.Marker({ color: '#7c2ae8' })
            .setLngLat([longitude, latitude])
            .addTo(map.current!);
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
        }
      );
    }
  };

  useEffect(() => {
    // Check if API key is in localStorage
    const savedApiKey = localStorage.getItem('mapbox-api-key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem('mapbox-api-key', apiKey);
      if (!isMapInitialized) {
        initializeMap();
      }
    }
  }, [apiKey, isMapInitialized]);

  if (!isMapInitialized) {
    return (
      <Card className="bg-white/5 backdrop-blur-xl border-white/20 h-96">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Mapa de Vagas
          </CardTitle>
          <CardDescription className="text-white/70">
            Visualize as vagas próximas a você no mapa
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-white text-sm">Token Público do Mapbox:</label>
            <Input
              type="text"
              placeholder="pk.eyJ1IjoiYWRtaW4iLCJhIjoiY..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <div className="text-xs text-white/60">
            <p>Para obter seu token gratuito:</p>
            <p>1. Acesse <a href="https://mapbox.com/" target="_blank" className="text-primary">mapbox.com</a></p>
            <p>2. Crie uma conta gratuita</p>
            <p>3. Copie seu token público da seção "Tokens"</p>
          </div>
          <Button 
            onClick={initializeMap}
            disabled={!apiKey.trim()}
            className="w-full bg-gradient-to-r from-primary to-secondary"
          >
            Inicializar Mapa
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/5 backdrop-blur-xl border-white/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Mapa de Vagas
            </CardTitle>
            <CardDescription className="text-white/70">
              {jobCoordinates.length} vagas encontradas na região
            </CardDescription>
          </div>
          <Button
            size="sm"
            onClick={handleLocateUser}
            className="bg-white/10 border border-white/20 text-white"
          >
            <Locate className="h-4 w-4 mr-2" />
            Minha Localização
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div 
          ref={mapContainer} 
          className="w-full h-96 rounded-lg border border-white/20"
        />
      </CardContent>
    </Card>
  );
};

export default MapComponent;