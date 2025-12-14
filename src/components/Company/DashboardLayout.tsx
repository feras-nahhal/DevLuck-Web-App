"use client";

import { useEffect,useState } from "react";
import LeftSidebar from "@/src/components/Company/LeftSidebar";
import { useSidebar } from "@/src/lib/sidebarContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="app-container flex">
      <LeftSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main
        style={{
          flex: 1,
          padding: "20px",
          marginLeft: !isMobile ? (isCollapsed ? "100px" : "246px") : 0,
          transition: "margin-left 0.25s ease",
        }}
      >
        <div className="max-w-[1400px] mx-auto">
    {children}
  </div>
      </main>
    </div>
  );
}
