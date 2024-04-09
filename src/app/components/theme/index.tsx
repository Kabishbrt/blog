import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";

export default function ThemeToggler() {
  const { resolvedTheme, theme, setTheme } = useTheme();


  return (
    <button className='border-none focus:outline-none' onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
        {
            theme ==='dark' ? <BsSunFill size={30} color="white"/> : <MdDarkMode size={30} />
        }
    </button>
  );
}
