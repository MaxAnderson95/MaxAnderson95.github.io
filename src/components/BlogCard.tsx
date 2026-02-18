interface Props {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  index: number;
}

export default function BlogCard({
  slug,
  title,
  date,
  readTime,
  tags,
  excerpt,
  index,
}: Props) {
  return (
    <a
      href={`/blog/${slug}/`}
      className="card reveal group block px-6 py-6"
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className="flex flex-col gap-3">
        {/* Meta row */}
        <div className="flex items-center gap-3 text-[12px] font-mono">
          <span className="text-accent">{date}</span>
          <span className="text-border">|</span>
          <span className="text-text-muted">{readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-[18px] font-display font-bold text-text group-hover:text-accent transition-colors duration-200 leading-snug">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-[14px] text-text-secondary leading-relaxed line-clamp-2">
          {excerpt}
        </p>

        {/* Tags + read indicator */}
        <div className="flex items-center justify-between mt-1">
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-text-muted text-[12px] font-mono group-hover:text-accent transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0">
            read &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}
