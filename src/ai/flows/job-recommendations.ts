'use server';

/**
 * @fileOverview Provides personalized job recommendations for professionals based on their profile, skills, and past applications.
 *
 * - getJobRecommendations - A function that generates job recommendations.
 * - JobRecommendationsInput - The input type for the getJobRecommendations function.
 * - JobRecommendationsOutput - The return type for the getJobRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JobRecommendationsInputSchema = z.object({
  profile: z
    .string()
    .describe('The professional user profile, including skills and experience.'),
  pastApplications: z
    .string()
    .describe('A list of past job applications made by the professional.'),
});
export type JobRecommendationsInput = z.infer<typeof JobRecommendationsInputSchema>;

const JobRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A list of recommended jobs tailored to the professional.'),
});
export type JobRecommendationsOutput = z.infer<typeof JobRecommendationsOutputSchema>;

export async function getJobRecommendations(input: JobRecommendationsInput): Promise<JobRecommendationsOutput> {
  return jobRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'jobRecommendationsPrompt',
  input: {schema: JobRecommendationsInputSchema},
  output: {schema: JobRecommendationsOutputSchema},
  prompt: `You are an AI job recommendation agent. Given the professional's profile and past job applications, provide personalized job recommendations.

Professional Profile: {{{profile}}}
Past Job Applications: {{{pastApplications}}}

Based on this information, what jobs would you recommend to the professional?`, 
});

const jobRecommendationsFlow = ai.defineFlow(
  {
    name: 'jobRecommendationsFlow',
    inputSchema: JobRecommendationsInputSchema,
    outputSchema: JobRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
