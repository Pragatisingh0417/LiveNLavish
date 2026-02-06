import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ClientWrapper from "./components/ClientWrapper";
import Footer from "./components/Footer";
import FloatingPartnershipButton from "./components/FloatingPartnershipButton";
import TopHeader from "./components/TopHeader";

// Optional (keep if you're using them somewhere)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ MAIN WEBSITE FONT → MONTSERRAT
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "livenlavishevents",
  description: "livenlavishevents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable}`} 
    >
      <body className="font-[var(--font-montserrat)] bg-[#f8f9f7]">
        <ClientWrapper>
          <FloatingPartnershipButton />
<div className="fixed top-0 left-0 w-full z-40">
  <TopHeader />
</div>          <Header />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
