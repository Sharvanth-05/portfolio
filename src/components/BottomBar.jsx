'use client';

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {
  UserIcon as UserOutline,
  ClipboardDocumentIcon as ClipboardOutline,
  WrenchScrewdriverIcon as WrenchOutline,
  HomeIcon as HomeOutline,
} from "@heroicons/react/24/outline";

import {
  UserIcon as UserSolid,
  ClipboardDocumentIcon as ClipboardSolid,
  WrenchScrewdriverIcon as WrenchSolid,
  HomeIcon as HomeSolid,
} from "@heroicons/react/24/solid";

export default function BottomBar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: HomeOutline, activeIcon: HomeSolid },
    { href: "/about", icon: UserOutline, activeIcon: UserSolid },
    { href: "/projects", icon: ClipboardOutline, activeIcon: ClipboardSolid },
    { href: "/skills", icon: WrenchOutline, activeIcon: WrenchSolid },
  ];

  return (
    <nav className="bg-black/30 backdrop-blur-3xl h-15 fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-between gap-4 border-2 border-neutral-700 rounded-full px-6 z-50">
      {navItems.map(({ href, icon: Icon, activeIcon: ActiveIcon }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`transition-all hover:text-yellow-400 hover:border-amber-400 duration-300 hover:scale-120 ${
              isActive ? "text-white border-b-2 border-white pb-1" : "text-neutral-300"
            }`}
          >
            {isActive ? <ActiveIcon className="w-7 h-7" /> : <Icon className="w-7 h-7" />}
          </Link>
        );
      })}
    </nav>
  );
}