// components/Header.tsx
"use client";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

// Định nghĩa các component bên ngoài render để tránh lỗi
interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isAlwaysActive?: boolean;
  isActive: boolean;
}

const NavItem = ({
  href,
  children,
  isAlwaysActive = false,
  isActive,
}: NavItemProps) => {
  const active = isAlwaysActive ? false : isActive;

  return (
    <Link
      href={href}
      className={`relative py-6 hover:text-white transition duration-200 ${
        active ? "text-white font-semibold" : ""
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-all duration-200 ${
          active ? "opacity-100" : "opacity-0 hover:opacity-100"
        }`}
      ></span>
    </Link>
  );
};

interface SimpleNavItemProps {
  href: string;
  children: React.ReactNode;
}

const SimpleNavItem = ({ href, children }: SimpleNavItemProps) => (
  <Link
    href={href}
    className="relative py-6 hover:text-white transition duration-200"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 opacity-0 hover:opacity-100 transition-all duration-200"></span>
  </Link>
);

const Header = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  // Sử dụng requestAnimationFrame để tránh setState trực tiếp trong effect
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    return () => {
      cancelAnimationFrame(timer);
    };
  }, []);

  // Hàm kiểm tra active link
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Mảng chứa các navigation items để render
  const navItems = [
    { href: "/", label: t.navigation.welcome, type: "nav" as const },
    { href: "/products", label: t.navigation.products, type: "nav" as const },
    { href: "/about", label: t.navigation.about, type: "nav" as const },
    {
      href: "/technology",
      label: t.navigation.technology,
      type: "nav" as const,
    },
    { href: "/news", label: t.navigation.news, type: "simple" as const },
    {
      href: "/partners",
      label: t.navigation.partners,
      type: "simple" as const,
    },
    { href: "/hr", label: t.navigation.hr, type: "nav" as const },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-18 bg-gradient-to-b from-[rgb(47,48,143,0.4)] to-[rgb(47,48,143,0.2)] backdrop-blur-xl border-b border-white/10">
      <div className="max-w mx-auto lg:px-4 flex items-center justify-between">
        {/* Logo và tên công ty */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="/"
            className="hover:opacity-90 transition duration-200 flex items-center"
          >
            <Image
              src="/images/Logo_HD.png"
              alt="Logo"
              width={160}
              height={64}
              priority
              className="h-16 w-auto md:h-[72px]"
            />
          </Link>

          {/* Tên công ty - Ẩn trên mobile, hiển thị trên tablet và desktop */}
          <div className="hidden sm:block">
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm md:text-base leading-tight">
                POURIN SPECIAL WELDING VIETNAM
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-base text-white/95">
          {navItems.map((item) => {
            if (item.type === "simple") {
              return (
                <SimpleNavItem key={item.href} href={item.href}>
                  {item.label}
                </SimpleNavItem>
              );
            }

            return (
              <NavItem
                key={item.href}
                href={item.href}
                isActive={isMounted ? isActive(item.href) : false}
              >
                {item.label}
              </NavItem>
            );
          })}

          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <div className="scale-90">
            <LanguageSwitcher />
          </div>

          <button
            className="text-white/95 p-2 rounded-lg hover:bg-white/5 transition duration-200"
            aria-label="Open menu"
          >
            <HiBars3 className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
