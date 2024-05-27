import Email_Signup from "@/components/Email_Signup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-4 p-24">
      <h1 className="text-6xl font-semibold">Hello World!</h1>
      <p className="text-center text-2xl">This is our first NextJS Project</p>
      <Email_Signup/>
    </main>
  );
}
