import type { Metadata, Viewport } from "next";
import { Readex_Pro } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const font = Readex_Pro({
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Revo — تشبهك في كل شيء",
  description:
    "Revo تطبيق مجتمعات عربي: انشر، علّق، تابع، وتراسل أصدقاءك وشارك قصصك. نزّل النسخة الجديدة لأندرويد.",
  openGraph: {
    title: "Revo — تشبهك في كل شيء",
    description: "مجتمعات ومنشورات ورسائل وقصص في تطبيق واحد.",
    images: ["/logo.png"],
    locale: "ar_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#127A6E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={font.className}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
