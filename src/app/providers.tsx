"use client";

import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

type ProvidersProps = PropsWithChildren;

/**
 * App-level providers for client-side concerns (theme, future context, etc).
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
