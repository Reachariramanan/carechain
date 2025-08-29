'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getAIRecommendations } from '@/lib/actions';
import { Bot, Loader, AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: '',
  recommendations: '',
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
      Get Recommendations
    </Button>
  );
}

export function RecommendationForm() {
  const [state, formAction] = useFormState(getAIRecommendations, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.error,
      });
    }
  }, [state.error, toast]);

  return (
    <form action={formAction}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Generate AI Job Recommendations</CardTitle>
          <CardDescription>
            Enter your professional profile and a list of past jobs you've applied for to get personalized recommendations from our AI.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="profile">Your Profile</Label>
            <Textarea
              id="profile"
              name="profile"
              placeholder="e.g., Registered Nurse with 5 years of experience in critical care. Skilled in patient monitoring, ventilator management, and emergency response. Certified in Advanced Cardiac Life Support (ACLS)."
              className="min-h-[120px]"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pastApplications">Past Job Applications</Label>
            <Textarea
              id="pastApplications"
              name="pastApplications"
              placeholder="e.g., ICU Nurse at City General Hospital, Emergency Room Nurse at Metro Health, Clinical Nurse Specialist at County Medical Center."
              className="min-h-[120px]"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton />
        </CardFooter>
      </Card>

      {state.recommendations && (
        <Card className="mt-8">
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2"><Bot /> AI-Powered Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="prose prose-sm max-w-none whitespace-pre-wrap">
                    {state.recommendations}
                </div>
            </CardContent>
        </Card>
      )}
    </form>
  );
}
