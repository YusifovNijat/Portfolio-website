import "./Footer.css";

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export default function Footer() {
  const socials: SocialLink[] = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nijatyusifov/",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 23.5h4V7.98h-4V23.5ZM8.5 7.98h3.83v2.12h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v9.36h-4v-8.3c0-1.98-.04-4.52-2.75-4.52-2.75 0-3.17 2.15-3.17 4.37v8.45h-4V7.98Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com/YusifovNijat",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .5C5.73.5.75 5.66.75 12.12c0 5.2 3.44 9.61 8.2 11.17.6.12.83-.26.83-.58v-2.2c-3.34.75-4.04-1.36-4.04-1.36-.55-1.43-1.35-1.81-1.35-1.81-1.1-.77.08-.76.08-.76 1.22.09 1.86 1.29 1.86 1.29 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.66-.31-5.46-1.37-5.46-6.08 0-1.34.46-2.44 1.23-3.3-.12-.31-.53-1.57.12-3.27 0 0 1.01-.33 3.3 1.26a11.1 11.1 0 0 1 6 0c2.29-1.59 3.3-1.26 3.3-1.26.65 1.7.24 2.96.12 3.27.77.86 1.23 1.96 1.23 3.3 0 4.73-2.8 5.76-5.47 6.07.43.39.82 1.15.82 2.32v3.44c0 .32.22.71.84.58 4.75-1.56 8.19-5.97 8.19-11.17C23.25 5.66 18.27.5 12 .5Z"
          />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:nijatyusifov@outlook.com",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.3-.7 7.1 5.2c.36.26.84.26 1.2 0l7.1-5.2A1 1 0 0 0 19.5 6h-15a1 1 0 0 0-.2-.2ZM20 8.2l-6.2 4.5a3 3 0 0 1-3.6 0L4 8.2v9.3c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V8.2Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footerInner">
        {/* logo */}
        <div className="footerLogo" aria-hidden="true">
          NY
        </div>

        <p className="footerText">
          Living, learning & developing.
        </p>

        <div className="footerSocials">
          {socials.map((s) => (
            <a
              key={s.label}
              className="socialBtn"
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={s.label}
              title={s.label}
            >
              <span className="socialIcon">{s.icon}</span>
            </a>
          ))}
        </div>

        <div className="footerBottom">
          <span>Handcrafted by Nijat © {year}</span>
        </div>
      </div>
    </footer>
  );
}