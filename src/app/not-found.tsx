
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { ScrollAnimation } from '@/components/scroll-animation';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container max-w-4xl text-center">
        <ScrollAnimation>
          <div className="flex justify-center">
            <AlertTriangle className="h-16 w-16 text-primary" />
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-headline font-bold">
            404 - Page Not Found
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Oops! The page you're looking for seems to have taken a wrong turn. It might have been moved or deleted.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/">
              Return to Homepage
            </Link>
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  );
}
