
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Heart, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background py-20">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Bienvenidos a Llamalo Rol
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Sumérgete en aventuras épicas de rol en vivo. Historias increíbles, 
                personajes únicos y momentos inolvidables te esperan en cada stream.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/calendar">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Calendar className="mr-2 h-5 w-5" />
                    Ver Calendario
                  </Button>
                </Link>
                <a 
                  href="https://twitch.tv/llamalorol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Play className="mr-2 h-5 w-5" />
                    Ver en Twitch
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full blur-3xl"></div>
                <img 
                  src="/lovable-uploads/af538d6f-d6ad-4e52-bda1-52add2ee6dd4.png" 
                  alt="Llamalo Rol Mascot" 
                  className="relative z-10 w-64 h-64 lg:w-96 lg:h-96 object-contain animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Qué nos hace especiales?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre por qué miles de viewers eligen Llamalo Rol para sus aventuras de rol favoritas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Comunidad Activa</h3>
                <p className="text-muted-foreground">
                  Únete a una comunidad apasionada de jugadores y espectadores que viven cada aventura
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Play className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Streams Regulares</h3>
                <p className="text-muted-foreground">
                  Sesiones programadas de rol con historias épicas y personajes memorables
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Apoyo Directo</h3>
                <p className="text-muted-foreground">
                  Apoya directamente el contenido que amas y ayuda a crear más aventuras
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para la aventura?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            No te pierdas ni un momento de las épicas aventuras de Llamalo Rol
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calendar">
              <Button size="lg">
                Ver Próximos Streams
              </Button>
            </Link>
            <Link to="/donate">
              <Button variant="outline" size="lg">
                Apoyar el Canal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
