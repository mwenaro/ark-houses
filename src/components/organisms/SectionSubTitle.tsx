import { PropsWithChildren } from 'react';
import { Typography } from '../atoms';

interface IProps {
  className?: string;
}

export default function SectionSubTitle({
  children,
  className,
}: PropsWithChildren<IProps>) {
  return (
    <Typography
      variant="h3"
      className={`font -semibold text-3xl  ${className}`}
    >
      {children}
    </Typography>
  );
}
