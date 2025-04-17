import { Link } from "@inertiajs/react";
import {
  VerticalMenu,
  VerticalMenuList,
  VerticalMenuListItem,
} from "@/components/ui/vertical-menu";
import route from "ziggy-js";

export default function SettingsMenu() {
  return (
    <VerticalMenu>
      <VerticalMenuList>
        <VerticalMenuListItem active={route().current("settings.profile")}>
          <Link href={route("settings.profile")} prefetch>Profile</Link>
        </VerticalMenuListItem>
        <VerticalMenuListItem active={route().current("settings.password")}>
          <Link href={route("settings.password")} prefetch>Password</Link>
        </VerticalMenuListItem>
        <VerticalMenuListItem active={route().current("settings.teams*")}>
          <Link href={route("settings.teams")} prefetch>Teams</Link>
        </VerticalMenuListItem>
      </VerticalMenuList>
    </VerticalMenu>
  );
}
