import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxHero } from "@/components/ui/ParallaxHero";
import { TextReveal } from "@/components/ui/TextReveal";
import { StickyComparison } from "@/components/ui/StickyComparison";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TextMarquee } from "@/components/ui/TextMarquee";
import styles from "./page.module.css";

const PLATFORM_PREVIEW = [
  { title: "Labor & Worker Rights", summary: "Strong unions, living wages, and the right to organize.", slug: "labor-worker-rights" },
  { title: "Economic & Social Justice", summary: "Affordable housing, rent control, and corporate accountability.", slug: "economic-social-justice" },
  { title: "Healthcare", summary: "Free healthcare for every American. No premiums, no copays.", slug: "healthcare-social-protections" },
  { title: "Public Education", summary: "Fully funded public schools and tuition-free college.", slug: "public-education" },
  { title: "Civil Rights", summary: "Equal rights and protections for all Americans.", slug: "civil-rights-social-freedoms" },
  { title: "Immigration", summary: "Fair, humane immigration reform with worker protections.", slug: "immigration-migrant-justice" },
  { title: "Criminal Justice", summary: "End mass incarceration and rebuild communities.", slug: "criminal-justice-police-reform" },
  { title: "Democracy", summary: "Get corporate money out of politics. Protect voting rights.", slug: "government-democracy-accountability" },
  { title: "Foreign Policy", summary: "Diplomacy first. End endless wars. Support veterans.", slug: "foreign-policy-global-commitments" },
  { title: "Climate", summary: "Green jobs, clean energy, and environmental protection.", slug: "climate-environmental-protection" },
  { title: "Tech & Outsourcing", summary: "Protect American jobs from offshoring and automation abuse.", slug: "tech-progress-outsourcing-protections" },
  { title: "Food Security", summary: "Affordable, healthy food for every family in America.", slug: "food-security-nutrition" },
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
      {/* ─── HERO: Parallax bison + centered content ─── */}
      <ParallaxHero>
        <Reveal>
          <p className={styles.heroLabel}>EST. 2024</p>
        </Reveal>
        <Reveal>
          <h1 className={`display ${styles.heroTitle}`}>
            THE LABOR<br />PARTY
          </h1>
        </Reveal>
        <Reveal>
          <p className={styles.heroSubtitle}>
            The first political party in America built by working people,
            funded by working people, and accountable to nobody else.
          </p>
        </Reveal>
        <Reveal>
          <div className={styles.heroCtas}>
            <Button href="/join">Join the Fight</Button>
            <Button href="/platform" variant="secondary">
              Read Our Platform
            </Button>
          </div>
        </Reveal>
      </ParallaxHero>

      {/* ─── MARQUEE: Platform planks ticker ─── */}
      <TextMarquee items={MARQUEE_ITEMS} speed={35} />

      {/* ─── MISSION: Word-by-word scroll reveal ─── */}
      <Section>
        <TextReveal
          text="We are an independent political party built by and for working people. We take no corporate money. We answer to workers, families, and communities across every region of this country. Both major parties serve corporate donors. We serve you."
        />
      </Section>

      <Divider />

      {/* ─── STATS: Animated counters ─── */}
      <Section bg="alt">
        <Reveal>
          <h2 className={styles.sectionTitle}>By the Numbers</h2>
        </Reveal>
        <AnimatedCounter stats={STATS} />
      </Section>

      <Divider />

      {/* ─── COMPARISON: Sticky scroll us vs them ─── */}
      <StickyComparison items={COMPARISON_ITEMS} />

      <Divider />

      {/* ─── PLATFORM: What We Fight For ─── */}
      <Section>
        <Reveal>
          <h2 className={styles.sectionTitle}>What We Fight For</h2>
          <p className={styles.sectionSubtitle}>
            Twelve policy areas. Every one grounded in the material conditions
            of working people.
          </p>
        </Reveal>
        <Reveal stagger>
          <div className={styles.platformGrid}>
            {PLATFORM_PREVIEW.map((item) => (
              <Card key={item.slug} href={`/platform/${item.slug}`}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardSummary}>{item.summary}</p>
              </Card>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className={styles.platformCta}>
            <Button href="/platform" variant="secondary">
              Explore the Full Platform
            </Button>
          </div>
        </Reveal>
      </Section>

      <Divider />

      {/* ─── THE PITCH: No Corporate Money ─── */}
      <Section bg="accent">
        <Reveal>
          <div className={styles.pitch}>
            <h2 className={styles.pitchTitle}>No Corporate Money.<br />No Compromise.</h2>
            <div className={styles.pitchBody}>
              <p>
                Both parties take money from the billionaires who rigged the tax
                code, the pharmaceutical companies who price gouge your
                prescriptions, and the real estate corporations who drive up
                your rent.
              </p>
              <p className={styles.pitchHighlight}>
                We don&apos;t. That&apos;s why we can propose what they never will.
              </p>
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
          </div>
        </Reveal>
      </Section>

      <Divider />

      {/* ─── JOIN CTA ─── */}
      <Section>
        <Reveal>
          <div className={styles.joinCta}>
            <p className={styles.joinLabel}>Become a member</p>
            <h2 className={styles.joinTitle}>
              This is your party.<br />It doesn&apos;t work without you.
            </h2>
            <p className={styles.joinText}>
              We&apos;re building something that&apos;s never existed in this country: a
              political party that answers to working people and nobody else.
              Every member strengthens the foundation. Every dollar comes from someone
              who works for a living.
            </p>
            <div className={styles.joinCtas}>
              <Button
                href="https://members.votelabor.org"
                external
              >
                Become a Member
              </Button>
              <Button href="/about" variant="secondary">
                Learn More About Us
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
