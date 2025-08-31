
import type { Metadata } from 'next';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: 'Get a free, no-obligation quote for courier or cleaning services in Atlanta from MoeMoe Enterprises. Fill out our form for a fast and accurate estimate.',
};

export default function QuotePage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary py-12 md:py-20">
        <div className="container max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Request a Free Quote</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Get a fast, accurate, and no-obligation quote for your service needs. We'll get back to you promptly to discuss the details.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-4xl">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
