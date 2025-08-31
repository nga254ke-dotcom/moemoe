
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image src="https://i.imgur.com/3euCN8r.png" alt="MoeMoe Enterprises Logo" width={128} height={32} className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-muted-foreground transition-colors hover:text-primary",
                pathname === link.href && "text-primary font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="/quote">Request a Quote</Link>
          </Button>
        </div>

        <div className="md:hidden">
           <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
        </div>
      </div>
      
      {/* Mobile Dropdown Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen border-b" : "max-h-0"
        )}
      >
        <div className="flex flex-col p-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary",
                  pathname === link.href && "bg-secondary text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="p-2 mt-4 border-t">
              <Button asChild className="w-full">
                  <Link href="/quote" onClick={() => setIsOpen(false)}>Request a Quote</Link>
              </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
