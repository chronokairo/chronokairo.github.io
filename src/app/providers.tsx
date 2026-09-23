"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider, Toaster, SonnerToaster } from "@chronokairo/platform/ui";
import { ThemeProvider } from "@/components/ThemeProvider";



export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider defaultTheme="dark" storageKey="chronokairo-theme">
        <TooltipProvider>
          {children}
          <Toaster />
          <SonnerToaster />

        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
