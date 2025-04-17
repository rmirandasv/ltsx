import SettingsLayout from "@/components/layouts/settings/settings-layout";
import CreateTeamDialog from "@/components/settings/create-team";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { SharedData, Team } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import route from "ziggy-js";

export default function TeamsPage({ teams }: { teams: Team[] }) {
  const { auth } = usePage<SharedData>().props;
  return (
    <SettingsLayout
      title="Teams"
      breadcrumbs={[
        { href: route("settings"), label: "Settings" },
        { href: route("settings.teams"), label: "Teams" },
      ]}
    >
      <Heading title="Teams" description="Manage your teams" size="small" />
      <div className="mb-4 flex items-center justify-end">
        <CreateTeamDialog />
      </div>
      <ul className="flex flex-col gap-4">
        {teams.map((team) => (
          <li
            className="flex flex-col p-4 border rounded-md border-border"
            key={team.id}
          >
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-medium">{team.name}</span>
                {team.personal_team == true &&
                  team.user_id === auth.user.id && (
                    <span className="text-sm text-muted-foreground">
                      Personal Team
                    </span>
                  )}
              </div>
              <Button variant="link" asChild>
                <Link href={route("settings.teams.show", team.id)}>Manage</Link>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </SettingsLayout>
  );
}
