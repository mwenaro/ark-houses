import React, { PropsWithChildren } from "react";
import { Footer, Header } from ".";
import { twMerge } from "tailwind-merge";

export default function PageWrapper({
  children,
  className = "",
}: { className?: string } & PropsWithChildren) {
  return (
    <div
      className={twMerge(
        `min-h-screen flex flex-col items-center w-full gap-2`,
        className
      )}
    >
      <Header />
      <div className="min-h-screen">
      {children}
      </div>
      <Footer />
    </div>
  );
}
