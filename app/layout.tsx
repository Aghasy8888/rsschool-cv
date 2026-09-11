import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import { Hero, PageModal, Sidebar } from "@/components";
import { cv } from "@/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${cv.fullName} | CV`,
  description: cv.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} h-full overflow-hidden antialiased`}
    >
      <body className="flex h-full flex-col overflow-hidden font-sans">
        <Sidebar />
        <div className="relative h-full w-full">
          <Hero />
          <PageModal />
          <div hidden>{children}</div>
        </div>
      </body>
    </html>
  );
}
