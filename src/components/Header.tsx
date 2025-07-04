
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Star } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [favorites] = useState(0); // Placeholder for favorites count

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Jama</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/chat" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Jamito AI
            </Link>
            <Link 
              to="/search" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Buscar
            </Link>
            <Link 
              to="/favorites" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Star className="h-4 w-4" />
              <span>Favoritos ({favorites})</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/search')}
              className="hidden sm:flex"
            >
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
            <Button
              onClick={() => navigate('/chat')}
              className="gradient-bg hover:opacity-90 transition-opacity"
            >
              Hablar con Jamito
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
