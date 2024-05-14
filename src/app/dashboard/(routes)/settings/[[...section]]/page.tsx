import { redirect } from "next/navigation";
import { AccountSettings } from "./_components/account-settings";
import { BillingSettings } from "./_components/billing-settings";
import { GeneralSettings } from "./_components/general-settings";

export const dynamic = "force-dynamic";

export default function SettingsPage({
  params,
}: {
  params: { section?: string[] };
}) {
  const section = params.section?.[0] ?? "";
  switch (section) {
    case "account":
      return <AccountSettings />;
    case "billing":
      return <BillingSettings />;
    case "general":
      return <GeneralSettings />;
    case "":
      return <GeneralSettings />;
    default:
      redirect("/dashboard/settings");
  }
}
