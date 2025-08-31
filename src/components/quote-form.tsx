"use client"

import { useActionState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useFormStatus } from 'react-dom';
import { requestQuoteAction, type FormState } from '@/components/actions/quote-action';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? 'Submitting Quote...' : 'Submit Quote Request'}
    </Button>
  );
}

function QuoteFormComponent() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get('service') || '';
  
  const [state, formAction] = useActionState(requestQuoteAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.issues) {
        state.issues.forEach(issue => {
          toast({
            title: 'Validation Error',
            description: issue,
            variant: 'destructive',
          });
        });
      } else if (state.message === 'Quote request submitted successfully!') {
        toast({
          title: 'Success!',
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">Service Details</CardTitle>
        <CardDescription>Fill out the form below and we'll send you a personalized quote.</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required defaultValue={state.fields?.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required defaultValue={state.fields?.email}/>
            </div>
          </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" defaultValue={state.fields?.phone} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service Type</Label>
               <Select name="service" defaultValue={defaultService || state.fields?.service}>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="courier">Courier Service</SelectItem>
                  <SelectItem value="cleaning">Cleaning Service</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
           <div className="space-y-2">
            <Label htmlFor="address">Service Address (if applicable)</Label>
            <Input id="address" name="address" placeholder="123 Main St, Atlanta, GA 30303" defaultValue={state.fields?.address} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="details">Tell us about your needs</Label>
            <Textarea 
              id="details" 
              name="details" 
              placeholder="Please provide as much detail as possible, e.g., 'Need to deliver a 10-page legal document from downtown to Buckhead by 3 PM' or 'Requesting a quote for weekly cleaning of a 2,500 sq ft office space.'" 
              required 
              className="min-h-[150px]"
              defaultValue={state.fields?.details}
            />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}


export function QuoteForm() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <QuoteFormComponent />
        </Suspense>
    )
}
