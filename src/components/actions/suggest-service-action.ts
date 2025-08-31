'use server';

import { suggestService, SuggestServiceInput } from '@/ai/flows/ai-service-suggestion';
import { z } from 'zod';

const SuggestServiceActionSchema = z.object({
  location: z.string().min(3, { message: 'Location must be at least 3 characters long.' }),
  notes: z.string().optional(),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: {
    suggestedService: string;
    relevantPromotions: string;
  }
};

export async function suggestServiceAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = SuggestServiceActionSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Invalid form data.',
      issues,
      fields: {
        location: formData.location as string,
        notes: formData.notes as string,
      }
    };
  }

  try {
    const aiInput: SuggestServiceInput = {
      location: parsed.data.location,
      notes: parsed.data.notes || 'No additional notes provided.',
    };

    const result = await suggestService(aiInput);

    if (!result.suggestedService) {
        return {
            message: 'Could not determine a service. Please provide more details.'
        }
    }

    return {
      message: 'Suggestion generated successfully!',
      data: {
        suggestedService: result.suggestedService,
        relevantPromotions: result.relevantPromotions,
      }
    };
  } catch (error) {
    console.error('AI Service Suggestion Error:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
