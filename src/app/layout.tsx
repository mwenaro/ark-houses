import { GlobalContextProvider } from "@/context/GlobalContext";
import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "ARH HOUSES",
  description: " Official Website",
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
          "w-full min-h-screen bg-white font-sans antialiased flex flex-col justify-center items-center max-w-9xl mx-auto",
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
