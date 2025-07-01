import type { Metadata } from "next";
import { Bellefair } from "next/font/google";
import "../globals.css";
import localFont from 'next/font/local'
import Footer from "@/components/Footer";
import { TransitionProvider } from "@/components/hooks/useTransition";

import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const bellefair = Bellefair({
  weight: ["400",],
  variable: "--font-bellefair",
  subsets: ["latin"],
});
const avenir_next = localFont({
  src: [
    {
      path: '../../fonts/AvenirNextLTPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/AvenirNextLTPro-It.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../fonts/AvenirNextLTPro-Bold.otf',
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }



  return (
    <html lang={locale}>
      <body className={`${bellefair.variable} ${avenir_next.variable}  antialiased`}>
        <NextIntlClientProvider >
          <TransitionProvider>
            {children}
            <Footer />
            </TransitionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
