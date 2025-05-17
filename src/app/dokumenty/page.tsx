
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, FolderOpen, UploadCloud, FileSearch, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const documents = [
  { id: "doc1", name: "Regulamin Przedszkola.pdf", type: "Regulamin", size: "1.2MB", lastModified: "2024-05-10", sharedWith: "Wszyscy Rodzice" },
  { id: "doc2", name: "Zgoda na wycieczkę_ZOO.docx", type: "Zgoda", size: "85KB", lastModified: "2024-06-01", sharedWith: "Rodzice Słoneczek" },
  { id: "doc3", name: "Raport roczny 2023.xlsx", type: "Raport", size: "2.5MB", lastModified: "2024-01-15", sharedWith: "Kadra Zarządzająca" },
  { id: "doc4", name: "Procedura_bezpieczenstwa.pdf", type: "Procedura", size: "450KB", lastModified: "2023-09-01", sharedWith: "Kadra" },
];


export default function DokumentyPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <FileText className="mr-3 h-8 w-8 text-primary" />
            Dokumenty
          </h1>
          <p className="text-muted-foreground">
            Zarządzaj plikami, szablonami i udostępniaj dokumenty.
          </p>
        </div>
        <Button size="lg">
          <UploadCloud className="mr-2 h-5 w-5" /> Wgraj nowy dokument
        </Button>
      </section>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <CardTitle>Repozytorium Dokumentów</CardTitle>
             <div className="relative w-full md:w-1/3">
                <FileSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Szukaj dokumentu..." className="pl-8" />
            </div>
          </div>
          <CardDescription>Przeglądaj i zarządzaj wszystkimi plikami placówki.</CardDescription>
        </CardHeader>
        <CardContent>
           <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nazwa pliku</TableHead>
                <TableHead>Typ</TableHead>
                <TableHead>Rozmiar</TableHead>
                <TableHead>Ostatnia modyfikacja</TableHead>
                <TableHead>Udostępniono</TableHead>
                <TableHead className="text-right">Akcje</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium flex items-center gap-2"><FileText className="h-4 w-4 text-muted-foreground" /> {doc.name}</TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>{doc.lastModified}</TableCell>
                  <TableCell>{doc.sharedWith}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Pobierz</Button>
                    <Button variant="ghost" size="sm">Edytuj</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><FolderOpen className="mr-2 h-5 w-5 text-primary"/> Foldery Publiczne</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Dokumenty dostępne dla rodziców.</p>
            <Button variant="outline" className="w-full">Przeglądaj</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><FileText className="mr-2 h-5 w-5 text-primary"/> Szablony</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Gotowe wzory pism i formularzy.</p>
            <Button variant="outline" className="w-full">Zobacz szablony</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg"><Settings className="mr-2 h-5 w-5 text-primary"/> Zarządzanie Dostępem</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Kontroluj kto ma dostęp do plików.</p>
            <Button variant="outline" className="w-full">Ustawienia dostępu</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
