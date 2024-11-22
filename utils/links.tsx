import { LucideIcon } from "lucide-react";

//กำหนด type ของ links
type NavLinks = {
    href: string;
    icon?: LucideIcon;
    label: string;
}

export const links: NavLinks[]  = [
  { href: "/", label: "Home" },
  { href: "/profile/create", label: "Profile" },
  { href: "/favorits", label: "Favorits"},
  { href: "/camp",label: "Camp"},
];