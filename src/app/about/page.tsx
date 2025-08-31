
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Target, Users, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about MoeMoe Enterprises, our mission, values, and commitment to providing the best courier and cleaning services in Atlanta, GA.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">About MoeMoe Enterprises</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Your trusted, locally-owned partner for professional services in Georgia.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Story: From a Simple Idea to a Trusted Service</h2>
            <p className="text-lg text-muted-foreground">
              MoeMoe Enterprises was founded with a simple mission: to provide businesses and residents in the Atlanta area with reliable, professional, and friendly courier and cleaning services. We saw a need for a service provider that truly cared about its clients' success and peace of mind.
            </p>
            <p className="text-muted-foreground">
              Starting with a single van and a passion for service, we've grown into a trusted name known for our commitment to quality, punctuality, and customer satisfaction. We are proud to be a locally-owned business serving our community.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
          <div>
            <Image
              src="https://i.imgur.com/ALc5YcY.png"
              alt="The founding team of MoeMoe Enterprises"
              data-ai-hint="diverse team meeting"
              width={600}
              height={500}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Guiding Principles</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our mission and values are the foundation of everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center p-6 border rounded-lg bg-background">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="mt-2 text-muted-foreground">
                To deliver exceptional courier and cleaning services that empower our clients, built on a foundation of reliability, efficiency, and unwavering customer care.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 border rounded-lg bg-background">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Our Values</h3>
              <p className="mt-2 text-muted-foreground">
                Integrity, Professionalism, Punctuality, and a Commitment to Excellence are the pillars that guide our team and our work every single day.
              </p>
            </div>
             <div className="flex flex-col items-center p-6 border rounded-lg bg-background">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Our Promise</h3>
              <p className="mt-2 text-muted-foreground">
                We promise to treat your business and property as our own, delivering a service that not only meets but exceeds your expectations for quality and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl text-center">
           <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Serving the Heart of Georgia</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to offer our premier courier and cleaning services to a wide range of locations throughout the greater Atlanta area. Our local expertise means we know the city and its surroundings, ensuring efficient and timely service.
          </p>
          <p className="mt-6 text-lg font-semibold">
            Our primary service areas include:
          </p>
          <p className="text-muted-foreground">
            Atlanta, Tucker, Decatur, Sandy Springs, Roswell, Marietta, and more.
          </p>
          <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="/quote">See if we serve your area</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
