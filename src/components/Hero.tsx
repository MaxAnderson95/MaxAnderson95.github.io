import TypeIt from "typeit-react";

interface Social {
  url: string;
  handle?: string;
  address?: string;
}

interface Props {
  name: string;
  bio: string;
  socials: Record<string, Social>;
  roles: string[];
}

export default function Hero({ name, bio, socials, roles }: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow */}
      <div className="hero-glow" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 w-full pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12 md:gap-16">
          {/* ===== Left column — text ===== */}
          <div className="flex-1 min-w-0">
            {/* Greeting + Name */}
            <div className="reveal" style={{ animationDelay: "0.15s" }}>
              <h1 className="font-display font-extrabold tracking-tight leading-tight">
                <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-text">
                  Hey, I'm {name.split(" ")[0]}{" "}
                  <span className="inline-block animate-[wave_2.5s_ease-in-out_infinite] origin-[70%_70%]">
                    👋
                  </span>
                </span>
              </h1>
            </div>

            {/* TypeIt roles */}
            <div
              className="reveal mt-3"
              style={{ animationDelay: "0.35s" }}
            >
              <div className="text-[clamp(1.05rem,2.5vw,1.5rem)] font-display font-semibold text-accent glow-orange min-h-[1.4em] pb-[0.4em]">
                <TypeIt
                  options={{
                    speed: 60,
                    deleteSpeed: 40,
                    breakLines: false,
                    loop: true,
                    waitUntilVisible: true,
                    lifeLike: true,
                  }}
                  getBeforeInit={(instance) => {
                    roles.forEach((role, i) => {
                      instance.type(role).pause(2200).delete(role.length);
                      if (i < roles.length - 1) {
                        instance.pause(400);
                      }
                    });
                    return instance;
                  }}
                />
              </div>
            </div>

            {/* Bio */}
            <div
              className="reveal mt-8 max-w-lg"
              style={{ animationDelay: "0.55s" }}
            >
              <p className="text-text-secondary text-[16px] leading-relaxed">
                {bio}
              </p>
            </div>

            {/* Social links + CTA */}
            <div
              className="reveal mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.7s" }}
            >
              {/* Primary CTA */}
              <a
                href="/blog/"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-bg font-semibold text-[14px] transition-all duration-300 hover:shadow-[0_0_24px_rgba(249,115,22,0.3)] hover:scale-[1.02]"
              >
                Read my blog
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              {/* Social pills */}
              <div className="flex items-center gap-2">
                {Object.entries(socials).map(([key, social]) => (
                  <a
                    key={key}
                    href={social.url}
                    target={key !== "email" ? "_blank" : undefined}
                    rel={key !== "email" ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-border-subtle text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent-dim transition-all duration-200"
                    aria-label={key}
                  >
                    {key === "github" && (
                      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    )}
                    {key === "linkedin" && (
                      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {key === "email" && (
                      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ===== Right column — photo ===== */}
          <div
            className="reveal flex-shrink-0"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="photo-frame mx-auto md:mx-0">
              <div className="photo-container">
                <img
                  src="/img/me.png"
                  alt="Max Anderson"
                  className="photo-img"
                  width="320"
                  height="320"
                  loading="eager"
                />
              </div>
              {/* Corner bracket accents */}
              <div className="photo-bracket photo-bracket--tl" />
              <div className="photo-bracket photo-bracket--br" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
