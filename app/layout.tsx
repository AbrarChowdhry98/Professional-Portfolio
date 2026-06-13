import type { Metadata } from "next";
import "./globals.css";
import EmotionRegistry from "@/components/EmotionRegistry";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Abrar Chowdhry | Product & Digital Leader",
  description:
    "Portfolio of Abrar Chowdhry — Retail Marketing Specialist at JELD-WEN Canada, working toward Associate Product Line Manager, with digital product delivery across iOS apps and web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#000000" }}>
      <body style={{ backgroundColor: "#000000", color: "#ffffff" }}>
        <EmotionRegistry>
          <div className="app-root">
            <Header />
            {children}
          </div>
        </EmotionRegistry>
      </body>
    </html>
  );
}
