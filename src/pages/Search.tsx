
import { useState } from 'react';
import Header from '@/components/Header';
import FilterPanel from '@/components/FilterPanel';
import PlaceCard from '@/components/PlaceCard';

const Search = () => {
  const [filters, setFilters] = useState({});
  
  // Mock data for places
  const mockPlaces = [
    {
      id: 1,
      name: 'Café Central',
      category: 'Café',
      cuisine: 'Internacional',
      description: 'Perfecto para trabajar con WiFi rápido, ambiente tranquilo y excelente café de especialidad.',
      rating: 4.5,
      priceLevel: 'medium',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop',
      tags: ['WiFi gratis', 'Ambiente silencioso', 'Café de especialidad'],
      distance: '0.8 km',
    },
    {
      id: 2,
      name: 'La Terraza Romántica',
      category: 'Restaurante',
      cuisine: 'Italiana',
      description: 'Restaurante íntimo con vista panorámica, ideal para cenas románticas y ocasiones especiales.',
      rating: 4.8,
      priceLevel: 'high',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      tags: ['Romántico', 'Vista panorámica', 'Cena especial'],
      distance: '1.2 km',
    },
    {
      id: 3,
      name: 'El Quincho Familiar',
      category: 'Restaurante',
      cuisine: 'Peruana',
      description: 'Amplio espacio familiar con juegos para niños, comida casera peruana y ambiente acogedor.',
      rating: 4.3,
      priceLevel: 'medium',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
      tags: ['Pet friendly', 'Área de juegos', 'Comida casera', 'Familia'],
      distance: '2.1 km',
    },
    {
      id: 4,
      name: 'Urban Coworking',
      category: 'Coworking',
      description: 'Espacio de coworking moderno con salas de reuniones, WiFi ultra rápido y café ilimitado.',
      rating: 4.6,
      priceLevel: 'medium',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      tags: ['WiFi gratis', 'Salas de reunión', 'Café ilimitado', 'Trabajo'],
      distance: '0.5 km',
    },
    {
      id: 5,
      name: 'Nikkei Fusion',
      category: 'Restaurante',
      cuisine: 'Japonesa',
      description: 'Fusión nikkei contemporánea con barra de sushi en vivo y coctelería de autor.',
      rating: 4.7,
      priceLevel: 'high',
      image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=400&h=300&fit=crop',
      tags: ['Sushi en vivo', 'Coctelería', 'Ambiente moderno'],
      distance: '1.8 km',
    },
    {
      id: 6,
      name: 'Green Garden Café',
      category: 'Café',
      cuisine: 'Vegetariana',
      description: 'Café ecológico con jardín interno, opciones veganas y productos orgánicos.',
      rating: 4.4,
      priceLevel: 'medium',
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=300&fit=crop',
      tags: ['Vegano', 'Orgánico', 'Jardín', 'Eco-friendly'],
      distance: '1.5 km',
    },
  ];

  const [filteredPlaces] = useState(mockPlaces);

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
    console.log('Filters updated:', newFilters);
    // Here you would implement the actual filtering logic
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Encuentra tu <span className="gradient-text">lugar ideal</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Usa nuestros filtros para encontrar exactamente lo que necesitas
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterPanel onFiltersChange={handleFiltersChange} />
          </div>
          
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Mostrando {filteredPlaces.length} lugares
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPlaces.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
            
            {filteredPlaces.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">No se encontraron lugares</h3>
                <p className="text-muted-foreground mb-6">
                  Intenta ajustar tus filtros para obtener más resultados
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
