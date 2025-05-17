"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";

export function UserNav() {
  // In a real app, you'd fetch user data here
  const user = { name: "Admin User", email: "admin@example.com", image: "https://placehold.co/100x100.png" };
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <DropdownMenu>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={user.image} alt={user.name} data-ai-hint="profile avatar" />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">Profil</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User />
            Profil
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            Ustawienia
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut />
          Wyloguj
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Minimal Tooltip components to avoid circular dependency if UserNav is used widely
// In a real app, ensure Tooltip components are properly imported or structured.
const TooltipProvider = ({ children, delayDuration }: { children: React.ReactNode, delayDuration?: number }) => <>{children}</>; // Simplified for this context
const Tooltip = ({ children }: { children: React.ReactNode }) => <>{children}</>; // Simplified
const TooltipTrigger = ({ children, asChild }: { children: React.ReactNode, asChild?: boolean }) => <>{children}</>; // Simplified
const TooltipContent = ({ children, side, hidden }: { children: React.ReactNode, side?: string, hidden?: boolean }) => <>{hidden ? null : <div className="hidden group-hover/tooltip:block absolute z-50 p-2 bg-black text-white rounded-md text-xs whitespace-nowrap">{children}</div>}</>; // Simplified with basic styling for visibility
