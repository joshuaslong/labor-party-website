import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TextReveal } from "@/components/ui/TextReveal";
import { ValuePropCard } from "@/components/ui/ValuePropCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join the Labor Party. No corporate money, no compromise. Your membership builds political power for working people.",
};

const JOIN_STATS = [
  { value: 50, label: "State Chapters" },
  { value: 0, prefix: "$", label: "Corporate Dollars" },
  { value: 12, label: "Policy Areas" },
];

const DUES_BREAKDOWN = [
  { label: "State Organizing", pct: 40 },
  { label: "Candidate Support", pct: 25 },
  { label: "Operations", pct: 20 },
  { label: "National Campaigns", pct: 15 },
];

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Reveal>
          <div className={styles.heroBlock}>
            <p className={styles.heroLabel}>Become a member</p>
            <h1 className={styles.heroTitle}>Join the Fight</h1>
            <p className={styles.heroSub}>
              Your membership funds a political party that answers to workers
              and nobody else.
            </p>
            <Button href="https://members.votelabor.org" external>
              Become a Member
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Stats — moved up for social proof near hero */}
      <Section bg="alt">
        <AnimatedCounter stats={JOIN_STATS} />
      </Section>

      {/* Mission reveal */}
      <Section>
        <TextReveal text="Every dollar we raise comes from working people. Not one cent from corporations, landlords, or Wall Street. That independence is what lets us fight for real rent control, universal healthcare, and a tax code that makes billionaires pay their share." />
      </Section>

      <Divider variant="heavy" />

      {/* Why Join */}
      <Section>
        <Reveal>
          <Container>
            <h2 className={styles.sectionHeading}>Why It Matters</h2>
            <p>
              When you become a member, you&apos;re not just writing a check. You&apos;re
              building the only political party in this country that can&apos;t be
              bought. Your dues fund organizers, candidates, and the
              infrastructure that turns popular ideas into political power.
            </p>
          </Container>
        </Reveal>
      </Section>

      <Divider variant="accent" />

      {/* What Membership Means — ValuePropCards */}
      <Section bg="alt">
        <Reveal>
          <h2 className={styles.sectionHeading}>What Membership Means</h2>
        </Reveal>
        <Reveal stagger>
          <div className={styles.propGrid}>
            <ValuePropCard
              number={1}
              title="Your Voice"
              description="Vote on party platform, leadership, and endorsements. This is your party. You run it."
            />
            <ValuePropCard
              number={2}
              title="Your Chapter"
              description="Connect with organizers in your area. Build power locally. State chapters are where the work happens."
            />
            <ValuePropCard
              number={3}
              title="Your Candidates"
              description="Help recruit, vet, and support candidates who refuse corporate money and fight for working people."
            />
            <ValuePropCard
              number={4}
              title="Your Movement"
              description="Be part of something that's never existed in this country. A party built by workers, for workers."
            />
          </div>
        </Reveal>
      </Section>

      <Divider variant="heavy" />

      {/* Where Your Dues Go — dark section */}
      <Section bg="dark">
        <Reveal>
          <h2 className={styles.duesHeading}>Where Your Dues Go</h2>
          <p className={styles.duesIntro}>
            Full transparency. Every dollar accounted for.
          </p>
          <div className={styles.duesBreakdown}>
            {DUES_BREAKDOWN.map((item) => (
              <div key={item.label} className={styles.duesRow}>
                <div className={styles.duesBarWrap}>
                  <div
                    className={styles.duesBar}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
                <div className={styles.duesLabel}>
                  <span className={styles.duesPct}>{item.pct}%</span>
                  <span className={styles.duesName}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Divider variant="accent" />

      {/* Final CTA */}
      <Section bg="accent">
        <Reveal>
          <div className={styles.finalCta}>
            <h2 className={styles.ctaHeading}>Ready?</h2>
            <p>
              Membership starts at whatever you can afford. We&apos;re funded by
              working people, not billionaires, so every dollar counts.
            </p>
            <Button href="https://members.votelabor.org" external>
              Join the Labor Party
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
