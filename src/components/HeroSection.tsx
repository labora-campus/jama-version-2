
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Search, Users, Heart, Briefcase } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  const categories = [
    { icon: Briefcase, label: 'Trabajo', color: 'text-blue-500' },
    { icon: Heart, label: 'Pareja', color: 'text-pink-500' },
    { icon: Users, label: 'Amigos', color: 'text-green-500' },
    { icon: Users, label: 'Familia', color: 'text-purple-500' },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div className="container relative mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ¿No sabes
            <span className="gradient-text block">dónde ir?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Jama te ayuda a encontrar el lugar perfecto para cualquier ocasión.
            <br />
            Desde espacios de trabajo tranquilos hasta restaurantes familiares.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => navigate('/chat')}
              className="gradient-bg hover:opacity-90 transition-opacity text-lg px-8 py-4"
            >
              🤖 Hablar con Jamito AI
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/search')}
              className="text-lg px-8 py-4 border-2"
            >
              <Search className="h-5 w-5 mr-2" />
              Buscar con filtros
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => navigate('/search')}
              >
                <category.icon className={`h-8 w-8 mb-3 ${category.color} group-hover:scale-110 transition-transform`} />
                <span className="font-medium text-sm">{category.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
