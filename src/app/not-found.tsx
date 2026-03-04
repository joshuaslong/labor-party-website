import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section>
      <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto" }}>
        <h1>Page Not Found</h1>
        <p style={{ color: "var(--text-secondary)", margin: "16px 0 32px" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </Section>
  );
}
