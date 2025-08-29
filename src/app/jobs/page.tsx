import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import type { Job } from "@/lib/types";
import { BadgeCheck, MapPin, DollarSign, Calendar, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const jobs: Job[] = [
  {
    id: "1",
    title: "Registered Nurse (ICU)",
    specialty: "Nursing",
    employer: {
      name: "City General Hospital",
      isVerified: true,
    },
    location: "New York, NY",
    date: "2024-08-15",
    payRate: 75,
    skills: ["Critical Care", "Ventilator Management", "Patient Monitoring"],
  },
  {
    id: "2",
    title: "Dental Hygienist",
    specialty: "Dental",
    employer: {
      name: "Smile Bright Dental",
      isVerified: true,
    },
    location: "Los Angeles, CA",
    date: "2024-08-20",
    payRate: 55,
    skills: ["Prophylaxis", "Dental Charting", "X-Rays"],
  },
  {
    id: "3",
    title: "Surgical Technologist",
    specialty: "Surgery",
    employer: {
      name: "Metro Health Center",
      isVerified: false,
    },
    location: "Chicago, IL",
    date: "2024-09-01",
    payRate: 65,
    skills: ["Sterile Technique", "Surgical Instruments", "Operating Room Setup"],
  },
  {
    id: "4",
    title: "Pharmacist",
    specialty: "Pharmacy",
    employer: {
      name: "Community Pharmacy",
      isVerified: true,
    },
    location: "Houston, TX",
    date: "2024-08-22",
    payRate: 85,
    skills: ["Medication Dispensing", "Patient Counseling", "Pharmacology"],
  },
];

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 md:px-6">
      <div className="grid md:grid-cols-[240px_1fr] gap-10">
        <aside>
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="space-y-6">
            <div>
              <Label htmlFor="specialty">Specialty</Label>
              <Select>
                <SelectTrigger id="specialty">
                  <SelectValue placeholder="All Specialties" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nursing">Nursing</SelectItem>
                  <SelectItem value="dental">Dental</SelectItem>
                  <SelectItem value="surgery">Surgery</SelectItem>
                  <SelectItem value="pharmacy">Pharmacy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="e.g., New York, NY" />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" />
            </div>
            <Button variant="secondary" className="w-full">Apply Filters</Button>
          </div>
        </aside>
        <main>
          <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>
          <div className="space-y-4">
            {jobs.map((job) => (
              <Card key={job.id} className="shadow-none border rounded-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">
                        <Link href={`/jobs/${job.id}`} className="hover:underline">{job.title}</Link>
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <span>{job.employer.name}</span>
                        {job.employer.isVerified && <BadgeCheck className="h-4 w-4 text-primary" />}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4" />
                      <span>4.8</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      <span>${job.payRate}/hour</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(job.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.skills.map(skill => (
                      <div key={skill} className="rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium">{skill}</div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-secondary/50 p-4 rounded-b-lg">
                  <Button asChild className="w-full md:w-auto ml-auto" variant="secondary" size="sm">
                    <Link href={`/jobs/${job.id}`}>View Details & Apply</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
