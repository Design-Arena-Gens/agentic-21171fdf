import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Playwright + WebView2 Learning Roadmap",
  description:
    "Guided 10-day plan to learn Playwright Python automation with WebView2 for Microsoft Word add-ins."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
