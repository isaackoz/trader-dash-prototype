"use client";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { usePathname } from "next/navigation";
import { NavbarItem } from "@nextui-org/navbar";

const dashboardLinks = [
  {
    title: "Overview",
    href: "/dashboard",
  },
  {
    title: "Trades",
    href: "/dashboard/trades",
  },
  {
    title: "Portfolio",
    href: "/dashboard/portfolio",
  },
  {
    title: "Connections",
    href: "/dashboard/connections",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
  },
];

export function NavLinks() {
  const path = usePathname();
  // /dashboard/trades
  // /dashboard/trades/checklists

  return (
    <>
      {dashboardLinks.map((link) => {
        const isActive =
          path === link.href ||
          (path.includes(link.href) && link.href !== "/dashboard");
        return (
          <NavbarItem isActive={isActive} key={link.href}>
            <Button
              as={Link}
              href={link.href}
              variant={isActive ? "flat" : "light"}
              size="md"
              radius="sm"
              className="h-fit py-1"
            >
              {link.title}
            </Button>
          </NavbarItem>
        );
      })}
    </>
  );
}
