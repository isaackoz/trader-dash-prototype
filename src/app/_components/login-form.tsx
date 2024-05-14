"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 2000));
    setIsLoading(false);
    router.push("/#dashboard");
  };
  return (
    <Card className="w-[300px]">
      <CardHeader>Login To TraderDash</CardHeader>
      <CardBody className="space-y-2">
        <Input label="Username" />
        <Input label="password" type="password" />
      </CardBody>
      <CardFooter className="block w-full space-y-2">
        <Button
          color="primary"
          className="w-full"
          isLoading={isLoading}
          onPress={handleSubmit}
        >
          Login
        </Button>
        <div>Sign up</div>
      </CardFooter>
    </Card>
  );
}
