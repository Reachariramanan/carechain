import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, Building, Mail, MapPin, Phone, Upload, User, FileText } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <h1 className="font-headline text-3xl font-bold mb-8">User Profiles</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Professional Profile Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="professional woman" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                  Jane Doe <BadgeCheck className="h-6 w-6 text-primary" />
                </CardTitle>
                <CardDescription>Registered Nurse</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2"><User className="h-4 w-4"/> Personal Information</h3>
                <div className="text-sm text-muted-foreground space-y-1 pl-6">
                    <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> jane.doe@example.com</p>
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> (123) 456-7890</p>
                    <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> New York, NY</p>
                </div>
            </div>
            <Separator />
            <div className="space-y-2">
                <h3 className="font-semibold">Skills & Specialties</h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Critical Care</Badge>
                    <Badge variant="secondary">ICU</Badge>
                    <Badge variant="secondary">Ventilator Management</Badge>
                    <Badge variant="secondary">Pediatrics</Badge>
                </div>
            </div>
            <Separator />
             <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2"><FileText className="h-4 w-4"/> Documents</h3>
                 <p className="text-sm text-muted-foreground">Your uploaded licenses and credentials.</p>
                <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" /> Manage Documents
                </Button>
            </div>
          </CardContent>
        </Card>

        {/* Employer Profile Card */}
        <Card>
          <CardHeader>
             <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border p-1">
                <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="hospital logo" className="object-contain"/>
                <AvatarFallback>CGH</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                  City General Hospital
                  <Badge variant="outline">Trusted Employer</Badge>
                </CardTitle>
                <CardDescription>Major Metropolitan Hospital</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2"><Building className="h-4 w-4"/> Facility Details</h3>
                <div className="text-sm text-muted-foreground space-y-1 pl-6">
                    <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> 123 Health St, New York, NY</p>
                    <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> contact@citygeneral.org</p>
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> (212) 555-0199</p>
                </div>
            </div>
            <Separator />
             <div className="space-y-2">
                <h3 className="font-semibold">About Us</h3>
                <p className="text-sm text-muted-foreground">City General Hospital is a leading provider of emergency and specialized care in the tri-state area. We are committed to clinical excellence and patient satisfaction.</p>
            </div>
             <Separator />
             <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2"><FileText className="h-4 w-4"/> Facility Documents</h3>
                <p className="text-sm text-muted-foreground">Your uploaded facility registration and licenses.</p>
                <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" /> Manage Documents
                </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
