import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Briefcase, UserCheck, BotMessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                Find Your Next Professional Shift, Instantly.
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                The premier platform for verified professionals and top-tier employers to connect for flexible opportunities.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/register">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/jobs">Browse Jobs</Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Hero"
              data-ai-hint="team collaboration"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Powerful tools for professionals and employers to streamline the hiring process.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <div className="flex flex-col gap-4 text-center items-center">
              <Briefcase className="h-10 w-10 text-primary" />
              <h3 className="font-bold text-xl">AI Job Matching</h3>
              <p className="text-muted-foreground">Our intelligent system provides personalized job recommendations based on your skills and experience.</p>
            </div>
             <div className="flex flex-col gap-4 text-center items-center">
              <UserCheck className="h-10 w-10 text-primary" />
              <h3 className="font-bold text-xl">Verified Professionals</h3>
              <p className="text-muted-foreground">Hire with confidence, knowing all professionals on our platform have their credentials verified.</p>
            </div>
             <div className="flex flex-col gap-4 text-center items-center">
              <BotMessageSquare className="h-10 w-10 text-primary" />
              <h3 className="font-bold text-xl">Seamless Applications</h3>
              <p className="text-muted-foreground">Apply to jobs with a single click and manage your application status from a centralized dashboard.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Hear from professionals and employers who have found success with StaffPro Connect.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <Card className="shadow-none border-none">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="professional woman"/>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <p className="italic">"StaffPro Connect made finding flexible work a breeze. The AI recommendations were spot on and I found a great position within a week."</p>
                    <p className="font-semibold mt-4">- Jane Doe, Registered Nurse</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-none border-none">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="smiling man"/>
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <p className="italic">"The quality of candidates on this platform is unmatched. Verification gives us peace of mind, and we filled our urgent vacancy in just two days."</p>
                    <p className="font-semibold mt-4">- Dr. Richard Smith, Clinic Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
