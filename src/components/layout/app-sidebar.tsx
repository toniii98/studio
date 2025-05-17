"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { mainNav } from "@/config/nav";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChevronLeftSquare, ChevronRightSquare } from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();
  const { open, setOpen, state, isMobile, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible={isMobile ? "offcanvas" : "icon"} className="border-r">
      <SidebarHeader className="p-4">
        <div className={cn("flex items-center justify-between", state === "collapsed" && !isMobile && "justify-center")}>
           <div className={cn(state === "collapsed" && !isMobile && "hidden")}>
            <Logo />
           </div>
          {!isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(!open)}
              className="h-8 w-8"
              aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
            >
              {open ? <ChevronLeftSquare /> : <ChevronRightSquare />}
            </Button>
          )}
        </div>
      </SidebarHeader>
      <Separator className="mb-2 bg-sidebar-border" />
      <ScrollArea className="flex-1">
        <SidebarContent>
          {mainNav.map((group, index) => (
            <SidebarGroup key={index} className="px-3 py-1">
              {group.title && state === "expanded" && (
                <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/70 mb-1 px-1">
                  {group.title}
                </SidebarGroupLabel>
              )}
              {group.title && state === "collapsed" && !isMobile && (
                 <Separator className="my-2 bg-sidebar-border" />
              )}
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <SidebarMenuItem key={item.href}>
                      <Link href={item.href} passHref legacyBehavior>
                        <SidebarMenuButton
                          asChild={!item.disabled}
                          isActive={isActive}
                          disabled={item.disabled}
                          className="w-full justify-start"
                          tooltip={state === "collapsed" && !isMobile ? item.title : undefined}
                          aria-label={item.title}
                        >
                          <a>
                            <item.icon
                              className={cn(
                                "h-5 w-5 shrink-0",
                                isActive ? "text-sidebar-primary-foreground" : "text-sidebar-foreground/80"
                              )}
                            />
                            <span className={cn(state === "collapsed" && !isMobile && "sr-only")}>
                              {item.title}
                            </span>
                            {item.label && state === "expanded" && (
                              <span className="ml-auto text-xs text-sidebar-foreground/60">
                                {item.label}
                              </span>
                            )}
                          </a>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </ScrollArea>
      <SidebarFooter className="p-4 mt-auto border-t border-sidebar-border">
        {/* Footer content can go here */}
      </SidebarFooter>
    </Sidebar>
  );
}
