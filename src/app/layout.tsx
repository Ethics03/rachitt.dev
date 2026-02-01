import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { CommandPalette } from "@/components/CommandPalette";
import getPostMetadata from "./components/getPostMetadata";
import { projects } from "./lib/projects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "rachit's space",
  description: "engineer who likes building things on the internet.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getPostMetadata();

  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${jetBrainsMono.variable} min-h-screen flex flex-col antialiased`}
      >
        <CommandPalette posts={posts} projects={projects} />
        <div className="w-full max-w-5xl mx-auto px-8">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
