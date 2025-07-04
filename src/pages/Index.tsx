
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      
      <footer className="py-12 bg-muted/30 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-6 w-6 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="text-xl font-bold gradient-text">Jama</span>
          </div>
          <p className="text-muted-foreground">
            Encuentra el lugar perfecto para cualquier ocasión
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
