import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mulat Ranaboson | Ingénieur en électronique",
  description:
    "Portfolio de Mulat Ranaboson, ingénieur en électronique spécialisé en PCB, systèmes embarqués et développement logiciel.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
