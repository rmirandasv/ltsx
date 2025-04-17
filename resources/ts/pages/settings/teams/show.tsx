import SettingsLayout from "@/components/layouts/settings/settings-layout";
import InviteTeamMemberDialog from "@/components/settings/invite-team-member";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { SharedData, Team, User } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { Fragment, useState } from "react";
import route from "ziggy-js";

export default function ShowTeamPage({
  team,
  members,
}: {
  team: Team;
  members: User[];
}) {
  const { auth } = usePage<SharedData>().props;
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeleteTeam = () => {
    router.delete(route("settings.teams.destroy", { team: team.id }), {
      onBefore: () => setLoading(true),
      onFinish: () => setLoading(false),
    });
  };
  return (
    <SettingsLayout
      title="Team"
      breadcrumbs={[
        { href: route("settings.profile"), label: "Settings" },
        { href: route("settings.teams"), label: "Teams" },
        {
          href: route("settings.teams.show", { team: team.id }),
          label: team.name,
        },
      ]}
    >
      <Heading
        title={team.name}
        description="Manage your team settings and members."
        size="small"
      />
      <div className="flex flex-col p-4 border rounded-md border-border">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium">{team.name}</span>
            {team.personal_team === true && team.user_id === auth.user.id && (
              <span className="text-sm text-muted-foreground">
                Personal Team
              </span>
            )}
            {!team.personal_team && (
              <span className="text-sm text-muted-foreground">
                {members.find((m) => m.id === auth.user.id)?.pivot?.role}
              </span>
            )}
          </div>
        </div>
        <Separator orientation="horizontal" className="my-2" />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">
              {members.length}&nbsp;
              {members.length === 1 ? "Member" : "Members"}
            </span>
          </div>
          <InviteTeamMemberDialog team={team} />
        </div>
        <ul className="mt-4 flex flex-col gap-2">
          {members.map((member) => (
            <li
              key={`member-${member.id}`}
              className="flex flex-row items-center justify-between"
            >
              <span className="text-sm text-muted-foreground">
                {member.name}
              </span>
              {member.id === auth.user.id && (
                <span className="text-sm text-muted-foreground">You</span>
              )}
            </li>
          ))}
        </ul>
        {team.invitations.length > 0 && (
          <Fragment>
            <Separator orientation="horizontal" className="my-2" />
            <span className="text-sm font-medium">Pending Invites</span>
            <ul className="mt-4 flex flex-col gap-2">
              {team.invitations.map((invite) => (
                <li key={`invite-${invite.id}`}>
                  <span className="text-sm text-muted-foreground">
                    {invite.email}
                  </span>
                </li>
              ))}
            </ul>
          </Fragment>
        )}
      </div>
      <div className="mt-4 p-4 border border-red-200 rounded-md bg-red-50">
        <h3 className="text-sm font-medium text-red-800">Delete Team</h3>
        <p className="mt-1 text-sm text-red-700">
          Deleting a team will remove all of its members and their access to the
          team. This action cannot be undone.
        </p>
        <Button
          variant="destructive"
          className="mt-2"
          onClick={handleDeleteTeam}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete Team"}
        </Button>
      </div>
    </SettingsLayout>
  );
}
