"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/supper-club", label: "Silsila" },
  { href: "/wellness", label: "Mindful Table" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        <Link
          href="/"
          className="font-heading text-xl tracking-wide whitespace-nowrap text-foreground hover:text-primary transition-colors"
        >
          Delhi Darling Table
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-xs xl:text-sm tracking-widest uppercase whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-body text-xs xl:text-sm tracking-widest uppercase whitespace-nowrap px-5 py-2 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Work With Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-foreground transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="font-body text-sm tracking-widest uppercase px-5 py-2 bg-primary text-primary-foreground text-center hover:opacity-90 transition-opacity"
          >
            Work With Us
          </Link>
        </div>
      )}
    </header>
  );
}
