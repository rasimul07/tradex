type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/cources", label: "cources" },
  { href: "/programs", label: "programs" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/dashboard", label: "dashboard" },
];
