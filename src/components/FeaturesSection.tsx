
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      title: 'IA Conversacional',
      description: 'Jamito entiende tus necesidades y te recomienda lugares personalizados.',
      emoji: '🤖',
    },
    {
      title: 'Filtros Inteligentes',
      description: 'Busca por tipo de comida, precio, ambiente, ubicación y más.',
      emoji: '🔍',
    },
    {
      title: 'Para Toda Ocasión',
      description: 'Trabajo, citas, reuniones familiares o salidas con amigos.',
      emoji: '🎯',
    },
    {
      title: 'Información Completa',
      description: 'Fotos, horarios, precios, wifi, ruido y accesibilidad.',
      emoji: '📱',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Todo lo que necesitas para
            <span className="gradient-text"> decidir mejor</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jama combina inteligencia artificial con filtros avanzados para darte
            las mejores recomendaciones de lugares.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
