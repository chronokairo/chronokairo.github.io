"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider, Toaster, SonnerToaster, ThemeProvider } from "@chronokairo/platform/ui";

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
