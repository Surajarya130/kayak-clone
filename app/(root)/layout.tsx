import LeftSidebar from "@/components/LeftSidebar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <LeftSidebar />
      {children}
      <Toaster />
    </main>
  );
};

export default Layout;
