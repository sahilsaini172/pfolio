"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";
export default function TopAppBar() {
  return (
    <div className="w-full flex items-center justify-center">
      <nav className="font-medium text-neutral-500 flex items-center justify-between rounded-full bg-white p-1 border border-neutral-200 w-fit my-10 shadow-xl">
        <NavItem href="/" children="Home" />
        <NavItem href="/pages/about" children="About" />
        <NavItem href="/pages/work" children="Work" />
        <NavItem href="/pages/contact" children="Contact" />
      </nav>
    </div>
  );
}

interface NavItemProps {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

function NavItem({
  href,
  children,
  className = "",
  activeClassName = "bg-neutral-100 text-neutral-900",
}: NavItemProps) {
  const router = useRouter();
  const isActive = usePathname() == href;

  const combinedClassname = isActive
    ? `${className} ${activeClassName}`.trim()
    : className;

  return (
    <Link href={href} className={`px-8 py-3 rounded-full ${combinedClassname}`}>
      {children}
    </Link>
  );
}
