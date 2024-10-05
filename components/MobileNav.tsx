"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuLinks } from "@/constants/constant";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {menuLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg bg-kw-red text-white shadow-md dark:bg-black dark:text-kw-red"
                  : "rounded-lg bg-kw-maingray text-black shadow-md dark:bg-kw-lessblack dark:text-white"
              } flex items-center justify-start gap-4 p-4`}
            >
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors bg-black lg:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="border-l-[2px] border-black bg-white shadow-lg dark:bg-kw-darkgray"
      >
        <Link href="/" className="flex items-center gap-1">
          <p className="h2-bold text-black dark:text-white">
            Greg Miller | Realtor
          </p>
        </Link>
        <div style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
