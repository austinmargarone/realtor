import { MenuLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const menuLinks: MenuLink[] = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/about",
    label: "About Me",
  },
  {
    route: "/portfolio",
    label: "Portfolio",
  },
  {
    route: "/tools",
    label: "Tools",
  },
  {
    route: "/contact",
    label: "Contact Me",
  },
  {
    route: "/blog",
    label: "Blog",
  },
  {
    route: "/disclosures",
    label: "Disclosures",
  },
];
