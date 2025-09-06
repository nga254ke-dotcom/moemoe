
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Sparkles, ShieldCheck, Clock, Users, ArrowRight, MapPin, Star } from 'lucide-react';
import { ScrollAnimation } from '@/components/scroll-animation';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';

export const metadata: Metadata = {
  description: 'MoeMoe Enterprises offers professional courier and cleaning services in Atlanta, Tucker, and surrounding Georgia areas. Get a free quote for fast, reliable service.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://i.imgur.com/eOLNnxH.png"
          alt="Atlanta skyline at dusk, representing MoeMoe Enterprises' service area"
          data-ai-hint="Atlanta skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 max-w-4xl px-4 flex flex-col items-center">
          <ScrollAnimation>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight leading-tight">
              Your Trusted Partner for Courier & Cleaning Services in Metro Atlanta
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl">
              Fast, reliable deliveries and professional cleaning solutions, serving homes and businesses across Metro Atlanta.
            </p>
            <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6" asChild>
              <Link href="/quote">Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-12 md:py-20 bg-secondary">
        <div className="container max-w-7xl">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Services at a Glance</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer specialized services to meet the unique demands of our Atlanta clients. From urgent deliveries to pristine workspaces, we have you covered.
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation>
              <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary h-full flex flex-col overflow-hidden">
                 <Image 
                    src="https://i.imgur.com/L66wKAW.png"
                    alt="Courier van in a city"
                    data-ai-hint="courier delivery"
                    width={600}
                    height={350}
                    className="object-cover w-full h-52"
                  />
                <CardHeader className="flex-row items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg mt-1 shrink-0">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Courier Services</CardTitle>
                    <CardDescription className="mt-2">Fast, secure, and reliable deliveries across the greater Atlanta area.</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-3 text-muted-foreground list-disc list-inside flex-grow">
                    <li>Same-day and scheduled deliveries</li>
                    <li>Temperature-controlled options</li>
                    <li>HIPAA-compliant for medical/lab deliveries</li>
                    <li>Real-time tracking & secure handling</li>
                  </ul>
                  <Button variant="link" className="px-0 mt-4 text-primary self-start" asChild>
                    <Link href="/services#courier">Learn More <span className="sr-only">about our Courier Services</span><ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary h-full flex flex-col overflow-hidden">
                <Image 
                  src="https://i.imgur.com/iNxTKaX.png"
                  alt="Modern office being cleaned"
                  data-ai-hint="office cleaning"
                  width={600}
                  height={350}
                  className="object-cover w-full h-52"
                />
                <CardHeader className="flex-row items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg mt-1 shrink-0">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Cleaning Services</CardTitle>
                    <CardDescription className="mt-2">Professional cleaning for commercial and residential properties.</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-3 text-muted-foreground list-disc list-inside flex-grow">
                    <li>Office & commercial cleaning</li>
                    <li>Deep cleaning & move-in/move-out</li>
                    <li>Eco-friendly products & flexible scheduling</li>
                    <li>Trusted, background-checked staff</li>
                  </ul>
                  <Button variant="link" className="px-0 mt-4 text-primary self-start" asChild>
                    <Link href="/services#cleaning">Learn More <span className="sr-only">about our Cleaning Services</span><ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-12 md:py-20 bg-background">
        <div className="container max-w-7xl">
         <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Choose MoeMoe</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Your satisfaction is our priority. We are committed to excellence in every job we undertake.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 ring-8 ring-primary/5">
                  <ShieldCheck className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Licensed & Insured</h3>
                <p className="mt-2 text-muted-foreground">
                  We are fully licensed and insured for your peace of mind.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 ring-8 ring-primary/5">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Professional Staff</h3>
                <p className="mt-2 text-muted-foreground">
                  Our drivers and cleaning crews are experienced and courteous.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 ring-8 ring-primary/5">
                  <Clock className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">On-Time, Every Time</h3>
                <p className="mt-2 text-muted-foreground">
                  We value your time and guarantee prompt and efficient service.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 ring-8 ring-primary/5">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Serving Metro Atlanta</h3>
                <p className="mt-2 text-muted-foreground">
                  Locally owned and operated, serving Atlanta and surrounding areas.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 ring-8 ring-primary/5">
                  <Star className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">5-Star Reviews</h3>
                <p className="mt-2 text-muted-foreground">
                  Our commitment to quality is backed by excellent customer feedback.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container max-w-7xl">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">What Our Atlanta Clients Say</h2>
            </div>
            <TestimonialsCarousel />
          </ScrollAnimation>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-5xl text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Get Started?</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
              Let's discuss how MoeMoe Enterprises can help you. Request a no-obligation quote today and experience the difference of working with a truly professional team.
            </p>
            <Button size="lg" className="mt-8 bg-background hover:bg-background/90 text-primary text-lg px-8 py-6" asChild>
              <Link href="/quote">Request a Free Quote</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}

    