import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import HumanTextForm from "@/components/HumanTextForm";

function page() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1>Welcome to the Create Post page</h1>
      <Tabs defaultValue="human_text" className="w-[600px]">
        <TabsList>
          <TabsTrigger value="human_text">Human Post</TabsTrigger>
          <TabsTrigger value="ai_text">AI Text</TabsTrigger>
          <TabsTrigger value="ai_image">AI Image</TabsTrigger>
        </TabsList>
        <TabsContent value="human_text">
          <HumanTextForm/>
        </TabsContent>
        <TabsContent value="ai_text">This is where text generation will go.</TabsContent>
        <TabsContent value="ai_image">This is where image generation will go.</TabsContent>
      </Tabs>
    </div>
  );
}

export default page;
