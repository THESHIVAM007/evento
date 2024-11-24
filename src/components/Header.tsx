import Link from "next/link";
import Logo from "./Logo";

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
  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 md:px-9  px-3 ">
      <Logo />
      <nav>
        <ul className="flex items-center gap-x-6 text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className="hover:text-white text-white/50 transition"
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
