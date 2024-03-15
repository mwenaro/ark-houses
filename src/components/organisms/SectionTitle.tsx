import { PropsWithChildren } from 'react';
import { Typography } from '../atoms';

interface IProps {
  className?: string;
}

export default function SectionTitle({
  children,
  className,
}: PropsWithChildren<IProps>) {
  return (
    <Typography variant="h2" className={` capitalize ${className}`}>
      {children}
    </Typography>
  );
}
