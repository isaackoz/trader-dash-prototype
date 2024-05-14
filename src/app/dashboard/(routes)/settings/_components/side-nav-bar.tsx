"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Button
          as={Link}
          key={item.href}
          href={item.href}
          className={cn("justify-start rounded-md text-left")}
          variant={pathname === item.href ? "solid" : "light"}
        >
          {item.title}
        </Button>
      ))}
    </nav>
  );
}
