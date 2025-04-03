import SettingsLayout from "@/components/layouts/settings/settings-layout";
import Heading from "@/components/ui/heading";
import route from "ziggy-js";

export default function Password() {
  return (
    <SettingsLayout
      title="Account password"
      breadcrumbs={[
        { label: "Home", href: route("home") },
        { label: "Settings", href: route("settings") },
        { label: "Password", href: route("settings.password") },
      ]}
    >
      <Heading
        size="small"
        title="Account password"
        description="Change your password, manage your security settings, and more."
      />
    </SettingsLayout>
  );
}
