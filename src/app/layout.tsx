import type { Metadata } from "next";
import { prachamati, chivo } from "@/lib/fonts";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "The Labor Party",
    template: "%s | The Labor Party",
  },
  description:
    "Political power for working people of America. Independent from corporate money. EST. 2024.",
  metadataBase: new URL("https://votelabor.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Labor Party",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${prachamati.variable} ${chivo.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Labor Party",
              url: "https://votelabor.org",
              logo: "https://votelabor.org/images/logo-lockup.png",
              foundingDate: "2024",
              sameAs: [
                "https://www.tiktok.com/@votelabor",
                "https://bsky.app/profile/votelabor.org",
                "https://www.instagram.com/votelaborparty",
                "https://www.threads.net/@votelaborparty",
                "https://discord.gg/votelabor",
                "https://www.youtube.com/@TheLaborParty",
              ],
            }),
          }}
        />
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
