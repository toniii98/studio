
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Star, Gift, BarChart2, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PunktyPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <Award className="mr-3 h-8 w-8 text-primary" />
            System Punktacji
          </h1>
          <p className="text-muted-foreground">
            Motywuj dzieci poprzez system nagród i punktów za dobre zachowanie i osiągnięcia.
          </p>
        </div>
        <Button size="lg">
          <Star className="mr-2 h-5 w-5" /> Przyznaj punkty
        </Button>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Panel Systemu Punktacji</CardTitle>
          <CardDescription>Moduł systemu punktacji w trakcie przygotowania.</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-12">
          <Award className="mx-auto h-24 w-24 text-primary/30" />
          <p className="mt-4 text-xl font-semibold">Tablica Osiągnięć</p>
          <p className="text-muted-foreground">
            Tutaj będziesz mógł(a) definiować kategorie punktów, przyznawać je dzieciom i śledzić rankingi.
          </p>
          <Image src="https://placehold.co/700x300.png" alt="System punktacji" width={700} height={300} className="rounded-md mt-6 mx-auto shadow-md" data-ai-hint="leaderboard stars rewards" />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><Gift className="mr-2 h-5 w-5 text-primary"/> Katalog Nagród</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Zarządzaj nagrodami do wymiany za punkty.</p>
            <Button variant="outline" className="w-full">Zobacz nagrody</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><BarChart2 className="mr-2 h-5 w-5 text-primary"/> Rankingi i Statystyki</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Śledź postępy i zaangażowanie dzieci.</p>
            <Button variant="outline" className="w-full">Zobacz ranking</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><Settings className="mr-2 h-5 w-5 text-primary"/> Konfiguracja Systemu</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Ustaw kategorie punktów i wartości.</p>
            <Button variant="outline" className="w-full">Ustawienia</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
