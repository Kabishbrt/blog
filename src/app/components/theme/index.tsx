import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";

export default function ThemeToggler() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is mounted on client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null until the theme is mounted
  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
        {
            theme ==='dark' ? <BsSunFill size={30} color="white"/> : <MdDarkMode size={30} />
        }
    </button>
  );
}
