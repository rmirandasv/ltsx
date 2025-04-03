import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";
import { Head } from "@inertiajs/react";
import { AppBreadcrumbItem } from "@/types";
import AppBreadcrumb from "./app-breadcrumb";
import { Toaster } from "@/components/ui/sonner";

type AppLayoutProps = {
  title?: string;
  children: ReactNode;
  breadcrumbs?: AppBreadcrumbItem[];
};

export default function AppLayout({
  title,
  breadcrumbs,
  children,
}: AppLayoutProps) {
  return (
    <SidebarProvider>
      <Head title={title} />
      <div className="min-h-screen flex w-full bg-background antialiased">
        <AppSidebar />
        <div className="flex flex-col w-full">
          <div className=" px-4 py-3 flex items-center space-x-3">
            <SidebarTrigger />
            {breadcrumbs && breadcrumbs.length > 0 && (
              <AppBreadcrumb items={breadcrumbs} />
            )}
          </div>
          <main className="p-6 w-full mx-auto">{children}</main>
        </div>
      </div>
      <Toaster />
    </SidebarProvider>
  );
}
