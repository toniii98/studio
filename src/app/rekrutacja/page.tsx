
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { UserPlus, FileSignature, CheckSquare, ListChecks, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

export default function RekrutacjaPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <UserPlus className="mr-3 h-8 w-8 text-primary" />
            Rekrutacja
          </h1>
          <p className="text-muted-foreground">
            Zarządzaj procesem rekrutacji nowych dzieci do placówki.
          </p>
        </div>
        <Button size="lg">
          <FileSignature className="mr-2 h-5 w-5" /> Otwórz formularz zgłoszeniowy
        </Button>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nowe Zgłoszenia</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">W tym tygodniu</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status Rekrutacji</CardTitle>
             <ListChecks className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75% Miejsc Zajętych</div>
            <Progress value={75} className="mt-2 h-2" aria-label="75% miejsc zajętych"/>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lista Oczekujących</CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Kandydatów na liście</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Panel Zarządzania Rekrutacją</CardTitle>
          <CardDescription>Moduł rekrutacji w trakcie przygotowania.</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-12">
          <UserPlus className="mx-auto h-24 w-24 text-primary/30" />
          <p className="mt-4 text-xl font-semibold">System Rekrutacyjny</p>
          <p className="text-muted-foreground">
            Tutaj będziesz mógł(a) przeglądać zgłoszenia, zarządzać listami i konfigurować etapy rekrutacji.
          </p>
          <Image src="https://placehold.co/800x300.png" alt="Proces rekrutacji" width={800} height={300} className="rounded-md mt-6 mx-auto shadow-md" data-ai-hint="application form recruitment process" />
        </CardContent>
      </Card>

       <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><FileSignature className="mr-2 h-5 w-5 text-primary"/> Edytuj Formularz Zgłoszeniowy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Dostosuj pola i treść formularza dla rodziców.</p>
            <Button className="w-full" variant="outline">Edytor formularza</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><Settings className="mr-2 h-5 w-5 text-primary"/> Ustawienia Rekrutacji</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Skonfiguruj terminy, kryteria i powiadomienia.</p>
            <Button className="w-full" variant="outline">Konfiguracja</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
