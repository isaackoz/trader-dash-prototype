import {
  TitleHeaderContent,
  TitleHeaderName,
  TitleHeaderWrapper,
  Wrapper,
} from "@/components/custom/wrapper";
import { SidebarNav, type SidebarNavProps } from "./_components/side-nav-bar";
const items: SidebarNavProps["items"] = [
  {
    href: "/dashboard/settings",
    title: "General",
  },
  {
    href: "/dashboard/settings/account",
    title: "Account",
  },
  {
    href: "/dashboard/settings/billing",
    title: "Subscription & Billing",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TitleHeaderWrapper>
        <TitleHeaderContent>
          <TitleHeaderName>Settings</TitleHeaderName>
        </TitleHeaderContent>
      </TitleHeaderWrapper>
      <Wrapper className="lg:flex-row">
        <aside className="basis-1/4 pr-8">
          <SidebarNav items={items} />
        </aside>
        <div className="w-full">{children}</div>
      </Wrapper>
    </>
  );
}
