"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import FlagSelector from "./FlagSelector";
import SearchBar from "./SeachBar";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
          ? "dark:bg-navy dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              className={`flex items-center w-[128px] header-logo ${sticky ? "min-h-[60px]" : "min-h-[100px]"
                } `}
            >
              <Image
                src="/images/logo/logo-white.svg"
                alt="logo"
                width={128}
                height={40}
                className="w-full dark:hidden"
              />
              <Image
                src="/images/logo/logo-dark.svg"
                alt="logo"
                width={128}
                height={40}

                className="hidden w-full dark:block"
              />
            </Link>
            <div className="hidden lg:block">
              <SearchBar />
            </div>
            <div className="flex items-center justify-end">
              <FlagSelector />
              <div>
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
