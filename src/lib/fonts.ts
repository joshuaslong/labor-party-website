import localFont from "next/font/local";
import { Chivo } from "next/font/google";

export const prachamati = localFont({
  src: [
    {
      path: "../fonts/Prachamati-SemiBold-Expanded.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Prachamati-SemiBold-Expanded-Italic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/Prachamati-Bold-Expanded.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Prachamati-Black-Expanded.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Prachamati-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Prachamati-SemiBold-Condensed.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const chivo = Chivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});
