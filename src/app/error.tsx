
'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ServerCrash } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
     <section className="bg-background py-20 md:py-32">
      <div className="container max-w-4xl text-center">
        <div className="flex justify-center">
          <ServerCrash className="h-16 w-16 text-destructive" />
        </div>
        <h1 className="mt-6 text-4xl md:text-5xl font-headline font-bold text-destructive">
          Something went wrong!
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're sorry, but an unexpected error occurred. Our team has been notified.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
            Error Digest: {error.digest || 'N/A'}
        </p>
        <Button
          size="lg"
          variant="destructive"
          className="mt-8"
          onClick={() => reset()}
        >
          Try again
        </Button>
      </div>
    </section>
  );
}
