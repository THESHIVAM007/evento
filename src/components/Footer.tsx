import Link from "next/link";

const routes = [
  {
    path: "/terms-conditions",
    name: "Terms & Conditions",
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto flex items-center h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25 justify-between">
      <small>
        &copy; 2050 ByteGrad. All rights reserved.
      </small>
      <ul className="flex items-center gap-x-3 sm:gap-x-8">
{
  routes.map((route) => (
    <li
      key={route.path}
      className="hover:text-white text-white/50 transition"
    >
      <Link href={route.path}>{route.name}</Link>
    </li>
  ))
}
      </ul>
    </footer>
  )
}
