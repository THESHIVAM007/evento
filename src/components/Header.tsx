"use client";
import Link from "next/link";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "./logo";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/events/all",
    name: "All Events",
  },
];

export default function Header() {
  const activePathName = usePathname();
  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav className="h-full" >
        <ul className="flex  gap-x-6 h-full text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className={clsx("hover:text-white flex items-center relative transition", {
                "text-white": route.path === activePathName,
                "text-white/50": route.path !== activePathName,
              })}
            >
              <Link href={route.path}>{route.name}</Link>
              {
                route.path === activePathName && (
                  <motion.div layoutId="header-active-link" className="bg-accent h-1 w-full absolute bottom-0"></motion.div>
                )
              }
            </li>
          ))}
        </ul>
      </nav> 
    </header>
  );
}
  