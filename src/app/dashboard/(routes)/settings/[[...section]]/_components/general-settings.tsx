import { Switch } from "@nextui-org/react";
import { FormInput } from "lucide-react";

export function GeneralSettings() {
  return (
    <div className="space-y-4">
      <SwitchInput
        title="Setting One"
        description="This is a placeholder for setting 1"
      />
      <SwitchInput
        title="Setting Two"
        description="This is a placeholder for setting 2"
      />
      <SwitchInput
        title="Setting Three"
        description="This is a placeholder for setting 3"
      />
    </div>
  );
}

const SwitchInput = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex justify-between p-4 border-2 border-content2 rounded-xl bg-content1 text-content1-foreground">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Switch />
    </div>
  );
};
