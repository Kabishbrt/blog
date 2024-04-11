"use client";

import Link from "next/link";
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Spinner } from "./components/spinner";
import { Header } from "./components/header";
import { useSession } from "next-auth/react";


interface AppProps {
  children: React.ReactNode; // Accept children prop of type React.ReactNode
}

export const App = ({ children }: AppProps) => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Spinner />;
  if (mounted) {
    return (
      <>
        <Header />
        {children}
      </>
    );
  }
};
