import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";
import {
  blogPostBySlugQuery,
  allBlogSlugsQuery,
  relatedPostsQuery,
} from "@/lib/sanity/queries";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { BlogCard } from "@/components/features/BlogCard";
import styles from "./page.module.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface BlogPost {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  author?: string;
  featuredImage?: { asset: { _ref: string }; alt?: string };
  category?: { _id: string; title: string; slug: string };
  body?: any;
}

interface RelatedPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  featuredImage?: { asset: { _ref: string }; alt?: string };
  category?: { title: string; slug: string };
}

interface Props {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
  return client.fetch<BlogPost | null>(
    blogPostBySlugQuery,
    { slug },
    { next: { tags: [`blog-${slug}`] } }
  );
}

export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: string }[]>(allBlogSlugsQuery);
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.featuredImage
      ? {
          images: [urlFor(post.featuredImage).width(1200).height(630).url()],
        }
      : undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const related: RelatedPost[] = post.category
    ? await client.fetch<RelatedPost[]>(relatedPostsQuery, {
        slug,
        categoryId: post.category._id,
      })
    : [];

  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: post.author
      ? { "@type": "Person", name: post.author }
      : { "@type": "Organization", name: "The Labor Party" },
    publisher: {
      "@type": "Organization",
      name: "The Labor Party",
      url: "https://votelabor.org",
    },
    ...(post.featuredImage && {
      image: urlFor(post.featuredImage).width(1200).height(630).url(),
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Featured Image */}
      {post.featuredImage && (
        <div className={styles.heroImage}>
          <Image
            src={urlFor(post.featuredImage).width(1600).height(600).url()}
            alt={post.featuredImage.alt || post.title}
            width={1600}
            height={600}
            priority
            className={styles.image}
          />
        </div>
      )}

      {/* Article */}
      <Section>
        <Container>
          <Link href="/blog" className={styles.backLink}>
            &larr; Back to Blog
          </Link>

          <article>
            <header className={styles.header}>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.meta}>
                {post.category && (
                  <span className={styles.category}>
                    {post.category.title}
                  </span>
                )}
                <time dateTime={post.publishedAt}>{date}</time>
                {post.author && <span>By {post.author}</span>}
              </div>
            </header>

            <div className={styles.body}>
              {post.body && (
                <PortableText
                  value={post.body}
                  components={{
                    block: {
                      h2: ({ children }) => (
                        <h2 className={styles.h2}>{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className={styles.h3}>{children}</h3>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className={styles.quote}>
                          {children}
                        </blockquote>
                      ),
                    },
                    types: {
                      image: ({ value }) => (
                        <figure className={styles.figure}>
                          <Image
                            src={urlFor(value).width(760).url()}
                            alt={value.alt || ""}
                            width={760}
                            height={400}
                            className={styles.bodyImage}
                          />
                          {value.caption && (
                            <figcaption className={styles.caption}>
                              {value.caption}
                            </figcaption>
                          )}
                        </figure>
                      ),
                    },
                    marks: {
                      link: ({ children, value }) => (
                        <a
                          href={value?.href}
                          target={
                            value?.href?.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            value?.href?.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {children}
                        </a>
                      ),
                    },
                  }}
                />
              )}
            </div>
          </article>
        </Container>
      </Section>

      {/* Related Posts */}
      {related.length > 0 && (
        <>
          <Divider />
          <Section bg="alt">
            <h2 className={styles.relatedTitle}>More from {post.category?.title}</h2>
            <div className={styles.relatedGrid}>
              {related.map((relPost) => (
                <BlogCard key={relPost._id} post={relPost} />
              ))}
            </div>
          </Section>
        </>
      )}

      <Divider />
    </>
  );
}
