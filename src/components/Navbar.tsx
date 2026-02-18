interface Props {
  active?: "home" | "blog";
}

export default function Navbar({ active = "home" }: Props) {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto glass-panel rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl shadow-black/50 border-border-highlight/50">
        
        {/* Logo Icon */}
        <a
          href="/"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors group mr-1"
          aria-label="Home"
        >
          <div className="w-5 h-5 bg-gradient-to-tr from-accent to-accent-light rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-[0_0_12px_var(--color-accent-glow)]"></div>
        </a>

        {/* Navigation Pills */}
        <div className="flex items-center bg-black/20 rounded-full p-1 border border-white/5">
          <NavLink href="/" isActive={active === "home"}>
            Home
          </NavLink>
          <NavLink href="/blog/" isActive={active === "blog"}>
            Blog
          </NavLink>
        </div>

        {/* Separator */}
        <div className="w-px h-6 bg-border mx-2"></div>

        {/* Social Icons */}
        <div className="hidden sm:flex items-center gap-1 pr-2">
          <SocialLink href="https://github.com/MaxAnderson95" label="GitHub">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/maxanderson95" label="LinkedIn">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </SocialLink>
          <SocialLink href="mailto:max.a.anderson95@gmail.com" label="Email">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </SocialLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={`
        relative px-3 md:px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300
        ${
          isActive
            ? "text-white"
            : "text-text-muted hover:text-white"
        }
      `}
    >
      {isActive && (
        <span className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-inner"></span>
      )}
      <span className="relative z-10">{children}</span>
    </a>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="p-2 text-text-muted hover:text-accent hover:bg-white/5 rounded-full transition-all duration-200"
      aria-label={label}
    >
      {children}
    </a>
  );
}
