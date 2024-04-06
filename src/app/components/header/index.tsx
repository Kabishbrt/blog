"use client";

import Link from "next/link";
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { menuItems } from "../../../utils/index";
import { MenuItem } from "../../../utils/types";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { GlobalContext } from "@/context";
import { Button } from "../buttons";
import ThemeToggler from "../theme";

export const Header = () => {
  const [Sticky, setSticky] = useState<boolean>(false);
  const { theme } = useTheme();
  //   const { data: session } = useSession();
  //   const {setSearchQuery, setSearchResults} = useContext(GlobalContext);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname();


  
  useEffect(() => {
    function handleStickyNavbar() {
      if (window.scrollY >=15) setSticky(true);
      else setSticky(false);
    }
    window.addEventListener("scroll", handleStickyNavbar);


  });
  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div>
      <header
        className={`top-0 left-0 z-40 flex w-full items-center bg-transparent
        ${
          Sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop:blur-md !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }
        `}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href={"/"}
                className={`text-[25px] font-extrabold cursor-pointer block w-full dark:text-white
                    ${Sticky ? "py-5 lg:py-2" : "py-8"}
                    `}
              >
                Bloggs
              </Link>
            </div>
            <div>
              <button
                onClick={handleNavbarToggle}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[7px] rotate-45" : ""}
                        `}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "opacity-0" : ""}
                        `}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[-8px] -rotate-45" : ""}
                        `}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-0 z-30 w-[250px] mr-4 rounded border-[.5px] bg-white border-body-color/50 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100

                ${
                  navbarOpen
                    ? "visible top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }
                `}
              >
                <ul className="block lg:flex lg:space-x-12 lg:-ml-10 m-0 p-4">
                  {menuItems.map((item) => (
                    <li key={item.id} className="group relative">
                      <Link href={item.path === '/' ? '/home' : item.path}>
                        <span className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 cursor-pointer`}>
                          {item.label}
                          {pathName === item.path && <span className={`absolute bottom-0 left-0 lg:w-full w-1/4 h-0.5 ${theme==="dark"? ("bg-white"):("bg-black")}`}></span>}
                        </span> 
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex gap-4 items-center justify-end pr-16 lg:pr-0">
              <Button text="Create" onClick={() => {}}></Button>
              <Button text="Log" onClick={() => {}}></Button>

              {/* {session !== null ? ( 
                <Button onClick={() => router.push("/create")} text="Create" />
              ) : null}
              <Button
                onClick={
                  session !== null ? () => signOut() : () => signIn("github")
                }
                text={session !== null ? "Logout" : "Login"}
              />
              */}
              <div className="flex gap-3 items-center">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
