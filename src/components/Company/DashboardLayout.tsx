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
        className={`flex-1 p-5 transition-all duration-300 overflow-x-hidden ${
          !isMobile
            ? isCollapsed
              ? "pl-[100px]"
              : "pl-[246px]"
            : "pl-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
