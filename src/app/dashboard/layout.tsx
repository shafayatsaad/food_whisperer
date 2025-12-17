import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <main className="flex-1">
        <div className="animate-fade-in">{children}</div>
      </main>
    </SidebarProvider>
  );
}
