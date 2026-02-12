import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Hellomember.gg – Start any community. Manage it smartly.",
  description:
    "Hellomember.gg is the universal CommunityOps platform to onboard, profile, and engage your members effortlessly.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

