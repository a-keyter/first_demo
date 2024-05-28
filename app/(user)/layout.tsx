import UserNav from "@/components/UserNav";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="flex">
        <UserNav/>
        <div className="p-4 w-full max-w-6xl">
          {children}
        </div>
       </main>
    
    );
  }