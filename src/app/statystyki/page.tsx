
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart3, Users, TrendingUp, FilePieChart, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Pie, PieChart, Cell } from "recharts";

const chartDataFrekwencja = [
  { month: "Styczeń", frekwencja: 85 },
  { month: "Luty", frekwencja: 88 },
  { month: "Marzec", frekwencja: 92 },
  { month: "Kwiecień", frekwencja: 90 },
  { month: "Maj", frekwencja: 95 },
  { month: "Czerwiec", frekwencja: 80 },
];

const chartConfigFrekwencja = {
  frekwencja: {
    label: "Frekwencja (%)",
    color: "hsl(var(--chart-1))",
  },
};

const pieDataGrupy = [
  { name: 'Biedronki', value: 25, fill: 'hsl(var(--chart-1))' },
  { name: 'Słoneczka', value: 22, fill: 'hsl(var(--chart-2))' },
  { name: 'Żabki', value: 18, fill: 'hsl(var(--chart-3))' },
  { name: 'Motylki', value: 15, fill: 'hsl(var(--chart-4))' },
];


export default function StatystykiPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <BarChart3 className="mr-3 h-8 w-8 text-primary" />
          Statystyki i Raporty
        </h1>
        <p className="text-muted-foreground">
          Analizuj dane dotyczące działalności placówki.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><TrendingUp className="mr-2 h-5 w-5 text-primary"/> Ogólna Frekwencja Miesięczna</CardTitle>
            <CardDescription>Procentowa frekwencja dzieci w ostatnich miesiącach.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfigFrekwencja} className="h-[300px] w-full">
              <BarChart accessibilityLayer data={chartDataFrekwencja}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis unit="%" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="frekwencja" fill="var(--color-frekwencja)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><Users className="mr-2 h-5 w-5 text-primary"/> Liczba Dzieci w Grupach</CardTitle>
            <CardDescription>Podział dzieci na poszczególne grupy wiekowe.</CardDescription>
          </CardHeader>
          <CardContent  className="flex justify-center">
            <ChartContainer config={{}} className="h-[300px] w-[300px]">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                <Pie data={pieDataGrupy} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                   {pieDataGrupy.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                 <ChartLegend content={<ChartLegendContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Generowanie Raportów</CardTitle>
          <CardDescription>Wybierz typ raportu i zakres dat, aby wygenerować zestawienie.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-4">
                {/* Replace with Select components later */}
                <Input placeholder="Typ raportu (np. Finansowy, Obecności)" />
                <Input type="date" placeholder="Data od" />
                <Input type="date" placeholder="Data do" />
            </div>
            <Button><FilePieChart className="mr-2 h-4 w-4"/> Generuj raport</Button>
            <p className="text-xs text-muted-foreground">Przykładowe raporty: Zestawienie płatności, Raport frekwencji, Lista dzieci z alergiami.</p>
        </CardContent>
      </Card>

       <Card>
        <CardHeader>
          <CardTitle>Więcej Statystyk</CardTitle>
          <CardDescription>Moduł statystyk w trakcie rozbudowy.</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-12">
          <BarChart3 className="mx-auto h-24 w-24 text-primary/30" />
          <p className="mt-4 text-xl font-semibold">Zaawansowane Analizy</p>
          <p className="text-muted-foreground">
            W przyszłości dostępne będą bardziej szczegółowe analizy i personalizowane raporty.
          </p>
          <Image src="https://placehold.co/700x250.png" alt="Zaawansowane statystyki" width={700} height={250} className="rounded-md mt-6 mx-auto shadow-md" data-ai-hint="dashboard charts graphs" />
        </CardContent>
      </Card>

    </div>
  );
}
