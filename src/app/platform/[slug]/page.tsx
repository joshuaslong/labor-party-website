import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/sanity/client";
import {
  platformSectionBySlugQuery,
  allPlatformSlugsQuery,
} from "@/lib/sanity/queries";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import styles from "./page.module.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface PlatformSection {
  title: string;
  slug: string;
  summary?: string;
  content?: any;
}

interface Props {
  params: Promise<{ slug: string }>;
}

async function getSection(slug: string) {
  return client.fetch<PlatformSection | null>(
    platformSectionBySlugQuery,
    { slug },
    { next: { tags: [`platform-${slug}`] } }
  );
}

export async function generateStaticParams() {
  const sections = await client.fetch<{ slug: string }[]>(allPlatformSlugsQuery);
  return sections.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = await getSection(slug);
  if (!section) return {};
  return {
    title: section.title,
    description: section.summary,
  };
}

export default async function PlatformSectionPage({ params }: Props) {
  const { slug } = await params;
  const section = await getSection(slug);

  if (!section) notFound();

  return (
    <>
      <Section>
        <Link href="/platform" className={styles.backLink}>
          &larr; Back to Platform
        </Link>
        <h1 className={styles.title}>{section.title}</h1>
        {section.summary && (
          <p className={styles.summary}>{section.summary}</p>
        )}
      </Section>

      <Divider />

      <Section>
        <Container>
          <div className={styles.content}>
            {section.content && (
              <PortableText
                value={section.content}
                components={{
                  block: {
                    h2: ({ children }) => (
                      <h2 className={styles.h2}>{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className={styles.h3}>{children}</h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className={styles.h4}>{children}</h4>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className={styles.quote}>
                        {children}
                      </blockquote>
                    ),
                  },
                  marks: {
                    link: ({ children, value }) => (
                      <a
                        href={value?.href}
                        target={
                          value?.href?.startsWith("http") ? "_blank" : undefined
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
        </Container>
      </Section>

      <Divider />
    </>
  );
}
