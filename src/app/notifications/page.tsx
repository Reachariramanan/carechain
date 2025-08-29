import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: 'application_update',
    read: false,
    title: 'Your application for Registered Nurse was viewed by City General Hospital.',
    time: '2 hours ago',
    icon: 'briefcase',
  },
  {
    id: 2,
    type: 'interview_request',
    read: false,
    title: 'Smile Bright Dental sent you an interview request for the Dental Hygienist position.',
    time: '1 day ago',
    icon: 'calendar',
  },
  {
    id: 3,
    type: 'new_recommendation',
    read: true,
    title: 'We found 5 new jobs that match your profile.',
    time: '3 days ago',
    icon: 'bot',
  },
    {
    id: 4,
    type: 'profile_verified',
    read: true,
    title: 'Your nursing license has been successfully verified.',
    time: '5 days ago',
    icon: 'badge_check',
  },
];


export default function NotificationsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2 text-2xl">
            <Bell />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start gap-4 p-4 rounded-lg ${
                  !notification.read ? 'bg-primary/5' : ''
                }`}
              >
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src={`https://placehold.co/40x40.png`} data-ai-hint="company logo"/>
                  <AvatarFallback>SP</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="font-medium">{notification.title}</p>
                  <p className="text-sm text-muted-foreground">{notification.time}</p>
                </div>
                {!notification.read && <div className="ml-auto h-2.5 w-2.5 rounded-full bg-primary mt-1" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
