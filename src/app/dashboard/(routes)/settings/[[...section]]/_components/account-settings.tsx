import { Input } from "@nextui-org/react";

export function AccountSettings() {
  return (
    <div className="space-y-4">
      <Input
        label="Email"
        description={"Your email for your account"}
        defaultValue="example@gmail.com"
      />
      <Input label="First Name" description={"Your name"} defaultValue="John" />
      <Input
        label="Last Name"
        description={"Your last name"}
        defaultValue="Doe"
      />
    </div>
  );
}
