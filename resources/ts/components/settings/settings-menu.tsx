import { Link } from "@inertiajs/react";
import {
  VerticalMenu,
  VerticalMenuHeader,
  VerticalMenuList,
  VerticalMenuListItem,
} from "../ui/vertical-menu";
import route from "ziggy-js";

export default function SettingsMenu() {
  return (
    <VerticalMenu>
      <VerticalMenuHeader>Settings</VerticalMenuHeader>
      <VerticalMenuList>
        <VerticalMenuListItem active={route().current("settings.profile")}>
          <Link href={route("settings.profile")}>Profile</Link>
        </VerticalMenuListItem>
        <VerticalMenuListItem active={route().current("settings")}>
          <Link href={route("settings")}>Password</Link>
        </VerticalMenuListItem>
      </VerticalMenuList>
    </VerticalMenu>
  );
}
