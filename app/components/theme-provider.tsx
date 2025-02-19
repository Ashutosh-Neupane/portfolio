"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);  // Ensure the theme is applied after the client-side mount
  }, []);

  if (!mounted) return null;  // Prevent hydration mismatch until client-side mount

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
