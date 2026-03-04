import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <Reveal>
              <h1 className={`display ${styles.heroTitle}`}>
                THE LABOR PARTY
              </h1>
            </Reveal>
            <Reveal>
              <p className={styles.heroSubtitle}>
                Political power for working people of America.
              </p>
            </Reveal>
            <Reveal>
              <div className={styles.heroCtas}>
                <Button href="/join">Join Us</Button>
                <Button href="/platform" variant="secondary">
                  Read Our Platform
                </Button>
              </div>
            </Reveal>
          </div>
          <div className={styles.heroBison}>
            <Image
              src="/images/Bison3.svg"
              alt="American bison illustration in steel engraving style"
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <Section>
        <Reveal>
          <Container className={styles.missionContainer}>
            <p className={styles.mission}>
              We are an independent political party built by and for working
              people. We take no corporate money. We answer to workers,
              families, and communities across every region of this country.
              Both major parties serve corporate donors. We serve you.
            </p>
          </Container>
        </Reveal>
      </Section>

      <Divider />

      {/* Platform Preview */}
      <Section>
        <Reveal>
          <h2 className={styles.sectionTitle}>What We Fight For</h2>
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
      </Section>

      <Divider />

      {/* The Pitch */}
      <Section bg="alt">
        <Reveal>
          <div className={styles.pitch}>
            <h2 className={styles.sectionTitle}>No Corporate Money. No Compromise.</h2>
            <Container className={styles.pitchContainer}>
              <p>
                Both parties take money from the billionaires who rigged the tax
                code, the pharmaceutical companies who price gouge your
                prescriptions, and the real estate corporations who drive up
                your rent. We don't. That's why we can propose what they never
                will.
              </p>
              <p>
                Our tax plan generates $10.77 trillion in annual revenue while
                cutting taxes for 90% of American households to zero. Free
                healthcare in year one. Student loans gone by year seven.
                National debt paid off by year twenty-two.
              </p>
              <p>
                Check our math. Then check who funds us. Then check who funds
                the other parties.
              </p>
            </Container>
          </div>
        </Reveal>
      </Section>

      {/* Join CTA */}
      <Section bg="accent">
        <Reveal>
          <div className={styles.joinCta}>
            <h2 className={styles.sectionTitle}>Join the Fight</h2>
            <p className={styles.joinText}>
              We're building something that's never existed in this country: a
              political party that answers to working people and nobody else.
              Your membership makes that possible.
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

      <Divider />
    </>
  );
}
