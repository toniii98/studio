
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpenCheck, FileText, Users, CalendarDays, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DziennikPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <BookOpenCheck className="mr-3 h-8 w-8 text-primary" />
            Dziennik Elektroniczny
          </h1>
          <p className="text-muted-foreground">
            Integracja z dziennikiem elektronicznym i zarządzanie danymi edukacyjnymi.
          </p>
        </div>
         <Button size="lg" variant="outline">
          Otwórz Dziennik (jeśli zintegrowany)
        </Button>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Panel Dziennika Elektronicznego</CardTitle>
          <CardDescription>Moduł dziennika w trakcie przygotowania lub oczekuje na integrację.</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-12">
          <BookOpenCheck className="mx-auto h-24 w-24 text-primary/30" />
          <p className="mt-4 text-xl font-semibold">Integracja z Dziennikiem</p>
          <p className="text-muted-foreground">
            Tutaj znajdziesz dostęp do funkcji dziennika, takich jak oceny, frekwencja, uwagi, po udanej integracji.
          </p>
          <Image src="https://placehold.co/700x300.png" alt="Dziennik elektroniczny" width={700} height={300} className="rounded-md mt-6 mx-auto shadow-md" data-ai-hint="online gradebook attendance" />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><Users className="mr-2 h-5 w-5 text-primary"/> Oceny i Postępy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Podgląd ocen (jeśli dotyczy).</p>
            <Button variant="outline" className="w-full" disabled>Zobacz oceny</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><CalendarDays className="mr-2 h-5 w-5 text-primary"/> Frekwencja</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Szczegółowa frekwencja z dziennika.</p>
            <Button variant="outline" className="w-full" disabled>Sprawdź frekwencję</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><FileText className="mr-2 h-5 w-5 text-primary"/> Uwagi i Komunikacja</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Wpisy i komunikaty z dziennika.</p>
            <Button variant="outline" className="w-full" disabled>Zobacz uwagi</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><Settings className="mr-2 h-5 w-5 text-primary"/> Ustawienia Integracji</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Konfiguruj połączenie z dziennikiem.</p>
            <Button variant="outline" className="w-full">Konfiguruj</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
