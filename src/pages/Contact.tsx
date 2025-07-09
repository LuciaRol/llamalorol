
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, Instagram, Twitch, MessageCircle, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.gg/llamalorol',
      description: 'Únete a nuestra comunidad en Discord'
    },
    {
      name: 'Twitch',
      icon: Twitch,
      url: 'https://twitch.tv/llamalorol',
      description: 'Síguenos en Twitch para los streams en vivo'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@llamalorol',
      description: 'Suscríbete a nuestro canal de YouTube'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/llamalorol',
      description: 'Síguenos en Instagram para contenido exclusivo'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contacto</h1>
            <p className="text-xl text-muted-foreground">
              Conecta con nosotros en todas nuestras redes sociales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Card key={social.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-primary" />
                      {social.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {social.description}
                    </p>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      Visitar {social.name}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  Contacto Directo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  ¿Tienes alguna pregunta específica o propuesta de colaboración?
                </p>
                <p className="text-lg">
                  Contáctanos a través de nuestras redes sociales o únete a nuestro Discord 
                  para hablar directamente con la comunidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
