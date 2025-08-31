import Link from 'next/link';
import { Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-center text-sm text-muted-foreground md:order-1 md:text-left">
            &copy; {currentYear} MoeMoe Enterprises LLC. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:order-2" aria-label="Footer">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link>
            <Link href="/quote" className="text-sm text-muted-foreground hover:text-primary">Quote</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
          </nav>
          <div className="flex justify-center space-x-6 md:order-3">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
