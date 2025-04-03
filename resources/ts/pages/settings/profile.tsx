import SettingsPageLayout from "@/components/settings/settings-page-layout";
import UserProfileForm from "@/components/settings/user-profile-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { SharedData } from "@/types";
import { usePage } from "@inertiajs/react";
import route from "ziggy-js";

export default function Profile() {
  const { auth } = usePage<SharedData>().props;
  return (
    <SettingsPageLayout
      title="Profile"
      breadcrumbs={[
        { label: "Home", href: route("home") },
        { label: "Settings", href: route("settings") },
        { label: "Profile", href: route("settings.profile") },
      ]}
    >
        <Heading title="Profile" description="Manage your profile settings" size="small" />
        <UserProfileForm user={auth.user} />
    </SettingsPageLayout>
  );
}
