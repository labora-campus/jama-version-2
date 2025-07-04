
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

interface FilterPanelProps {
  onFiltersChange: (filters: any) => void;
}

const FilterPanel = ({ onFiltersChange }: FilterPanelProps) => {
  const [filters, setFilters] = useState({
    category: '',
    cuisine: '',
    priceRange: [1, 4],
    occasion: '',
    features: [] as string[],
    distance: [5],
  });

  const categories = [
    'Restaurante',
    'Café',
    'Coworking',
    'Bar',
    'Parque',
    'Centro Comercial',
  ];

  const cuisines = [
    'Peruana',
    'Italiana',
    'Japonesa',
    'Mexicana',
    'Vegetariana',
    'Vegana',
    'China',
    'Americana',
  ];

  const occasions = [
    'trabajo',
    'pareja',
    'amigos',
    'familia',
    'primera_cita',
    'reunion_negocios',
  ];

  const features = [
    'WiFi gratis',
    'Pet friendly',
    'Accesible',
    'Ambiente silencioso',
    'Música en vivo',
    'Terraza',
    'Estacionamiento',
    'Delivery',
  ];

  const handleFeatureChange = (feature: string, checked: boolean) => {
    const newFeatures = checked
      ? [...filters.features, feature]
      : filters.features.filter(f => f !== feature);
    
    const newFilters = { ...filters, features: newFeatures };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      category: '',
      cuisine: '',
      priceRange: [1, 4],
      occasion: '',
      features: [],
      distance: [5],
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <Card className="h-fit sticky top-24">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Filtros</CardTitle>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Limpiar
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-sm font-medium mb-3 block">Categoría</Label>
          <Select
            value={filters.category}
            onValueChange={(value) => handleFilterChange('category', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona categoría" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium mb-3 block">Tipo de comida</Label>
          <Select
            value={filters.cuisine}
            onValueChange={(value) => handleFilterChange('cuisine', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona cocina" />
            </SelectTrigger>
            <SelectContent>
              {cuisines.map((cuisine) => (
                <SelectItem key={cuisine} value={cuisine}>
                  {cuisine}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium mb-3 block">Ocasión</Label>
          <Select
            value={filters.occasion}
            onValueChange={(value) => handleFilterChange('occasion', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona ocasión" />
            </SelectTrigger>
            <SelectContent>
              {occasions.map((occasion) => (
                <SelectItem key={occasion} value={occasion}>
                  {occasion.charAt(0).toUpperCase() + occasion.slice(1).replace('_', ' ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium mb-3 block">
            Rango de precios: {'$'.repeat(filters.priceRange[0])} - {'$'.repeat(filters.priceRange[1])}
          </Label>
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => handleFilterChange('priceRange', value)}
            max={4}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <Label className="text-sm font-medium mb-3 block">
            Distancia máxima: {filters.distance[0]} km
          </Label>
          <Slider
            value={filters.distance}
            onValueChange={(value) => handleFilterChange('distance', value)}
            max={20}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <Label className="text-sm font-medium mb-3 block">Características</Label>
          <div className="space-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={feature}
                  checked={filters.features.includes(feature)}
                  onCheckedChange={(checked) => 
                    handleFeatureChange(feature, checked as boolean)
                  }
                />
                <Label htmlFor={feature} className="text-sm">
                  {feature}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterPanel;
