import { Navbar, NavbarContent } from "@nextui-org/navbar";
import { NavLinks } from "./header-links";
import { Chip } from "@nextui-org/chip";
import { BellIcon, UserIcon } from "lucide-react";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
export function DashboardHeader() {
  return (
    <>
      <nav className="flex w-full items-center justify-between px-8 py-4  dark:bg-black/95 dark:text-white">
        {/* Main header */}
        <div className="flex h-fit items-center space-x-4 px-4">
          <Link className="flex items-center" href="/dashboard">
            <Image
              src="/logo.png"
              width={32}
              height={32}
              alt="TraderDash Logo"
              className="mr-2 inline-block"
            />
            <h2 className="inline-block font-orbitron text-lg">TraderDash</h2>
          </Link>
          <Link href="/dashboard/settings/billing">
            {/* User info here */}
            {true ? (
              <Chip variant="flat" size="sm" color={"success"}>
                Pro
              </Chip>
            ) : (
              <Chip variant="flat" size="sm" color={"warning"}>
                Free
              </Chip>
            )}
          </Link>
        </div>
        <div className="flex min-h-[32px] items-center space-x-4">
          <div>
            <BellIcon size={24} />
          </div>
          <UserIcon />
        </div>
      </nav>
      <Navbar
        className="sticky top-0 justify-start border-b-1 py-0 dark:border-b-neutral-800 dark:bg-black/95 dark:text-white"
        height={1}
      >
        <NavbarContent
          className="flex items-center overflow-y-hidden overflow-x-scroll py-2 [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
          justify="start"
        >
          <NavLinks />
        </NavbarContent>
      </Navbar>
    </>
  );
}

export function DashboardFooter() {
  return (
    <footer className="bg-content1">
      <div className="flex h-16 items-center justify-center">
        <p className="text-sm text-content2-foreground">TraderDash</p>
      </div>
    </footer>
  );
}
