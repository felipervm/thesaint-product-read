import type { Metadata, Viewport } from "next";
import { siteUrl, asset } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl + "/"),
  title: "THESAINT Product Read — Raw Data Club",
  description:
    "Uma leitura independente sobre proporção, construção e os códigos de produto da THESAINT.",
  alternates: { canonical: siteUrl + "/" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    title: "Talvez o código da THESAINT não seja só o X.",
    description:
      "Pode estar também no jeito que a peça ocupa o corpo. Uma leitura da Raw Data Club.",
    url: siteUrl + "/",
    siteName: "Raw Data Club",
    images: [
      {
        url: siteUrl + "/og.jpg",
        width: 1200,
        height: 630,
        alt: "THESAINT / uma leitura de proporção pela Raw Data Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "THESAINT × Raw Data Club",
    images: [siteUrl + "/og.jpg"],
  },
  icons: { icon: asset("rdc-monogram-light.png") },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090908",
  colorScheme: "dark",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
