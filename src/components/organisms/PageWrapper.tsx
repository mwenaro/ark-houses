import { PropsWithChildren } from 'react';

interface IProps {
  className?: string;
}

export default function PageWrapper({
  children,
   className,
}: PropsWithChildren<IProps>) {
  return (
    <div
      
      className={`w-full min-h-screen relative ${className}`}
    >
      {children}
    </div>
  );
}
