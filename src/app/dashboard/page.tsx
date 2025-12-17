
'use client';

import { StatsCards } from '@/components/dashboard/stats-cards';
import { RecentRescues } from '@/components/dashboard/recent-rescues';
import { ManualReview } from '@/components/dashboard/manual-review';
import { MapPlaceholder } from '@/components/dashboard/map-placeholder';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  LayoutDashboard,
  HeartHandshake,
  Home,
  Truck,
  FileText,
  Settings,
  Menu,
} from 'lucide-react';
import DonorsPage from './donors/page';
import SheltersPage from './shelters/page';
import DriversPage from './drivers/page';
import AuditLogPage from './audit-log/page';
import SettingsPage from './settings/page';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, LogOut, LogIn } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/firebase';
import Link from 'next/link';

const tabs = [
  {
    value: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    component: (
      <div className="flex flex-col gap-8">
        <div data-aos="fade-up">
          <StatsCards />
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <RecentRescues />
          </div>
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="300">
            <ManualReview />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <MapPlaceholder />
        </div>
      </div>
    ),
  },
  {
    value: 'donors',
    label: 'Donors',
    icon: HeartHandshake,
    component: <DonorsPage />,
  },
  {
    value: 'shelters',
    label: 'Shelters',
    icon: Home,
    component: <SheltersPage />,
  },
  {
    value: 'drivers',
    label: 'Drivers',
    icon: Truck,
    component: <DriversPage />,
  },
  {
    value: 'audit-log',
    label: 'Audit Log',
    icon: FileText,
    component: <AuditLogPage />,
  },
  {
    value: 'settings',
    label: 'Settings',
    icon: Settings,
    component: <SettingsPage />,
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { user, loading, signOut } = useAuth();

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="flex flex-col gap-4"
    >
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-primary/20 bg-primary/80 px-4 text-primary-foreground backdrop-blur-xl backdrop-saturate-150 sm:px-6">
        <div className="flex items-center gap-4">
          <Logo className="size-8" />
          <h1 className="hidden font-headline text-2xl font-semibold sm:block">
            Food Whisperer
          </h1>
        </div>

        <TabsList className="hidden h-auto rounded-full bg-primary/70 p-0 sm:flex sm:items-center sm:gap-1">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground/80 transition-colors data-[state=active]:bg-background/90 data-[state=active]:text-primary data-[state=active]:shadow-md"
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex items-center gap-4">
          <div className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost" className="hover:bg-white/20">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {tabs.map((tab) => (
                  <DropdownMenuItem
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                  >
                    <tab.icon className="mr-2 h-4 w-4" />
                    {tab.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {loading ? (
            <Avatar>
              <AvatarFallback>...</AvatarFallback>
            </Avatar>
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="overflow-hidden rounded-full ring-2 ring-primary-foreground/50 transition-all hover:ring-primary-foreground"
                >
                  <Avatar>
                    <AvatarImage
                      src={
                        user.photoURL ??
                        'https://picsum.photos/seed/admin/100/100'
                      }
                      alt={user.displayName ?? 'User'}
                    />
                    <AvatarFallback>
                      {user.displayName?.charAt(0) ??
                        user.email?.charAt(0) ??
                        'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab('settings')}>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
             <Button asChild variant="outline" className="text-primary-foreground bg-primary hover:bg-primary/90 border-primary-foreground/50">
              <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>
          )}
        </div>
      </header>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-0">
          <div className="flex flex-col gap-8 p-4 sm:p-6">
            <div>
              <h1 className="font-headline text-3xl font-semibold">
                {tab.label}
              </h1>
              <p className="text-muted-foreground">
                {
                  {
                    dashboard:
                      'An overview of the Food Whisperer dispatch system.',
                    donors: 'Manage your donors and their donation history.',
                    shelters: 'Manage shelters in the Food Whisperer network.',
                    drivers: 'Manage volunteer drivers and their activity.',
                    'audit-log':
                      'Review a full log of every match decision and system action.',
                    settings: 'Configure system parameters and AI settings.',
                  }[tab.value]
                }
              </p>
            </div>
            {tab.component}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
