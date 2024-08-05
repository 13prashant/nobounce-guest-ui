import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

const poppiPoppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "We are Nobounce",
  description:
    "Ready to say goodbye to invalid emails and hello to higher engagement and conversion rates? You are in the right place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppiPoppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
