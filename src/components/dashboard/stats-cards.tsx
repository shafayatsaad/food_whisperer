
'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Home, Truck, Package } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "Total Donations",
    value: "1,250",
    icon: Heart,
    change: "+20.1% from last month",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Active Shelters",
    value: "35",
    icon: Home,
    change: "+2 new shelters this month",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Available Drivers",
    value: "18",
    icon: Truck,
    change: "+5 drivers online",
    color: "text-accent-foreground",
    bgColor: "bg-accent/20",
  },
  {
    title: "Food Rescued (kg)",
    value: "5,300",
    icon: Package,
    change: "+12% this week",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function StatsCards() {
   useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} data-aos="fade-up" data-aos-delay={index * 100} className={cn("border-border/20 shadow-sm transition-transform duration-300 ease-in-out hover:scale-105", stat.bgColor)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className={cn("h-4 w-4 text-muted-foreground", stat.color)} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
