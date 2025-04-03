import { Link } from "@inertiajs/react";
import {
  VerticalMenu,
  VerticalMenuList,
  VerticalMenuListItem,
} from "../ui/vertical-menu";
import route from "ziggy-js";

export default function SettingsMenu() {
  return (
    <VerticalMenu>
      <VerticalMenuList>
        <VerticalMenuListItem active={route().current("settings.profile")}>
          <Link href={route("settings.profile")}>Profile</Link>
        </VerticalMenuListItem>
        <VerticalMenuListItem active={route().current("settings.account")}>
          <Link href={route("settings.account")}>Account</Link>
        </VerticalMenuListItem>
      </VerticalMenuList>
    </VerticalMenu>
  );
}
