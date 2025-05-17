
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Smartphone, Download, Bell, MessageSquare, Users, CreditCard, CalendarDays, Utensils, ClipboardCheck, Package, ShoppingCart, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge"; // Added import

export default function AplikacjaMobilnaPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <Smartphone className="mr-3 h-8 w-8 text-primary" />
            Aplikacja Mobilna
          </h1>
          <p className="text-muted-foreground">
            Wygodny dostęp do najważniejszych funkcji dla rodziców i kadry na urządzeniach mobilnych.
          </p>
        </div>
      </section>

      <Card className="bg-gradient-to-br from-primary/10 via-background to-background">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Pobierz Aplikację EduKids Manager</CardTitle>
          <CardDescription>Dostępna na iOS i Android. Bądź zawsze na bieżąco!</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <p>Nasza aplikacja mobilna (PWA) oferuje szybki i łatwy dostęp do kluczowych funkcji systemu.</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><CheckCircle2 className="inline h-4 w-4 mr-2 text-green-500"/>Powiadomień i ogłoszeń</li>
              <li><CheckCircle2 className="inline h-4 w-4 mr-2 text-green-500"/>Komunikacji z placówką</li>
              <li><CheckCircle2 className="inline h-4 w-4 mr-2 text-green-500"/>Kalendarza wydarzeń</li>
              <li><CheckCircle2 className="inline h-4 w-4 mr-2 text-green-500"/>Informacji o dziecku (dla rodziców)</li>
              <li><CheckCircle2 className="inline h-4 w-4 mr-2 text-green-500"/>Zgłaszania nieobecności</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                <Download className="mr-2 h-5 w-5" /> Pobierz na Android (Google Play)
              </Button>
              <Button size="lg" className="bg-gray-200 hover:bg-gray-300 text-black">
                <Download className="mr-2 h-5 w-5" /> Pobierz na iOS (App Store)
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Aplikacja jest Progresywną Aplikacją Webową (PWA), co oznacza, że można ją również dodać do ekranu głównego bezpośrednio z przeglądarki.
            </p>
          </div>
          <div className="flex-shrink-0">
             {/* Placeholder for a generic phone image or app icon */}
            <Image src="https://placehold.co/250x420.png" alt="Aplikacja mobilna" width={200} height={380} className="rounded-xl shadow-lg" data-ai-hint="generic phone PWA" />
          </div>
        </CardContent>
      </Card>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-center mb-8">
          Podgląd aplikacji dla różnych ról
        </h2>
        <Tabs defaultValue="rodzic" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2">
            <TabsTrigger value="rodzic">Rodzic</TabsTrigger>
            <TabsTrigger value="kadra">Kadra Dydaktyczna</TabsTrigger>
            <TabsTrigger value="administracja">Administracja</TabsTrigger>
          </TabsList>

          <TabsContent value="rodzic">
            <Card className="w-full max-w-xs sm:max-w-sm mx-auto mt-6 shadow-2xl border-4 border-neutral-800 rounded-[2.5rem] overflow-hidden bg-neutral-900">
              <div className="bg-neutral-800 p-2 text-center text-white text-xs">EduKids Manager</div>
              <CardHeader className="bg-primary/20 p-3">
                <CardTitle className="text-md text-primary-foreground flex items-center justify-center">
                  <Smartphone className="mr-2 h-5 w-5" /> Panel Rodzica
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2 h-[480px] overflow-y-auto bg-background">
                <div className="p-3 border rounded-lg shadow-sm bg-card">
                  <h4 className="font-semibold flex items-center text-sm mb-1"><Users className="mr-2 h-4 w-4 text-primary"/> Zosia Kowalska <Badge variant="secondary" className="ml-auto text-xs">Gr. Biedronki</Badge></h4>
                  <p className="text-xs text-muted-foreground">Status dzisiaj: <span className="text-green-600 font-medium">Obecna</span></p>
                </div>
                <Button variant="outline" className="w-full justify-start text-sm h-11"><MessageSquare className="mr-2 h-4 w-4 text-blue-500"/> Wiadomości <Badge className="ml-auto">3</Badge></Button>
                <Button variant="outline" className="w-full justify-start text-sm h-11"><Bell className="mr-2 h-4 w-4 text-red-500"/> Powiadomienia <Badge className="ml-auto bg-red-500">2</Badge></Button>
                <Button variant="outline" className="w-full justify-start text-sm h-11"><CreditCard className="mr-2 h-4 w-4 text-green-500"/> Płatności (Czesne: <span className="text-green-600 ml-1">OK</span>)</Button>
                <Button variant="outline" className="w-full justify-start text-sm h-11"><CalendarDays className="mr-2 h-4 w-4 text-purple-500"/> Kalendarz</Button>
                <Button variant="outline" className="w-full justify-start text-sm h-11"><Utensils className="mr-2 h-4 w-4 text-orange-500"/> Jadłospis</Button>
                <div className="p-3 border rounded-lg shadow-sm mt-2 bg-card">
                    <h4 className="font-semibold text-sm mb-1">Najbliższe wydarzenie:</h4>
                    <p className="text-xs text-muted-foreground">Wycieczka do ZOO - 20.06.2024</p>
                </div>
              </CardContent>
              <div className="bg-neutral-800 p-3 rounded-b-[2.2rem]">
                 <div className="w-16 h-1 mx-auto bg-neutral-600 rounded-full"></div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="kadra">
            <Card className="w-full max-w-xs sm:max-w-sm mx-auto mt-6 shadow-2xl border-4 border-neutral-800 rounded-[2.5rem] overflow-hidden bg-neutral-900">
              <div className="bg-neutral-800 p-2 text-center text-white text-xs">EduKids Manager</div>
              <CardHeader className="bg-primary/20 p-3">
                <CardTitle className="text-md text-primary-foreground flex items-center justify-center">
                  <Smartphone className="mr-2 h-5 w-5" /> Panel Nauczyciela
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2 h-[480px] overflow-y-auto bg-background">
                <Button variant="default" className="w-full justify-start text-sm h-11 shadow-sm"><ClipboardCheck className="mr-2 h-4 w-4"/> Sprawdź obecność (Gr. Biedronki)</Button>
                <Button variant="outline" className="w-full justify-start text-sm h-11"><Users className="mr-2 h-4 w-4 text-blue-500"/> Lista dzieci</Button>
                <Button variant="outline" className="w-full justify-start text-sm h-11"><CalendarDays className="mr-2 h-4 w-4 text-purple-500"/> Kalendarz grupy</Button>
                <Button variant="outline" className="w-full justify-start text-sm h-11"><MessageSquare className="mr-2 h-4 w-4 text-green-500"/> Wiadomości od rodziców</Button>
                 <div className="p-3 border rounded-lg shadow-sm bg-card">
                  <h4 className="font-semibold flex items-center text-sm mb-1">Zgłoszone nieobecności:</h4>
                  <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                      <li>Jaś N. (dziś)</li>
                      <li>Ania P. (jutro)</li>
                  </ul>
                </div>
                <div className="p-3 border rounded-lg shadow-sm bg-card">
                    <h4 className="font-semibold text-sm mb-1">Plan zajęć na dziś:</h4>
                    <p className="text-xs text-muted-foreground">9:00 Śniadanie, 9:30 Zabawy swobodne, 10:30 Zajęcia plastyczne...</p>
                </div>
              </CardContent>
              <div className="bg-neutral-800 p-3 rounded-b-[2.2rem]">
                 <div className="w-16 h-1 mx-auto bg-neutral-600 rounded-full"></div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="administracja">
            <Card className="w-full max-w-xs sm:max-w-sm mx-auto mt-6 shadow-2xl border-4 border-neutral-800 rounded-[2.5rem] overflow-hidden bg-neutral-900">
              <div className="bg-neutral-800 p-2 text-center text-white text-xs">EduKids Manager</div>
              <CardHeader className="bg-primary/20 p-3">
                <CardTitle className="text-md text-primary-foreground flex items-center justify-center">
                  <Smartphone className="mr-2 h-5 w-5" /> Panel Administracji
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2 h-[480px] overflow-y-auto bg-background">
                <Button variant="outline" className="w-full justify-start text-sm h-11"><Package className="mr-2 h-4 w-4 text-indigo-500"/> Stany Magazynowe</Button>
                <div className="p-3 border rounded-lg shadow-sm bg-destructive/10">
                  <h4 className="font-semibold text-destructive flex items-center text-sm"><AlertTriangle className="mr-2 h-4 w-4"/> Niskie stany:</h4>
                  <ul className="list-disc list-inside text-xs text-destructive/80 space-y-1">
                      <li>Papier A4 (Pozostało: 1 ryza)</li>
                      <li>Mydło w płynie (Pozostało: 2 szt.)</li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full justify-start text-sm h-11"><ShoppingCart className="mr-2 h-4 w-4 text-teal-500"/> Zapotrzebowania <Badge className="ml-auto">2</Badge></Button>
                <Button variant="outline" className="w-full justify-start text-sm h-11"><Users className="mr-2 h-4 w-4 text-blue-500"/> Zarządzanie Użytkownikami</Button>
                <Button variant="outline" className="w-full justify-start text-sm h-11"><CreditCard className="mr-2 h-4 w-4 text-green-500"/> Rozliczenia</Button>
                 <Button variant="outline" className="w-full justify-start text-sm h-11"><Bell className="mr-2 h-4 w-4 text-red-500"/> Ogłoszenia globalne</Button>
              </CardContent>
              <div className="bg-neutral-800 p-3 rounded-b-[2.2rem]">
                 <div className="w-16 h-1 mx-auto bg-neutral-600 rounded-full"></div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
