import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxHero } from "@/components/ui/ParallaxHero";
import { TextReveal } from "@/components/ui/TextReveal";
import { StickyComparison } from "@/components/ui/StickyComparison";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TextMarquee } from "@/components/ui/TextMarquee";
import { StackingCards } from "@/components/ui/StackingCards";
import { PullQuote } from "@/components/ui/PullQuote";
import { Container } from "@/components/ui/Container";
import styles from "./page.module.css";

const PLATFORM_STACKING = [
  { title: "Labor & Worker Rights", summary: "Strong unions, living wages, and the right to organize.", href: "/platform/labor-worker-rights" },
  { title: "Healthcare", summary: "Free healthcare for every American. No premiums, no copays.", href: "/platform/healthcare-social-protections" },
  { title: "Economic & Social Justice", summary: "Affordable housing, rent control, and corporate accountability.", href: "/platform/economic-social-justice" },
  { title: "Public Education", summary: "Fully funded public schools and tuition-free college.", href: "/platform/public-education" },
  { title: "Climate", summary: "Green jobs, clean energy, and environmental protection.", href: "/platform/climate-environmental-protection" },
  { title: "Democracy", summary: "Get corporate money out of politics. Protect voting rights.", href: "/platform/government-democracy-accountability" },
];

const COMPARISON_ITEMS = [
  {
    them: "Take billions from corporate PACs",
    us: "$0 in corporate money. Funded entirely by working people.",
  },
  {
    them: "Promise healthcare reform, deliver insurance profits",
    us: "Free healthcare in year one. No premiums, no copays.",
  },
  {
    them: "Cut taxes for billionaires, raise them for workers",
    us: "Zero federal taxes for 90% of households. $10.77T from those who can afford it.",
  },
  {
    them: "Means-test and means-deny student loan relief",
    us: "Student loans eliminated by year seven.",
  },
  {
    them: "Let corporations write their own regulations",
    us: "Strong unions. Living wages. The right to organize.",
  },
  {
    them: "Negotiate away your rights for donor access",
    us: "No donors to answer to. Only you.",
  },
];

const STATS = [
  { value: 10.77, prefix: "$", suffix: "T", decimals: 2, label: "Annual Revenue Generated" },
  { value: 90, suffix: "%", label: "Of Households Pay Zero Federal Tax" },
  { value: 0, prefix: "$", label: "Corporate Dollars Accepted" },
  { value: 50, label: "State Chapters" },
];

const MARQUEE_ITEMS = [
  "Strong Unions",
  "Free Healthcare",
  "Tuition-Free College",
  "Living Wages",
  "Affordable Housing",
  "Clean Energy Jobs",
  "End Mass Incarceration",
  "Corporate Accountability",
  "Voting Rights",
  "Worker Protections",
  "Food Security",
  "Fair Immigration",
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <ParallaxHero>
        <Reveal>
          <h1 className={`display ${styles.heroTitle}`}>
            THE LABOR PARTY
          </h1>
        </Reveal>
        <Reveal>
          <div className={styles.heroFooter}>
            <Button href="/join">Join the Fight</Button>
            <span className={styles.heroEst}>EST. 2024</span>
            <p className={styles.heroTagline}>
              Wages. Healthcare. Housing.<br />
              A party that will <em>actually</em> fight for them.
            </p>
          </div>
        </Reveal>
      </ParallaxHero>

      {/* ─── MARQUEE ─── */}
      <TextMarquee items={MARQUEE_ITEMS} speed={35} />

      {/* ─── MISSION ─── */}
      <Section>
        <TextReveal
          text="We are an independent political party built by and for working people. We take no corporate money. We answer to workers, families, and communities across every region of this country. Both major parties serve corporate donors. We serve you."
        />
      </Section>

      <Divider variant="heavy" />

      {/* ─── STATS ─── */}
      <Section bg="alt">
        <Reveal>
          <h2 className={styles.sectionTitle}>By the Numbers</h2>
        </Reveal>
        <AnimatedCounter stats={STATS} />
      </Section>

      <Divider variant="heavy" />

      {/* ─── COMPARISON ─── */}
      <StickyComparison items={COMPARISON_ITEMS} />

      <Divider variant="accent" />

      {/* ─── PLATFORM: Stacking Cards ─── */}
      <Section>
        <Reveal>
          <h2 className={styles.sectionTitle}>What We Fight For</h2>
          <p className={styles.sectionSubtitle}>
            Twelve policy areas. Every one grounded in the material conditions
            of working people.
          </p>
        </Reveal>
        <StackingCards items={PLATFORM_STACKING} />
        <Reveal>
          <div className={styles.platformCta}>
            <Button href="/platform" variant="secondary">
              Explore All 12 Policy Areas
            </Button>
          </div>
        </Reveal>
      </Section>

      <Divider variant="heavy" />

      {/* ─── THE PITCH — Dark section for dramatic contrast ─── */}
      <Section bg="dark">
        <Reveal>
          <div className={styles.pitch}>
            <h2 className={styles.pitchTitle}>No Corporate Money.<br />No Compromise.</h2>
            <Container>
              <div className={styles.pitchBody}>
                <p>
                  Both parties take money from the billionaires who rigged the tax
                  code, the pharmaceutical companies who price gouge your
                  prescriptions, and the real estate corporations who drive up
                  your rent.
                </p>
                <PullQuote>
                  We don&apos;t. That&apos;s why we can propose what they never will.
                </PullQuote>
                <p>
                  Our tax plan generates $10.77 trillion in annual revenue while
                  cutting taxes for 90% of American households to zero. Free
                  healthcare in year one. Student loans gone by year seven.
                  National debt paid off by year twenty-two.
                </p>
                <p className={styles.pitchKicker}>
                  Check our math. Then check who funds us. Then check who funds
                  the other parties.
                </p>
              </div>
            </Container>
          </div>
        </Reveal>
      </Section>

      <Divider variant="accent" />

      {/* ─── JOIN CTA ─── */}
      <Section bg="accent">
        <Reveal>
          <div className={styles.joinCta}>
            <p className={styles.joinLabel}>Become a member</p>
            <h2 className={styles.joinTitle}>
              This is your party.<br />It doesn&apos;t work without you.
            </h2>
            <p className={styles.joinText}>
              Every member strengthens the foundation. Every dollar comes from
              someone who works for a living. No corporate money. No compromise.
            </p>
            <Button
              href="https://members.votelabor.org"
              external
            >
              Become a Member
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
