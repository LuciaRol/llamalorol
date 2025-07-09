
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useAuth } from '@/hooks/useAuth';
import { UserButton } from '@/components/UserButton';

const Header = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/af538d6f-d6ad-4e52-bda1-52add2ee6dd4.png" 
            alt="Llamalo Rol" 
            className="h-10 w-10"
          />
          <Link to="/" className="text-xl font-bold">
            Llamalo Rol
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Inicio
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/about') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            ¿Quiénes somos?
          </Link>
          <Link 
            to="/calendar" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/calendar') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Calendario
          </Link>
          <Link 
            to="/donate" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/donate') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Donar
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          {user ? (
            <UserButton user={user} onLogout={logout} />
          ) : (
            <Link to="/login">
              <Button variant="outline" size="sm">
                Admin
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
