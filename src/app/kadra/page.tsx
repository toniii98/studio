
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Briefcase, UserPlus, Users, CalendarClock, FileText, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const staffData = [
  { id: "s1", name: "Anna Kowalska", role: "Nauczyciel wychowania przedszkolnego", group: "Biedronki", avatar: "https://placehold.co/40x40.png?text=AK", status: "Aktywny" },
  { id: "s2", name: "Marek Wiśniewski", role: "Asystent nauczyciela", group: "Słoneczka", avatar: "https://placehold.co/40x40.png?text=MW", status: "Aktywny" },
  { id: "s3", name: "Ewa Nowak", role: "Dyrektor placówki", group: "Administracja", avatar: "https://placehold.co/40x40.png?text=EN", status: "Na urlopie" },
];

export default function KadraPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <Briefcase className="mr-3 h-8 w-8 text-primary" />
            Kadra
          </h1>
          <p className="text-muted-foreground">
            Zarządzaj profilem pracowników, harmonogramami i dokumentacją.
          </p>
        </div>
        <Button size="lg">
          <UserPlus className="mr-2 h-5 w-5" /> Dodaj pracownika
        </Button>
      </section>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <CardTitle>Lista Pracowników</CardTitle>
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Szukaj pracownika..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {staffData.map(staff => (
              <Card key={staff.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={staff.avatar} alt={staff.name} data-ai-hint="staff avatar" />
                      <AvatarFallback>{staff.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-lg">{staff.name}</p>
                      <p className="text-sm text-muted-foreground">{staff.role}</p>
                      <p className="text-xs text-muted-foreground">Grupa/Dział: {staff.group}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                     <Badge variant={staff.status === "Aktywny" ? "default" : "secondary"} className={staff.status === "Aktywny" ? "bg-green-100 text-green-700 border-green-300" : "bg-yellow-100 text-yellow-700 border-yellow-300"}>
                        {staff.status}
                     </Badge>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/kadra/${staff.id}`}>Zobacz profil</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
            <Button variant="ghost">Załaduj więcej...</Button>
        </CardFooter>
      </Card>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><CalendarClock className="mr-2 h-5 w-5 text-primary"/> Harmonogramy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Grafiki pracy, urlopy, zastępstwa.</p>
            <Button variant="outline" className="w-full">Zarządzaj harmonogramami</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><FileText className="mr-2 h-5 w-5 text-primary"/> Dokumentacja Kadrowa</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Umowy, certyfikaty, szkolenia.</p>
            <Button variant="outline" className="w-full">Przeglądaj dokumenty</Button>
          </CardContent>
        </Card>
         <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><Users className="mr-2 h-5 w-5 text-primary"/> Role i Uprawnienia</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Zarządzaj dostępem do systemu.</p>
            <Button variant="outline" className="w-full">Konfiguruj role</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
