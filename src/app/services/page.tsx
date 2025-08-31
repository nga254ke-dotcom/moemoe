
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Sparkles, ArrowRight, Building, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our professional courier and cleaning services in Atlanta. We offer same-day delivery, commercial cleaning, and more.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Professional Services</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
            Dedicated solutions designed to meet your business and personal needs with reliability and excellence.
          </p>
        </div>
      </section>

      {/* Courier Services Section */}
      <section id="courier" className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full">
              <Truck className="h-5 w-5" />
              Courier Services
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Fast & Secure Delivery Across Atlanta</h2>
            <p className="text-lg text-muted-foreground">
              When time is critical, you need a courier service you can trust. We provide prompt, secure, and professional delivery services for documents, packages, and more. Our real-time tracking and dedicated team ensure your items arrive safely and on schedule.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start"><ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 shrink-0" /><span><strong>Same-Day & Express:</strong> For your most urgent delivery needs in the metro Atlanta area.</span></li>
              <li className="flex items-start"><ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 shrink-0" /><span><strong>Scheduled & Routed:</strong> Cost-effective solutions for your regular, recurring delivery requirements.</span></li>
              <li className="flex items-start"><ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 shrink-0" /><span><strong>Legal & Medical Courier:</strong> Specialized handling for sensitive and confidential materials.</span></li>
            </ul>
            <Button size="lg" asChild className="mt-4">
              <Link href="/quote?service=courier">Get a Courier Quote</Link>
            </Button>
          </div>
          <div>
            <Image
              src="https://i.imgur.com/L66wKAW.png"
              alt="A courier handing a package to a client"
              data-ai-hint="courier delivery"
              width={600}
              height={500}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cleaning Services Section */}
      <section id="cleaning" className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full">
              <Sparkles className="h-5 w-5" />
              Cleaning Services
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Immaculate Spaces, Professional Service</h2>
            <p className="text-lg text-muted-foreground">
              A clean environment is essential for productivity and well-being. Our expert cleaning crews use top-quality products and equipment to deliver a spotless finish for your commercial or residential property.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Building className="h-6 w-6 text-primary"/>Commercial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Office buildings, retail spaces, and other business facilities.</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Home className="h-6 w-6 text-primary"/>Residential</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Apartment move-in/out cleaning and deep cleaning services.</p>
                </CardContent>
              </Card>
            </div>
             <Button size="lg" asChild className="mt-4">
              <Link href="/quote?service=cleaning">Get a Cleaning Quote</Link>
            </Button>
          </div>
          <div className="md:order-1">
            <Image
              src="https://i.imgur.com/iNxTKaX.png"
              alt="A professional cleaning crew working in an office"
              data-ai-hint="professional cleaning team"
              width={600}
              height={500}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
