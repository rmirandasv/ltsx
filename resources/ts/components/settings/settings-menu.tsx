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
        <VerticalMenuListItem>
          <Link href={route("settings.profile")}>Profile</Link>
        </VerticalMenuListItem>
        <VerticalMenuListItem>
          <Link href={route("settings")}>Password</Link>
        </VerticalMenuListItem>
      </VerticalMenuList>
    </VerticalMenu>
  );
}
