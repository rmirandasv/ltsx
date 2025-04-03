import SettingsPageLayout from "@/components/settings/settings-page-layout";
import route from "ziggy-js";

export default function Account() {
  return (
    <SettingsPageLayout title="Account" breadcrumbs={[
      { label: "Home", href: route("home") },
      { label: "Settings", href: route("settings") },
      { label: "Account", href: route("settings.account") },
    ]}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <p className="text-gray-600">
          Here you can manage your account settings and preferences.
        </p>
      </div>
    </SettingsPageLayout>
  );
}
