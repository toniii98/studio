
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Globe, Edit3, Newspaper, CalendarCheck, MessageCircleQuestion, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function StronaWWWCMSPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <Globe className="mr-3 h-8 w-8 text-primary" />
            Strona WWW + CMS
          </h1>
          <p className="text-muted-foreground">
            Zarządzaj treścią publicznej strony internetowej Twojej placówki.
          </p>
        </div>
        <Button size="lg" variant="outline" asChild>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Otwórz stronę WWW <Globe className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center"><Newspaper className="mr-2 h-5 w-5 text-primary"/> Aktualności i Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Publikuj najnowsze informacje, artykuły i zdjęcia z życia przedszkola.</p>
            <Button className="w-full">Zarządzaj wpisami</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center"><CalendarCheck className="mr-2 h-5 w-5 text-primary"/> Kalendarz Wydarzeń</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Udostępniaj publiczny kalendarz z ważnymi datami i wydarzeniami.</p>
            <Button className="w-full">Edytuj kalendarz publiczny</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center"><Edit3 className="mr-2 h-5 w-5 text-primary"/> Edytor Stron</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Modyfikuj istniejące podstrony (np. O nas, Kontakt, Oferta).</p>
            <Button className="w-full">Otwórz edytor stron</Button>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center"><MessageCircleQuestion className="mr-2 h-5 w-5 text-primary"/> Formularze</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Zarządzaj formularzem kontaktowym i rekrutacyjnym.</p>
            <Button className="w-full">Zobacz zgłoszenia</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center"><Users2 className="mr-2 h-5 w-5 text-primary"/> Strefa Rodzica</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Konfiguruj dostęp i treści w panelu dla zalogowanych rodziców.</p>
            <Button className="w-full">Ustawienia strefy rodzica</Button>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center"><Globe className="mr-2 h-5 w-5 text-primary"/> Ustawienia Ogólne WWW</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Zarządzaj domeną, SEO, analityką i wyglądem strony.</p>
            <Button className="w-full">Konfiguracja strony</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Podgląd Strony Głównej</CardTitle>
          <CardDescription>Tak aktualnie wygląda Twoja strona internetowa.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg p-4 bg-muted/20">
            <Image src="https://placehold.co/1200x600.png" alt="Podgląd strony WWW" width={1200} height={600} className="rounded-md shadow-lg" data-ai-hint="website homepage screenshot" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
