import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TextReveal } from "@/components/ui/TextReveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join the Labor Party. No corporate money, no compromise. Your membership builds political power for working people.",
};

const JOIN_STATS = [
  { value: 50, label: "State Chapters" },
  { value: 0, prefix: "$", label: "Corporate Dollars" },
  { value: 2024, label: "Year Founded" },
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

      {/* Mission reveal */}
      <Section bg="alt">
        <TextReveal text="Every dollar we raise comes from working people. Not one cent from corporations, landlords, or Wall Street. That independence is what lets us fight for real rent control, universal healthcare, and a tax code that makes billionaires pay their share." />
      </Section>

      <Divider />

      {/* Why Join */}
      <Section>
        <Reveal>
          <Container>
            <h2 className={styles.subhead}>Why It Matters</h2>
            <p>
              When you become a member, you&apos;re not just writing a check. You&apos;re
              building the only political party in this country that can&apos;t be
              bought. Your dues fund organizers, candidates, and the
              infrastructure that turns popular ideas into political power.
            </p>
          </Container>
        </Reveal>
      </Section>

      <Divider />

      {/* What You Get */}
      <Section bg="alt">
        <Reveal>
          <div className={styles.benefits}>
            <h2 className={styles.subhead}>What Membership Means</h2>
            <div className={styles.benefitGrid}>
              <div className={styles.benefit}>
                <h3>Your Voice</h3>
                <p>
                  Vote on party platform, leadership, and endorsements. This is
                  your party. You run it.
                </p>
              </div>
              <div className={styles.benefit}>
                <h3>Your Chapter</h3>
                <p>
                  Connect with organizers in your area. Build power locally.
                  State chapters are where the work happens.
                </p>
              </div>
              <div className={styles.benefit}>
                <h3>Your Candidates</h3>
                <p>
                  Help recruit, vet, and support candidates who refuse corporate
                  money and fight for working people.
                </p>
              </div>
              <div className={styles.benefit}>
                <h3>Your Movement</h3>
                <p>
                  Be part of something that&apos;s never existed in this country.
                  A party built by workers, for workers.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Divider />

      {/* Stats - Animated */}
      <Section>
        <AnimatedCounter stats={JOIN_STATS} />
      </Section>

      <Divider />

      {/* Final CTA */}
      <Section bg="accent">
        <Reveal>
          <div className={styles.finalCta}>
            <h2 className={styles.subhead}>Ready?</h2>
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
