"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Home, User, Code, Mail } from "lucide-react";


const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Code },
  { href: "/contact", label: "Contact", icon: Mail }
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation - Top Only */}
      <header className="hidden md:block fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-2xl">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link 
              href="/" 
              className="text-xl font-bold hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            
            <nav className="flex items-center gap-6">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Bottom Only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50  backdrop-blur-2xl border-t border-white/10">
        <div className="flex items-center justify-around h-16">
          {links.map(({ href, label, icon: Icon }, index) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors",
                pathname === href 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          ))}
          <div className="flex flex-col items-center justify-center w-full h-full gap-1 ">
          <ThemeToggle  />
         
         </div>
        </div>
        
        {/* Safe area spacing for mobile */}
        <div className="h-safe-area-bottom bg-background/80 backdrop-blur-2xl" />
      </nav>

      {/* Content Padding */}
      <div className="hidden md:block h-16" /> {/* Top spacing for desktop only */}
      {/* <div className="block md:hidden h-16" /> Bottom spacing for mobile only */}
    </>
  );
}