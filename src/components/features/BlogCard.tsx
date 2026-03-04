import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  post: {
    title: string;
    slug: string;
    publishedAt: string;
    excerpt: string;
    featuredImage?: {
      asset: { _ref: string };
      alt?: string;
    };
    category?: {
      title: string;
      slug: string;
    };
  };
}

export function BlogCard({ post }: BlogCardProps) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className={styles.card}>
      <Link href={`/blog/${post.slug}`} className={styles.link}>
        {post.featuredImage && (
          <div className={styles.imageWrap}>
            <Image
              src={urlFor(post.featuredImage).width(600).height(340).url()}
              alt={post.featuredImage.alt || post.title}
              width={600}
              height={340}
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.body}>
          <div className={styles.meta}>
            {post.category && (
              <span className={styles.category}>{post.category.title}</span>
            )}
            <time className={styles.date} dateTime={post.publishedAt}>
              {date}
            </time>
          </div>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
