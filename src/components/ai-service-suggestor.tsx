"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { suggestServiceAction, type FormState } from '@/components/actions/suggest-service-action';
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Hand, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Badge } from './ui/badge';

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Thinking...' : 'Get Suggestion'}
    </Button>
  );
}

export function AiServiceSuggestor() {
  const [state, formAction] = useFormState(suggestServiceAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.message !== 'Suggestion generated successfully!') {
       if (state.issues) {
        state.issues.forEach(issue => {
            toast({
                title: 'Validation Error',
                description: issue,
                variant: 'destructive',
            });
        });
       } else {
        toast({
            title: 'Error',
            description: state.message,
            variant: 'destructive',
        });
       }
    }
    if (state.message === 'Suggestion generated successfully!') {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <Card>
        <CardHeader>
          <CardTitle>Need Help Deciding?</CardTitle>
          <CardDescription>
            Tell us where you are and what you need. Our AI assistant will suggest the best service for you.
          </CardDescription>
        </CardHeader>
        <form ref={formRef} action={formAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="location">Your Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="e.g., Tucker, GA"
                required
                defaultValue={state.fields?.location}
                aria-describedby={state.issues ? 'location-error' : undefined}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">What do you need done?</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="e.g., 'I need to send a small package across town' or 'My office needs a deep clean'"
                defaultValue={state.fields?.notes}
              />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      
      <div className="mt-8 md:mt-0">
        {state.data ? (
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="text-accent" />
                AI Suggestion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-lg">{state.data.suggestedService}</p>
                <p className="text-muted-foreground">This seems like the best fit for your needs.</p>
              </div>
              {state.data.relevantPromotions && state.data.relevantPromotions !== "N/A" && (
                 <div>
                    <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent">Promotion</Badge>
                    <p className="mt-2 text-sm text-foreground/80">{state.data.relevantPromotions}</p>
                 </div>
              )}
            </CardContent>
            <CardFooter>
                 <Button asChild variant="default">
                    <a href="#quote">Request a {state.data.suggestedService.replace(' Services', '')} Quote</a>
                </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-full min-h-[300px] md:min-h-full">
            <Hand className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground">Your suggestion will appear here</h3>
            <p className="text-sm text-muted-foreground/80 mt-1">Fill out the form to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}
