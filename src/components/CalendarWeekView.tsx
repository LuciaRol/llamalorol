
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';
import { StreamEvent } from '@/pages/Calendar';
import { format, startOfWeek, addDays, isSameDay, addWeeks, subWeeks } from 'date-fns';
import { es } from 'date-fns/locale';

interface CalendarWeekViewProps {
  events: StreamEvent[];
  currentWeek: Date;
  onWeekChange: (date: Date) => void;
  onDeleteEvent?: (eventId: string) => void;
}

export const CalendarWeekView = ({ 
  events, 
  currentWeek, 
  onWeekChange, 
  onDeleteEvent 
}: CalendarWeekViewProps) => {
  const weekStart = startOfWeek(currentWeek, { weekStartsOn: 1 }); // Monday
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const getEventsForDay = (day: Date) => {
    return events.filter(event => isSameDay(event.date, day));
  };

  const goToPreviousWeek = () => {
    onWeekChange(subWeeks(currentWeek, 1));
  };

  const goToNextWeek = () => {
    onWeekChange(addWeeks(currentWeek, 1));
  };

  const goToCurrentWeek = () => {
    onWeekChange(new Date());
  };

  return (
    <div className="space-y-4">
      {/* Week Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={goToPreviousWeek}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={goToNextWeek}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <h3 className="text-lg font-semibold">
          Semana del {format(weekStart, 'd MMMM', { locale: es })} - {format(addDays(weekStart, 6), 'd MMMM yyyy', { locale: es })}
        </h3>
        
        <Button variant="outline" size="sm" onClick={goToCurrentWeek}>
          Hoy
        </Button>
      </div>

      {/* Week Grid */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
        {weekDays.map((day, index) => {
          const dayEvents = getEventsForDay(day);
          const isToday = isSameDay(day, new Date());
          
          return (
            <Card 
              key={index} 
              className={`min-h-[200px] ${isToday ? 'ring-2 ring-primary' : ''}`}
            >
              <CardContent className="p-3">
                <div className="font-semibold mb-2 text-center">
                  <div className="text-sm text-muted-foreground">
                    {format(day, 'EEEE', { locale: es })}
                  </div>
                  <div className={`text-lg ${isToday ? 'text-primary' : ''}`}>
                    {format(day, 'd')}
                  </div>
                </div>
                
                <div className="space-y-2">
                  {dayEvents.map((event) => (
                    <div 
                      key={event.id}
                      className="bg-primary/10 border border-primary/20 rounded-lg p-2 text-xs"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate mb-1">
                            {event.name}
                          </div>
                          <div className="text-muted-foreground">
                            {event.time}
                          </div>
                          {event.image && (
                            <img 
                              src={event.image} 
                              alt={event.name}
                              className="w-full h-12 object-cover rounded mt-2"
                            />
                          )}
                        </div>
                        
                        {onDeleteEvent && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 ml-1 opacity-0 group-hover:opacity-100 hover:bg-destructive hover:text-destructive-foreground"
                            onClick={() => onDeleteEvent(event.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
