
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquare, Send, Users, Bell, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function KomunikacjaPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <MessageSquare className="mr-3 h-8 w-8 text-primary" />
            Komunikacja
          </h1>
          <p className="text-muted-foreground">
            Wiadomości, powiadomienia i ogłoszenia dla rodziców i kadry.
          </p>
        </div>
        <Button size="lg">
          <Send className="mr-2 h-5 w-5" /> Wyślij nową wiadomość
        </Button>
      </section>

      <Tabs defaultValue="wiadomosci" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2">
          <TabsTrigger value="wiadomosci" className="flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Wiadomości</TabsTrigger>
          <TabsTrigger value="ogloszenia" className="flex items-center gap-2"><Bell className="h-4 w-4" /> Ogłoszenia</TabsTrigger>
          <TabsTrigger value="grupy" className="flex items-center gap-2"><Users className="h-4 w-4" /> Grupy Kontaktowe</TabsTrigger>
          <TabsTrigger value="ustawienia" className="flex items-center gap-2"><Settings2 className="h-4 w-4" /> Ustawienia</TabsTrigger>
        </TabsList>

        <TabsContent value="wiadomosci" className="mt-6">
            <Card>
                <CardHeader>
                <CardTitle>Skrzynka Odbiorcza</CardTitle>
                <CardDescription>Moduł wiadomości w trakcie przygotowania.</CardDescription>
                </CardHeader>
                <CardContent className="text-center py-12">
                <MessageSquare className="mx-auto h-24 w-24 text-primary/30" />
                <p className="mt-4 text-xl font-semibold">Panel Wiadomości</p>
                <p className="text-muted-foreground">
                    Tutaj znajdziesz wszystkie swoje rozmowy i będziesz mógł wysyłać nowe wiadomości.
                </p>
                <Image src="https://placehold.co/600x300.png" alt="Panel wiadomości" width={600} height={300} className="rounded-md mt-6 mx-auto shadow-md" data-ai-hint="chat messages interface" />
                </CardContent>
            </Card>
        </TabsContent>
         <TabsContent value="ogloszenia" className="mt-6">
            <Card>
                <CardHeader>
                <CardTitle>Tablica Ogłoszeń</CardTitle>
                <CardDescription>Publikuj ważne informacje dla rodziców i kadry.</CardDescription>
                </CardHeader>
                <CardContent className="text-center py-12">
                <Bell className="mx-auto h-24 w-24 text-primary/30" />
                <p className="mt-4 text-xl font-semibold">Panel Ogłoszeń</p>
                <p className="text-muted-foreground">
                    Twórz i zarządzaj ogłoszeniami widocznymi dla wybranych grup użytkowników.
                </p>
                 <Button className="mt-4"><Send className="mr-2 h-4 w-4" /> Dodaj nowe ogłoszenie</Button>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="grupy" className="mt-6">
            <Card>
                <CardHeader>
                <CardTitle>Grupy Kontaktowe</CardTitle>
                <CardDescription>Zarządzaj grupami odbiorców dla łatwiejszej komunikacji.</CardDescription>
                </CardHeader>
                <CardContent className="text-center py-12">
                <Users className="mx-auto h-24 w-24 text-primary/30" />
                <p className="mt-4 text-xl font-semibold">Panel Grup Kontaktowych</p>
                <p className="text-muted-foreground">
                    Definiuj grupy (np. "Rodzice Biedronek", "Kadra Pedagogiczna") dla masowej wysyłki.
                </p>
                 <Button className="mt-4"><Users className="mr-2 h-4 w-4" /> Zarządzaj grupami</Button>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="ustawienia" className="mt-6">
            <Card>
                <CardHeader>
                <CardTitle>Ustawienia Komunikacji</CardTitle>
                <CardDescription>Skonfiguruj preferencje powiadomień i kanałów komunikacji.</CardDescription>
                </CardHeader>
                <CardContent className="text-center py-12">
                <Settings2 className="mx-auto h-24 w-24 text-primary/30" />
                <p className="mt-4 text-xl font-semibold">Preferencje Powiadomień</p>
                <p className="text-muted-foreground">
                    Dostosuj, jak i kiedy chcesz otrzymywać powiadomienia (e-mail, push, SMS).
                </p>
                 <Button className="mt-4" variant="outline">Otwórz ustawienia</Button>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
