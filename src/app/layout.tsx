import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariplus Services Limited – Maritime & Shipping Support Services",
  description:
    "Mariplus Services Limited is a licensed maritime services company providing Disport Agency, Protective Agency, Chartering, Freight Forwarding, and Maritime Brokerage across all major Nigerian ports.",
  keywords:
    "maritime, shipping, Nigeria, Apapa port, clearing agent, freight forwarding, disport agency, Mariplus",
  openGraph: {
    title: "Mariplus Services Limited",
    description:
      "Professional maritime and shipping support services across all major Nigerian ports.",
    type: "website",
  },
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
