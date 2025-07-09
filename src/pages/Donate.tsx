
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Coffee, DollarSign } from 'lucide-react';

const Donate = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Apoya a Llamalo Rol</h1>
            <p className="text-xl text-muted-foreground">
              Tu apoyo nos ayuda a crear más contenido y mejores aventuras
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl">PayPal</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Haz una donación directa y segura a través de PayPal
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://paypal.me/llamalorol', '_blank')}
                >
                  Donar con PayPal
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Coffee className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-2xl">Ko-fi</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Invítanos a un café y apoya nuestro trabajo creativo
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => window.open('https://ko-fi.com/llamalorol', '_blank')}
                >
                  Apoyar en Ko-fi
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-pink-100 dark:bg-pink-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle className="text-2xl">¿Por qué donar?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 max-w-2xl mx-auto">
                <p className="text-muted-foreground">
                  Tu apoyo nos permite dedicar más tiempo a crear contenido de calidad, 
                  mejorar nuestro equipo técnico y ofrecer mejores experiencias de rol para toda la comunidad.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Mejor Equipo</h3>
                    <p className="text-sm text-muted-foreground">
                      Equipos de audio y vídeo de mayor calidad
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Más Contenido</h3>
                    <p className="text-sm text-muted-foreground">
                      Más horas de streaming y aventuras épicas
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Nuevos Proyectos</h3>
                    <p className="text-sm text-muted-foreground">
                      Desarrollo de nuevas ideas y formatos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
