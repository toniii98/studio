import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CreditCard, DollarSign, FileText, Users, Receipt, BarChartHorizontalBig, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const payments = [
  { id: "INV001", parent: "Anna Kowalska", amount: 350, currency: "PLN",dueDate: "2024-06-10", status: "Zapłacone", type: "Czesne" },
  { id: "INV002", parent: "Piotr Nowak", amount: 50, currency: "PLN", dueDate: "2024-06-15", status: "Oczekujące", type: "Wycieczka" },
  { id: "INV003", parent: "Zofia Wiśniewska", amount: 350, currency: "PLN", dueDate: "2024-06-10", status: "Zapłacone", type: "Czesne" },
  { id: "INV004", parent: "Krzysztof Zając", amount: 370, currency: "PLN", dueDate: "2024-07-01", status: "Niezapłacone", type: "Czesne + obiady" },
];

export default function FinansePage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <CreditCard className="mr-3 h-8 w-8 text-primary" />
            Finanse i Płatności
          </h1>
          <p className="text-muted-foreground">
            Zarządzaj rozliczeniami, fakturami i raportami finansowymi.
          </p>
        </div>
        <Button size="lg">
           <DollarSign className="mr-2 h-5 w-5" /> Wygeneruj nowe rozliczenie
        </Button>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Przychody (Czerwiec)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,450 PLN</div>
            <p className="text-xs text-muted-foreground">+15% w stosunku do Maja</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Niezapłacone Faktury</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,100 PLN</div>
            <p className="text-xs text-muted-foreground">Dotyczy 5 rodziców</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status Płatności Czesnego</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92% Opłacone</div>
            <Progress value={92} className="mt-2 h-2" aria-label="92% opłacone"/>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ostatnie Transakcje</CardTitle>
          <CardDescription>Lista ostatnich płatności i faktur.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Rodzic</TableHead>
                <TableHead>Typ</TableHead>
                <TableHead className="text-right">Kwota</TableHead>
                <TableHead>Termin</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Akcje</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>{payment.parent}</TableCell>
                  <TableCell>{payment.type}</TableCell>
                  <TableCell className="text-right">{payment.amount.toFixed(2)} {payment.currency}</TableCell>
                  <TableCell>{payment.dueDate}</TableCell>
                  <TableCell>
                     <Badge variant={
                        payment.status === "Zapłacone" ? "default" :
                        payment.status === "Oczekujące" ? "secondary" :
                        "destructive"
                      }
                      className={payment.status === "Zapłacone" ? "bg-green-100 text-green-700 border-green-300" : ""}>
                        {payment.status}
                      </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Szczegóły</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-center">
            <Button variant="outline">Zobacz wszystkie transakcje</Button>
        </CardFooter>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><FileText className="mr-2 h-5 w-5 text-primary"/> Raporty Finansowe</CardTitle>
            <CardDescription>Generuj zestawienia i analizy finansowe.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start"><BarChartHorizontalBig className="mr-2 h-4 w-4"/> Raport miesięczny</Button>
            <Button variant="outline" className="w-full justify-start"><BarChartHorizontalBig className="mr-2 h-4 w-4"/> Zestawienie roczne</Button>
            <Button variant="outline" className="w-full justify-start"><Users className="mr-2 h-4 w-4"/> Salda rodziców</Button>
          </CardContent>
        </Card>
         <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><Banknote className="mr-2 h-5 w-5 text-primary"/> Integracje Płatności</CardTitle>
            <CardDescription>Połącz z systemami płatności online.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Image src="https://placehold.co/300x150.png" alt="Loga systemów płatności" width={300} height={150} className="rounded-md mx-auto mb-4" data-ai-hint="payment gateway logos" />
            <p className="text-sm text-muted-foreground">Integracja z Przelewy24, PayNow, PayU (opcjonalna).</p>
            <Button variant="secondary" className="mt-4">Skonfiguruj integracje</Button>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
