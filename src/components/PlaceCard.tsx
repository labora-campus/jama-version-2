
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PlaceCardProps {
  place: {
    id: number;
    name: string;
    category: string;
    cuisine?: string;
    description: string;
    rating: number;
    priceLevel: string;
    image: string;
    tags: string[];
    distance?: string;
  };
}

const PlaceCard = ({ place }: PlaceCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? 'Eliminado de favoritos' : 'Agregado a favoritos',
      description: `${place.name} ${isFavorite ? 'eliminado de' : 'agregado a'} tus favoritos.`,
    });
  };

  const getPriceLevelText = (level: string) => {
    const priceMap: { [key: string]: string } = {
      'low': '$',
      'medium': '$$',
      'high': '$$$',
      'premium': '$$$$'
    };
    return priceMap[level] || '$$';
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-48 object-cover"
        />
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 right-3 rounded-full w-10 h-10 p-0 ${
            isFavorite ? 'bg-white/90 text-red-500' : 'bg-white/70 text-gray-600'
          }`}
          onClick={handleFavoriteToggle}
        >
          <Star className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>
        {place.distance && (
          <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-lg text-sm">
            {place.distance}
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold mb-1">{place.name}</h3>
            <p className="text-sm text-muted-foreground">
              {place.category} {place.cuisine && `• ${place.cuisine}`}
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 mb-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{place.rating}</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {getPriceLevelText(place.priceLevel)}
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {place.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {place.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground rounded-lg text-xs"
            >
              {tag}
            </span>
          ))}
          {place.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground rounded-lg text-xs">
              +{place.tags.length - 3} más
            </span>
          )}
        </div>

        <Button className="w-full gradient-bg hover:opacity-90 transition-opacity">
          Ver detalles
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlaceCard;
