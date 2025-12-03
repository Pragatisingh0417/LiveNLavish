import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ClientWrapper from "./components/ClientWrapper";
import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"], // add weights you need
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat bg-[#f8f9f7]`}>
        <ClientWrapper>
          <Header />
          {children}
                  <Footer />

        </ClientWrapper>
      </body>
    </html>
  );
}
