import { cn } from "@/lib/utils";
import Provider from "@/redux/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Insights",
  description:
    "Frontend Movie Info, Ratings, and Reviews with Next.js, TypeScript, and Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className)}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
