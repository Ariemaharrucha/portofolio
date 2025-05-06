
import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        
        <div className="flex-1 md:mx-auto p-4 sm:p-6 md:p-8 transition-all duration-300 flex items-center justify-center">
          <main className="max-w-3xl w-full">
            {children}
          </main>
        </div>
        <Toaster />
        <Sonner />
      </div>
    </ThemeProvider>
  );
}
