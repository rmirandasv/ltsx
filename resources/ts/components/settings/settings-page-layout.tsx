import { ReactNode } from "react";
import SettingsMenu from "./settings-menu";
import AppLayout from "../layout/app-layout";
import { AppBreadcrumbItem } from "@/types";

export default function SettingsPageLayout({
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
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="w-full md:w-2/12">
          <SettingsMenu />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </AppLayout>
  );
}
