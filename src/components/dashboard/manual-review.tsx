
"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Check, X } from "lucide-react";
import { rescues } from "@/lib/data";

const flaggedRescues = rescues.filter((r) => r.status === "Flagged");

export function ManualReview() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="rounded-lg border border-accent/50 bg-accent/10 text-card-foreground shadow-sm backdrop-blur-xl backdrop-saturate-150">
      <CardHeader>
        <div className="flex items-center gap-2 text-amber-900">
          <AlertCircle className="h-6 w-6" />
          <CardTitle className="font-headline">Manual Review Required</CardTitle>
        </div>
        <CardDescription className="text-amber-900/80">
          Donations flagged by the Safety Gate.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {flaggedRescues.length > 0 ? (
          <div className="space-y-4">
            {flaggedRescues.map((rescue) => (
              <Card key={rescue.id}>
                <div className="flex items-start justify-between p-3">
                  <div>
                    <p className="font-semibold">{rescue.foodItem}</p>
                    <p className="text-sm text-muted-foreground">
                      From: {rescue.donorName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isClient ? new Date(rescue.timestamp).toLocaleString() : new Date(rescue.timestamp).toISOString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                      <Check className="h-4 w-4" />
                      <span className="sr-only">Approve</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 hover:bg-destructive/90 hover:text-destructive-foreground">
                      <X className="h-4 w-4 text-destructive hover:text-destructive-foreground" />
                       <span className="sr-only">Reject</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-8 text-center">
            <Check className="h-10 w-10 text-muted-foreground" />
            <p className="font-semibold">All Clear!</p>
            <p className="text-sm text-muted-foreground">
              No donations are currently waiting for review.
            </p>
          </div>
        )}
      </CardContent>
    </div>
  );
}
