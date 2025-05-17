import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Users, BookOpenCheck, Bell, DollarSign, MessageCircle, ClipboardList, ChefHat, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight text-primary">
            Witaj w EduKids Manager!
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Twój centralny punkt zarządzania placówką. Sprawnie organizuj dzień,
            komunikuj się i analizuj dane.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild size="lg">
              <Link href="/kalendarz">Zobacz kalendarz <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
               <Link href="/dzieci">Zarządzaj dziećmi</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <Image 
            src="https://placehold.co/300x200.png" 
            alt="Ilustracja przedszkola"
            width={300}
            height={200}
            className="rounded-md shadow-lg"
            data-ai-hint="kindergarten classroom"
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Aktywne Dzieci
            </CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78</div>
            <p className="text-xs text-muted-foreground">
              +5% od ostatniego miesiąca
            </p>
          </CardContent>
          <CardFooter>
            <Progress value={78} aria-label="78% dzieci aktywnych" className="h-2" />
          </CardFooter>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Nadchodzące Wydarzenia
            </CardTitle>
            <Bell className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              W tym tygodniu
            </p>
          </CardContent>
           <CardFooter>
            <Button variant="ghost" size="sm" className="w-full justify-start text-primary" asChild>
                <Link href="/kalendarz">Zobacz szczegóły <ArrowRight className="ml-auto h-4 w-4" /></Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Nieprzeczytane Wiadomości
            </CardTitle>
            <MessageCircle className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Od rodziców i kadry
            </p>
          </CardContent>
          <CardFooter>
             <Button variant="ghost" size="sm" className="w-full justify-start text-primary" asChild>
                <Link href="/komunikacja">Przejdź do wiadomości <ArrowRight className="ml-auto h-4 w-4" /></Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-4">Szybki Dostęp</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Dodaj dziecko", href: "/dzieci/dodaj", icon: Users, description:"Zarejestruj nowe dziecko w systemie." },
            { title: "Sprawdź obecność", href: "/obecnosci", icon: ClipboardList, description:"Przeglądaj i zarządzaj listami obecności." },
            { title: "Nowy jadłospis", href: "/kuchnia/jadlospisy/nowy", icon: ChefHat, description:"Zaplanuj posiłki na nadchodzący tydzień." },
            { title: "Dokumenty", href: "/dokumenty", icon: FileText, description:"Dostęp do ważnych dokumentów i szablonów." },
          ].map((item) => (
            <Card key={item.href} className="hover:bg-muted/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <item.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 text-primary" asChild>
                  <Link href={item.href}>Przejdź <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
