import LeftSidebar from "@/components/LeftSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <LeftSidebar />
      {children}
    </main>
  );
};

export default Layout;
