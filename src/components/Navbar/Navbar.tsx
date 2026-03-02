import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Recommendation", href: "#recommendation" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header className={`navWrap ${scrolled ? "navScrolled" : ""}`}>
      <nav className="nav">
        <a className="brand" href="#top" onClick={handleNavClick}>

          <img src="/favicon.png" alt="Nijat Logo" className="navLogo" />

        </a>

        <div className="navLinks">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobilePanel ${open ? "open" : ""}`}>
        <div className="mobileLinks">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={handleNavClick}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}