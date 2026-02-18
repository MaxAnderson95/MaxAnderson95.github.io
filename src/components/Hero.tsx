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
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Ambient glow */}
      <div className="hero-glow opacity-60 mix-blend-screen" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 w-full pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12 md:gap-24">
          {/* ===== Left column — text ===== */}
          <div className="flex-1 min-w-0">
            {/* Greeting + Name */}
            <div className="reveal" style={{ animationDelay: "0.15s" }}>
              <h1 className="font-display font-bold tracking-tight leading-[1.1] text-[clamp(3.5rem,7vw,5.5rem)] pb-2">
                <span className="text-text bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                  Hey, I'm {name.split(" ")[0]}
                </span>
                <span className="inline-block animate-[wave_2.5s_ease-in-out_infinite] origin-[70%_70%] ml-4 text-white align-baseline">
                  👋
                </span>
              </h1>
            </div>

            {/* TypeIt roles */}
            <div
              className="reveal mt-4 pl-1"
              style={{ animationDelay: "0.35s" }}
            >
              <div className="text-[clamp(1.2rem,3vw,1.75rem)] font-body font-light text-accent min-h-[1.4em] flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent/50 inline-block"></span>
                <TypeIt
                  options={{
                    speed: 50,
                    deleteSpeed: 25,
                    breakLines: false,
                    loop: true,
                    waitUntilVisible: true,
                    lifeLike: true,
                    cursor: false,
                  }}
                  getBeforeInit={(instance) => {
                    roles.forEach((role, i) => {
                      instance.type(role).pause(2000).delete(role.length);
                      if (i < roles.length - 1) {
                        instance.pause(500);
                      }
                    });
                    return instance;
                  }}
                />
                <span className="animate-pulse text-accent">_</span>
              </div>
            </div>

            {/* Bio */}
            <div
              className="reveal mt-10 max-w-lg pl-1"
              style={{ animationDelay: "0.55s" }}
            >
              <p className="text-text-secondary text-[17px] leading-relaxed font-light">
                {bio}
              </p>
            </div>

            {/* Social links + CTA */}
            <div
              className="reveal mt-10 flex flex-wrap items-center gap-6 pl-1"
              style={{ animationDelay: "0.7s" }}
            >
              {/* Primary CTA */}
              <a
                href="/blog/"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-bg font-semibold text-[15px] transition-all duration-300 hover:scale-[1.03] overflow-hidden"
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
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

                {/* Status indicator */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 backdrop-blur-md bg-black/30 px-3 py-1.5 rounded-full border border-white/10">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-[11px] font-mono text-white/80 tracking-wide uppercase">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
