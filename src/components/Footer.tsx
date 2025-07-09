
import { Youtube, Instagram, Twitch, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/af538d6f-d6ad-4e52-bda1-52add2ee6dd4.png" 
              alt="Llamalo Rol" 
              className="h-8 w-8"
            />
            <span className="text-lg font-bold">Llamalo Rol</span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://discord.gg/llamalorol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Discord</span>
            </a>
            <a 
              href="https://instagram.com/llamalorol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a 
              href="https://twitch.tv/llamalorol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitch className="h-6 w-6" />
              <span className="sr-only">Twitch</span>
            </a>
            <a 
              href="https://youtube.com/@llamalorol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Llamalo Rol. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
