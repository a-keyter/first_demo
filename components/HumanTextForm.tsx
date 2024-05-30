"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import submitPost from "@/lib/actions/submitPost"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  post_title: z.string().min(2).max(50),
  post_content: z.string().min(2).max(500),
})

export default function HumanTextForm() {
  const [loading, setLoading] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      post_title: "",
      post_content: "",
    },
  })

  //  Submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!isSignedIn || !user) {
      console.error("User is not signed in");
      return;
    }

    if (loading) {
      return;
    }

    setLoading(true);

    try {
      await submitPost("human_text", values.post_title, values.post_content, user.id);
      console.log("Post submitted successfully");
      form.reset(); // Clear the form fields
    } catch (error) {
      console.error("Error submitting post:", error);
      setLoading(false);
    } finally {
      setLoading(false);
      router.push("/dashboard")
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="post_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Project Ideas" {...field} />
              </FormControl>
              <FormDescription>
                This is the title of your post.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="post_content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Content</FormLabel>
              <FormControl>
                <Input placeholder="e.g. This is a short introduction to some of my ideas..." {...field} />
              </FormControl>
              <FormDescription>
                This is the content of your post.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}