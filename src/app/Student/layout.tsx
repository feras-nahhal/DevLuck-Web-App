"use client";

import { SidebarProvider } from "@/src/lib/sidebarContext";

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
