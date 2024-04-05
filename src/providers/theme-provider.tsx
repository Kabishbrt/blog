"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export const NextThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};
    