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
  const isAboveFold = index < 2;

  return (
    <article className="post-row" data-reveal="">
      <div className="post-row__meta">
        <time dateTime={rawDate}>{date}</time>
        <span>{readTime}</span>
      </div>

      <div className="post-row__body">
        <h2 className="post-row__title">
          <a href={`/blog/${slug}/`}>{title}</a>
        </h2>

        {excerpt && <p className="post-row__excerpt">{excerpt}</p>}

        <ul role="list" className="tag-list" aria-label="Tags">
          {tags.slice(0, 3).map((tag) => (
            <li key={tag}>
              <a href={`/tags/${slugifyTag(tag)}/`} className="quiet-link">
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {featureImage && (
        <figure className="post-row__figure cut">
          <img
            src={featureImage}
            alt={featureImageAlt || `Feature image for ${title}`}
            loading={isAboveFold ? "eager" : "lazy"}
            fetchPriority={isAboveFold ? "high" : "auto"}
          />
        </figure>
      )}
    </article>
  );
}
