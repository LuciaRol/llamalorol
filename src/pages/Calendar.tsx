
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { CalendarWeekView } from '@/components/CalendarWeekView';
import { CreateEventModal } from '@/components/CreateEventModal';
import { Plus } from 'lucide-react';

export interface StreamEvent {
  id: string;
  name: string;
  date: Date;
  time: string;
  image?: string;
}

const Calendar = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState<StreamEvent[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(new Date());

  useEffect(() => {
    // Load events from localStorage
    const savedEvents = localStorage.getItem('llamalorol_events');
    if (savedEvents) {
      const parsedEvents = JSON.parse(savedEvents).map((event: any) => ({
        ...event,
        date: new Date(event.date)
      }));
      setEvents(parsedEvents);
    }
  }, []);

  const saveEvents = (newEvents: StreamEvent[]) => {
    setEvents(newEvents);
    localStorage.setItem('llamalorol_events', JSON.stringify(newEvents));
  };

  const handleCreateEvent = (eventData: Omit<StreamEvent, 'id'>) => {
    const newEvent: StreamEvent = {
      ...eventData,
      id: Date.now().toString()
    };
    const updatedEvents = [...events, newEvent];
    saveEvents(updatedEvents);
    setIsCreateModalOpen(false);
  };

  const handleDeleteEvent = (eventId: string) => {
    const updatedEvents = events.filter(event => event.id !== eventId);
    saveEvents(updatedEvents);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Calendario de Streams</h1>
              <p className="text-xl text-muted-foreground">
                Próximas aventuras de rol en vivo
              </p>
            </div>
            
            {user && (
              <Button onClick={() => setIsCreateModalOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Crear Evento
              </Button>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Vista Semanal</CardTitle>
            </CardHeader>
            <CardContent>
              <CalendarWeekView
                events={events}
                currentWeek={currentWeek}
                onWeekChange={setCurrentWeek}
                onDeleteEvent={user ? handleDeleteEvent : undefined}
              />
            </CardContent>
          </Card>

          <CreateEventModal
            isOpen={isCreateModalOpen}
            onClose={() => setIsCreateModalOpen(false)}
            onCreateEvent={handleCreateEvent}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
