import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { allPlatformSectionsQuery } from "@/lib/sanity/queries";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PlatformSearch } from "@/components/features/PlatformSearch";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The Labor Party platform: 12 policy sections covering workers' rights, healthcare, housing, education, and more.",
};

interface PlatformItem {
  _id: string;
  title: string;
  slug: string;
  summary: string;
}

async function getSections() {
  return client.fetch<PlatformItem[]>(
    allPlatformSectionsQuery,
    {},
    { next: { tags: ["platform-index"] } }
  );
}

export default async function PlatformPage() {
  const sections = await getSections();

  return (
    <>
      <Section>
        <Reveal>
          <h1 className={styles.title}>Our Platform</h1>
          <p className={styles.subtitle}>
            Twelve policy areas. Every one grounded in the material conditions
            of working people. No corporate money means no compromise.
          </p>
        </Reveal>
        <PlatformSearch sections={sections} />
      </Section>
    </>
  );
}
