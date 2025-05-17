import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PackageSearch, AlertTriangle, PlusCircle, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";

export default function MagazynPage() {
  const items = [
    { id: "1", name: "Papier A4", quantity: 5, unit: "ryz", minLevel: 2, status: "OK" },
    { id: "2", name: "Kredki świecowe", quantity: 10, unit: "opak.", minLevel: 5, status: "OK" },
    { id: "3", name: "Płyn do dezynfekcji", quantity: 1, unit: "litr", minLevel: 2, status: "Niski stan" },
    { id: "4", name: "Mydło w płynie", quantity: 3, unit: "opak.", minLevel: 3, status: "OK" },
    { id: "5", name: "Ręczniki papierowe", quantity: 2, unit: "rolki", minLevel: 5, status: "Niski stan" },
  ];

  const lowStockItems = items.filter(item => item.status === "Niski stan");

  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <PackageSearch className="mr-3 h-8 w-8 text-primary" />
            Magazyn
          </h1>
          <p className="text-muted-foreground">
            Zarządzaj stanami magazynowymi artykułów i środków czystości.
          </p>
        </div>
        <Button size="lg">
          <PlusCircle className="mr-2 h-5 w-5" /> Dodaj nowy artykuł
        </Button>
      </section>

      {lowStockItems.length > 0 && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="flex items-center text-destructive">
              <AlertTriangle className="mr-2 h-6 w-6" />
              Alerty o niskim stanie zapasów
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {lowStockItems.map(item => (
                <li key={item.id}>
                  <strong>{item.name}:</strong> Aktualnie {item.quantity} {item.unit} (minimum {item.minLevel} {item.unit})
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <CardTitle>Aktualny stan magazynowy</CardTitle>
            <div className="w-full md:w-1/3">
              <Input type="search" placeholder="Szukaj artykułu..." />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nazwa artykułu</TableHead>
                <TableHead className="text-right">Ilość</TableHead>
                <TableHead>Jednostka</TableHead>
                <TableHead className="text-right">Poziom minimalny</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Akcje</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id} className={item.status === "Niski stan" ? "bg-destructive/5 hover:bg-destructive/10" : ""}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell className="text-right">{item.minLevel}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.status === "Niski stan"
                        ? "bg-destructive/20 text-destructive-foreground border border-destructive"
                        : "bg-green-500/20 text-green-700 border border-green-500"
                    }`}>
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Edytuj</Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive-foreground hover:bg-destructive">Usuń</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <History className="mr-2 h-6 w-6 text-primary" />
              Historia zużycia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Tutaj znajdą się wykresy i raporty dotyczące zużycia zasobów.</p>
            <Image src="https://placehold.co/600x300.png" alt="Wykres zużycia" width={600} height={300} className="rounded-md" data-ai-hint="chart graph" />
          </CardContent>
        </Card>
         <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PackageSearch className="mr-2 h-6 w-6 text-primary" />
              Szybkie akcje
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline"><PlusCircle className="mr-2 h-4 w-4" /> Zarejestruj nowe przyjęcie towaru</Button>
            <Button className="w-full justify-start" variant="outline"><History className="mr-2 h-4 w-4" /> Wygeneruj raport zużycia</Button>
             <Button className="w-full justify-start" variant="outline"><AlertTriangle className="mr-2 h-4 w-4" /> Zamów brakujące artykuły</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
