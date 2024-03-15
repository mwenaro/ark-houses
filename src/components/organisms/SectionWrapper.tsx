import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  sectionId: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  sectionId,
  className,
}: PropsWithChildren<IProps>) {
  return (
    <section
      id={sectionId}
      className={twMerge(`w-full   md:min-h-screen relative my-10`,className)}
    >
      {children}
    </section>
  );
}
