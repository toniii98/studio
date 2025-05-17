import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Warehouse,
  ChefHat,
  ClipboardList,
  Users,
  Briefcase,
  CalendarDays,
  MessageSquare,
  CreditCard,
  FileText,
  Globe,
  UserPlus,
  Award,
  BookOpenCheck,
  BarChart3,
  Settings,
  Smartphone,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
}

export interface NavItemGroup {
  title?: string;
  items: NavItem[];
}

export const mainNav: NavItemGroup[] = [
  {
    items: [
      {
        title: "Pulpit",
        href: "/",
        icon: LayoutDashboard,
        description: "Główny panel informacyjny.",
      },
    ],
  },
  {
    title: "Zarządzanie",
    items: [
      {
        title: "Magazyn",
        href: "/magazyn",
        icon: Warehouse,
        description: "Zarządzanie zasobami i stanami magazynowymi.",
      },
      {
        title: "Kuchnia",
        href: "/kuchnia",
        icon: ChefHat,
        description: "Jadłospisy, alergeny i planowanie posiłków.",
      },
      {
        title: "Obecności",
        href: "/obecnosci",
        icon: ClipboardList,
        description: "Listy obecności dzieci i kadry.",
      },
      {
        title: "Dzieci",
        href: "/dzieci",
        icon: Users,
        description: "Profile dzieci, historia obecności, notatki.",
      },
      {
        title: "Kadra",
        href: "/kadra",
        icon: Briefcase,
        description: "Lista pracowników, harmonogramy, szkolenia.",
      },
      {
        title: "Kalendarz",
        href: "/kalendarz",
        icon: CalendarDays,
        description: "Wydarzenia, wycieczki, urlopy.",
      },
    ],
  },
  {
    title: "Komunikacja i Finanse",
    items: [
      {
        title: "Komunikacja",
        href: "/komunikacja",
        icon: MessageSquare,
        description: "Wiadomości, powiadomienia, ogłoszenia.",
      },
      {
        title: "Finanse",
        href: "/finanse",
        icon: CreditCard,
        description: "Rozliczenia, faktury, raporty finansowe.",
      },
      {
        title: "Dokumenty",
        href: "/dokumenty",
        icon: FileText,
        description: "Raporty, szablony, instrukcje.",
      }
    ],
  },
  {
    title: "Dodatkowe Moduły",
    items: [
       {
        title: "Strona WWW",
        href: "/strona-www",
        icon: Globe,
        description: "Zarządzanie treścią strony internetowej.",
      },
      {
        title: "Rekrutacja",
        href: "/rekrutacja",
        icon: UserPlus,
        description: "Proces rekrutacji online.",
      },
      {
        title: "System Punktacji",
        href: "/punkty",
        icon: Award,
        description: "System nagród i punktacji dla dzieci.",
      },
      {
        title: "Dziennik",
        href: "/dziennik",
        icon: BookOpenCheck,
        description: "Integracja z dziennikiem elektronicznym.",
      },
      {
        title: "Statystyki",
        href: "/statystyki",
        icon: BarChart3,
        description: "Analiza danych i statystyk.",
      },
      {
        title: "Aplikacja Mobilna",
        href: "/aplikacja-mobilna",
        icon: Smartphone,
        description: "Informacje o aplikacji mobilnej.",
      }
    ],
  },
  {
    items: [
      {
        title: "Ustawienia",
        href: "/ustawienia",
        icon: Settings,
        description: "Konfiguracja systemu.",
      },
    ],
  },
];
