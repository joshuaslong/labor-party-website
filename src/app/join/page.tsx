import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join the Labor Party. No corporate money, no compromise. Your membership builds political power for working people.",
};

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Reveal>
          <div className={styles.heroBlock}>
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

      <Divider />

      {/* Why Join */}
      <Section>
        <Reveal>
          <Container>
            <h2 className={styles.subhead}>Why It Matters</h2>
            <p>
              Every dollar we raise comes from working people. Not one cent from
              corporations, landlords, or Wall Street. That independence is what
              lets us fight for real rent control, universal healthcare, and a
              tax code that makes billionaires pay their share.
            </p>
            <p>
              When you become a member, you're not just writing a check. You're
              building the only political party in this country that can't be
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
                  Be part of something that's never existed in this country.
                  A party built by workers, for workers.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Divider />

      {/* Social Proof */}
      <Section>
        <Reveal>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50</span>
              <span className={styles.statLabel}>State Chapters</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>$0</span>
              <span className={styles.statLabel}>Corporate Dollars</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>EST. 2024</span>
              <span className={styles.statLabel}>Founded</span>
            </div>
          </div>
        </Reveal>
      </Section>

      <Divider />

      {/* Final CTA */}
      <Section bg="accent">
        <Reveal>
          <div className={styles.finalCta}>
            <h2 className={styles.subhead}>Ready?</h2>
            <p>
              Membership starts at whatever you can afford. We're funded by
              working people, not billionaires, so every dollar counts.
            </p>
            <Button href="https://members.votelabor.org" external>
              Join the Labor Party
            </Button>
          </div>
        </Reveal>
      </Section>

      <Divider />
    </>
  );
}
