
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  HeartHandshake,
  Home,
  Truck,
  FileText,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, value: 'dashboard' },
  { href: "/dashboard/donors", label: "Donors", icon: HeartHandshake, value: 'donors' },
  { href: "/dashboard/shelters", label: "Shelters", icon: Home, value: 'shelters' },
  { href: "/dashboard/drivers", label: "Drivers", icon: Truck, value: 'drivers' },
  { href: "/dashboard/audit-log", label: "Audit Log", icon: FileText, value: 'audit-log' },
  { href: "/dashboard/settings", label: "Settings", icon: Settings, value: 'settings' },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 p-2">
      {navLinks.map((link) => {
        const isActive = pathname === link.href || (link.value === 'dashboard' && pathname === '/dashboard');
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              isActive && "bg-primary/10 text-primary"
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
