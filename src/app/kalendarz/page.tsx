import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarDays, PlusCircle, Users, Briefcase, FerrisWheel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar"; // Assuming this is the shadcn calendar
import { Badge } from "@/components/ui/badge";

const events = [
  { date: new Date(2024, 5, 17), title: "Wycieczka do ZOO", type: "Wycieczka", group: "Wszystkie grupy" },
  { date: new Date(2024, 5, 20), title: "Dzień Sportu", type: "Wydarzenie", group: "Wszystkie grupy" },
  { date: new Date(2024, 5, 21), title: "Urlop: Anna Kowalska (Nauczyciel)", type: "Urlop Kadry", group: "Kadra" },
  { date: new Date(2024, 6, 1), title: "Piknik Rodzinny", type: "Wydarzenie", group: "Wszystkie grupy" },
];

export default function KalendarzPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <CalendarDays className="mr-3 h-8 w-8 text-primary" />
            Kalendarz
          </h1>
          <p className="text-muted-foreground">
            Wydarzenia, wycieczki, urlopy kadry i inne ważne terminy.
          </p>
        </div>
        <Button size="lg">
          <PlusCircle className="mr-2 h-5 w-5" /> Dodaj nowe wydarzenie
        </Button>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Kalendarz Placówki</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
                modifiers={{ booked: events.map(e => e.date) }}
                modifiersStyles={{ booked: { border: "2px solid hsl(var(--primary))" } }}
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Nadchodzące Wydarzenia</CardTitle>
              <CardDescription>
                {date ? `Wydarzenia na ${date.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}` : "Wybierz datę, aby zobaczyć wydarzenia."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {events.filter(e => date && e.date.toDateString() === date.toDateString()).length > 0 ? (
                 events.filter(e => date && e.date.toDateString() === date.toDateString()).map((event, index) => (
                  <div key={index} className="mb-3 p-3 border rounded-md hover:bg-muted/50">
                    <p className="font-semibold">{event.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant={
                        event.type === "Wycieczka" ? "default" :
                        event.type === "Wydarzenie" ? "secondary" :
                        "outline"
                      }>{event.type}</Badge>
                      <span className="text-xs text-muted-foreground">{event.group}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">Brak wydarzeń na wybrany dzień.</p>
              )}
              {events.filter(e => date && e.date.toDateString() !== date.toDateString() && e.date > new Date()).slice(0,3).map((event, index) => (
                 !events.find(ev => date && ev.date.toDateString() === date.toDateString()) && index === 0 && (
                   <p key="upcoming_header" className="text-sm font-medium mb-2 mt-4">Inne nadchodzące:</p>
                 ),
                 <div key={index} className="mb-3 p-3 border rounded-md hover:bg-muted/50">
                    <p className="font-semibold">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.date.toLocaleDateString('pl-PL')}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant={
                        event.type === "Wycieczka" ? "default" :
                        event.type === "Wydarzenie" ? "secondary" :
                        "outline"
                      }>{event.type}</Badge>
                      <span className="text-xs text-muted-foreground">{event.group}</span>
                    </div>
                  </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center"><FerrisWheel className="mr-2 h-5 w-5 text-primary"/> Wycieczki</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Zaplanowane wycieczki dla grup.</p>
            <Button variant="outline" className="w-full">Zarządzaj wycieczkami</Button>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center"><Briefcase className="mr-2 h-5 w-5 text-primary"/> Urlopy Kadry</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Planowane nieobecności personelu.</p>
            <Button variant="outline" className="w-full">Zobacz harmonogram urlopów</Button>
          </CardContent>
        </Card>
         <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center"><Users className="mr-2 h-5 w-5 text-primary"/> Urodziny</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Nadchodzące urodziny dzieci i kadry.</p>
            <Button variant="outline" className="w-full">Zobacz listę urodzin</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

// Minimal React import for useState
import * as React from "react";
