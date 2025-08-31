import Link from 'next/link';
import { Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground" id="contact">
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          <div>
              <h2 className="text-2xl font-bold text-foreground">MoeMoe Enterprises</h2>
               <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
                  Professional Courier & Cleaning Services for the Greater Atlanta Area.
              </p>
          </div>
          
          <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link>
            <Link href="/quote" className="text-sm text-muted-foreground hover:text-primary">Get a Quote</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
          </nav>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground space-y-2">
            <p>MoeMoe Enterprises LLC | 4936 Presidents Way #206, Tucker, GA 30084</p>
            <p>
                <a href="tel:404-375-9495" className="hover:text-primary">404-375-9495</a> | <a href="mailto:info@moemoeenterprise.com" className="hover:text-primary">info@moemoeenterprise.com</a>
            </p>
          <p>&copy; {currentYear} MoeMoe Enterprises LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
