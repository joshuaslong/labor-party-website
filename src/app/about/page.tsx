import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { PullQuote } from "@/components/ui/PullQuote";
import { HorizontalTimeline } from "@/components/ui/HorizontalTimeline";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Labor Party was founded in 2024 as an independent political party for working people. No corporate money. No compromise.",
};

const TIMELINE_NODES = [
  {
    date: "2024",
    title: "The Beginning",
    description:
      "Workers across every region, industry, and background decide to stop waiting for the two parties to change.",
  },
  {
    date: "The Platform",
    title: "12 Policy Areas",
    description:
      "A comprehensive platform built from first principles — grounded in the material conditions of working people.",
  },
  {
    date: "50 States",
    title: "Every Chapter",
    description:
      "State chapters established across the country. Local organizing where the work happens.",
  },
  {
    date: "Today",
    title: "Building Power",
    description:
      "Recruiting candidates, growing membership, and building the party that should have existed all along.",
  },
];

const VALUES = [
  { title: "Living Wages", description: "Good jobs that let you live with dignity, not just survive." },
  { title: "Universal Healthcare", description: "Healthcare that doesn't bankrupt you. No premiums, no copays." },
  { title: "Affordable Housing", description: "Rent you can actually afford. Real rent control, not lip service." },
  { title: "Public Education", description: "Schools that prepare your kids for real life. Tuition-free college." },
  { title: "Worker Power", description: "Strong unions and the right to organize in every workplace." },
  { title: "Accountability", description: "A government that works for the people who pay for it." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Reveal>
          <p className={styles.heroLabel}>About</p>
          <h1 className={styles.heroTitle}>Who We Are</h1>
        </Reveal>
      </Section>

      {/* Mission reveal */}
      <Section bg="alt">
        <TextReveal text="Neither major party serves working people. Democrats talk about workers while cashing checks from Wall Street. Republicans talk about jobs while cutting the regulations that keep workers safe. Both parties have had over 150 years. The results speak for themselves." />
      </Section>

      <Divider variant="heavy" />

      {/* Timeline */}
      <Section bg="alt">
        <Reveal>
          <h2 className={styles.timelineHeading}>Our Story</h2>
        </Reveal>
        <HorizontalTimeline nodes={TIMELINE_NODES} />
      </Section>

      <Divider variant="accent" />

      {/* What Makes Us Different — dark section */}
      <Section bg="dark">
        <Reveal>
          <Container>
            <h2 className={styles.darkHeading}>What Makes Us Different</h2>
            <p>
              We take no corporate money. Not from pharmaceutical companies. Not
              from real estate investors. Not from Wall Street. Not from anyone
              who profits from keeping wages low, rents high, and healthcare
              out of reach.
            </p>
            <PullQuote>
              That&apos;s not a slogan. It&apos;s a structural advantage.
            </PullQuote>
            <p>
              Politicians who take corporate PAC money can&apos;t propose real rent
              control because their donors would pull funding the same day. They
              can&apos;t deliver universal healthcare because pharma companies write
              the checks. They can&apos;t tax wealth because Wall Street runs the
              fundraisers.
            </p>
            <p>
              We can. Because we answer to working people and nobody else.
            </p>
          </Container>
        </Reveal>
      </Section>

      <Divider variant="heavy" />

      {/* Values Grid */}
      <Section>
        <Reveal>
          <h2 className={styles.valuesHeading}>What We Stand For</h2>
        </Reveal>
        <Reveal stagger>
          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Divider variant="accent" />

      {/* CTA */}
      <Section bg="accent">
        <Reveal>
          <div className={styles.cta}>
            <h2 className={styles.ctaHeading}>Be Part of It</h2>
            <p>
              We&apos;re building the first political party in modern American
              history that refuses corporate money on principle. Your membership
              makes that possible.
            </p>
            <Button href="https://members.votelabor.org" external>
              Become a Member
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
