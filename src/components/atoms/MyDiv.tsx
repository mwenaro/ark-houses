import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
 
  className?: string;
  children?: ReactNode;
  
}

const MyDiv: React.FC<Props> = ({
  children,
  className,
}) => (
  <div
    className={twMerge(``, className)}
    
    
  >
    {children}
  </div>
);

export default MyDiv;
