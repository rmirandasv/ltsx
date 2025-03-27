import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen bg-background antialiased">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
