import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Get Frames",
  description: "Get All Farcaster Frames",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
