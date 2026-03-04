import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Labor Party was founded in 2024 as an independent political party for working people. No corporate money. No compromise.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Reveal>
          <h1 className={styles.heroTitle}>Who We Are</h1>
        </Reveal>
      </Section>

      <Divider />

      {/* Origin Story */}
      <Section>
        <Reveal>
          <Container>
            <h2 className={styles.subhead}>Founded in 2024</h2>
            <p>
              The Labor Party was born out of a simple reality: neither major
              party serves working people. Democrats talk about workers while
              cashing checks from Wall Street. Republicans talk about jobs while
              cutting the regulations that keep workers safe. Both parties have
              had over 150 years. The results speak for themselves.
            </p>
            <p>
              We started because someone had to. Working people across every
              region, industry, and background decided to stop waiting for the
              two parties to change and built something of their own. Not a
              splinter of the left. Not a moderate wing of anything. A
              first-principles institution built from the ground up.
            </p>
          </Container>
        </Reveal>
      </Section>

      <Divider />

      {/* What Makes Us Different */}
      <Section bg="alt">
        <Reveal>
          <Container>
            <h2 className={styles.subhead}>What Makes Us Different</h2>
            <p>
              We take no corporate money. Not from pharmaceutical companies. Not
              from real estate investors. Not from Wall Street. Not from anyone
              who profits from keeping wages low, rents high, and healthcare
              out of reach.
            </p>
            <p>
              That's not a slogan. It's a structural advantage. Politicians who
              take corporate PAC money can't propose real rent control because
              their donors would pull funding the same day. They can't deliver
              universal healthcare because pharma companies write the checks.
              They can't tax wealth because Wall Street runs the fundraisers.
            </p>
            <p>
              We can. Because we answer to working people and nobody else.
            </p>
          </Container>
        </Reveal>
      </Section>

      <Divider />

      {/* Values */}
      <Section>
        <Reveal>
          <Container>
            <h2 className={styles.subhead}>What We Stand For</h2>
            <p>
              Good jobs with living wages. Healthcare that doesn't bankrupt you.
              Rent you can actually afford. Schools that prepare your kids for
              real life. A government that works for the people who pay for it.
            </p>
            <p>
              These aren't radical ideas. They're common sense. The only reason
              they feel radical is that both parties take money from the people
              who benefit from the way things are. We don't, so we won't
              compromise.
            </p>
          </Container>
        </Reveal>
      </Section>

      <Divider />

      {/* CTA */}
      <Section bg="accent">
        <Reveal>
          <div className={styles.cta}>
            <h2 className={styles.subhead}>Be Part of It</h2>
            <p>
              We're building the first political party in modern American
              history that refuses corporate money on principle. Your membership
              makes that possible.
            </p>
            <Button href="https://members.votelabor.org" external>
              Become a Member
            </Button>
          </div>
        </Reveal>
      </Section>

      <Divider />
    </>
  );
}
