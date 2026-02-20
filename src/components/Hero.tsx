import TypeIt from "typeit-react";

interface Props {
  name: string;
  bio: string;
  roles: string[];
}

interface ParsedRole {
  role: string;
  prefix: string;
  engineer: string;
  hasEngineerAtEnd: boolean;
}

export default function Hero({ name, bio, roles }: Props) {
  const engineerRegex = /\bengineer\b/i;
  const rolePauseMs = 2000;

  const parsedRoles: ParsedRole[] = roles.map((role) => {
    const match = role.match(engineerRegex);

    if (!match || typeof match.index !== "number") {
      return {
        role,
        prefix: role,
        engineer: "",
        hasEngineerAtEnd: false,
      };
    }

    const prefix = role.slice(0, match.index);
    const suffix = role.slice(match.index + match[0].length);

    return {
      role,
      prefix,
      engineer: match[0],
      hasEngineerAtEnd: suffix.length === 0,
    };
  });

  return (
    <section className="relative overflow-hidden flex-1 flex items-center">
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 w-full pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12 md:gap-24">
          {/* ===== Left column — text ===== */}
          <div className="flex-1 min-w-0">
            {/* Greeting + Name */}
             <div className="reveal" style={{ animationDelay: "0.15s" }}>
              <h1 className="font-display font-bold tracking-tight leading-[1.1] text-[2.5rem] md:text-[clamp(3.5rem,7vw,5.5rem)] pb-2 md:whitespace-nowrap">
                <span className="text-text">Hey, I'm </span>
                <span className="text-accent">{name.split(" ")[0]}</span>
                <span
                  className="inline-block animate-[wave_2.5s_ease-in-out_infinite] origin-[70%_70%] ml-2 md:ml-4 text-white align-baseline"
                  role="img"
                  aria-label="waving hand"
                >
                  👋
                </span>
              </h1>
            </div>

            {/* TypeIt roles */}
            <div
              className="reveal mt-4 pl-1"
              style={{ animationDelay: "0.35s" }}
            >
              <span className="sr-only">{roles.join(", ")}</span>
              <div aria-hidden="true" className="text-[clamp(1.2rem,3vw,1.75rem)] font-body font-light text-accent min-h-[1.4em] flex items-center gap-3">
                <TypeIt
                  options={{
                    speed: 50,
                    deleteSpeed: 33,
                    breakLines: false,
                    loop: true,
                    waitUntilVisible: true,
                    lifeLike: true,
                    cursor: true,
                    cursorChar: "_",
                  }}
                  getBeforeInit={(instance) => {
                    if (!parsedRoles.length) {
                      return instance;
                    }

                    instance.type(parsedRoles[0].role);

                    if (parsedRoles.length === 1) {
                      instance.pause(rolePauseMs);
                      return instance;
                    }

                    parsedRoles.slice(0, -1).forEach((currentRole, index) => {
                      const nextRole = parsedRoles[index + 1];

                      instance.pause(rolePauseMs);

                      if (currentRole.hasEngineerAtEnd && nextRole.hasEngineerAtEnd) {
                        instance
                          .move(-currentRole.engineer.length)
                          .delete(currentRole.prefix.length)
                          .type(nextRole.prefix)
                          .move(null, { to: "END" });
                      } else {
                        instance.delete(currentRole.role.length).type(nextRole.role);
                      }
                    });

                    instance.pause(rolePauseMs);

                    return instance;
                  }}
                />
              </div>
            </div>

            {/* Bio */}
            <div
              className="reveal mt-10 max-w-lg pl-1"
              style={{ animationDelay: "0.55s" }}
            >
              <p className="text-text-secondary text-[1.0625rem] leading-relaxed font-light">
                {bio}
              </p>
            </div>

            {/* CTA */}
            <div
              className="reveal mt-10 flex flex-wrap items-center gap-6 pl-1"
              style={{ animationDelay: "0.7s" }}
            >
              {/* Primary CTA */}
              <a
                href="/blog/"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-accent text-white font-semibold text-[0.9375rem] transition-all duration-300 hover:scale-[1.03] overflow-hidden shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:shadow-[0_0_30px_rgba(255,107,0,0.6)]"
              >
                <span className="relative z-10">Read my blog</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay"></div>
              </a>
            </div>
          </div>

          {/* ===== Right column — photo ===== */}
          <div
            className="reveal flex-shrink-0"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-[280px] h-[360px] md:w-[340px] md:h-[420px] mx-auto md:mx-0 group perspective-[1000px]">
              
              {/* Backing layer with glow */}
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl group-hover:bg-accent/30 transition-all duration-500 scale-90 translate-y-4"></div>

              {/* Main container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-surface shadow-2xl transition-transform duration-500 group-hover:rotate-y-2 group-hover:rotate-x-2 group-hover:scale-[1.02]">
                
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src="/img/me.png"
                    alt="Max Anderson"
                    className="w-full h-full object-cover filter grayscale-[0.3] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
                    width="340"
                    height="420"
                    loading="eager"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-80"></div>
                  
                  {/* Color Tint */}
                  <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-20 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-12 h-[1px] bg-white/40"></div>
                <div className="absolute top-4 left-4 h-12 w-[1px] bg-white/40"></div>
                
                <div className="absolute bottom-4 right-4 w-12 h-[1px] bg-accent/60"></div>
                <div className="absolute bottom-4 right-4 h-12 w-[1px] bg-accent/60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
