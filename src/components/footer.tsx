import Link from 'next/link';
import { Rocket, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground" id="contact">
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
              <Rocket className="h-8 w-8 text-primary" />
              <div>
                <span className="text-primary">MoeMoe</span>
                <span className="font-light text-foreground"> Services Hub</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Fast & Reliable Courier & Cleaning Services in Georgia. Serving Tucker, Atlanta, and surrounding areas.
            </p>
            <div className="flex space-x-6">
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
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary">Courier Services</Link></li>
                  <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary">Cleaning Services</Link></li>
                  <li><Link href="#quote" className="text-sm text-muted-foreground hover:text-primary">Get a Quote</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Contact Us</h3>
                <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                  <p>MoeMoe Enterprises LLC</p>
                  <p>4936 Presidents Way #206, Tucker, GA 30084</p>
                  <p>
                    <a href="tel:404-375-9495" className="hover:text-primary">404-375-9495</a>
                  </p>
                  <p>
                    <a href="mailto:info@moemoeenterprise.com" className="hover:text-primary">info@moemoeenterprise.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">&copy; {currentYear} MoeMoe Enterprises LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
