import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-heading text-2xl mb-3">Delhi Darling Table</p>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Hospitality consulting rooted in the regional traditions of India.
              Based in the San Francisco Bay Area.
            </p>
            <div className="diamond-separator mt-6" />
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-primary-foreground/40 mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/work", label: "Our Work" },
                { href: "/supper-club", label: "Supper Club" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-primary-foreground/40 mb-5">
              Get In Touch
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact?intent=consulting"
                  className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Restaurant Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?intent=catering"
                  className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Private Catering
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?intent=supper-club"
                  className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Supper Club Waitlist
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?intent=press"
                  className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Press & Collaborations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Delhi Darling Table. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/40">
            San Francisco Bay Area, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
