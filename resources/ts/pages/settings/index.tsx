import SettingsPageLayout from "@/components/settings/settings-page-layout";
import route from "ziggy-js";

export default function Settings() {
  return (
    <SettingsPageLayout
      title="Settings"
      breadcrumbs={[
        { label: "Home", href: route("home") },
        { label: "Settings", href: route("settings") },
      ]}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-600">
          Here you can manage your account settings and preferences.
        </p>
      </div>
    </SettingsPageLayout>
  );
}
