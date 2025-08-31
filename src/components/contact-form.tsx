"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { sendContactMessageAction, type FormState } from '@/components/actions/contact-action';
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from './ui/card';

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessageAction, initialState);
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
      } else if(state.message === 'Message sent successfully!') {
         toast({
            title: 'Success',
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
    <Card>
      <CardContent className="pt-6">
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required defaultValue={state.fields?.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required defaultValue={state.fields?.email}/>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="Question about your services" required defaultValue={state.fields?.subject}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message..." required className="min-h-[120px]" defaultValue={state.fields?.message}/>
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
