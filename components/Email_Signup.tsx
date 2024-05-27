import React from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Email_Signup() {
  return (
    <Card className="p-4 flex gap-x-4">
      <Input placeholder="What's your email?" />
      <Button>Click There!</Button>
    </Card>
  );
}

export default Email_Signup;
