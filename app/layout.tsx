import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio - Mulat Ranaboson",
  description: "Ingénieur en électronique - Conception de circuits et développement logiciel",
  keywords: ["électronique", "ingénieur", "développement", "circuits", "Next.js"],
  authors: [{ name: "Mulat Ranaboson" }],
  creator: "Mulat Ranaboson",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Portfolio - Mulat Ranaboson",
    description: "Ingénieur en électronique - Conception de circuits et développement logiciel",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>

        <Header />

        <main id="main-content" role="main" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
