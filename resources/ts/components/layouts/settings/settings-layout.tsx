import { ReactNode } from "react";
import SettingsMenu from "./settings-menu";
import AppLayout from "@/components/layouts/app/app-layout";
import { AppBreadcrumbItem } from "@/types";
import Heading from "@/components/ui/heading";

export default function SettingsLayout({
  children,
  title,
  breadcrumbs = [],
}: {
  children: ReactNode;
  title?: string;
  breadcrumbs?: AppBreadcrumbItem[];
}) {
  return (
    <AppLayout title={title} breadcrumbs={breadcrumbs}>
      <Heading title="Settings" description="Manage your account settings" />
      <div className="flex flex-col md:flex-row md:gap-12">
        <div className="w-full max-w-xl md:w-56">
          <SettingsMenu />
        </div>
        <div className="flex-1 max-w-2xl">{children}</div>
      </div>
    </AppLayout>
  );
}
