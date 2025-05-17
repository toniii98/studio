"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserNav } from "@/components/user-nav";
import { Logo } from "@/components/logo";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {isMobile && <SidebarTrigger />}
          {!isMobile && <div className="hidden lg:block"><Logo /></div>} {/* Show logo on larger screens if sidebar is collapsed */}
        </div>
        
        <div className="flex items-center gap-4">
          {/* Add any other header items here, like notifications */}
          <UserNav />
        </div>
      </div>
    </header>
  );
}
