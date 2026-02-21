import { slugifyTag } from "../lib/utils";

interface Props {
  slug: string;
  title: string;
  date: string;
  rawDate: string;
  readTime: string;
  tags: string[];
  featureImage?: string;
  featureImageAlt?: string;
  excerpt?: string;
  index: number;
}

export default function BlogCard({
  slug,
  title,
  date,
  rawDate,
  readTime,
  tags,
  featureImage,
  featureImageAlt,
  excerpt,
  index,
}: Props) {
  // Stagger animation based on index
  const delay = `${0.1 + index * 0.1}s`;

  return (
    <article
      className="group relative block w-full h-full p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/10 bg-surface/40 backdrop-blur-md cursor-pointer"
      style={{ animationDelay: delay }}
    >
      {/* Hover Gradient Bloom */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full justify-between gap-6">

        {featureImage && (
          <div className="overflow-hidden rounded-xl border border-white/10">
            <img
              src={featureImage}
              alt={featureImageAlt || `Feature image for ${title}`}
              loading="lazy"
              className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        )}
        
        {/* Top Section */}
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-3 text-[0.8125rem] font-mono tracking-wide text-text-muted mb-4">
            <time dateTime={rawDate}>{date}</time>
            <span className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
            <span>{readTime}</span>
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-display font-semibold text-text leading-tight group-hover:text-white transition-colors duration-300 mb-3">
            <a href={`/blog/${slug}/`} className="after:absolute after:inset-0 after:content-['']">
              {title}
            </a>
          </h2>

          {/* Excerpt (optional) */}
          {excerpt && (
            <p className="text-[0.9375rem] text-text-secondary leading-relaxed line-clamp-3 font-light opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              {excerpt}
            </p>
          )}
        </div>

        {/* Bottom Section: Tags & Action */}
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <a
                key={tag}
                href={`/tags/${slugifyTag(tag)}/`}
                className="relative z-10 px-2.5 py-1 text-[0.6875rem] font-mono text-text-secondary bg-white/5 rounded-md border border-white/5 hover:border-accent/30 hover:text-accent-light transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>
          
          <div aria-hidden="true" className="flex items-center gap-2 text-[0.8125rem] font-medium text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Read Article
            <svg 
              className="w-4 h-4" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}
