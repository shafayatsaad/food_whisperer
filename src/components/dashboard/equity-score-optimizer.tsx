
"use client";

import { useState, useTransition } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { optimizeEquityScoreParameters } from "@/ai/flows/optimize-equity-score-parameters";
import type { OptimizeEquityScoreParametersOutput } from "@/ai/flows/optimize-equity-score-parameters";
import { Bot, Loader, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const donationData = JSON.stringify([
    { shelterId: 'S001', donationSize: 50, timestamp: '2024-07-20T10:00:00Z' },
    { shelterId: 'S002', donationSize: 20, timestamp: '2024-07-27T18:00:00Z' },
    { shelterId: 'S003', donationSize: 35, timestamp: '2024-07-29T12:00:00Z' },
    { shelterId: 'S001', donationSize: 40, timestamp: '2024-07-15T14:00:00Z' },
]);

const shelterMetrics = JSON.stringify([
    { shelterId: 'S001', capacity: 0.8, demographics: { size: 150, density: 'high' }, recentRequests: 2 },
    { shelterId: 'S002', capacity: 0.4, demographics: { size: 100, density: 'medium' }, recentRequests: 1 },
    { shelterId: 'S003', capacity: 0.95, demographics: { size: 200, density: 'high' }, recentRequests: 8 },
]);


export function EquityScoreOptimizer() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  
  const [weights, setWeights] = useState({
    recency: 0.5,
    capacity: 0.3,
    demographics: 0.2,
  });

  const [aiResult, setAiResult] = useState<OptimizeEquityScoreParametersOutput | null>(null);

  const handleOptimize = () => {
    startTransition(async () => {
      setAiResult(null);
      try {
        const result = await optimizeEquityScoreParameters({
          donationData: donationData,
          shelterMetrics: shelterMetrics,
          currentRecencyWeight: weights.recency,
          currentCapacityWeight: weights.capacity,
          currentDemographicsWeight: weights.demographics,
        });

        if (result) {
          setAiResult(result);
          toast({
              title: "Optimization Complete",
              description: "AI has suggested new weights for the Equity Score.",
          });
        } else {
          throw new Error("The AI returned an empty result.");
        }
      } catch (error) {
         toast({
            variant: "destructive",
            title: "Optimization Failed",
            description: "The AI could not generate new weights. Please try again.",
        });
      }
    });
  };

  const handleApplyWeights = () => {
    if (aiResult) {
        setWeights({
            recency: aiResult.optimizedRecencyWeight,
            capacity: aiResult.optimizedCapacityWeight,
            demographics: aiResult.optimizedDemographicsWeight,
        });
        toast({
            title: "Weights Applied",
            description: "The new Equity Score weights have been applied.",
        });
        setAiResult(null);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Equity Score Optimizer</CardTitle>
          <CardDescription>
            Use AI to fine-tune the weights for the Equity Score calculation,
            ensuring fair food distribution.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="recency">Recency Weight</Label>
            <Input id="recency" value={weights.recency} readOnly />
          </div>
          <div className="space-y-2">
            <Label htmlFor="capacity">Capacity Weight</Label>
            <Input id="capacity" value={weights.capacity} readOnly />
          </div>
          <div className="space-y-2">
            <Label htmlFor="demographics">Demographics Weight</Label>
            <Input id="demographics" value={weights.demographics} readOnly />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleOptimize} disabled={isPending}>
            {isPending ? (
              <Loader className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Bot className="mr-2 h-4 w-4" />
            )}
            Optimize with AI
          </Button>
        </CardFooter>
      </Card>
      
      <div className="flex items-center justify-center lg:col-span-2">
        {isPending ? (
             <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed text-muted-foreground">
                <Loader className="h-12 w-12 animate-spin text-primary" />
                <p className="font-semibold">AI is analyzing the data...</p>
                <p className="text-sm text-center">This may take a moment.</p>
            </div>
        ) : aiResult ? (
            <Card className="bg-primary/5 border-primary/20 w-full">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Lightbulb className="h-6 w-6 text-accent"/>
                        <CardTitle className="font-headline text-primary">AI Recommendation</CardTitle>
                    </div>
                    <CardDescription>New weights suggested by the AI based on historical data.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-sm text-muted-foreground">Recency</p>
                            <p className="text-2xl font-bold text-primary">{aiResult.optimizedRecencyWeight}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Capacity</p>
                            <p className="text-2xl font-bold text-primary">{aiResult.optimizedCapacityWeight}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Demographics</p>
                            <p className="text-2xl font-bold text-primary">{aiResult.optimizedDemographicsWeight}</p>
                        </div>
                    </div>
                    <Alert>
                        <AlertTitle className="font-semibold">Reasoning</AlertTitle>
                        <AlertDescription>{aiResult.reasoning}</AlertDescription>
                    </Alert>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleApplyWeights}>Apply New Weights</Button>
                </CardFooter>
            </Card>
        ) : (
            <div className="flex flex-col items-center gap-4 text-center text-muted-foreground p-8 rounded-lg border-2 border-dashed h-full justify-center w-full">
                <Bot className="h-12 w-12" />
                <p className="font-semibold">Ready to Optimize</p>
                <p className="text-sm">Click "Optimize with AI" to get new weight recommendations.</p>
            </div>
        )}
      </div>

    </div>
  );
}
