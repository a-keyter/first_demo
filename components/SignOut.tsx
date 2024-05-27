import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
 
export default async function SignOut() {
  const supabase = createClient();
 
  const {
    data: { user },
  } = await supabase.auth.getUser();
 
  const signOut = async () => {
    "use server";
 
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };
 
  return user && (
    <div className="flex items-center gap-4">
      <form action={signOut}>
        <button className="py-2 px-3 rounded-md bg-red-400">
          Logout
        </button>
      </form>
    </div>
  ) 
}
 