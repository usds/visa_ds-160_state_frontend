import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

import { GovBanner } from "@trussworks/react-uswds";

import AppHeaderSimple from "../components/UI/AppHeaderSimple";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "U.S. Department of State - Consular Electronic Application Center",
  description: "DS-160 Nonimmigrant Visa Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <GovBanner />
        <AppHeaderSimple />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
