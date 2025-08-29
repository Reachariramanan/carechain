'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Bell, Briefcase, BotMessageSquare, Menu, User, Hospital } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '/jobs', label: 'Jobs', icon: Briefcase },
  { href: '/recommendations', label: 'AI', icon: BotMessageSquare },
  { href: '/profile', label: 'Profiles', icon: User },
  { href: '/notifications', label: 'Notifications', icon: Bell },
];

export default function Header() {
  const pathname = usePathname();

  const NavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Hospital className="h-6 w-6" />
          <span className="font-bold">StaffPro Connect</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.slice(0, 3).map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
           <Button variant="ghost" size="icon" asChild>
             <Link href="/notifications">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Link>
           </Button>
           <ThemeToggle />
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        "flex items-center gap-4 px-2.5",
                        pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                    >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                    </Link>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-2">
                <Button variant="outline" asChild>
                    <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                    <Link href="/register">Register</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
