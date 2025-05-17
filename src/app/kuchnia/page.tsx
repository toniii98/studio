import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ChefHat, Utensils, Users, FileSpreadsheet, CalendarDays, WheatOff, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

const meals = [
  { day: "Poniedziałek", breakfast: "Owsianka z owocami", lunch: "Zupa pomidorowa, Naleśniki z serem", tea: "Kanapki z warzywami" },
  { day: "Wtorek", breakfast: "Jajecznica na parze", lunch: "Rosół, Klopsiki w sosie koperkowym z ziemniakami", tea: "Jogurt z musli" },
  { day: "Środa", breakfast: "Kasza manna z sokiem malinowym", lunch: "Zupa ogórkowa, Ryż z warzywami i kurczakiem", tea: "Budyń waniliowy" },
  { day: "Czwartek", breakfast: "Płatki kukurydziane z mlekiem", lunch: "Krupnik, Pierogi leniwe z masłem i bułką tartą", tea: "Owoce sezonowe" },
  { day: "Piątek", breakfast: "Tosty z dżemem", lunch: "Zupa rybna, Paluszki rybne z frytkami i surówką", tea: "Kisiel owocowy" },
];

export default function KuchniaPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <ChefHat className="mr-3 h-8 w-8 text-primary" />
            Kuchnia
          </h1>
          <p className="text-muted-foreground">
            Planuj jadłospisy, zarządzaj alergenami i generuj raporty HACCP.
          </p>
        </div>
         <Button size="lg">
            <PlusCircle className="mr-2 h-5 w-5" /> Stwórz nowy jadłospis
        </Button>
      </section>

      <Tabs defaultValue="jadlospis" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2">
          <TabsTrigger value="jadlospis" className="flex items-center gap-2"><Utensils className="h-4 w-4" /> Jadłospisy</TabsTrigger>
          <TabsTrigger value="alergeny" className="flex items-center gap-2"><WheatOff className="h-4 w-4" /> Alergeny</TabsTrigger>
          <TabsTrigger value="obecnosci" className="flex items-center gap-2"><Users className="h-4 w-4" /> Obecności</TabsTrigger>
          <TabsTrigger value="haccp" className="flex items-center gap-2"><FileSpreadsheet className="h-4 w-4" /> Raporty HACCP</TabsTrigger>
        </TabsList>

        <TabsContent value="jadlospis" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Aktualny Jadłospis</CardTitle>
                <Button variant="outline" size="sm"><CalendarDays className="mr-2 h-4 w-4"/> Zmień tydzień</Button>
              </div>
              <CardDescription>Jadłospis na tydzień: 10.06.2024 - 14.06.2024</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {meals.map(meal => (
                <Card key={meal.day} className="shadow-sm">
                  <CardHeader className="bg-muted/50 p-3">
                    <CardTitle className="text-md">{meal.day}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div><strong>Śniadanie:</strong> {meal.breakfast}</div>
                    <div><strong>Obiad:</strong> {meal.lunch}</div>
                    <div><strong>Podwieczorek:</strong> {meal.tea}</div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Drukuj Jadłospis</Button>
              <Button>Edytuj Jadłospis</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="alergeny" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Zarządzanie Alergenami</CardTitle>
              <CardDescription>Oznacz alergeny w potrawach i przypisz je do dzieci.</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-12">
              <WheatOff className="mx-auto h-16 w-16 text-muted-foreground" />
              <p className="mt-4 text-muted-foreground">Funkcjonalność zarządzania alergenami w przygotowaniu.</p>
              <p className="text-sm text-muted-foreground">Możliwość dodawania listy alergenów, oznaczania ich w posiłkach oraz generowania raportów.</p>
              <Image src="https://placehold.co/600x300.png" alt="Zarządzanie alergenami" width={600} height={300} className="rounded-md mt-4 mx-auto" data-ai-hint="food allergens list" />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="obecnosci" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Obecności Dzieci (Planowanie Posiłków)</CardTitle>
              <CardDescription>Sprawdź listę obecnych dzieci, aby dostosować ilość przygotowywanych posiłków.</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-12">
              <Users className="mx-auto h-16 w-16 text-muted-foreground" />
              <p className="mt-4 text-muted-foreground">Integracja z modułem obecności wkrótce.</p>
              <p className="text-sm text-muted-foreground">Automatyczne pobieranie danych o frekwencji do planowania posiłków.</p>
               <Button asChild className="mt-4">
                <Link href="/obecnosci">Przejdź do modułu Obecności</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="haccp" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Raporty HACCP</CardTitle>
              <CardDescription>Generuj i przechowuj dokumentację HACCP.</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-12">
              <FileSpreadsheet className="mx-auto h-16 w-16 text-muted-foreground" />
              <p className="mt-4 text-muted-foreground">Moduł raportów HACCP jest planowany.</p>
              <p className="text-sm text-muted-foreground">Ułatwi prowadzenie dokumentacji zgodnie z wymogami sanitarnymi.</p>
               <Image src="https://placehold.co/600x300.png" alt="Raporty HACCP" width={600} height={300} className="rounded-md mt-4 mx-auto" data-ai-hint="report document" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
