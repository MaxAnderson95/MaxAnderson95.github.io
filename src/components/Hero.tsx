import type { ReactNode } from "react";

interface Props {
  name: string;
  bio: string;
  emailUrl: string;
  /** Rendered between the name and the bio (the role typer) */
  children?: ReactNode;
}

export default function Hero({ name, bio, emailUrl, children }: Props) {
  return (
    <div className="hero__column" data-reveal="">
      <div className="hero__ident">
        <figure className="hero__portrait cut" data-slot="portrait" data-alt="Max Anderson, head and shoulders">
          <img src="/img/me.png" alt="Max Anderson" width="667" height="800" fetchPriority="high" />
        </figure>
        <h1 className="hero__name">{name}</h1>
      </div>
      {children}
      <p className="hero__lede">{bio}</p>
      <div className="hero__actions">
        <a href="/blog/" className="key key--primary">
          Read my blog
        </a>
        <a href={emailUrl} className="key" data-email-menu="">
          Email me
        </a>
      </div>
    </div>
  );
}
