import Image from "next/image";
import { LoginForm } from "./_components/login-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-orbitron tracking-widest">TraderDash</h1>
        <p>Prototype by Isaac Koczwara</p>
      </div>
      <div className="mt-12">
        <LoginForm />
      </div>
    </main>
  );
}
