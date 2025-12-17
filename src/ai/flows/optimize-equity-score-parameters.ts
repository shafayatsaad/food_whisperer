
'use server';

/**
 * @fileOverview An AI agent that optimizes the weights of 'Recency,' 'Capacity,' and 'Demographics'
 * in the Equity Score calculation to ensure fair food distribution across shelters.
 *
 * - optimizeEquityScoreParameters - A function that triggers the optimization process.
 * - OptimizeEquityScoreParametersInput - The input type for the optimizeEquityScoreParameters function.
 * - OptimizeEquityScoreParametersOutput - The return type for the optimizeEquityScoreParameters function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeEquityScoreParametersInputSchema = z.object({
  donationData: z
    .string()
    .describe(
      'Historical donation data, including shelter ID, donation size, and timestamps.'
    ),
  shelterMetrics: z
    .string()
    .describe(
      'Current shelter metrics, including capacity, demographics, and recent requests.'
    ),
  currentRecencyWeight: z.number().describe('Current weight for the Recency factor.'),
  currentCapacityWeight: z.number().describe('Current weight for the Capacity factor.'),
  currentDemographicsWeight: z
    .number()
    .describe('Current weight for the Demographics factor.'),
});
export type OptimizeEquityScoreParametersInput = z.infer<
  typeof OptimizeEquityScoreParametersInputSchema
>;

const OptimizeEquityScoreParametersOutputSchema = z.object({
  optimizedRecencyWeight: z
    .number()
    .describe('Optimized weight for the Recency factor.'),
  optimizedCapacityWeight: z
    .number()
    .describe('Optimized weight for the Capacity factor.'),
  optimizedDemographicsWeight: z
    .number()
    .describe('Optimized weight for the Demographics factor.'),
  reasoning: z
    .string()
    .describe(
      'Explanation of why the weights were adjusted, considering equity and efficiency.'
    ),
});
export type OptimizeEquityScoreParametersOutput = z.infer<
  typeof OptimizeEquityScoreParametersOutputSchema
>;

export async function optimizeEquityScoreParameters(
  input: OptimizeEquityScoreParametersInput
): Promise<OptimizeEquityScoreParametersOutput> {
  return optimizeEquityScoreParametersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeEquityScoreParametersPrompt',
  input: {schema: OptimizeEquityScoreParametersInputSchema},
  output: {schema: OptimizeEquityScoreParametersOutputSchema},
  prompt: `You are an AI assistant optimizing the weights for a Equity Score calculation used by Food Whisperer, a food rescue dispatch system in Bangladesh. The Equity Score determines which shelter receives food donations based on Recency, Capacity and Demographics.

  Analyze the provided data and suggest optimized weights for Recency, Capacity, and Demographics to ensure fair food distribution across shelters. Consider both equity (meeting the needs of underserved shelters) and efficiency (minimizing food waste).

  Justify your reasoning for adjusting the weights based on the data and the goal of fair distribution.

  Current Weights:
  - Recency: {{currentRecencyWeight}}
  - Capacity: {{currentCapacityWeight}}
  - Demographics: {{currentDemographicsWeight}}

  Data:
  - Donation Data: {{{donationData}}}
  - Shelter Metrics: {{{shelterMetrics}}}

  Output the optimized weights and your reasoning.
`,
});

const optimizeEquityScoreParametersFlow = ai.defineFlow(
  {
    name: 'optimizeEquityScoreParametersFlow',
    inputSchema: OptimizeEquityScoreParametersInputSchema,
    outputSchema: OptimizeEquityScoreParametersOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
