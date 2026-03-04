import Link from "next/link";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/platform", label: "Platform" },
  { href: "/blog", label: "Blog" },
  { href: "/join", label: "Join" },
  { href: "https://members.votelabor.org", label: "Members", external: true },
];

const SOCIAL_LINKS = [
  { href: "https://www.tiktok.com/@laborpartyusa", label: "TikTok" },
  { href: "https://bsky.app/profile/votelabor.org", label: "Bluesky" },
  { href: "https://www.instagram.com/laborpartyusa", label: "Instagram" },
  { href: "https://www.threads.net/@laborpartyusa", label: "Threads" },
  { href: "https://discord.gg/laborparty", label: "Discord" },
  { href: "https://www.youtube.com/@laborpartyusa", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.wordmark}>LABOR</span>
            <span className={styles.est}>EST. 2024</span>
          </div>

          <nav className={styles.navGroup} aria-label="Footer navigation">
            <ul className={styles.navList}>
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={styles.navLink}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.socialGroup}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} (opens in new tab)`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.legal}>
            The Labor Party. Political power for working people.
          </p>
          <p className={styles.legal}>
            <a href="mailto:info@votelabor.org" className={styles.navLink}>
              info@votelabor.org
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
