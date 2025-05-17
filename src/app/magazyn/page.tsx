
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PackageSearch, AlertTriangle, PlusCircle, History, ShoppingCart, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MagazynPage() {
  const gospodarczyItems = [
    { id: "g1", name: "Papier A4", quantity: 5, unit: "ryz", minLevel: 2, status: "OK", category: "Gospodarczy" },
    { id: "g2", name: "Kredki świecowe", quantity: 10, unit: "opak.", minLevel: 5, status: "OK", category: "Gospodarczy" },
    { id: "g3", name: "Płyn do dezynfekcji", quantity: 1, unit: "litr", minLevel: 2, status: "Niski stan", category: "Gospodarczy" },
    { id: "g4", name: "Mydło w płynie", quantity: 3, unit: "opak.", minLevel: 3, status: "OK", category: "Gospodarczy" },
    { id: "g5", name: "Ręczniki papierowe", quantity: 2, unit: "rolki", minLevel: 5, status: "Niski stan", category: "Gospodarczy" },
  ];

  const zywnosciowyItems = [
    { id: "z1", name: "Mąka pszenna", quantity: 10, unit: "kg", minLevel: 5, status: "OK", category: "Żywnościowy" },
    { id: "z2", name: "Cukier", quantity: 3, unit: "kg", minLevel: 5, status: "Niski stan", category: "Żywnościowy" },
    { id: "z3", name: "Olej rzepakowy", quantity: 5, unit: "litr", minLevel: 2, status: "OK", category: "Żywnościowy" },
    { id: "z4", name: "Ryż biały", quantity: 2, unit: "kg", minLevel: 4, status: "Niski stan", category: "Żywnościowy" },
    { id: "z5", name: "Makaron świderki", quantity: 6, unit: "opak.", minLevel: 3, status: "OK", category: "Żywnościowy" },
  ];

  const allItems = [...gospodarczyItems, ...zywnosciowyItems];
  const lowStockItems = allItems.filter(item => item.status === "Niski stan");

  const renderItemsTable = (items: typeof gospodarczyItems | typeof zywnosciowyItems, categoryName: string) => (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <CardTitle>Stan magazynowy - {categoryName}</CardTitle>
          <div className="w-full md:w-1/3">
            <Input type="search" placeholder={`Szukaj w ${categoryName.toLowerCase()}...`} />
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
  );


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
                  <strong>{item.name} ({item.category}):</strong> Aktualnie {item.quantity} {item.unit} (minimum {item.minLevel} {item.unit})
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="gospodarczy" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="gospodarczy" className="flex items-center gap-2"><Home className="h-4 w-4" /> Artykuły Gospodarcze</TabsTrigger>
          <TabsTrigger value="zywnosciowy" className="flex items-center gap-2"><ShoppingCart className="h-4 w-4" /> Artykuły Żywnościowe</TabsTrigger>
        </TabsList>
        <TabsContent value="gospodarczy" className="mt-6">
          {renderItemsTable(gospodarczyItems, "Artykuły Gospodarcze")}
        </TabsContent>
        <TabsContent value="zywnosciowy" className="mt-6">
          {renderItemsTable(zywnosciowyItems, "Artykuły Żywnościowe")}
        </TabsContent>
      </Tabs>
      
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
