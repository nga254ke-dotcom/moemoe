'use server';

/**
 * @fileOverview AI-powered service suggestion flow for MoeMoe Enterprises.
 *
 * - suggestService - A function that suggests the most appropriate service based on location and notes.
 * - SuggestServiceInput - The input type for the suggestService function.
 * - SuggestServiceOutput - The return type for the suggestService function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestServiceInputSchema = z.object({
  location: z
    .string()
    .describe('The user\u0027s location, including city and state.'),
  notes: z
    .string()
    .describe('Additional notes provided by the user about their needs.'),
});
export type SuggestServiceInput = z.infer<typeof SuggestServiceInputSchema>;

const SuggestServiceOutputSchema = z.object({
  suggestedService: z
    .string()
    .describe(
      'The most appropriate service suggested by the AI (Courier Services or Cleaning Services)'
    ),
  relevantPromotions: z
    .string()
    .describe(
      'Any relevant promotions or discounts that apply to the suggested service.'
    ),
});
export type SuggestServiceOutput = z.infer<typeof SuggestServiceOutputSchema>;

export async function suggestService(
  input: SuggestServiceInput
): Promise<SuggestServiceOutput> {
  return suggestServiceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestServicePrompt',
  input: {schema: SuggestServiceInputSchema},
  output: {schema: SuggestServiceOutputSchema},
  prompt: `Based on the user\u0027s location and notes, suggest the most appropriate service from MoeMoe Enterprises (Courier Services or Cleaning Services).

Location: {{{location}}}
Notes: {{{notes}}}

Consider any relevant promotions that might apply to the suggested service.

Company Information:
Company: MoeMoe Enterprises LLC
Domain: moemoeenterprise.com
Address: 4936 Presidents Way #206, Tucker, GA 30084
Phone: 404-375-9495
Email: info@moemoeenterprise.com

Output the suggested service and relevant promotions in the specified JSON format.
`,
});

const suggestServiceFlow = ai.defineFlow(
  {
    name: 'suggestServiceFlow',
    inputSchema: SuggestServiceInputSchema,
    outputSchema: SuggestServiceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
