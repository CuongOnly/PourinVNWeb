// components/Header.tsx
"use client";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

const Header = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  // Chỉ render client-side để tránh hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Hàm kiểm tra active link
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Component cho navigation items để tránh lặp code
  const NavItem = ({ href, children, isAlwaysActive = false }: { 
    href: string; 
    children: React.ReactNode;
    isAlwaysActive?: boolean;
  }) => {
    const active = isAlwaysActive ? false : isActive(href);
    
    return (
      <Link
        href={href}
        className={`relative py-6 hover:text-white transition duration-200 ${
          active ? 'text-white font-semibold' : ''
        }`}
      >
        {children}
        <span 
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-all duration-200 ${
            active ? 'opacity-100' : 'opacity-0 hover:opacity-100'
          }`}
        ></span>
      </Link>
    );
  };

  // Navigation items không cần active state
  const SimpleNavItem = ({ href, children }: { 
    href: string; 
    children: React.ReactNode;
  }) => (
    <Link 
      href={href} 
      className="relative py-6 hover:text-white transition duration-200"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 opacity-0 hover:opacity-100 transition-all duration-200"></span>
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-18 bg-gradient-to-b from-[rgb(47,48,143,0.4)] to-[rgb(47,48,143,0.2)] backdrop-blur-xl border-b border-white/10">
      <div className="max-w mx-auto lg:px-4 flex items-center justify-between ">
        {/* Logo và tên công ty */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="/"
            className="hover:opacity-90 transition duration-200 flex items-center"
          >
            <img 
              src="/images/Logo_HD.png" 
              alt="Logo" 
              className="h-16 w-auto md:h-18" 
            />
          </Link>
          
          {/* Tên công ty - Ẩn trên mobile, hiển thị trên tablet và desktop */}
          <div className="hidden sm:block">
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm md:text-base leading-tight">
                POURIN SPECIAL WELDING VIETNAM
              </span>
              {/* <span className="text-yellow-300 font-semibold text-xs md:text-sm leading-tight">
                
              </span> */}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-base text-white/95">
          {/* Chỉ render active states khi component đã mounted trên client */}
          {isMounted ? (
            <>
              <NavItem href="/">
                {t.navigation.welcome}
              </NavItem>

              <NavItem href="/products">
                {t.navigation.products}
              </NavItem>

              <NavItem href="/about">
                {t.navigation.about}
              </NavItem>

              <NavItem href="/technology">
                {t.navigation.technology}
              </NavItem>

              <SimpleNavItem href="/news">
                {t.navigation.news}
              </SimpleNavItem>

              <SimpleNavItem href="/partners">
                {t.navigation.partners}
              </SimpleNavItem>

              <NavItem href="/hr">
                Tuyển dụng
              </NavItem>
            </>
          ) : (
            // Fallback render cho server-side (không có active states)
            <>
              <Link href="/" className="relative py-6 hover:text-white transition duration-200">
                {t.navigation.welcome}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 opacity-0 transition-all duration-200"></span>
              </Link>

              <Link href="/products" className="relative py-6 hover:text-white transition duration-200">
                {t.navigation.products}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 opacity-0 transition-all duration-200"></span>
              </Link>

              <Link href="/about" className="relative py-6 hover:text-white transition duration-200">
                {t.navigation.about}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 opacity-0 transition-all duration-200"></span>
              </Link>

              <Link href="/technology" className="relative py-6 hover:text-white transition duration-200">
                {t.navigation.technology}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 opacity-0 transition-all duration-200"></span>
              </Link>

              <Link href="/news" className="relative py-6 hover:text-white transition duration-200">
                {t.navigation.news}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 opacity-0 transition-all duration-200"></span>
              </Link>

              <Link href="/partners" className="relative py-6 hover:text-white transition duration-200">
                {t.navigation.partners}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 opacity-0 transition-all duration-200"></span>
              </Link>

              <Link href="/hr" className="relative py-6 hover:text-white transition duration-200">
                Tuyển dụng
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 opacity-0 transition-all duration-200"></span>
              </Link>
            </>
          )}

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