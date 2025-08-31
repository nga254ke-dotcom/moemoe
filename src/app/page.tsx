import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AiServiceSuggestor } from '@/components/ai-service-suggestor';
import { Truck, Sparkles, ShieldCheck, Clock, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Courier delivering a package in a bustling city"
            data-ai-hint="delivery city"
            fill
            className="object-cover -z-10 brightness-50"
            priority
          />
          <div className="container max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
              Fast & Reliable Courier & Cleaning Services
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80">
              Serving Tucker, Atlanta, and surrounding areas with professionalism and care.
            </p>
            <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="#quote">Get a Free Quote</Link>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-background">
          <div className="container max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Whatever you need, from urgent deliveries to sparkling clean spaces, we've got you covered.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Courier Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Secure and timely delivery for your important documents and packages. We handle every item with the utmost care, ensuring it reaches its destination safely.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Cleaning Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive cleaning solutions for residential and commercial properties. Our team leaves your space immaculate, healthy, and welcoming.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Suggestion Section */}
        <section id="quote" className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-7xl">
             <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Not Sure What You Need?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Let our smart assistant help you choose the right service and discover exclusive promotions.
              </p>
            </div>
            <AiServiceSuggestor />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Why MoeMoe Enterprises?</h2>
              <p className="mt-4 text-lg text-muted-foreground">Your satisfaction is our priority.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <ShieldCheck className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Reliable & Trustworthy</h3>
                <p className="mt-2 text-muted-foreground">
                  With a proven track record, you can trust us to handle your needs with integrity and professionalism.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Clock className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">On-Time Guarantee</h3>
                <p className="mt-2 text-muted-foreground">
                  We value your time. Our services are prompt and efficient, ensuring we meet your deadlines.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Customer-Focused</h3>
                <p className="mt-2 text-muted-foreground">
                  We tailor our services to your specific requirements and are always here to help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Michael R.', company: 'Atlanta Law Firm', text: 'MoeMoe\'s courier service is a lifesaver. Always on time and professional. I can\'t recommend them enough for legal document delivery.' },
                { name: 'Sarah J.', company: 'Small Business Owner', text: 'The team did an amazing job with our office deep clean. It feels like a brand new space! The attention to detail was incredible.' },
                { name: 'David C.', company: 'Homeowner', text: 'I needed a package sent urgently and they handled it perfectly. The process was smooth and the communication was excellent.' }
              ].map((testimonial, i) => (
                <Card key={i} className="flex flex-col">
                  <CardContent className="pt-6 flex-1">
                    <p className="italic text-muted-foreground">"{testimonial.text}"</p>
                  </CardContent>
                  <CardHeader className="flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={`https://picsum.photos/id/${100 + i}/40`} width={40} height={40} data-ai-hint="person portrait" alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
