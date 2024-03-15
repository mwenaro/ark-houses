import { GlobalContextProvider } from "@/context/GlobalContext";
import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import { twMerge } from "tailwind-merge";





export const metadata = {
  title: 'ARK Real Estate - Official site',
  description: 'Ark Real Estate',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          "w-full min-h-screen bg-white font-sans antialiased flex flex-col items-center max-w-9xl mx-auto ",
          fontSans.variable || ""
        )}
      >
        <GlobalContextProvider>
          {children}

          {/* <Toaster /> */}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
