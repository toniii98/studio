
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ClipboardList, CalendarCheck, UserCheck, FilePenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ObecnosciPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <ClipboardList className="mr-3 h-8 w-8 text-primary" />
            Obecności
          </h1>
          <p className="text-muted-foreground">
            Listy obecności dzieci i kadry, historia i statystyki.
          </p>
        </div>
        <Button size="lg">
          <CalendarCheck className="mr-2 h-5 w-5" /> Sprawdź dzisiejszą listę
        </Button>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Zarządzanie Obecnością</CardTitle>
          <CardDescription>Moduł w trakcie przygotowania. Wkrótce dostępne będą funkcje monitorowania obecności.</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-12">
          <ClipboardList className="mx-auto h-24 w-24 text-primary/30" />
          <p className="mt-4 text-xl font-semibold">Panel Obecności</p>
          <p className="text-muted-foreground">
            Tutaj będziesz mógł(a) zarządzać listami obecności, zgłaszać nieobecności i generować raporty.
          </p>
          <Image src="https://placehold.co/600x300.png" alt="Zarządzanie obecnością" width={600} height={300} className="rounded-md mt-6 mx-auto shadow-md" data-ai-hint="attendance checklist calendar" />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><UserCheck className="mr-2 h-5 w-5 text-primary"/> Dzisiejsza Frekwencja</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Szybki podgląd obecności dzieci.</p>
            <Button variant="outline" className="w-full">Zobacz listę</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><FilePenLine className="mr-2 h-5 w-5 text-primary"/> Zgłoś Nieobecność</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Zgłaszanie planowanych i nagłych nieobecności.</p>
            <Button variant="outline" className="w-full">Zgłoś</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><CalendarCheck className="mr-2 h-5 w-5 text-primary"/> Historia Obecności</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Archiwum list obecności i raporty.</p>
            <Button variant="outline" className="w-full">Przeglądaj historię</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
