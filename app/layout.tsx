import type { Metadata } from "next";
import { Bellefair } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import localFont from 'next/font/local'
import Footer from "@/components/Footer";
import { TransitionProvider } from "@/components/hooks/useTransition";

const bellefair = Bellefair({
  weight: ["400",],
  variable: "--font-bellefair",
  subsets: ["latin"],
});
const avenir_next = localFont({
  src: [
    {
      path: '../fonts/AvenirNextLTPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/AvenirNextLTPro-It.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/AvenirNextLTPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-avenir-next",
})

export const metadata: Metadata = {
  title: "Hestia Labs",
  description: "Hestia Labs App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bellefair.variable} ${avenir_next.variable}  antialiased`}>
        <TransitionProvider>
          {children}
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
