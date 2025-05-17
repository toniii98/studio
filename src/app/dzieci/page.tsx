import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Users, UserPlus, FileText, MessageSquare, BarChart2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const childrenData = [
  { id: "1", name: "Anna Kowalska", group: "Biedronki", avatar: "https://placehold.co/40x40.png?text=AK", allergies: ["Orzechy", "Mleko"], lastAttendance: "Obecna" },
  { id: "2", name: "Piotr Nowak", group: "Słoneczka", avatar: "https://placehold.co/40x40.png?text=PN", allergies: [], lastAttendance: "Nieobecny" },
  { id: "3", name: "Zofia Wiśniewska", group: "Biedronki", avatar: "https://placehold.co/40x40.png?text=ZW", allergies: ["Gluten"], lastAttendance: "Obecna" },
  { id: "4", name: "Krzysztof Zając", group: "Żabki", avatar: "https://placehold.co/40x40.png?text=KZ", allergies: [], lastAttendance: "Obecny" },
];


export default function DzieciPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <Users className="mr-3 h-8 w-8 text-primary" />
            Dzieci i Rodzice
          </h1>
          <p className="text-muted-foreground">
            Profile dzieci, historia obecności, komentarze i postępy.
          </p>
        </div>
        <Button size="lg" asChild>
          <Link href="/dzieci/dodaj">
            <UserPlus className="mr-2 h-5 w-5" /> Dodaj dziecko
          </Link>
        </Button>
      </section>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <CardTitle>Lista Dzieci</CardTitle>
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Szukaj dziecka..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {childrenData.map(child => (
              <Card key={child.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={child.avatar} alt={child.name} data-ai-hint="child avatar" />
                      <AvatarFallback>{child.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-lg">{child.name}</p>
                      <p className="text-sm text-muted-foreground">Grupa: {child.group}</p>
                      {child.allergies.length > 0 && (
                        <div className="mt-1">
                          {child.allergies.map(allergy => (
                            <Badge key={allergy} variant="destructive" className="mr-1 text-xs">{allergy}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                     <Badge variant={child.lastAttendance === "Obecna" ? "default" : "secondary"} className={child.lastAttendance === "Obecna" ? "bg-green-100 text-green-700 border-green-300" : ""}>
                        {child.lastAttendance}
                     </Badge>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/dzieci/${child.id}`}>Zobacz profil</Link>
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

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><FileText className="mr-2 h-5 w-5 text-primary" /> Dokumentacja</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Zgody, upoważnienia, karta dziecka.</p>
            <Button variant="outline" className="w-full">Przeglądaj dokumenty</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><MessageSquare className="mr-2 h-5 w-5 text-primary" /> Komentarze Nauczycieli</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Notatki o postępach i zachowaniu.</p>
            <Button variant="outline" className="w-full">Zobacz ostatnie komentarze</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><BarChart2 className="mr-2 h-5 w-5 text-primary" /> Postępy i Rozwój</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Śledź rozwój dziecka w kluczowych obszarach.</p>
            <Button variant="outline" className="w-full">Analiza postępów</Button>
          </CardContent>
        </Card>
      </section>

    </div>
  );
}
