import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Settings, Building, Palette, Bell, Users, KeyRound, ShieldCheck, FileJson } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function UstawieniaPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <Settings className="mr-3 h-8 w-8 text-primary" />
          Ustawienia Systemu
        </h1>
        <p className="text-muted-foreground">
          Zarządzaj konfiguracją placówki, personalizacją i integracjami.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Building className="mr-2 h-5 w-5 text-primary" /> Dane Placówki</CardTitle>
              <CardDescription>Podstawowe informacje o Twojej placówce edukacyjnej.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="facilityName">Nazwa placówki</Label>
                <Input id="facilityName" defaultValue="Przedszkole Słoneczko" />
              </div>
              <div>
                <Label htmlFor="facilityAddress">Adres</Label>
                <Input id="facilityAddress" defaultValue="ul. Radosna 1, 00-001 Warszawa" />
              </div>
              <div>
                <Label htmlFor="facilityContact">Dane kontaktowe (telefon, e-mail)</Label>
                <Input id="facilityContact" defaultValue="123-456-789, kontakt@sloneczko.edu.pl" />
              </div>
               <Button>Zapisz zmiany</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Palette className="mr-2 h-5 w-5 text-primary" /> Personalizacja</CardTitle>
              <CardDescription>Dostosuj wygląd i działanie systemu.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between space-x-2 p-3 border rounded-lg">
                <Label htmlFor="darkMode" className="flex flex-col space-y-1">
                  <span>Tryb ciemny</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    Włącz tryb ciemny dla całego systemu.
                  </span>
                </Label>
                <Switch id="darkMode" aria-label="Tryb ciemny" />
              </div>
              <div className="flex items-center justify-between space-x-2 p-3 border rounded-lg">
                <Label htmlFor="logoUpload" className="flex flex-col space-y-1">
                  <span>Logo placówki</span>
                   <span className="font-normal leading-snug text-muted-foreground">
                    Wgraj własne logo, które będzie widoczne w systemie.
                  </span>
                </Label>
                <Button variant="outline" size="sm">Wgraj logo</Button>
              </div>
              <Button>Zapisz ustawienia personalizacji</Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Bell className="mr-2 h-5 w-5 text-primary" /> Powiadomienia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center justify-between">
                <Label htmlFor="emailNotifications">Powiadomienia e-mail</Label>
                <Switch id="emailNotifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="pushNotifications">Powiadomienia push</Label>
                <Switch id="pushNotifications" />
              </div>
               <div className="flex items-center justify-between">
                <Label htmlFor="smsNotifications">Powiadomienia SMS</Label>
                <Switch id="smsNotifications" />
              </div>
              <Separator />
              <Button variant="outline" className="w-full">Zarządzaj szablonami powiadomień</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Users className="mr-2 h-5 w-5 text-primary" /> Zarządzanie Użytkownikami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full">Dodaj nowego użytkownika</Button>
              <Button variant="outline" className="w-full">Zarządzaj rolami i uprawnieniami</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><KeyRound className="mr-2 h-5 w-5 text-primary" /> Integracje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">Połącz z zewnętrznymi usługami.</p>
              <Button variant="link" className="p-0 h-auto">Google Calendar</Button>
              <Button variant="link" className="p-0 h-auto">Przelewy24 / PayU</Button>
              <Button variant="link" className="p-0 h-auto">Dziennik Vulcan</Button>
            </CardContent>
          </Card>

           <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><ShieldCheck className="mr-2 h-5 w-5 text-primary" /> Bezpieczeństwo i Prywatność</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full">Ustawienia RODO</Button>
              <Button variant="outline" className="w-full">Historia logowań</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><FileJson className="mr-2 h-5 w-5 text-primary" /> Dane i Eksport</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full">Eksportuj dane (CSV, Excel)</Button>
              <Button variant="outline" className="w-full">Archiwizuj dane</Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}

// Minimal Input to satisfy component usage, actual Input is from "@/components/ui/input"
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => <input {...props} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />;
