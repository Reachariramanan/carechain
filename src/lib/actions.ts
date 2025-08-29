'use server';

import { getJobRecommendations, JobRecommendationsInput } from '@/ai/flows/job-recommendations';
import { z } from 'zod';

const ActionInputSchema = z.object({
  profile: z.string().min(10, { message: 'Profile information must be at least 10 characters long.' }),
  pastApplications: z.string().min(10, { message: 'Past applications must be at least 10 characters long.' }),
});

type ActionState = {
  message?: string;
  recommendations?: string;
  error?: string;
};

export async function getAIRecommendations(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const rawFormData = {
    profile: formData.get('profile'),
    pastApplications: formData.get('pastApplications'),
  };

  const validatedFields = ActionInputSchema.safeParse(rawFormData);
  
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.profile?.[0] || validatedFields.error.flatten().fieldErrors.pastApplications?.[0] || 'Invalid input.'
    };
  }

  try {
    const result = await getJobRecommendations(validatedFields.data);
    return {
      message: 'Successfully generated recommendations.',
      recommendations: result.recommendations,
    };
  } catch (e: any) {
    return {
      error: `An error occurred: ${e.message}`,
    };
  }
}
