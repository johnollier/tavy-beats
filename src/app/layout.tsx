import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tavy Beats",
  description: "Show which beat can be fished for my ticket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
