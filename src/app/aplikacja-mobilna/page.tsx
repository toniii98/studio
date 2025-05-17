
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Smartphone, Download, Bell, MessageSquareText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
            <p>Nasza aplikacja mobilna (PWA) oferuje szybki i łatwy dostęp do:</p>
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
            <Image src="https://placehold.co/300x500.png" alt="Podgląd aplikacji mobilnej" width={250} height={420} className="rounded-xl shadow-2xl" data-ai-hint="mobile app screenshot" />
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><Bell className="mr-2 h-5 w-5 text-primary"/> Konfiguracja Powiadomień Push</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Zarządzaj ustawieniami powiadomień push wysyłanych do użytkowników aplikacji.</p>
            <Button className="w-full" variant="outline">Ustawienia powiadomień</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><MessageSquareText className="mr-2 h-5 w-5 text-primary"/> Statystyki Użycia</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Monitoruj aktywność użytkowników w aplikacji mobilnej.</p>
            <Button className="w-full" variant="outline">Zobacz statystyki</Button>
          </CardContent>
        </Card>
      </div>
       <Card>
        <CardHeader>
          <CardTitle>Informacje dla Deweloperów (jeśli dotyczy)</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-muted-foreground">
              Aplikacja EduKids Manager jest rozwijana jako Progresywna Aplikacja Webowa (PWA) dla zapewnienia szerokiej kompatybilności. 
              W przyszłości mogą pojawić się natywne wersje React Native dla jeszcze lepszego doświadczenia użytkownika.
            </p>
            <Image src="https://placehold.co/600x200.png" alt="Technologie mobilne" width={600} height={200} className="rounded-md shadow-lg mt-4" data-ai-hint="PWA React Native logos" />
        </CardContent>
      </Card>
    </div>
  );
}
