
import { useState } from 'react';
import Header from '@/components/Header';
import PlaceCard from '@/components/PlaceCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const navigate = useNavigate();
  const [favorites] = useState([]); // Placeholder for favorites data

  const mockFavorites = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Tus lugares <span className="gradient-text">favoritos</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Todos los lugares que has guardado en un solo lugar
          </p>
        </div>

        {favorites.length === 0 && mockFavorites.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-3xl">💫</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Aún no tienes favoritos</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Explora lugares increíbles y guárdalos aquí para encontrarlos fácilmente después
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/chat')}
                className="gradient-bg hover:opacity-90 transition-opacity"
              >
                🤖 Hablar con Jamito
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/search')}
              >
                Buscar lugares
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockFavorites.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
